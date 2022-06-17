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
            return state = state.filter(toDo => {
                // console.log("toDo id",toDo.id)
                // console.log("typeof Todo", typeof(toDo.id))
                // console.log("toDo",toDo)
                // console.log("action",action.id)
                // console.log("typeof action", typeof(action.id))
                // console.log("toDo.id !== action.id",toDo.id !== action.id)
                return String(toDo.id) !== action.id // 타입이 맞지 않아서 바꿔줬음
            }
            )
        default:
            return state
    }
}

const todoStore = createStore(reducer)

export default todoStore