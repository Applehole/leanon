import {createStore} from 'redux'

const Create ="Create" // 오류를 방지하기 위해서 넣어준 것들이고
const Delete ="Delete"
const ChangeState ="ChangeState"
const ChangeCancle = "ChangeCancle"
const ChangeText = "ChangeText"

const reducer = (state = [{text: "기본더미 데이터입니다." , id : Date.now(), toggle : false}], action) => {
    switch(action.type){
        case Create:
            return [{text : action.text, id :Date.now(), toggle : false} , ...state] //새로운 값을 추가해준다.
        case Delete:
            return state.filter((toDo) => {
                // console.log("toDo id",toDo.id)
                // console.log("typeof Todo", typeof(toDo.id))
                // console.log("toDo",toDo)
                // console.log("action",action.id)
                // console.log("typeof action", typeof(action.id))
                // console.log("toDo.id !== action.id",toDo.id !== action.id)
                return String(toDo.id) !== action.id // 타입이 맞지 않아서 바꿔줬음
            }
            )
        case ChangeState:
            let ChangeIndex
            let HaveToChange = state.filter((toDo,idx) => { // 토글을 찾아서 바꿔주는 함수
                if(String(toDo.id) === action.id){
                    ChangeIndex = idx
                }
                return String(toDo.id) === action.id
            })
            HaveToChange[0].toggle=true
            state[ChangeIndex] = HaveToChange[0]
            return state;

        case ChangeCancle:
                let CancleIndex
                let HaveToCancle = state.filter((toDo,idx) => { //토글을 바꿔주는 함수
                    if(String(toDo.id) === action.id){
                        CancleIndex = idx
                    }
                    return String(toDo.id) === action.id
                })
                HaveToCancle[0].toggle = false
                state[CancleIndex] = HaveToCancle[0]
                return state;

        case ChangeText:
                let ChangeDoneIndex
                let DoneChange = state.filter((toDo,idx) => { // 값을 새로운 값으로 업데이트를 시켜준다.
                    if(String(toDo.id) === action.id){
                        ChangeDoneIndex = idx
                    }
                    return String(toDo.id) === action.id
                })
                DoneChange[0].text = action.text
                DoneChange[0].toggle = false
                state[ChangeDoneIndex] = DoneChange[0]
                return state;

        default:
            return state //기본 값을 정해준다.
    }
}

const todoStore = createStore(reducer)

export default todoStore