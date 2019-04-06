import {PixelRatio, StyleSheet} from "react-native";
import AppTheme from "../../theme/AppTheme";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignSelf: "stretch"
	},
	map: {
		width: "100%",
		height: 150
	},
	infoContainer: {
		paddingHorizontal: 15,
		alignItems: "stretch",
		marginTop: 20,
	},
	durationText: {
		fontSize: 15,
		color: "#666768",
		marginBottom: 10,
		fontWeight: "500"
	},
	tagsContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	typeContainer: {
		backgroundColor: "lightgray",
		borderRadius: 3,
		padding: 5,
		marginRight: 15
	},
	typeText: {
		fontSize: 12,
		color: "black",
		fontWeight: "bold"
	},
	dispatchedContainer: {
		borderRadius: 3,
		padding: 5,
		borderWidth: 1,
		borderColor: "orange",
		marginRight: 15
	},
	dispatchedText: {
		fontSize: 12,
		color: "orange",
		fontWeight: "bold",
	},
	divider: {
		height: 1 / PixelRatio.get(),
		backgroundColor: "lightgray",
		marginVertical: 15,
	},
	locationContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 15
	},
	locationText: {
		fontSize: 15,
		color: "#666768",
		flex: 1,
		marginRight: 20,
		fontWeight: "500"
	},
	companyContainer: {

	},
	companyNameText: {
		fontSize: 15,
		color: "#5A5B5C",
		fontWeight: "bold",
		marginBottom: 10,
	},
	contactContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	contactImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		overflow: "hidden",
		marginRight: 10
	},
	contactInfoContainer: {
		flex: 1
	},
	contactLabel: {
		fontSize: 15,
		color: "darkgray",
		marginBottom: 5
	},
	contactNameText: {
		fontSize: 16,
		color: "#666768",
		fontWeight: "bold"
	},
	descriptionContainer: {

	},
	descriptionLabel: {
		fontSize: 15,
		color: "darkgray",
		marginBottom: 10,
	},
	descriptionText: {
		fontSize: 15,
		color: "#666768",
		fontWeight: "500"
	},
	instructionContainer: {

	},
	instructionLabel: {
		fontSize: 15,
		color: "darkgray",
		marginBottom: 10,
	},
	instructionText: {
		fontSize: 15,
		color: "#666768",
		fontWeight: "500"
	}
});

export default styles;