import {createAppContainer, createStackNavigator} from "react-navigation"
import JobListScreen from "../screens/job-list/JobListScreen";
import JobDetailScreen from "../screens/job-detail/JobDetailScreen";

const JobNavigator = createStackNavigator({
	JobList: {
		screen: JobListScreen
	},
	JobDetail: {
		screen: JobDetailScreen
	}
});

const RootNavigator = createAppContainer(JobNavigator);

export default RootNavigator;