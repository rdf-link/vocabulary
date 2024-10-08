# RDF Vocabulary

[![CI](https://github.com/rdf-link/vocabulary/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rdf-link/vocabulary/actions/workflows/ci.yml?query=workflow%3ACI+branch%3Amain)
[![MIT license](https://img.shields.io/npm/l/@rdf-link/vocabulary)](https://github.com/rdf-link/vocabulary/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@rdf-link/vocabulary)](https://www.npmjs.com/package/@rdf-link/vocabulary)

The `@rdf-link/vocabulary` JavaScript library:
- gives access to well-known RDF vocabularies' terms as constants;
- defines namespaces' base IRIs and commonly used prefixes;
- bundles type declarations developed for convenient code completion.

## Vocabularies

The `core` module contains the RDF, RDFS, OWL and XSD vocabularies.

```ts
import { RDF, RDFS, OWL, XSD } from "@rdf-link/vocabulary/core";

// Logs: http://www.w3.org/1999/02/22-rdf-syntax-ns#type
console.log(RDF.type);
```

The `other` module contains the FOAF (stable) vocabulary.

```ts
import { FOAF } from "@rdf-link/vocabulary/other";

// Logs: http://xmlns.com/foaf/0.1/knows
console.log(FOAF.knows);
```

The `w3` module contains the EARL, SKOS, SKOSXL and VCARD vocabularies.

```ts
import { EARL, SKOS, SKOSXL, VCARD } from "@rdf-link/vocabulary/w3";

// Logs: http://www.w3.org/2004/02/skos/core#broader
console.log(SKOS.broader);
```

## Namespaces

The `ns` module contains all vocabularies available in this library each with associated base IRI, prefix and terms.

```ts
import * as NS from "@rdf-link/vocabulary/ns";

// Logs: http://www.w3.org/2000/01/rdf-schema#
console.log(NS.RDFS.iri);

// Logs: rdfs
console.log(NS.RDFS.prefix);

// Logs: http://www.w3.org/2000/01/rdf-schema#label
console.log(NS.RDFS.terms.label);
```

## Utils

The `DATATYPE` constant is a collection of [RDF datatypes](https://www.w3.org/TR/rdf11-concepts/#section-Datatypes) and the `DEFAULT_DATATYPE` constant is the default datatype for RDF literals.

```ts
import { DATATYPE, DEFAULT_DATATYPE } from "@rdf-link/vocabulary/utils";

// Logs: http://www.w3.org/1999/02/22-rdf-syntax-ns#langString
console.log(DATATYPE.RDF.langString)

// Logs: http://www.w3.org/2001/XMLSchema#string
console.log(DEFAULT_DATATYPE)
```

## Type definitions

A vocabulary is a Record where keys are strings and corresponding values are the key prefixed by the vocabulary's base IRI.

```ts
export type IVocabulary<BaseIri extends string> = {
    [K in string]: `${BaseIri}${K}`
}
```

A namespace has a base IRI, an associated prefix (by convention for [abbreviated IRI form](https://www.w3.org/TR/rdf11-concepts/#vocabularies)) and terms.

```ts
export interface INamespace<BaseIri extends string, Vocabulary extends IVocabulary<BaseIri>> {
    iri: BaseIri;
    prefix: string;
    terms: Vocabulary;
}
```

