import {IContact} from '@/types/contact';
import {ContactActionType} from './ContactConstants';

export const setLastVisitContact = (payload: IContact) => ({
  type: ContactActionType.SET_LAST_VISIT_CONTACT,
  payload,
});

export const editLastVisitContact = (payload: IContact) => ({
  type: ContactActionType.UPDATE_LAST_VISIT_CONTACT,
  payload,
});
