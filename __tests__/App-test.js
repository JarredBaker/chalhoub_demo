/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../src/components/utilities/Loading';
import FailedItem from '../src/components/utilities/FailedItem';
jest.mock('axios');

it(`renders loading item correctly`, () => {
  const tree = renderer.create(<Loading />);
  expect(tree).toMatchSnapshot();
});

it(`renders failed item correctly`, () => {
  const treeFailed = renderer.create(
    <FailedItem text={'Please try again later'} />,
  );
  expect(treeFailed).toMatchSnapshot();
});
