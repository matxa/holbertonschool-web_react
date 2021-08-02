import { shallow , mount} from 'enzyme';
import BodySection from './BodySection';
import React from 'react';

describe('BodySection Test', () => {

  it('BodySection renders without any errors', () => {
    shallow(<BodySection />);
  });
  
  it('Rendering BodySection correctly', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>test</p>
      </BodySection>
    );
    const shouldGenerate = [
        <h2>test</h2>,
        <p>test</p>
    ];
    expect(wrapper.containsAllMatchingElements(shouldGenerate)).toEqual(true);
  });

  it('Test title is being render', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.containsAllMatchingElements([
      <h2>test title</h2>,
      <p>test children node</p>
    ])).toEqual(true);
    expect(wrapper.text()).toEqual("test titletest children node");
  });
  
});
