
import _ from 'lodash';

class Quiz {
  constructor({question, correctAnswer, incorrectAnswer}){

    this._question = question;
    this._correctAnswer = correctAnswer;
    this._incorrectAnswer = incorrectAnswer;
  }

  get question() {
    return this._question;
  }
  get correctAnswer() {
    return this._correctAnswer;
  }

  shuffleAnswers() {
    return _.shuffle([
      this._correctAnswer,
      ...this._incorrectAnswers
    ]);
  }

  judgeCorrectAnswer(answer) {
    return answer === this._correctAnswer;
  }

}

export default Quiz;