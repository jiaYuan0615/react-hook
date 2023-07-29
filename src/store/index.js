import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers'
import { configureStore } from '@reduxjs/toolkit';
import subscription from './subscription'
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: ['PUSH_GoBack', 'PUSH_GoToRoute']
    }
  }).concat(sagaMiddleware)
})

export default store;

sagaMiddleware.run(rootSaga)
subscription(store)