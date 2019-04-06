import ACTION_TYPES from "./action-types";

export const setCalendarData = (data) => ({
	type: ACTION_TYPES.SET_CALENDAR_DATA,
	payload: data
});

export const setCalendarSelectedIndex = (index) => ({
	type: ACTION_TYPES.SET_CALENDAR_SELECTED_INDEX,
	payload: index
});

export const setJobListImages = (images) => ({
	type: ACTION_TYPES.SET_JOB_LIST_IMAGES,
	payload: images
});

export const setJobList = (jobList) => ({
	type: ACTION_TYPES.SET_JOB_LIST,
	payload: jobList
});