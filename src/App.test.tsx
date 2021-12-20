// https://enzymejs.github.io/enzyme/docs/api
// https://jestjs.io/docs/en/getting-started

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import moment from 'moment';

import App from './App';
import TimerContainer from './component/TimerContainer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Create a ShallowWrapper for th App component.
 * @function setup
 * @param {object} props - Component props.
 * @param {any} state - Initial state for setup.
 * @returns {ShalloeWrapper}
 */
const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

// /**
//  * Create a ShallowWrapper for th Timer component.
//  * @function setupTimer
//  * @param {object} props - Component props.
//  * @param {object} state - Initial state for setup.
//  * @returns {ShalloeWrapper}
//  */
// const setupTimer = (props = {}, state = {}) => {
//   const wrapper = shallow(<TimerClassComponent {...props} />);
//   if (state) {
//     wrapper.setState(state);
//   }
//   return wrapper;
// };

/**
 * Return ShalloeWrapper containing node(s) with the given data-test value.
 * @param {ShalloeWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShalloeWrapper}
 */
const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'appComponent');
  expect(appComponent.length).toBe(1);
});

// test('renders TimerContainer', () => {
//   const wrapper = setup();
//   const timerContainerComponent = findByTestAttr(wrapper, 'timerContainerComponent');
//   expect(timerContainerComponent.length).toBe(1);
// });

// test('renders Timer display', () => {
//   const wrapper = shallow(<TimerContainer />);
//   const timerComponent = findByTestAttr(wrapper, 'timerComponent');
//   expect(timerComponent.length).toBe(1);
// });

test('time start now', () => {
  const wrapper = setupTimer();
  // console.log(wrapper.debug());

  const now = moment().format('HH:mm');
  const initialNowState = wrapper.state('now');
  expect(initialNowState).toBe(now);
});

test('clicking button and time display', () => {
  const time = '22:10';
  const wrapper = setupTimer({}, { time });

  const button = findByTestAttr(wrapper, 'displayTimeButton');
  button.simulate('click');

  const timeDisplay = findByTestAttr(wrapper, 'timeDisplay');
  expect(timeDisplay.text()).toContain(time);
});
