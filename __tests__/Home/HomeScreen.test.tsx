import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {globalMockReducers} from '@/utils/testUtils';
import {combineReducers} from 'redux';
import {HomeScreen} from '@/modules';
import {routesEnum} from '@/types/navigation';

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn().mockImplementation(() => ({
    data: [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        age: 30,
        callHistory: '2024-06-09 12:00:00',
      },
    ],
    isFetching: false,
  })),
}));

describe('HomeScreen', () => {
  let store: any;

  beforeEach(() => {
    store = globalMockReducers(
      combineReducers({
        contacts: () => ({
          lastVisitContact: [
            {
              id: '2',
              firstName: 'Jane',
              lastName: 'Doe',
              photo: 'https://randomuser.me/api/portraits/women/1.jpg',
              age: 25,
              callHistory: '2024-06-09 14:00:00',
            },
          ],
        }),
      }),
    );
  });

  it('to match snapshot', () => {
    const queryClient = new QueryClient();

    const {toJSON} = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <HomeScreen
              navigation={{navigate: mockNavigate} as any}
              route={{
                params: undefined,
                path: '',
                key: '',
                name: routesEnum.HOME,
              }}
            />
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly and navigate', () => {
    const queryClient = new QueryClient();

    const {getByText} = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <HomeScreen
              navigation={{navigate: mockNavigate} as any}
              route={{
                params: undefined,
                path: '',
                key: '',
                name: routesEnum.HOME,
              }}
            />
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>,
    );

    expect(getByText('John Doe')).toBeTruthy();

    fireEvent.press(getByText('John Doe'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_LAST_VISIT_CONTACT',
      payload: {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        age: 30,
        callHistory: '2024-06-09 12:00:00',
      },
    });
    expect(mockNavigate).toHaveBeenCalledWith(routesEnum.DETAIL_CONTACT, {
      id: '1',
    });
  });

  it('renders correctly and navigate to screen detail contact', () => {
    const queryClient = new QueryClient();

    const {getByTestId} = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <HomeScreen
              navigation={{navigate: mockNavigate} as any}
              route={{
                params: undefined,
                path: '',
                key: '',
                name: routesEnum.HOME,
              }}
            />
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>,
    );

    fireEvent.press(getByTestId('add-button'));

    expect(mockNavigate).toHaveBeenCalledWith(routesEnum.DETAIL_CONTACT, {
      id: '',
    });
  });
});
