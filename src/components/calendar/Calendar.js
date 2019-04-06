import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

export default class Calendar extends Component {
	static propTypes = {
		data: PropTypes.arrayOf(PropTypes.object)
	};


	constructor(props) {
		super(props);
	}

	renderDate(value, index) {
		const {onItemPress} = this.props;
		if (index !== this.props.selectedIndex) {
			return (
				<TouchableOpacity onPress={() => {
					onItemPress ? onItemPress(index) : null
				}}>
					<View style={styles.dateTextContainer}>
						<Text style={styles.dateText}>{value}</Text>
					</View>
				</TouchableOpacity>
			)
		}
		return (
			<View style={styles.dateTextSelectedContainer}>
				<Text style={styles.dateTextSelected}>{value}</Text>
			</View>
		)
	}

	render() {
		const {data} = this.props;
		if (data) {
			return (
				<View style={styles.container}>
					{
						data.map((value, index) => {
							return (
								<View style={styles.dateContainer} key={value.id}>
									<Text style={styles.shortWeekDateText}>{value.shortWeekDate}</Text>
									{this.renderDate(value.date, index)}
								</View>
							)
						})
					}
				</View>
			)
		}
		return null;
	}
}