import {createAppContainer, createDrawerNavigator, createStackNavigator} from "react-navigation"
import JobListScreen from "../screens/job-list/JobListScreen";
import JobDetailScreen from "../screens/job-detail/JobDetailScreen";
import Entypo from "react-native-vector-icons/Entypo"
import React from "react";
import AppTheme from "../theme/AppTheme";
import {StyleSheet, TouchableOpacity} from "react-native";

const JobStackNavigator = createStackNavigator({
	Jobs: {
		screen: JobListScreen
	},
	JobDetails: {
		screen: JobDetailScreen,
	}
}, {
	defaultNavigationOptions: ({navigation}) => {
		console.log(navigation.state);
		const options = {
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: AppTheme.colors.primary
			}
		};
		if(navigation.state.routeName === "Jobs") {
			options.headerLeft = (
				<TouchableOpacity style={styles.drawerToggleButtonContainer}
				                  hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
				                  onPress={() => {
					                  navigation.toggleDrawer()
				                  }}>
					<Entypo name={"menu"} size={20} color={"white"}/>
				</TouchableOpacity>
			)
		}
		return options;
	}
});

const styles = StyleSheet.create({
	drawerToggleButtonContainer: {
		marginLeft: 10
	}
});

const RootDrawerNavigator = createDrawerNavigator({
	Jobs: {
		screen: JobStackNavigator,
		navigationOptions: ({navigation}) => {
			const options = {
				drawerLabel: "Jobs",
				drawerIcon: ({tintColor}) => (
					<Entypo name={"suitcase"} size={15} color={tintColor}/>
				)
			};
			if (navigation.state.index > 0) {
				options.drawerLockMode = 'locked-closed';
			}
			return options;
		}
	}
});

const RootNavigator = createAppContainer(RootDrawerNavigator);

export default RootNavigator;