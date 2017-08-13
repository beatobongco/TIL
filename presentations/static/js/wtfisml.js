var app1 = new Vue({
  el: '#app1',
  data: {
    step: 0,
    stepMax: 4,
    timesTrained: 1,
    scolding: false,
    answering: null,
    guessing: false,
    evaluation: null,
    finishingRound: false,
    fruitToShow: null,
    correct: null,
    trainingData: ['apple', 'orange', 'apple', 'banana', 'kiwi'],
    baseWaitTime: 850,
  },
  computed: {
    readableAccuracy: function() {
      var i = parseInt((this.timesTrained - 1) / this.trainingData.length * 100)
      if (i > 100) {
        return 100
      }
      return i
    },
    numWrongs: function() {
      var i = this.trainingData.length - this.timesTrained
      if (i < 0) {
        return 0
      }
      return i
    }
  },
  methods: {
    randFruit: function() {
      var choices = ['apple', 'orange', 'banana', 'kiwi']
      var index = Math.floor(Math.random() * choices.length)
      return choices[index]
    },
    showFruit: function(f) {
      this.guessing = true
      this.fruitToShow = this.trainingData[this.step]
      setTimeout(app1.guess, app1.baseWaitTime);
    },
    train: function(f) {
      this.step = 0
      // this.trainingData = shuffle(this.trainingData)
      this.showFruit()
    },
    guess: function() {
      this.answering = true
      if (this.timesTrained > this.step) {
        this.correct = true
      } else {
        this.correct = false
      }
      setTimeout(app1.checkGuess, app1.baseWaitTime * 1.5)
    },
    checkGuess: function() {
      this.answering = false
      if (this.correct) {
        this.evaluation = 'check'
      } else {
        this.evaluation = 'x'
      }
      setTimeout(app1.nextRound, app1.baseWaitTime * 1.5)
    },
    scold: function() {
      this.scolding = true
      setTimeout(app1.finishRound, app1.baseWaitTime * 2)
    },
    finishRound: function() {
      this.scolding = false
      this.finishingRound = true
      setTimeout(app1.cleanUp, app1.baseWaitTime * 2)
    },
    cleanUp: function() {
      this.timesTrained += 1
      this.guessing = false
      this.finishingRound = false
    },
    nextRound: function() {
      this.evaluation = null
      this.fruitToShow = null
      this.correct = null
      if (this.step < 4) {
        this.step += 1
        setTimeout(app1.showFruit, app1.baseWaitTime)
      } else {
        setTimeout(app1.scold, app1.baseWaitTime * 1.5)
      }
    }
  }
})

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
