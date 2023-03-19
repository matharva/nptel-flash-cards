import { BA_DATA } from "./data/ba";
import { CC_DATA } from "./data/cc";
import { FSA_DATA } from "./data/fsa";
import { PSOSM_DATA } from "./data/psosm";

export const data = {
  CC: CC_DATA.flat(),
  PSOSM: PSOSM_DATA.flat(),
  BA: BA_DATA.flat(),
  FSA: FSA_DATA.flat(),
};
