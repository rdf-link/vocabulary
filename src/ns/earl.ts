import type { INamespace } from "../type/i_namespace.js";

import { EARL as EARLVocabulary } from "../w3/earl.js";

export const EARL: INamespace<"http://www.w3.org/ns/earl#", typeof EARLVocabulary> = {
  iri: "http://www.w3.org/ns/earl#",
  prefix: "earl",
  terms: EARLVocabulary
}
