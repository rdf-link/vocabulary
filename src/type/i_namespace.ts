import type { IVocabulary } from "./i_vocabulary.js";

export interface INamespace<BaseIri extends string, Vocabulary extends IVocabulary<BaseIri>> {
    iri: BaseIri;
    prefix: string;
    terms: Vocabulary;
}
