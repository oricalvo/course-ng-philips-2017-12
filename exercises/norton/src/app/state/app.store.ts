export interface AppStore {
  explorer1: ExplorerState;
  explorer2: ExplorerState;
  active: ExplorerState;
  error: string;
}

export interface ExplorerState {
  path: string;
  items: ExplorerItem[];
  activeIndex: number;
  topLevel: boolean;
}

export interface ExplorerItem {
  name: string;
  type: "file"|"dir"|"up";
  active?: boolean;
}

export const appStore: AppStore = {
  explorer1: null,
  explorer2: null,
  active: null,
  error: null,
};
