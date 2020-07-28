module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCustomer {
  count: Int!
}

type AggregateGallery {
  count: Int!
}

type AggregateRank {
  count: Int!
}

type AggregateTestimonial {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Customer {
  CustomerId: Int!
  firstName: String
  lastName: String
  testimonials(where: TestimonialWhereInput, orderBy: TestimonialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Testimonial!]
}

type CustomerConnection {
  pageInfo: PageInfo!
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

input CustomerCreateInput {
  firstName: String
  lastName: String
  testimonials: TestimonialCreateManyWithoutCustomerIdInput
}

input CustomerCreateOneWithoutTestimonialsInput {
  create: CustomerCreateWithoutTestimonialsInput
  connect: CustomerWhereUniqueInput
}

input CustomerCreateWithoutTestimonialsInput {
  firstName: String
  lastName: String
}

type CustomerEdge {
  node: Customer!
  cursor: String!
}

enum CustomerOrderByInput {
  CustomerId_ASC
  CustomerId_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
}

type CustomerPreviousValues {
  CustomerId: Int!
  firstName: String
  lastName: String
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
  AND: [CustomerSubscriptionWhereInput!]
  OR: [CustomerSubscriptionWhereInput!]
  NOT: [CustomerSubscriptionWhereInput!]
}

input CustomerUpdateInput {
  firstName: String
  lastName: String
  testimonials: TestimonialUpdateManyWithoutCustomerIdInput
}

input CustomerUpdateManyMutationInput {
  firstName: String
  lastName: String
}

input CustomerUpdateOneRequiredWithoutTestimonialsInput {
  create: CustomerCreateWithoutTestimonialsInput
  update: CustomerUpdateWithoutTestimonialsDataInput
  upsert: CustomerUpsertWithoutTestimonialsInput
  connect: CustomerWhereUniqueInput
}

input CustomerUpdateWithoutTestimonialsDataInput {
  firstName: String
  lastName: String
}

input CustomerUpsertWithoutTestimonialsInput {
  update: CustomerUpdateWithoutTestimonialsDataInput!
  create: CustomerCreateWithoutTestimonialsInput!
}

input CustomerWhereInput {
  CustomerId: Int
  CustomerId_not: Int
  CustomerId_in: [Int!]
  CustomerId_not_in: [Int!]
  CustomerId_lt: Int
  CustomerId_lte: Int
  CustomerId_gt: Int
  CustomerId_gte: Int
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  testimonials_every: TestimonialWhereInput
  testimonials_some: TestimonialWhereInput
  testimonials_none: TestimonialWhereInput
  AND: [CustomerWhereInput!]
  OR: [CustomerWhereInput!]
  NOT: [CustomerWhereInput!]
}

input CustomerWhereUniqueInput {
  CustomerId: Int
}

type Gallery {
  GalleryId: Int!
  galleryNumItems: Int
  galleryPath: String
  galleryType: String
  ranks(where: RankWhereInput, orderBy: RankOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rank!]
}

type GalleryConnection {
  pageInfo: PageInfo!
  edges: [GalleryEdge]!
  aggregate: AggregateGallery!
}

input GalleryCreateInput {
  galleryNumItems: Int
  galleryPath: String
  galleryType: String
  ranks: RankCreateManyWithoutGalleryIdInput
}

input GalleryCreateOneWithoutRanksInput {
  create: GalleryCreateWithoutRanksInput
  connect: GalleryWhereUniqueInput
}

input GalleryCreateWithoutRanksInput {
  galleryNumItems: Int
  galleryPath: String
  galleryType: String
}

type GalleryEdge {
  node: Gallery!
  cursor: String!
}

enum GalleryOrderByInput {
  GalleryId_ASC
  GalleryId_DESC
  galleryNumItems_ASC
  galleryNumItems_DESC
  galleryPath_ASC
  galleryPath_DESC
  galleryType_ASC
  galleryType_DESC
}

type GalleryPreviousValues {
  GalleryId: Int!
  galleryNumItems: Int
  galleryPath: String
  galleryType: String
}

type GallerySubscriptionPayload {
  mutation: MutationType!
  node: Gallery
  updatedFields: [String!]
  previousValues: GalleryPreviousValues
}

input GallerySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GalleryWhereInput
  AND: [GallerySubscriptionWhereInput!]
  OR: [GallerySubscriptionWhereInput!]
  NOT: [GallerySubscriptionWhereInput!]
}

input GalleryUpdateInput {
  galleryNumItems: Int
  galleryPath: String
  galleryType: String
  ranks: RankUpdateManyWithoutGalleryIdInput
}

input GalleryUpdateManyMutationInput {
  galleryNumItems: Int
  galleryPath: String
  galleryType: String
}

input GalleryUpdateOneRequiredWithoutRanksInput {
  create: GalleryCreateWithoutRanksInput
  update: GalleryUpdateWithoutRanksDataInput
  upsert: GalleryUpsertWithoutRanksInput
  connect: GalleryWhereUniqueInput
}

input GalleryUpdateWithoutRanksDataInput {
  galleryNumItems: Int
  galleryPath: String
  galleryType: String
}

input GalleryUpsertWithoutRanksInput {
  update: GalleryUpdateWithoutRanksDataInput!
  create: GalleryCreateWithoutRanksInput!
}

input GalleryWhereInput {
  GalleryId: Int
  GalleryId_not: Int
  GalleryId_in: [Int!]
  GalleryId_not_in: [Int!]
  GalleryId_lt: Int
  GalleryId_lte: Int
  GalleryId_gt: Int
  GalleryId_gte: Int
  galleryNumItems: Int
  galleryNumItems_not: Int
  galleryNumItems_in: [Int!]
  galleryNumItems_not_in: [Int!]
  galleryNumItems_lt: Int
  galleryNumItems_lte: Int
  galleryNumItems_gt: Int
  galleryNumItems_gte: Int
  galleryPath: String
  galleryPath_not: String
  galleryPath_in: [String!]
  galleryPath_not_in: [String!]
  galleryPath_lt: String
  galleryPath_lte: String
  galleryPath_gt: String
  galleryPath_gte: String
  galleryPath_contains: String
  galleryPath_not_contains: String
  galleryPath_starts_with: String
  galleryPath_not_starts_with: String
  galleryPath_ends_with: String
  galleryPath_not_ends_with: String
  galleryType: String
  galleryType_not: String
  galleryType_in: [String!]
  galleryType_not_in: [String!]
  galleryType_lt: String
  galleryType_lte: String
  galleryType_gt: String
  galleryType_gte: String
  galleryType_contains: String
  galleryType_not_contains: String
  galleryType_starts_with: String
  galleryType_not_starts_with: String
  galleryType_ends_with: String
  galleryType_not_ends_with: String
  ranks_every: RankWhereInput
  ranks_some: RankWhereInput
  ranks_none: RankWhereInput
  AND: [GalleryWhereInput!]
  OR: [GalleryWhereInput!]
  NOT: [GalleryWhereInput!]
}

input GalleryWhereUniqueInput {
  GalleryId: Int
}

scalar Long

type Mutation {
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateManyCustomers(data: CustomerUpdateManyMutationInput!, where: CustomerWhereInput): BatchPayload!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  createGallery(data: GalleryCreateInput!): Gallery!
  updateGallery(data: GalleryUpdateInput!, where: GalleryWhereUniqueInput!): Gallery
  updateManyGalleries(data: GalleryUpdateManyMutationInput!, where: GalleryWhereInput): BatchPayload!
  upsertGallery(where: GalleryWhereUniqueInput!, create: GalleryCreateInput!, update: GalleryUpdateInput!): Gallery!
  deleteGallery(where: GalleryWhereUniqueInput!): Gallery
  deleteManyGalleries(where: GalleryWhereInput): BatchPayload!
  createRank(data: RankCreateInput!): Rank!
  updateRank(data: RankUpdateInput!, where: RankWhereUniqueInput!): Rank
  upsertRank(where: RankWhereUniqueInput!, create: RankCreateInput!, update: RankUpdateInput!): Rank!
  deleteRank(where: RankWhereUniqueInput!): Rank
  deleteManyRanks(where: RankWhereInput): BatchPayload!
  createTestimonial(data: TestimonialCreateInput!): Testimonial!
  updateTestimonial(data: TestimonialUpdateInput!, where: TestimonialWhereUniqueInput!): Testimonial
  updateManyTestimonials(data: TestimonialUpdateManyMutationInput!, where: TestimonialWhereInput): BatchPayload!
  upsertTestimonial(where: TestimonialWhereUniqueInput!, create: TestimonialCreateInput!, update: TestimonialUpdateInput!): Testimonial!
  deleteTestimonial(where: TestimonialWhereUniqueInput!): Testimonial
  deleteManyTestimonials(where: TestimonialWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  customer(where: CustomerWhereUniqueInput!): Customer
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  gallery(where: GalleryWhereUniqueInput!): Gallery
  galleries(where: GalleryWhereInput, orderBy: GalleryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gallery]!
  galleriesConnection(where: GalleryWhereInput, orderBy: GalleryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GalleryConnection!
  rank(where: RankWhereUniqueInput!): Rank
  ranks(where: RankWhereInput, orderBy: RankOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rank]!
  ranksConnection(where: RankWhereInput, orderBy: RankOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RankConnection!
  testimonial(where: TestimonialWhereUniqueInput!): Testimonial
  testimonials(where: TestimonialWhereInput, orderBy: TestimonialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Testimonial]!
  testimonialsConnection(where: TestimonialWhereInput, orderBy: TestimonialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestimonialConnection!
  node(id: ID!): Node
}

type Rank {
  RankId: Int!
  galleryId: Gallery!
}

type RankConnection {
  pageInfo: PageInfo!
  edges: [RankEdge]!
  aggregate: AggregateRank!
}

input RankCreateInput {
  galleryId: GalleryCreateOneWithoutRanksInput!
}

input RankCreateManyWithoutGalleryIdInput {
  connect: [RankWhereUniqueInput!]
}

type RankEdge {
  node: Rank!
  cursor: String!
}

enum RankOrderByInput {
  RankId_ASC
  RankId_DESC
}

type RankPreviousValues {
  RankId: Int!
}

input RankScalarWhereInput {
  RankId: Int
  RankId_not: Int
  RankId_in: [Int!]
  RankId_not_in: [Int!]
  RankId_lt: Int
  RankId_lte: Int
  RankId_gt: Int
  RankId_gte: Int
  AND: [RankScalarWhereInput!]
  OR: [RankScalarWhereInput!]
  NOT: [RankScalarWhereInput!]
}

type RankSubscriptionPayload {
  mutation: MutationType!
  node: Rank
  updatedFields: [String!]
  previousValues: RankPreviousValues
}

input RankSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RankWhereInput
  AND: [RankSubscriptionWhereInput!]
  OR: [RankSubscriptionWhereInput!]
  NOT: [RankSubscriptionWhereInput!]
}

input RankUpdateInput {
  galleryId: GalleryUpdateOneRequiredWithoutRanksInput
}

input RankUpdateManyWithoutGalleryIdInput {
  delete: [RankWhereUniqueInput!]
  connect: [RankWhereUniqueInput!]
  set: [RankWhereUniqueInput!]
  disconnect: [RankWhereUniqueInput!]
  deleteMany: [RankScalarWhereInput!]
}

input RankWhereInput {
  RankId: Int
  RankId_not: Int
  RankId_in: [Int!]
  RankId_not_in: [Int!]
  RankId_lt: Int
  RankId_lte: Int
  RankId_gt: Int
  RankId_gte: Int
  galleryId: GalleryWhereInput
  AND: [RankWhereInput!]
  OR: [RankWhereInput!]
  NOT: [RankWhereInput!]
}

input RankWhereUniqueInput {
  RankId: Int
}

type Subscription {
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  gallery(where: GallerySubscriptionWhereInput): GallerySubscriptionPayload
  rank(where: RankSubscriptionWhereInput): RankSubscriptionPayload
  testimonial(where: TestimonialSubscriptionWhereInput): TestimonialSubscriptionPayload
}

type Testimonial {
  TestimonialId: Int!
  body: String
  customerId: Customer!
  headline: String
}

type TestimonialConnection {
  pageInfo: PageInfo!
  edges: [TestimonialEdge]!
  aggregate: AggregateTestimonial!
}

input TestimonialCreateInput {
  body: String
  customerId: CustomerCreateOneWithoutTestimonialsInput!
  headline: String
}

input TestimonialCreateManyWithoutCustomerIdInput {
  create: [TestimonialCreateWithoutCustomerIdInput!]
  connect: [TestimonialWhereUniqueInput!]
}

input TestimonialCreateWithoutCustomerIdInput {
  body: String
  headline: String
}

type TestimonialEdge {
  node: Testimonial!
  cursor: String!
}

enum TestimonialOrderByInput {
  TestimonialId_ASC
  TestimonialId_DESC
  body_ASC
  body_DESC
  headline_ASC
  headline_DESC
}

type TestimonialPreviousValues {
  TestimonialId: Int!
  body: String
  headline: String
}

input TestimonialScalarWhereInput {
  TestimonialId: Int
  TestimonialId_not: Int
  TestimonialId_in: [Int!]
  TestimonialId_not_in: [Int!]
  TestimonialId_lt: Int
  TestimonialId_lte: Int
  TestimonialId_gt: Int
  TestimonialId_gte: Int
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  headline: String
  headline_not: String
  headline_in: [String!]
  headline_not_in: [String!]
  headline_lt: String
  headline_lte: String
  headline_gt: String
  headline_gte: String
  headline_contains: String
  headline_not_contains: String
  headline_starts_with: String
  headline_not_starts_with: String
  headline_ends_with: String
  headline_not_ends_with: String
  AND: [TestimonialScalarWhereInput!]
  OR: [TestimonialScalarWhereInput!]
  NOT: [TestimonialScalarWhereInput!]
}

type TestimonialSubscriptionPayload {
  mutation: MutationType!
  node: Testimonial
  updatedFields: [String!]
  previousValues: TestimonialPreviousValues
}

input TestimonialSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TestimonialWhereInput
  AND: [TestimonialSubscriptionWhereInput!]
  OR: [TestimonialSubscriptionWhereInput!]
  NOT: [TestimonialSubscriptionWhereInput!]
}

input TestimonialUpdateInput {
  body: String
  customerId: CustomerUpdateOneRequiredWithoutTestimonialsInput
  headline: String
}

input TestimonialUpdateManyDataInput {
  body: String
  headline: String
}

input TestimonialUpdateManyMutationInput {
  body: String
  headline: String
}

input TestimonialUpdateManyWithoutCustomerIdInput {
  create: [TestimonialCreateWithoutCustomerIdInput!]
  delete: [TestimonialWhereUniqueInput!]
  connect: [TestimonialWhereUniqueInput!]
  set: [TestimonialWhereUniqueInput!]
  disconnect: [TestimonialWhereUniqueInput!]
  update: [TestimonialUpdateWithWhereUniqueWithoutCustomerIdInput!]
  upsert: [TestimonialUpsertWithWhereUniqueWithoutCustomerIdInput!]
  deleteMany: [TestimonialScalarWhereInput!]
  updateMany: [TestimonialUpdateManyWithWhereNestedInput!]
}

input TestimonialUpdateManyWithWhereNestedInput {
  where: TestimonialScalarWhereInput!
  data: TestimonialUpdateManyDataInput!
}

input TestimonialUpdateWithoutCustomerIdDataInput {
  body: String
  headline: String
}

input TestimonialUpdateWithWhereUniqueWithoutCustomerIdInput {
  where: TestimonialWhereUniqueInput!
  data: TestimonialUpdateWithoutCustomerIdDataInput!
}

input TestimonialUpsertWithWhereUniqueWithoutCustomerIdInput {
  where: TestimonialWhereUniqueInput!
  update: TestimonialUpdateWithoutCustomerIdDataInput!
  create: TestimonialCreateWithoutCustomerIdInput!
}

input TestimonialWhereInput {
  TestimonialId: Int
  TestimonialId_not: Int
  TestimonialId_in: [Int!]
  TestimonialId_not_in: [Int!]
  TestimonialId_lt: Int
  TestimonialId_lte: Int
  TestimonialId_gt: Int
  TestimonialId_gte: Int
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  customerId: CustomerWhereInput
  headline: String
  headline_not: String
  headline_in: [String!]
  headline_not_in: [String!]
  headline_lt: String
  headline_lte: String
  headline_gt: String
  headline_gte: String
  headline_contains: String
  headline_not_contains: String
  headline_starts_with: String
  headline_not_starts_with: String
  headline_ends_with: String
  headline_not_ends_with: String
  AND: [TestimonialWhereInput!]
  OR: [TestimonialWhereInput!]
  NOT: [TestimonialWhereInput!]
}

input TestimonialWhereUniqueInput {
  TestimonialId: Int
}
`
      }
    