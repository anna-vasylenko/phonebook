export type Contact = {
  id: string;
  name: string;
  number: string;
};

export type ContactsState = {
  items: Contact[];
  currentContact: Contact | null;
  loading: boolean;
  error: null | string;
};

export type NewContact = {
  name: string;
  number: string;
};

export type UpdateContact = { id: Contact["id"] } & Partial<
  Omit<Contact, "id">
>;
