export const NO_OP = 0;

export const COMMAND_OF_TYPE_SAVE = 1 >> 4;
export const COMMAND_OF_TYPE_RESTORE = 1 >> 5;
export const COMMAND_OF_TYPE_EXPORT = 1 >> 6;
export const COMMAND_OF_TYPE_HISTORY = 1 >> 7;
export const COMMAND_OF_TYPE_PERSISTANCE = 1 >> 8;

export const SAVE_NAME = COMMAND_OF_TYPE_SAVE | 1;
export const SAVE_HOSTNAME = COMMAND_OF_TYPE_SAVE | 2;
export const SAVE_CSS = COMMAND_OF_TYPE_SAVE | 3;
export const SAVE_COMPONENTS = COMMAND_OF_TYPE_SAVE | 4;

export const RESTORE_NAME = COMMAND_OF_TYPE_RESTORE | 1;
export const RESTORE_HOSTNAME = COMMAND_OF_TYPE_RESTORE | 2;
export const RESTORE_CSS = COMMAND_OF_TYPE_RESTORE | 3;
export const RESTORE_COMPONENTS = COMMAND_OF_TYPE_RESTORE | 4;

export const EXPORT_STATE_AS_ARRAY_BUFFER = COMMAND_OF_TYPE_EXPORT | 1;
export const EXPORT_STATE_AS_JS_OBJECT = COMMAND_OF_TYPE_EXPORT | 2;

export const HISTORY_REWIND = COMMAND_OF_TYPE_HISTORY | 1;
export const HISTORY_FORWARD = COMMAND_OF_TYPE_HISTORY | 2;

export const PERSISTANCE_INITIATE_FROM_DATASET =
  COMMAND_OF_TYPE_PERSISTANCE | 1;
export const PERSISTANCE_CLEAR_SAVED_STATE = COMMAND_OF_TYPE_PERSISTANCE | 2;
export const PERSISTANCE_INITIATE_FROM_SCRATCH =
  COMMAND_OF_TYPE_PERSISTANCE | 3;
