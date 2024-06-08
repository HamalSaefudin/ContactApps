import {
  createContact,
  deleteContact,
  editContact,
  getAllContact,
  getDetailContact,
} from '@/services/ContactServices';
import {IContact, ICreateContact} from '@/types/contact';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Contact Service', () => {
  it('should get all contacts', async () => {
    const mockContacts: IContact[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        photo: 'john.jpg',
        callHistory: '',
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Doe',
        age: 28,
        photo: 'jane.jpg',
        callHistory: '',
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify({data: mockContacts}));

    const contacts = await getAllContact();

    expect(fetchMock).toHaveBeenCalledWith(
      'https://contact.herokuapp.com/contact',
    );
    expect(contacts.length).toBe(2);
  });

  it('should success get detail contact by id', async () => {
    const mockContact: IContact = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      photo: 'john.jpg',
      callHistory: '',
    };

    fetchMock.mockResponseOnce(JSON.stringify({data: mockContact}));

    const contact = await getDetailContact('1');

    expect(fetchMock).toHaveBeenCalledWith(
      'https://contact.herokuapp.com/contact/1',
    );
    expect(contact).toEqual(mockContact);
  });

  it('should failed get detail contact by id', async () => {
    const mockContact: IContact = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      photo: 'john.jpg',
      callHistory: '',
    };

    const mockResponseContact: IContact = {
      id: '20',
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      photo: 'john.jpg',
      callHistory: '',
    };

    fetchMock.mockResponseOnce(JSON.stringify({data: mockResponseContact}));

    const contact = await getDetailContact('20');

    expect(fetchMock).toHaveBeenCalledWith(
      'https://contact.herokuapp.com/contact/20',
    );
    expect(contact).not.toEqual(mockContact);
  });

  it('should create a new contact', async () => {
    const newContact: ICreateContact = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      photo: 'john.jpg',
    };

    fetchMock.mockResponseOnce(JSON.stringify({status: 200}));

    const status = await createContact(newContact);

    expect(fetchMock).toHaveBeenCalledWith(
      'https://contact.herokuapp.com/contact',
      expect.objectContaining({
        method: 'POST',
        headers: {Accept: 'application/json'},
        body: JSON.stringify(newContact),
      }),
    );
    expect(status).toBe(200);
  });

  it('should edit an existing contact', async () => {
    const updatedContact: IContact = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      photo: 'john.jpg',
      callHistory: '',
    };

    fetchMock.mockResponseOnce(JSON.stringify({status: 200}));

    const response = await editContact(updatedContact);

    expect(fetchMock).toHaveBeenCalledWith(
      'https://contact.herokuapp.com/contact/1',
      expect.objectContaining({
        method: 'PUT',
        headers: {Accept: 'application/json'},
        body: JSON.stringify({
          firstName: updatedContact.firstName,
          lastName: updatedContact.lastName,
          age: updatedContact.age,
          photo: updatedContact.photo,
        }),
      }),
    );
    expect(response.status).toBe(200);
    expect(response.data).toEqual(updatedContact);
  });

  it('should delete a contact by id', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({status: 204}));

    const status = await deleteContact('1');

    expect(fetchMock).toHaveBeenCalledWith(
      'https://contact.herokuapp.com/contact/1',
      {method: 'DELETE'},
    );
    expect(status).toBe(200);
  });
});
