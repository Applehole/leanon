import {createStore} from 'redux'

const Create ="Create"
const Delete ="Delete"

export const CreateAction = text =>{
    return {
        type:Create,
        text
    }
}

export const deleteAction = id => {
    return {
        type:Delete,
        id
    }
}

const reducer = (state = [{text: "기본" , id : Date.now()}], action) => {
    switch(action.type){
        case Create:
            return [{text : action.text, id :Date.now()} , ...state]
        case Delete:
            return state.filter(toDo => toDo !== action.id)
        default:
            return state
    }
}

const todoStore = createStore(reducer)

export default todoStore