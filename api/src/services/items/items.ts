import type {
  QueryResolvers,
  MutationResolvers,
  ItemRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const items: QueryResolvers['items'] = () => {
  return db.item.findMany()
}

export const item: QueryResolvers['item'] = ({ id }) => {
  return db.item.findUnique({
    where: { id },
  })
}

export const createItem: MutationResolvers['createItem'] = ({ input }) => {
  return db.item.create({
    data: input,
  })
}

export const updateItem: MutationResolvers['updateItem'] = ({ id, input }) => {
  return db.item.update({
    data: input,
    where: { id },
  })
}

export const deleteItem: MutationResolvers['deleteItem'] = ({ id }) => {
  return db.item.delete({
    where: { id },
  })
}

export const Item: ItemRelationResolvers = {
  note: (_obj, { root }) => {
    return db.item.findUnique({ where: { id: root?.id } }).note()
  },
}

export const updateItemUrgent = ({ id, urgent }) => {
  return db.item.update({
    data: { urgent },
    where: { id },
  })
}

export const updateItemChecked = ({ id, checked }) => {
  return db.item.update({
    data: { checked },
    where: { id },
  })
}

export const updateItemName = ({ id, name }) => {
  return db.item.update({
    data: { name },
    where: { id },
  })
}

export const deleteItems = ({ noteId }) => {
  return db.item.deleteMany({
    where: {
      noteId: noteId,
      checked: true,
    },
  })
}
