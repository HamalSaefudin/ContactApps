import SectionLastVisitedContact from '@/modules/Home/SectionLastVisitedContact';
import {globalMockReducers} from '@/utils/testUtils';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

describe('SectionLastVisitedContact', () => {
  let store: any;

  beforeEach(() => {
    store = globalMockReducers(
      combineReducers({
        contacts: () => ({
          lastVisitContact: [
            {
              id: '1',
              firstName: 'John',
              lastName: 'Doe',
              age: 30,
              photo: 'https://example.com/photo.jpg',
              callHistory: '2024-06-09 12:00:00',
            },
            {
              id: '2',
              firstName: 'Jane',
              lastName: 'Smith',
              age: 25,
              photo: 'https://example.com/photo2.jpg',
              callHistory: '2024-06-09 12:00:00',
            },
          ],
        }),
      }),
    );
  });

  it('to match snapshot ', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <SectionLastVisitedContact />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly ', () => {
    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <SectionLastVisitedContact />
      </Provider>,
    );

    expect(getByText('Last Visited Contact')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();

    const flatList = getByTestId('list-last-visited-contact');
    expect(flatList.props.data.length).toBe(2);
  });

  it('renders no contacts', () => {
    store = globalMockReducers(
      combineReducers({
        contacts: () => ({
          lastVisitContact: [],
        }),
      }),
    );

    const {queryByText} = render(
      <Provider store={store}>
        <SectionLastVisitedContact />
      </Provider>,
    );

    expect(queryByText('Last Visited Contact')).not.toBeTruthy();
  });
});
