import assert from "node:assert";
import { describe, it } from "node:test";

import { NS } from "@rdf-link/vocabulary";

describe("NS", async () => {
    it("has core RDF vocabulary", () => {
        assert.equal(NS.RDF.iri, "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        assert.equal(NS.RDF.prefix, "rdf");
        assert.equal(Object.keys(NS.RDF.terms).length, 23);
    })

    it("has core RDFS vocabulary", () => {
        assert.equal(NS.RDFS.iri, "http://www.w3.org/2000/01/rdf-schema#");
        assert.equal(NS.RDFS.prefix, "rdfs");
        assert.equal(Object.keys(NS.RDFS.terms).length, 15);
    })

    it("has core OWL vocabulary", () => {
        assert.equal(NS.OWL.iri, "http://www.w3.org/2002/07/owl#");
        assert.equal(NS.OWL.prefix, "owl");
        assert.equal(Object.keys(NS.OWL.terms).length, 77);
    })

    it("has core XSD vocabulary", () => {
        assert.equal(NS.XSD.iri, "http://www.w3.org/2001/XMLSchema#");
        assert.equal(NS.XSD.prefix, "xsd");
        assert.equal(Object.keys(NS.XSD.terms).length, 39);
    })
})
