import assert from "node:assert";
import { describe, it } from "node:test";

import * as NS from "@rdf-link/vocabulary/ns";

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

    it("has FOAF stable vocabulary", () => {
        assert.equal(NS.FOAF.iri, "http://xmlns.com/foaf/0.1/");
        assert.equal(NS.FOAF.prefix, "foaf");
        assert.equal(Object.keys(NS.FOAF.terms).length, 16);
    })

    it("has SKOS vocabulary", () => {
        assert.equal(NS.SKOS.iri, "http://www.w3.org/2004/02/skos/core#");
        assert.equal(NS.SKOS.prefix, "skos");
        assert.equal(Object.keys(NS.SKOS.terms).length, 32);
    })

    it("has SKOSXL vocabulary", () => {
        assert.equal(NS.SKOSXL.iri, "http://www.w3.org/2008/05/skos-xl#");
        assert.equal(NS.SKOSXL.prefix, "skosxl");
        assert.equal(Object.keys(NS.SKOSXL.terms).length, 6);
    })

    it("has VCARD vocabulary", () => {
        assert.equal(NS.VCARD.iri, "http://www.w3.org/2006/vcard/ns#");
        assert.equal(NS.VCARD.prefix, "vcard");
        assert.equal(Object.keys(NS.VCARD.terms).length, 93);
    })
})
