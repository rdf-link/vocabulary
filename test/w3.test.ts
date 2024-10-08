import assert from "node:assert";
import { describe, it } from "node:test";

import { EARL, SKOS, SKOSXL, VCARD } from "@rdf-link/vocabulary/w3";

describe("W3 vocabularies", async () => {
    it("EARL has 34 terms", () => {
        assert.equal(Object.keys(EARL).length, 34);
    })

    it("SKOS has 32 terms", () => {
        assert.equal(Object.keys(SKOS).length, 32);
    })

    it("SKOSXL has 6 terms", () => {
        assert.equal(Object.keys(SKOSXL).length, 6);
    })

    it("VCARD has 93 terms", () => {
        assert.equal(Object.keys(VCARD).length, 93);
    })
})
