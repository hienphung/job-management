import ACTION_TYPES from "./action-types";

const defaultState = {
	calendarData: [],
	calendarSelectedIndex: -1,
	jobListImages: [],
	jobList: [],
	badgeCount: 4,
};

const jobReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_CALENDAR_DATA:
			return {...state, calendarData: action.payload};
		case ACTION_TYPES.SET_CALENDAR_SELECTED_INDEX:
			return {...state, calendarSelectedIndex: action.payload};
		case ACTION_TYPES.SET_JOB_LIST_IMAGES:
			return {...state, jobListImages: action.payload};
		case ACTION_TYPES.SET_JOB_LIST:
			return {...state, jobList: action.payload};
		default:
			return state;
	}
};

export default jobReducer;