import assert from "node:assert";
import { describe, it } from "node:test";

import { NS } from "../dist/mod.js";
import * as VOCAB from "../dist/core/mod.js"

describe("NS", async () => {
    it("has core RDF vocabulary", () => {
        assert.equal(NS.RDF.iri, "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        assert.equal(NS.RDF.prefix, "rdf");
        assert.equal(Object.keys(VOCAB.RDF).length, 23);
    })

    it("has core RDFS vocabulary", () => {
        assert.equal(NS.RDFS.iri, "http://www.w3.org/2000/01/rdf-schema#");
        assert.equal(NS.RDFS.prefix, "rdfs");
        assert.equal(Object.keys(VOCAB.RDFS).length, 15);
    })

    it("has core OWL vocabulary", () => {
        assert.equal(NS.OWL.iri, "http://www.w3.org/2002/07/owl#");
        assert.equal(NS.OWL.prefix, "owl");
        assert.equal(Object.keys(VOCAB.OWL).length, 77);
    })

    it("has core XSD vocabulary", () => {
        assert.equal(NS.XSD.iri, "http://www.w3.org/2001/XMLSchema#");
        assert.equal(NS.XSD.prefix, "xsd");
        assert.equal(Object.keys(VOCAB.XSD).length, 39);
    })
})
