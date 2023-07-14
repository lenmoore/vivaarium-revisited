import { reactive } from 'vue';

class GameStep {}

interface Quiz {
    id?: number;
    gameSteps?: GameStep[];
    stepProgress?: number;
}

class Answer {}

interface State {
    quizzes: Quiz[];
    userAnswers: Answer[];
    stepProgress: 0;
}

const state: State = reactive({
    quizzes: [],
    userAnswers: [],
    stepProgress: 0,
});
// Load quizzes from a nearby JSON file
fetch('/games.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        state.quizzes = data;
    });

const startGame = (gameNumber: number) => {
    console.log('start game no ', gameNumber);
};
export const useStore = () => {
    return {
        state,
        startGame,
    };
};
