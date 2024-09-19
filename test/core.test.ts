import assert from "node:assert";
import { describe, it } from "node:test";

import { RDF, RDFS, OWL, XSD } from "@rdf-link/vocabulary/core";

describe("Core vocabularies", async () => {
    it("RDF has 23 terms", () => {
        assert.equal(Object.keys(RDF).length, 23);
    })

    it("RDFS has 15 terms", () => {
        assert.equal(Object.keys(RDFS).length, 15);
    })

    it("OWL has 77 terms", () => {
        assert.equal(Object.keys(OWL).length, 77);
    })

    it("XSD has 39 terms", () => {
        assert.equal(Object.keys(XSD).length, 39);
    })
})
