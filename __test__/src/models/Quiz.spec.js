
import Quiz from '../../../src/models/Quiz';


const createMockQuiz = () => {
  return{
    question: 'クイズの問題',
    correctAnswer: '答え',
    incorrectAnswer: [
      '不正解1',
      '不正解2',
      '不正解3'
    ]
  }
};

describe('Quizのテスト', () => {
  it('クラスチェック', () => {
    expect( typeof Quiz ).toStrictEqual('function');
  });

  describe('インスタンスメソッド', () => {
    describe('constructor', () => {
      it('コンストラクタで渡した値をプロパティに保持する', () => {
        const quizData = createMockQuiz();
        const quiz = new Quiz(quizData);

        expect( quiz._question ).toStrictEqual(quizData.question);
        expect( quiz._correctAnswer ).toStrictEqual(quizData.correctAnswer);
        expect( quiz._incorrectAnswer ).toStrictEqual(quizData.incorrectAnswer);
      });
    });

    describe('getter', () => {
      it('questionとcorrectAnswerのgetterが使える', () => {
        const quizData = createMockQuiz();
        const quiz = new Quiz(quizData);

        expect( quiz.question ).toStrictEqual(quizData.question);
        expect( quiz.correctAnswer ).toStrictEqual(quizData.correctAnswer);
        expect( quiz.incorrectAnswer ).toStrictEqual(undefined);
      });
    });

    describe('shuffleメソッド', () => {
      it('シャッフルされる', () => {
        const quizData = createMockQuiz();
        const quiz = new Quiz(quizData);

        const shuffledAnswers1 = quiz.shuffleAnswers();
        const shuffledAnswers2 = quiz.shuffleAnswers();
        expect(shuffledAnswers1).not.toStrictEqual(shuffledAnswers2);
      });
    });

    describe('judgeCorrectAnswerメソッド', () => {
      it('引数の値が正解ならtrue, 不正解ならfalseが返る', () => {
        const quizData = createMockQuiz();
        const quiz = new Quiz(quizData);

        expect(quiz.judgeCorrectAnswer(quizData.correctAnswer)).toStrictEqual(true);

        quizData.incorrectAnswers.forEach(incorrectAnswer => {
          expect(quiz.judgeCorrectAnswer(incorrectAnswer)).toStrictEqual(false);
        });
      });
    });
  });

});
