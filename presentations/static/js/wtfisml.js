var app1 = new Vue({
  el: '#app1',
  data: {
    answering: null,
    guessing: false,
    evaluation: null,
    finishingRound: false,
    accuracy: .1,
    fruitToShow: null,
    correct: null
  },
  computed: {
    readableAccuracy: function() {
      return 100 - parseInt(this.accuracy * 100)
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
      this.fruitToShow = this.randFruit()
      setTimeout(app1.guess, 1000);
    },
    guess: function() {
      this.answering = true
      if (Math.random() < this.accuracy) {
        this.correct = true
      } else {
        this.correct = false
      }
      setTimeout(app1.checkGuess, 1500)
    },
    checkGuess: function() {
      this.answering = false
      if (this.correct) {
        this.evaluation = 'check'
      } else {
        this.evaluation = 'x'
      }
      setTimeout(app1.incrementAccuracy, 1500)
    },
    incrementAccuracy: function() {
      if (this.evaluation === 'x') {
        if (this.accuracy >= 1) {
          this.accuracy = 1
        } else {
          this.finishingRound = true
          this.accuracy += .1
        }
      }
      setTimeout(app1.nextRound, 1500)
    },
    nextRound: function() {
      this.guessing = false
      this.evaluation = null
      this.finishingRound = false
      this.fruitToShow = null
      this.correct = null
    }
  }
})
