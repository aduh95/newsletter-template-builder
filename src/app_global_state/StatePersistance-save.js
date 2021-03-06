import {
  SAVE_NAME,
  SAVE_HOSTNAME,
  SAVE_CSS,
  SAVE_COMPONENTS,
} from "./commands.js";

const historyKeys = {
  [SAVE_NAME]: "name",
  [SAVE_HOSTNAME]: "hostname",
  [SAVE_CSS]: "css",
  [SAVE_COMPONENTS]: "components",
};

import { history } from "./StatePersistance-history.js";

export const handleCommand = ([command, data]) => {
  if (data === null) {
    return {};
  }
  const newHistoryEntry = { [historyKeys[command]]: data };
  history.pushNewEntry(newHistoryEntry);
  return newHistoryEntry;
};
