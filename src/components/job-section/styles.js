import {StyleSheet, PixelRatio} from "react-native";
import AppTheme from "../../theme/AppTheme";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start"
	},
	itemContainer: {
		flex: 1,
		shadowOffset: {width: 3, height: 3},
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 2,
		paddingHorizontal: 10,
		paddingBottom: 10,
	},
	itemContent: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "stretch",
		backgroundColor: "white",
		borderRadius: 5,
		overflow: "hidden",
		paddingHorizontal: 15,
		paddingVertical: 10
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	titleText: {
		fontSize: 13,
		color: AppTheme.colors.text,
		fontWeight: "bold",
	},
	descriptionText: {
		fontSize: 13,
		color: AppTheme.colors.text,
		flex:1,
		marginHorizontal: 5,
		textAlign: "center"
	},
	statusIcon: {
		alignSelf: "flex-end"
	},
	divider: {
		height: 1 / PixelRatio.get(),
		backgroundColor: "lightgray",
		marginVertical: 10,
	},
	durationText: {
		fontSize: 13,
		color: AppTheme.colors.text,
	},
	companyContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10
	},
	companyText: {
		fontSize: 14,
		color: AppTheme.colors.text,
		fontWeight: "bold"
	},
	typeContainer: {
		backgroundColor: "lightgray",
		borderRadius: 3,
		padding: 5,
	},
	typeText: {
		fontSize: 12,
		color: "black",
		fontWeight: "bold"
	},
	locationContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	locationText: {
		flex: 1,
		marginRight: 20,
		fontSize: 12,
		color: AppTheme.colors.text,
	},
	dispatchedContainer: {
		alignSelf: "flex-end",
		borderRadius: 3,
		padding: 5,
		borderWidth: 1,
		borderColor: "orange"
	},
	dispatchedText: {
		fontSize: 12,
		color: "orange",
		fontWeight: "bold",
	},
	verticalLine: {
		width: 3,
		backgroundColor: "orange",
		position: "absolute",
		left: 0,
		top: 0,
		bottom: 0,
	}
});

export default styles;