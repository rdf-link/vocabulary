import assert from "node:assert";
import { describe, it } from "node:test";

import { SKOS, SKOSXL } from "@rdf-link/vocabulary/w3";

describe("W3 vocabularies", async () => {
    it("SKOS has 32 terms", () => {
        assert.equal(Object.keys(SKOS).length, 32);
    })

    it("SKOSXL has 6 terms", () => {
        assert.equal(Object.keys(SKOSXL).length, 6);
    })
})
