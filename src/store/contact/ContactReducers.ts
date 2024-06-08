import {IContact} from '@/types/contact';
import {ContactActionType} from './ContactConstants';

interface ContactState {
  lastVisitContact: IContact[];
}

const contactInitialState: ContactState = {
  lastVisitContact: [],
};

interface ContactAction {
  type: keyof typeof ContactActionType;
  payload: IContact;
}

export const ContactReducers = (
  state: ContactState = contactInitialState,
  action: ContactAction,
): ContactState => {
  const {payload, type} = action;

  switch (type) {
    case ContactActionType.SET_LAST_VISIT_CONTACT:
      const lastContact =
        state.lastVisitContact[state.lastVisitContact.length - 1];
      if (lastContact && lastContact.id === payload.id) {
        return state;
      }
      return {
        ...state,
        lastVisitContact: [...state.lastVisitContact.splice(-4), payload],
      };
    case ContactActionType.UPDATE_LAST_VISIT_CONTACT:
      const idx = state.lastVisitContact.findIndex(
        contact => contact.id === payload.id,
      );

      if (idx >= 0) {
        const updatedContacts = state.lastVisitContact.map((contact, index) =>
          index === idx ? payload : contact,
        );
        return {
          ...state,
          lastVisitContact: updatedContacts,
        };
      }
      return state;
    default:
      return state;
  }
};
