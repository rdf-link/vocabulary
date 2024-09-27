import assert from "node:assert";
import { describe, it } from "node:test";

import { FOAF } from "@rdf-link/vocabulary/other";

describe("Other vocabularies", async () => {
    it("FOAF stable has 16 terms", () => {
        assert.equal(Object.keys(FOAF).length, 16);
    })
})
