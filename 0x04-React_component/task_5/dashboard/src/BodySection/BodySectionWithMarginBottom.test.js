import React from "react";
import PropTypes from 'prop-types';
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from './BodySection';

describe('Test BodySectionWithMarginBottom', () => {
  it('BodySectionWithMarginBottom renders without crashing', () => {
    shallow(<BodySectionWithMarginBottom />);
  });

  it('BodySectionWithMarginBottom renders correctly', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="I am a h2">
        <h3>I am a H3</h3>
        <p>This is a paragraph</p>
      </BodySectionWithMarginBottom>
    );
    const shouldGenerate = (
      <div className="bodySectionWithMargin">
        <BodySection title="I am a h2">
          <h3>I am a H3</h3>
          <p>This is a paragraph</p>
        </BodySection>
      </div>
    );
    expect(wrapper.contains(shouldGenerate)).toEqual(true);
  });
});
