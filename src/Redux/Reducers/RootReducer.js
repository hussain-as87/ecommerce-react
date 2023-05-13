import {combineReducers} from "redux"
import CategoryReducer from "./CategoryReducer"

const RootReducer = combineReducers({
    categories:CategoryReducer
})
export default RootReducer