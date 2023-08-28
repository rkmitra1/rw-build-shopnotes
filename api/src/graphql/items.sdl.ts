export const schema = gql`
  type Item {
    id: Int!
    name: String!
    urgent: Boolean!
    checked: Boolean!
    description: String!
    note: ShopNote!
    noteId: Int!
  }

  type Query {
    items: [Item!]! @requireAuth
    item(id: Int!): Item @requireAuth
  }

  input CreateItemInput {
    name: String!
    urgent: Boolean!
    checked: Boolean!
    description: String!
    noteId: Int!
  }

  input UpdateItemInput {
    name: String
    urgent: Boolean
    checked: Boolean
    description: String
    noteId: Int
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: Int!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: Int!): Item! @requireAuth
  }
`
