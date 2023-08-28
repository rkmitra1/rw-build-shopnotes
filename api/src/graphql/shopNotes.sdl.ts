export const schema = gql`
  type ShopNote {
    id: Int!
    name: String!
    description: String!
    updatedAt: DateTime!
    items: [Item]!
  }

  type Query {
    shopNotes: [ShopNote!]! @requireAuth
    shopNote(id: Int!): ShopNote @requireAuth
  }

  input CreateShopNoteInput {
    name: String!
    description: String!
  }

  input UpdateShopNoteInput {
    name: String
    description: String
  }

  type Mutation {
    createShopNote(input: CreateShopNoteInput!): ShopNote! @requireAuth
    updateShopNote(id: Int!, input: UpdateShopNoteInput!): ShopNote!
      @requireAuth
    deleteShopNote(id: Int!): ShopNote! @requireAuth
  }
`
