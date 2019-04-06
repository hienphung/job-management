import {createNavigationReducer} from "react-navigation-redux-helpers";
import RootNavigator from "../../navigation/RootNavigator";

const navReducer = createNavigationReducer(RootNavigator);

export default navReducer;