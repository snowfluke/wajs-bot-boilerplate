import { iSessionParent } from "../types/types";

const globalVariable = {
  session: {
    data: {} as iSessionParent,
    set(key: string, value: {}) {
      this.data[key] = value;
    },
    get() {
      return this.data;
    },
  },
  ticker: {},
};

export const session = globalVariable.session;
