import React from 'react';
import {shallow} from 'enzyme';
import JobSection from "../src/components/job-section/JobSection";

describe("Test JobSection Component", () => {
	it("Should render correctly", () => {
		const component = shallow(<JobSection/>);
		expect(component).toMatchSnapshot();
	})
});