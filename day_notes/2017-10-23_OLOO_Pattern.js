/** 
  Basic OLOO (Objects Linked to Other Objects) pattern 
**/

var BLOCKFACTOR = 2

var Monster = {
  init: function (name, health, atk, initiative) {
    this.name = name
    this.health = health
    this.maxHealth = health
    this.atk = atk
    this.initiative = initiative 
  },
  isAlive: function () {
    return this.health > 0
  },
  checkHealth: function () {
    return this.health
  },
  checkInitiative: function () {
    return this.initiative
  },
  getMaxHealth: function () {
    return this.maxHealth
  },
  ready: function () {
    this.isBlocking = false
  },
  takeDamage: function (damage) {
    var _damage = damage
    if (this.isBlocking) {
      _damage = Math.round(damage / BLOCKFACTOR)
    }

    console.log(this.name + ' took ' + _damage + ' damage.')
    this.health -= _damage
    console.log(this.name + ' has ' + this.checkHealth() + ' HP left.')

    if (this.health <= 0) {
      console.log(this.name + ' fainted.')
    }
  },
  attack: function (target) {
    console.log(this.name + ' attacks ' + target.name + '.')
    target.takeDamage(this.atk)
  },
  block: function () {
    console.log(this.name + ' is blocking.')
    this.isBlocking = true
  },
  isAlive: function () {
    if (this.health > 0) {
      return true
    }
    return false
  }
}

var Goblin = Object.create(Monster)

Goblin.enterRageMode = function () {
  console.log(this.name + ' is enraged!')
  this.isEnraged = true
  this.atk *= 2
}

Goblin.takeTurn = function (target) {
  var chance = Math.random()
  if ((this.checkHealth() < this.getMaxHealth() / 2) && !this.isEnraged) {
    this.enterRageMode()
  } else {
    if (chance < .25 && !this.isBlocking) {
      this.block()
    } else {
      this.attack(target)
    }        
  }
}

// one caveat with this pattern is if you want to link to Goblin
// e.g. var GoblinKing = Object.create(Goblin)
// you would have to override/shadow the takeTurn function which isn't recommended by the pattern

var GoblinKing = Object.create(Goblin)

GoblinKing.bash = function (target) { 
  console.log(this.name + ' used Bash!')
  target.takeDamage(this.atk * 1.5)
}

GoblinKing.takeTurn = function (target) {
  var chance = Math.random()
  if (chance < .5) {
    this.attack(target)
  } else if (!this.isEnraged) {
    this.enterRageMode()
  } else {
    this.bash(target)
  }
}

function fight(m1, m2) {
  function _takeTurn(x, y) {
    var numTurns = Math.round(x.checkInitiative() / y.checkInitiative())
    for (var i = 0; i < numTurns; i++) {
      x.takeTurn(y)
    }
  }

  console.log('---------------------')
  m1.ready()
  m2.ready()

  if (!m1.isAlive() || !m2.isAlive()) {
    WINNER = m1.alive() ? m1.name : m2.name
    console.log('The match is over. ' + WINNER + ' won!')
    return 
  }

  if (m1.checkInitiative() > m2.checkInitiative()) {
    _takeTurn(m1, m2)
    if (m2.isAlive()) {
      m2.takeTurn(m1)      
    } 
  } else {
    _takeTurn(m2, m1)

    if (m1.isAlive()) {
      m1.takeTurn(m2)      
    } 
  }
}

var m1 = Object.create(GoblinKing)
var m2 = Object.create(Goblin)

m1.init('Goblin King', 200, 30, 1)
m2.init('Goblin Lackey', 100, 20, 3)

// call me repeatedly
fight(m1, m2)
