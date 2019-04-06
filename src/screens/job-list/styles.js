import {StyleSheet} from "react-native";
import React from "react";
import AppTheme from "../../theme/AppTheme";

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		alignItems: "stretch",
		paddingVertical: 20,
	},
	calendar: {
		marginHorizontal: 15,
		marginBottom: 10
	},
	imageSliderContainer: {
		width: "100%",
		height: 150,
		marginVertical: 10
	},
	imageSliderItemContainer: {
		width: "100%",
	},
	sliderImage: {
		width: "100%",
		height: 150,
	},
	sliderPaginationDot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginHorizontal: 8,
		backgroundColor: AppTheme.colors.primary,
	},
	sliderPagination: {
		position: "absolute",
		paddingVertical: 10,
		left: 0,
		right: 0,
		bottom: 0,
		margin: 0,
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},
	jobSectionsContainer: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "stretch",
		marginTop: 10
	},
	jobSection: {
		marginBottom: 10,
	}
});

export default styles;