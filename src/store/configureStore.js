import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// Returns the store instance.
// It can  also take initialState argument when provided.
const configureStore = () => {
    return {
        ...createStore(
            rootReducer,
            applyMiddleware(thunk)
           )
    };
};

export default configureStore;