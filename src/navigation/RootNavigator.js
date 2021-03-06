import {createAppContainer, createDrawerNavigator, createStackNavigator} from "react-navigation"
import JobListScreen from "../screens/job-list/JobListScreen";
import JobDetailScreen from "../screens/job-detail/JobDetailScreen";
import Entypo from "react-native-vector-icons/Entypo"
import React from "react";
import AppTheme from "../theme/AppTheme";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Badge from "@ant-design/react-native/lib/badge";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux";

const BadgeIcon = (props) => {
	return (
		<Badge text={props.badgeCount} size={"small"}>
			<MaterialCommunityIcons name={"bell"} size={20} color={"white"}/>
		</Badge>
	)
};

const mapStateToProps = (state) => ({
	badgeCount: state.jobs.badgeCount
});

const ConnectedBadgeIcon = connect(mapStateToProps)(BadgeIcon);

const headerButtonHitSlop = {top: 10, right: 10, bottom: 10, left: 10};

const JobStackNavigator = createStackNavigator({
	Jobs: {
		screen: JobListScreen,
		navigationOptions: {
			title: "JUL 2018",
			headerBackTitle: null,
			headerRight: (
				<View style={{
					flexDirection: "row",
				}}>
					<TouchableOpacity style={{paddingHorizontal: 10}} hitSlop={headerButtonHitSlop}>
						<MaterialIcons name={"search"} size={20} color={"white"}/>
					</TouchableOpacity>
					<TouchableOpacity style={{paddingHorizontal: 10}}  hitSlop={headerButtonHitSlop}>
						<ConnectedBadgeIcon/>
					</TouchableOpacity>
					<TouchableOpacity style={{paddingHorizontal: 10}}  hitSlop={headerButtonHitSlop}>
						<Ionicons name={"md-options"} size={20} color={"white"}/>
					</TouchableOpacity>
				</View>
			)
		}
	},
	JobDetails: {
		screen: JobDetailScreen,
		navigationOptions: {
			headerRight: (
				<View style={{
					flexDirection: "row",
				}}>
					<TouchableOpacity style={{paddingHorizontal: 15}}  hitSlop={headerButtonHitSlop}>
						<ConnectedBadgeIcon/>
					</TouchableOpacity>
					<TouchableOpacity style={{paddingHorizontal: 15}}  hitSlop={headerButtonHitSlop}>
						<Ionicons name={"ios-more"} size={20} color={"white"}/>
					</TouchableOpacity>
				</View>
			)
		}
	}
}, {
	defaultNavigationOptions: ({navigation}) => {
		const options = {
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: AppTheme.colors.primary,
			}
		};
		if (navigation.state.routeName === "Jobs") {
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