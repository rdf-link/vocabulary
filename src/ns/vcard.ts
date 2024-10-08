import type { INamespace } from "../type/i_namespace.js";

import { VCARD as VCARDVocabulary } from "../w3/vcard.js";

export const VCARD: INamespace<"http://www.w3.org/2006/vcard/ns#", typeof VCARDVocabulary> = {
  iri: "http://www.w3.org/2006/vcard/ns#",
  prefix: "vcard",
  terms: VCARDVocabulary
}
