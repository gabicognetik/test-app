import React from 'react';
import Foo from './Foo';
import { mount } from 'enzyme';

test('example', () => {
  const wrapper = mount(<Foo />);

  expect(wrapper.find('.clicks-0').length).toEqual(1);
  wrapper.find('a').simulate('click');
  expect(wrapper.find('.clicks-1').length).toEqual(1);
});
