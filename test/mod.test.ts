import assert from "node:assert";
import { describe, it } from "node:test";

import { NS, RDF, RDFS, OWL, XSD, FOAF, DATATYPE, DEFAULT_DATATYPE } from "@rdf-link/vocabulary";

describe("@rdf-link/vocabulary", async () => {
    it("exports NS", () => {
        assert.equal(Object.keys(NS).length, 5);
    })

    it("exports core vocabularies", () => {
        assert.equal(Object.keys(RDF).length, 23);
        assert.equal(Object.keys(RDFS).length, 15);
        assert.equal(Object.keys(OWL).length, 77);
        assert.equal(Object.keys(XSD).length, 39);
    })

    it("export other vocabularies", () => {
        assert.equal(Object.keys(FOAF).length, 16);
    })

    it("exports datatype and default datatype utils", () => {
        assert.equal(Object.keys(DATATYPE).length, 2);
        assert.equal(DEFAULT_DATATYPE, "http://www.w3.org/2001/XMLSchema#string");
    })
})
