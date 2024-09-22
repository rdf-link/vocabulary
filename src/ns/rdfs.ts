import type { INamespace } from "../type/i_namespace.js";

import { RDFS as RDFSVocabulary } from "../core/rdfs.js";

export const RDFS: INamespace<"http://www.w3.org/2000/01/rdf-schema#", typeof RDFSVocabulary> = {
  iri: "http://www.w3.org/2000/01/rdf-schema#",
  prefix: "rdfs",
  terms: RDFSVocabulary
}
