import { compose, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/video';
import { fetchAllVideosDB } from './actions/videoAction';

const initialStore = {
    videos: []
}
const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));
// const store = createStore(rootReducer, initialStore, compose(applyMiddleware(thunk)));
// const store = compose(applyMiddleware(thunk))(createStore)(rootReducer, initialStore);
// console.log('before store = qsdqsdsqdssddsd ',store.getState());
store.dispatch(fetchAllVideosDB());
// console.log('after store = ',store.getState());

export default store;
