import type { INamespace } from "../type/i_namespace.js";

import { SKOSXL as SKOSXLVocabulary } from "../w3/skosxl.js";

export const SKOSXL: INamespace<"http://www.w3.org/2008/05/skos-xl#", typeof SKOSXLVocabulary> = {
  iri: "http://www.w3.org/2008/05/skos-xl#",
  prefix: "skosxl",
  terms: SKOSXLVocabulary
}
