import type { INamespace } from "../type/i_namespace.js";

import { SKOS as SKOSVocabulary } from "../w3/skos.js";

export const SKOS: INamespace<"http://www.w3.org/2004/02/skos/core#", typeof SKOSVocabulary> = {
  iri: "http://www.w3.org/2004/02/skos/core#",
  prefix: "skos",
  terms: SKOSVocabulary
}
