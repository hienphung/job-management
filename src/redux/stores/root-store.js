import {createReactNavigationReduxMiddleware,} from "react-navigation-redux-helpers";
import {applyMiddleware, combineReducers, createStore,} from "redux";
import createSagaMiddleware from 'redux-saga'
import * as sagas from "../../sagas";
import navReducer from "../navigation/reducer";
import jobReducer from "../jobs/jobs-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const appReducer = combineReducers({
	nav: navReducer,
	jobs: jobReducer
});

const navigationReduxMiddleware = createReactNavigationReduxMiddleware(
	state => state.nav,
);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	appReducer,
	composeWithDevTools(applyMiddleware(navigationReduxMiddleware, sagaMiddleware))
);

sagaMiddleware.run(sagas.rootSaga);

export default store;


