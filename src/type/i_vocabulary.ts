export type IVocabulary<BaseIri extends string> = {
    [K in string]: `${BaseIri}${K}`
}
