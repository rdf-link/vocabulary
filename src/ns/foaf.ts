import type { INamespace } from "../type/i_namespace.js";

import { FOAF as FOAFVocabulary } from "../other/foaf.js";

export const FOAF: INamespace<"http://xmlns.com/foaf/0.1/", typeof FOAFVocabulary> = {
  iri: "http://xmlns.com/foaf/0.1/",
  prefix: "foaf",
  terms: FOAFVocabulary
}
