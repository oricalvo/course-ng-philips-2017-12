export interface AppStore {
  all: Contact[];
  contacts: Contact[];
  searchStr: string;
}

export interface Contact {
  id: number;
  name: string;
}

export const appStore: AppStore = {
  all: null,
  contacts: null,
  searchStr: "",
};
