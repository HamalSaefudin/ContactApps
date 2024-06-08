import ContactCard from '@/modules/Home/ContactCard';
import {IContact} from '@/types/contact';
import {fireEvent, render} from '@testing-library/react-native';
import moment from 'moment';
import React from 'react';
import {act} from 'react-test-renderer';

const mockContact: IContact = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  photo: 'https://example.com/john.jpg',
  callHistory: moment().subtract(1, 'days').toISOString(),
};

describe('ContactCard', () => {
  it('should match snapshot', () => {
    const component = render(
      <ContactCard
        item={mockContact}
        index={0}
        onPress={() => {}}
        isLoading={false}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
  it('renders correctly when not loading', () => {
    const component = render(
      <ContactCard
        item={mockContact}
        index={0}
        onPress={() => {}}
        isLoading={false}
      />,
    );

    const textName = component.getByTestId('contact-card-text-name');
    const textAge = component.getByTestId('contact-card-text-age');
    const image = component.getByTestId('img-contact-card');
    const textCallHistory = component.getByTestId('contact-card-call-history');

    expect(image).toBeTruthy();
    expect(textName).toBeTruthy();
    expect(textName.children[0]).toEqual(
      mockContact.firstName + ' ' + mockContact.lastName,
    );
    expect(textAge).toBeTruthy();
    expect(textAge.children[0]).toEqual(mockContact.age + ' Years Old');
    expect(textCallHistory).toBeTruthy();
    expect(textCallHistory.children[0]).toEqual(
      moment(mockContact.callHistory).format('MMMM DD, YYYY'),
    );
  });

  it('onPressCalled when the card is pressed', () => {
    const handlePress = jest.fn();
    const component = render(
      <ContactCard
        item={mockContact}
        index={0}
        onPress={handlePress}
        isLoading={false}
      />,
    );

    const card = component.getByTestId('contact-card');
    act(() => {
      fireEvent.press(card);
    });
    expect(handlePress).toHaveBeenCalledWith(mockContact);
  });
});
