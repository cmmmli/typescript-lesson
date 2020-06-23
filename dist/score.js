import { Foods } from './foods.js';
export class Score {
    get totalScore() {
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        const scoreNumber = document.querySelector('.score__number');
        if (scoreNumber) {
            scoreNumber.textContent = String(this.totalScore);
        }
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}