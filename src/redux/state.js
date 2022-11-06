const ADD_WATER = 'ADD-WATER';
const UPDATE_NEW_WATER_TEXT = 'UPDATE-NEW-WATER-TEXT';
const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

let store = {
    _state: {
        waterPage: {
            waterData: [
                {
                    id: "1",
                    amount: "Glass of water (400 ml)"
                },
                {
                    id: "2",
                    amount: "Mug of water (250 ml)"
                },
            ],
            newWaterText: 'Water1'
        },
        tasksPage: {
            tasksData: [
                {
                    id: "1",
                    desc: "Stroll"
                },
                {
                    id: "2",
                    desc: "Make dinner"
                },
            ],
            tasksMenuData: [
                {
                    id: "1",
                    day: "Yesterday"
                },
                {
                    id: "2",
                    day: "Today"
                },
                {
                    id: "3",
                    day: "Tomorrow"
                },
            ],
            newTaskText: 'Task1'
        },
    },
    _callSubscriber() {
        console.log(1);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;//паттерн наблюдатель
    },
    dispatch(action) {
        if (action.type === ADD_WATER) {
            let newWaterElement = {
                id: 3,
                amount: this._state.waterPage.newWaterText
            };
            this._state.waterPage.waterData.push(newWaterElement);
            this._state.waterPage.newWaterText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_WATER_TEXT) {
            this._state.waterPage.newWaterText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_TASK) {

            let newTaskElement = {
                id: "3",
                desc: this._state.tasksPage.newTaskText
            };
            this._state.tasksPage.tasksData.push(newTaskElement);
            this._state.tasksPage.newTaskText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_TASK_TEXT) {

            this._state.tasksPage.newTaskText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addWaterActionCreator = () => ({
    type: ADD_WATER
})

export const updateNewWaterTextActionCreator = (text) => ({
    type: UPDATE_NEW_WATER_TEXT,
    newText: text
})

export const addTaskActionCreator = () => ({
    type: ADD_TASK
})

export const updateNewTaskTextActionCreator = (text) => ({
    type: UPDATE_NEW_TASK_TEXT,
    newText: text
})



export default store;