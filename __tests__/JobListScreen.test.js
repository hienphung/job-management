/**
 * @jest-environment jsdom
 */

import React from 'react';
import {shallow} from 'enzyme';
import JobListScreen from "../src/screens/job-list/JobListScreen.js";

describe("Test JobListScreen", () => {
	let screen;
	let calendarComponent;
	beforeAll(() => {
		screen = shallow(<JobListScreen/>);
		calendarComponent = screen.find("Calendar").first();
	});

	it("Should render correctly", () => {
		expect(screen).toMatchSnapshot();
	});
	it('Should render Calendar', () => {
		expect(calendarComponent).toBeTruthy();
	});
});