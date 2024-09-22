import type { INamespace } from "../type/i_namespace.js";

import { RDF as RDFVocabulary } from "../core/rdf.js";

export const RDF: INamespace<"http://www.w3.org/1999/02/22-rdf-syntax-ns#", typeof RDFVocabulary> = {
  iri: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  prefix: "rdf",
  terms: RDFVocabulary
}
