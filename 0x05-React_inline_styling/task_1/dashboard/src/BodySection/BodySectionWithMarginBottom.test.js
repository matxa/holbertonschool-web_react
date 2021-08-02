import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

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
    const shouldGenerate = [
      <h3>I am a H3</h3>,
      <p>This is a paragraph</p>
    ]
    expect(wrapper.containsAllMatchingElements(shouldGenerate)).toEqual(true);
  });
});
