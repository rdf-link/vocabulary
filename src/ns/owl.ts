import type { INamespace } from "../type/i_namespace.js";

import { OWL as OWLVocabulary } from "../core/owl.js";

export const OWL: INamespace<"http://www.w3.org/2002/07/owl#", typeof OWLVocabulary> = {
    iri: "http://www.w3.org/2002/07/owl#",
    prefix: "owl",
    terms: OWLVocabulary
}
