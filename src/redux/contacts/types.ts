export type Contact = {
  id: string;
  name: string;
  phone: string;
};

export type ContactsState = {
  items: Contact[];
  currentContact: Contact | null;
  loading: boolean;
  error: null | string;
};

export type NewContact = {
  name: string;
  phone: string;
};

export type UpdateContact = { id: Contact["id"] } & Partial<
  Omit<Contact, "id">
>;
