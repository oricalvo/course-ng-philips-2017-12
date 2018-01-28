export interface AppState {
  counter: number;
  contacts: Contact[];
  isLoading: boolean;
};

export interface Contact {
  id: number;
  name: string;
};
