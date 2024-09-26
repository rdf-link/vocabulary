import assert from "node:assert";
import { describe, it } from "node:test";

import { DATATYPE, DEFAULT_DATATYPE } from "@rdf-link/vocabulary/utils";

describe("Utils", async () => {
    describe("Datatype", async () => {
        it("has default RDF Literal Datatype", () => {
            assert.equal(DEFAULT_DATATYPE, "http://www.w3.org/2001/XMLSchema#string");
        })
    
        it("has RDF defined Literal Datatypes", () => {
            assert.equal(Object.keys(DATATYPE.RDF).length, 6);
        })
    
        it("has XSD defined Literal Datatypes", () => {
            assert.equal(Object.keys(DATATYPE.XSD).length, 39);
        })
    })
})
