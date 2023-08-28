import type { ShopNote } from '@prisma/client'

import {
  shopNotes,
  shopNote,
  createShopNote,
  updateShopNote,
  deleteShopNote,
} from './shopNotes'
import type { StandardScenario } from './shopNotes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shopNotes', () => {
  scenario('returns all shopNotes', async (scenario: StandardScenario) => {
    const result = await shopNotes()

    expect(result.length).toEqual(Object.keys(scenario.shopNote).length)
  })

  scenario('returns a single shopNote', async (scenario: StandardScenario) => {
    const result = await shopNote({ id: scenario.shopNote.one.id })

    expect(result).toEqual(scenario.shopNote.one)
  })

  scenario('creates a shopNote', async () => {
    const result = await createShopNote({
      input: {
        name: 'String',
        description: 'String',
        updatedAt: '2023-08-28T17:13:15.375Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2023-08-28T17:13:15.375Z'))
  })

  scenario('updates a shopNote', async (scenario: StandardScenario) => {
    const original = (await shopNote({
      id: scenario.shopNote.one.id,
    })) as ShopNote
    const result = await updateShopNote({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a shopNote', async (scenario: StandardScenario) => {
    const original = (await deleteShopNote({
      id: scenario.shopNote.one.id,
    })) as ShopNote
    const result = await shopNote({ id: original.id })

    expect(result).toEqual(null)
  })
})
