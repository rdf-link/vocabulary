# RDF Vocabulary

[![CI](https://github.com/rdf-link/vocabulary/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/rdf-link/vocabulary/actions/workflows/ci.yml?query=workflow%3ACI+branch%3Amain)
[![MIT license](https://img.shields.io/npm/l/@rdf-link/vocabulary)](https://github.com/rdf-link/vocabulary/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@rdf-link/vocabulary)](https://www.npmjs.com/package/@rdf-link/vocabulary)

The `@rdf-link/vocabulary` JavaScript library:
- gives access to well-known RDF vocbularies' terms as constants;
- defines namespaces' base IRIs and commonly used prefixes;
- bundles type declarations developed for convenient code completion.

## Core vocabularies

The core module contains the RDF, RDFS, OWL and XSD vocabularies.

```ts
import { RDF, RDFS, OWL, XSD } from "@rdf-link/vocabulary/core";

// Logs: http://www.w3.org/1999/02/22-rdf-syntax-ns#type
console.log(RDF.type);
```

## Namespaces

A namespace has a base IRI, associated prefix and terms.

The NS module contains all vocabularies available in this library.

```ts
import * as NS from "@rdf-link/vocabulary/ns";

// Logs: rdfs
console.log(NS.RDFS.prefix);

// Logs: http://www.w3.org/2000/01/rdf-schema#
console.log(NS.RDFS.iri);

// Logs: http://www.w3.org/2000/01/rdf-schema#label
console.log(NS.RDFS.label);
```

## Utils

The `DATATYPE` constant is a collection of [RDF datatypes](https://www.w3.org/TR/rdf11-concepts/#section-Datatypes), the `DEFAULT_DATATYPE` constant is the default datatype for RDF literals.

```ts
import { DATATYPE, DEFAULT_DATATYPE } from "@rdf-link/vocabulary/utils";

// Logs: http://www.w3.org/1999/02/22-rdf-syntax-ns#langString
console.log(DATATYPE.RDF.langString)

// Logs: http://www.w3.org/2001/XMLSchema#string
console.log(DEFAULT_DATATYPE)
```
