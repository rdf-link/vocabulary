import type { INamespace } from "../type/i_namespace.js";

import { XSD as XSDVocabulary } from "../core/xsd.js";

export const XSD: INamespace<"http://www.w3.org/2001/XMLSchema#", typeof XSDVocabulary> = {
  iri: "http://www.w3.org/2001/XMLSchema#",
  prefix: "xsd",
  terms: XSDVocabulary
}
