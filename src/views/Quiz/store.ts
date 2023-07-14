import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { LocalStore } from '../../store/local-store';
const router = useRouter();

class GameStep {
    questionText?: string;
    questionOptions?: Answer[];
}

interface Quiz {
    id?: number;
    name?: string;
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
        state.quizzes = data.map((q: any) => ({
            id: q._id,
            name: q.name,
            gameSteps: q.game_steps.map((gs: any) => ({
                questionText: gs.question_text,
                questionOptions: gs.question_options,
            })),
        }));
    });
const localStore = new LocalStore('quiz');

async function startGame(gameNumber: number) {
    console.log('start game no ', gameNumber);

    localStore.setItem(gameNumber.toString(), 'started');
}

export const useStore = () => {
    return {
        state,
        startGame,
        localStore,
    };
};
