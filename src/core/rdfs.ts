import { RDFS as RDFS_NS } from "../ns/mod.js"

export const RDFS = {
  Class: RDFS_NS.iri.concat("Class"),
  Container: RDFS_NS.iri.concat("Container"),
  ContainerMembershipProperty: RDFS_NS.iri.concat("ContainerMembershipProperty"),
  Datatype: RDFS_NS.iri.concat("Datatype"),
  Literal: RDFS_NS.iri.concat("Literal"),
  Resource: RDFS_NS.iri.concat("Resource"),
  comment: RDFS_NS.iri.concat("comment"),
  domain: RDFS_NS.iri.concat("domain"),
  isDefinedBy: RDFS_NS.iri.concat("isDefinedBy"),
  label: RDFS_NS.iri.concat("label"),
  member: RDFS_NS.iri.concat("member"),
  range: RDFS_NS.iri.concat("range"),
  seeAlso: RDFS_NS.iri.concat("seeAlso"),
  subClassOf: RDFS_NS.iri.concat("subClassOf"),
  subPropertyOf: RDFS_NS.iri.concat("subPropertyOf"),
}
