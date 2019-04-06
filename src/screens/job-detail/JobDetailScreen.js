import React, {Component} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import styles from "./styles";
import {connect} from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import AppTheme from "../../theme/AppTheme";

class JobDetailScreen extends Component {
	static navigationOptions = ({navigation}) => {
		const {selectedJob} = navigation.state.params;
		if (selectedJob.title) {
			return {
				title: selectedJob.title,
			}
		}
	};

	render() {
		const {selectedJob: item} = this.props.navigation.state.params;
		return (
			<ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
				<Image style={styles.map}
				       source={require("../../assets/images/map.jpg")}
				       resizeMode={"cover"}/>
				<View style={styles.infoContainer}>
					<Text style={styles.durationText}>{item.duration}</Text>
					<View style={styles.tagsContainer}>
						<View style={styles.dispatchedContainer}>
							{item.dispatched ? (<Text style={styles.dispatchedText}>Dispatched</Text>) : null}
						</View>
						<View style={styles.typeContainer}>
							<Text style={styles.typeText}>{item.type}</Text>
						</View>
						{item.status === "error" ? (
							<FontAwesome name={"warning"} color={"red"} size={15} style={styles.statusIcon}/>
						) : (
							<AntDesign name={"warning"} color={"orange"} size={15} style={styles.statusIcon}/>
						)}
					</View>
					<View style={styles.locationContainer}>
						<Text style={styles.locationText}>{item.location}</Text>
						<MaterialIcons name={"directions-car"} size={25} color={"gray"}/>
					</View>
					<View style={styles.divider}/>
					<View style={styles.companyContainer}>
						<Text style={styles.companyNameText}>{item.company}</Text>
						<View style={styles.contactContainer}>
							<Image source={{uri: item.contact.avatar.url}} style={styles.contactImage} resizeMode={"cover"}/>
							<View style={styles.contactInfoContainer}>
								<Text style={styles.contactLabel}>Contact</Text>
								<Text style={styles.contactNameText}>{item.contact.name}</Text>
							</View>
							<MaterialCommunityIcons name={"comment-text"} size={25} color={"gray"} style={{marginRight: 15}}/>
							<MaterialCommunityIcons name={"phone"} size={25} color={"gray"}/>
						</View>
					</View>
					<View style={styles.divider}/>
					<View style={styles.descriptionContainer}>
						<Text style={styles.descriptionLabel}>Description</Text>
						<Text style={styles.descriptionText}>{item.description}</Text>
					</View>
					<View style={styles.divider}/>
					<View style={styles.instructionContainer}>
						<Text style={styles.instructionLabel}>Special Instructions</Text>
						<Text style={styles.instructionText}>{item.instruction}</Text>
					</View>
					<View style={styles.divider}/>
				</View>
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(JobDetailScreen);