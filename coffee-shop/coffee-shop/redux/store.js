import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
let persistor = persistStore(store)
export {
  store,
  persistor
}

