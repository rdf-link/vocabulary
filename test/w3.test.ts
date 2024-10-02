import assert from "node:assert";
import { describe, it } from "node:test";

import { SKOS } from "@rdf-link/vocabulary/w3";

describe("Other vocabularies", async () => {
    it("FOAF stable has 16 terms", () => {
        assert.equal(Object.keys(SKOS).length, 32);
    })
})
