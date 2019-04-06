import React from 'react';
import {shallow} from 'enzyme';
import Calendar from "../src/components/calendar/Calendar";

describe("Test Calendar Component", () => {
	it("Should render correctly", () => {
		const component = shallow(<Calendar/>);
		expect(component).toMatchSnapshot();
	})
});