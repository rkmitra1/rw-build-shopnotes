import type {
  QueryResolvers,
  MutationResolvers,
  ShopNoteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const shopNotes: QueryResolvers['shopNotes'] = () => {
  return db.shopNote.findMany()
}

export const shopNote: QueryResolvers['shopNote'] = ({ id }) => {
  return db.shopNote.findUnique({
    where: { id },
  })
}

export const createShopNote: MutationResolvers['createShopNote'] = ({
  input,
}) => {
  return db.shopNote.create({
    data: input,
  })
}

export const updateShopNote: MutationResolvers['updateShopNote'] = ({
  id,
  input,
}) => {
  return db.shopNote.update({
    data: input,
    where: { id },
  })
}

export const deleteShopNote: MutationResolvers['deleteShopNote'] = async ({
  id,
}) => {
  return db.$transaction(async (prisma) => {
    // Delete related items first
    await prisma.item.deleteMany({
      where: { noteId: id },
    })

    // Then delete the shopNote
    return prisma.shopNote.delete({
      where: { id },
    })
  })
}

export const ShopNote: ShopNoteRelationResolvers = {
  items: (_obj, { root }) => {
    return db.shopNote.findUnique({ where: { id: root?.id } }).items()
  },
}

export const updateShopNoteName = ({ id, name }) => {
  return db.shopNote.update({
    data: { name },
    where: { id },
  })
}

export const updateShopNoteDescription = ({ id, description }) => {
  return db.shopNote.update({
    data: { description },
    where: { id },
  })
}
