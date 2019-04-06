import {StyleSheet} from "react-native";
import AppTheme from "../../theme/AppTheme";

const styles = {
	container: {
		flexDirection: "row",
		alignItems: "stretch",
		justifyContent: "flex-start"
	},
	dateContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start"
	},
	shortWeekDateText: {
		fontSize: 14,
		color: "black",
		marginBottom: 10,
	},
	dateTextContainer: {
		padding: 5,
	},
	dateText: {
		fontSize: 18,
		color: "black"
	},
	dateTextSelectedContainer: {
		backgroundColor: AppTheme.colors.primary,
		padding: 5,
		borderRadius: 3,
	},
	dateTextSelected: {
		fontSize: 18,
		color: "white",
		fontWeight: "bold"
	}
};

export default styles;