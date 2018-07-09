import { combineReducers } from 'redux';

const initialState = {name:'aaa',questions:[]};

/*
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'

// actions 定义
function detailAct() {
    return {
        types: [ADD_TODO, TOGGLE_TODO],
        url: './as.json',
    };
}

/*
*   reducer 定义
* */
function ieDetail(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

export default ieDetail;

export const actions = {
    detailAct,
};
