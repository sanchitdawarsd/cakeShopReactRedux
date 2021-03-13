import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'

const rootreducer =  combineReducers({
  cakeReducer:cakeReducer,
  icecreamReducer:icecreamReducer
})

export default rootreducer