import React, {Component} from "react";
import {Dimensions, Image, ScrollView, View} from "react-native";
import styles from "./styles";
import Calendar from "../../components/calendar/Calendar";
import {connect} from "react-redux";
import * as JobsActions from "../../redux/jobs/actions";
import {calendarData, imageSliderData, jobList} from "./fake-data";
import Carousel, {Pagination} from "react-native-snap-carousel";
import JobSection from "../../components/job-section/JobSection";

const {width: windowWidth} = Dimensions.get("window");

class JobListScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			sliderCurrentIndex: 0
		};

		this.calendarOnItemPress = this.calendarOnItemPress.bind(this);
		this.carouselOnSnapToItem = this.carouselOnSnapToItem.bind(this);
		this.onJobItemPress = this.onJobItemPress.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(JobsActions.setCalendarData(calendarData));
		this.props.dispatch(JobsActions.setCalendarSelectedIndex(3));
		this.props.dispatch(JobsActions.setJobListImages(imageSliderData));
		this.setState({sliderCurrentIndex: 1});
		this.props.dispatch(JobsActions.setJobList(jobList));
	}

	calendarOnItemPress(index) {
		this.props.dispatch(JobsActions.setCalendarSelectedIndex(index))
	}

	carouselOnSnapToItem(index) {
		this.setState({sliderCurrentIndex: index})
	}

	renderJobListImageItem({item, index}, parallaxProps) {
		return (
			<View style={styles.imageSliderItemContainer}>
				<Image
					key={item.id}
					resizeMode={"cover"}
					source={{uri: item.url}}
					containerStyle={styles.sliderImage}
					style={styles.sliderImage}
					parallaxFactor={1}
					{...parallaxProps}
				/>
			</View>
		)
	}

	renderImageSlider() {
		const {jobListImages} = this.props;
		if (jobListImages && jobListImages.length > 0) {
			const sliderWidth = windowWidth;
			const itemWidth = windowWidth;
			return (
				<View style={styles.imageSliderContainer}>
					<Carousel
						firstItem={1}
						ref={(c) => {
							this._carousel = c;
						}}
						data={jobListImages}
						renderItem={this.renderJobListImageItem}
						sliderWidth={sliderWidth}
						itemWidth={itemWidth}
						onSnapToItem={this.carouselOnSnapToItem}
					/>
					{jobListImages.length > 1 ? (
						<Pagination containerStyle={styles.sliderPagination}
						            activeDotIndex={this.state.sliderCurrentIndex}
						            dotsLength={jobListImages.length}
						            dotStyle={styles.sliderPaginationDot}
						            inactiveDotOpacity={0.4}
						            inactiveDotScale={0.6}/>
					) : null}
				</View>
			)
		}
		return null;
	}

	onJobItemPress(index, sectionIndex) {
		const selectedJob = this.props.jobList[sectionIndex].jobs[index];
		if (selectedJob) {
			this.props.navigation.navigate("JobDetails", {selectedJob})
		}
	}

	renderJobsSection(value, index) {
		return (
			<JobSection key={value.sectionId}
			            data={value.jobs}
			            containerStyle={styles.jobSection}
			            onItemPress={this.onJobItemPress}
									sectionIndex={index}/>
		)
	}

	renderJobsList() {
		const {jobList} = this.props;
		if (jobList && jobList.length > 0) {
			return (
				<View style={styles.jobSectionsContainer}>
					{jobList.map((value, index) => {
						return this.renderJobsSection(value, index);
					})}
				</View>
			)
		}
	}

	render() {
		const {calendarData, calendarSelectedIndex} = this.props;

		return (
			<ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
				<Calendar testId={"calendar"} data={calendarData}
				          style={styles.calendar}
				          selectedIndex={calendarSelectedIndex}
				          onItemPress={this.calendarOnItemPress}/>
				{this.renderImageSlider()}
				{this.renderJobsList()}
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => ({
	calendarData: state.jobs.calendarData,
	calendarSelectedIndex: state.jobs.calendarSelectedIndex,
	jobListImages: state.jobs.jobListImages,
	jobList: state.jobs.jobList
});

export default connect(mapStateToProps)(JobListScreen);