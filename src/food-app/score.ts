class Score implements Scoreable {
  private static instance: Score
  get totalScore() {
    const foods = Foods.getInstance()
    return foods.activeElementsScore.reduce((total, score) => total + score, 0)
  }
  render() {
    const scoreNumber = document.querySelector('.score__number')
    if (scoreNumber) {
      scoreNumber.textContent = String(this.totalScore)
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score()
    }
    return Score.instance
  }
}
