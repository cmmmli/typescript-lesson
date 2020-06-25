import { Scoreable } from './interfaces'
import { Foods } from './foods'

export class Score implements Scoreable {
  private static instance: Score
  get totalScore(): number {
    const foods = Foods.getInstance()
    return foods.activeElementsScore.reduce((total, score) => total + score, 0)
  }
  render(): void {
    const scoreNumber = document.querySelector('.score__number')
    if (scoreNumber) {
      scoreNumber.textContent = String(this.totalScore)
    }
  }
  static getInstance(): Score {
    if (!Score.instance) {
      Score.instance = new Score()
    }
    return Score.instance
  }
}
