/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from "./src/navigation/RootNavigator";
import {createReduxContainer} from "react-navigation-redux-helpers";
import {connect, Provider} from 'react-redux';
import store from "./src/redux/stores/root-store";

const AppContainer = createReduxContainer(RootNavigator);
const mapStateToProps = (state) => ({
	state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppContainer);

class App extends Component {
	componentDidMount() {
		StatusBar.setBarStyle("light-content")
	}

	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState/>
			</Provider>
		);
	}
}

export default App;