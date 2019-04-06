import React from 'react';
import {shallow} from 'enzyme';
import JobDetailScreen from "../src/screens/job-detail/JobDetailScreen";

describe("Test JobDetailScreen", () => {
	it("Should render correctly", () => {
		const component = shallow(<JobDetailScreen/>);
		expect(component).toMatchSnapshot();
	})
});