export const schema = gql`
  type Item {
    id: Int!
    name: String!
    urgent: Boolean!
    checked: Boolean!
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
    noteId: Int!
  }

  input UpdateItemInput {
    name: String
    urgent: Boolean
    checked: Boolean
    noteId: Int
  }

  type BatchPayload {
    count: Int!
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item! @requireAuth
    updateItem(id: Int!, input: UpdateItemInput!): Item! @requireAuth
    deleteItem(id: Int!): Item! @requireAuth
    updateItemUrgent(id: Int!, urgent: Boolean!): Item @requireAuth
    updateItemChecked(id: Int!, checked: Boolean!): Item @requireAuth
    updateItemName(id: Int!, name: String!): Item @requireAuth
    deleteItems(noteId: Int!): BatchPayload @skipAuth
  }
`
