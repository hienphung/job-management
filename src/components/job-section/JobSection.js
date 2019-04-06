import React, {Component} from "react";
import {Dimensions, Text, View, TouchableWithoutFeedback} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";

const {width: windowWidth} = Dimensions.get("window");


export default class JobSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentIndex: 0
		};

		this.renderItem = this.renderItem.bind(this);
	}

	renderItem({item, index}) {
		const {onItemPress, sectionIndex} = this.props;
		return (
			<View style={styles.itemContainer}>
				<TouchableWithoutFeedback onPress={() => {
					onItemPress ? onItemPress(index, sectionIndex) : null;
				}}>
					<View style={styles.itemContent} key={item.id}>
						<View style={styles.headerContainer}>
							<Text style={styles.titleText}>{item.title}</Text>
							<Text style={styles.descriptionText} numberOfLines={1}>{item.description}</Text>
							{item.status === "error" ? (
								<FontAwesome name={"warning"} color={"red"} size={15} style={styles.statusIcon}/>
							) : (
								<AntDesign name={"warning"} color={"orange"} size={15} style={styles.statusIcon}/>
							)}
						</View>
						<View style={styles.divider}/>
						<Text style={styles.durationText}>{item.duration}</Text>
						<View style={styles.companyContainer}>
							<Text style={styles.companyText}>{item.company}</Text>
							<View style={styles.typeContainer}>
								<Text style={styles.typeText}>{item.type}</Text>
							</View>
						</View>
						<View style={styles.locationContainer}>
							<Text style={styles.locationText}>{item.location}</Text>
							<View style={styles.dispatchedContainer}>
								{item.dispatched ? (<Text style={styles.dispatchedText}>Dispatched</Text>) : null}
							</View>
						</View>
						<View style={styles.verticalLine}/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}

	render() {
		const {data, containerStyle} = this.props;
		if (data && data.length > 0) {
			return (
				<Carousel data={data}
				          layout={"stack"}
				          layoutCardOffset={5}
				          renderItem={this.renderItem}
				          contentContainerCustomStyle={[styles.container, containerStyle]}
				          sliderWidth={windowWidth}
				          itemWidth={windowWidth}
				          onSnapToItem={(index) => {
					          this.setState({currentIndex: index})
				          }}/>
			)
		}
	}
}
