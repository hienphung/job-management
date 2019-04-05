import React, {Component} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./JobListScreen.styles";

class JobListScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => { this.props.navigation.navigate("JobDetails")}}>
					<Text>Press!!!</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default JobListScreen;