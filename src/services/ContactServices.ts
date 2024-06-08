import {IContact, ICreateContact} from '@/types/contact';
import moment from 'moment';

interface IBaseResponse<T> {
  status: number;
  data: T;
}

type PromisedbaseResponse<T> = Promise<IBaseResponse<T>>;

export const getAllContact = async (): Promise<IContact[]> => {
  try {
    const response = await fetch('https://contact.herokuapp.com/contact');
    const data = await response.json();

    const contacts = data.data.map((i: IContact) => ({
      ...i,
      callHistory: moment()
        .add(Math.floor(Math.random() * 9) + 1, 'hours')
        .format('YYYY-MM-DD HH:mm:ss'),
    }));
    return contacts;
  } catch (error) {
    throw new Error('Terjadi kesalahan');
  }
};

export const getDetailContact = async (id: string): Promise<IContact> => {
  try {
    const response = await fetch('https://contact.herokuapp.com/contact/' + id);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Terjadi kesalahan');
  }
};

export const createContact = async (body: ICreateContact) => {
  try {
    const response = await fetch('https://contact.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    return response.status;
  } catch (error) {
    throw new Error('Terjadi kesalahan');
  }
};

export const editContact = async (
  body: IContact,
): PromisedbaseResponse<IContact> => {
  try {
    const response = await fetch(
      'https://contact.herokuapp.com/contact/' + body.id,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstName: body.firstName,
          lastName: body.lastName,
          age: body.age,
          photo: body.photo,
        }),
      },
    );

    return {
      status: response.status,
      data: body,
    };
  } catch (error) {
    throw new Error('Terjadi kesalahan');
  }
};

export const deleteContact = async (id: string) => {
  try {
    const response = await fetch(
      'https://contact.herokuapp.com/contact/' + id,
      {
        method: 'DELETE',
      },
    );

    return response.status;
  } catch (error) {
    throw new Error('Terjadi kesalahan');
  }
};
