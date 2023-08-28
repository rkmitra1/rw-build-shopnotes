import type { Prisma, ShopNote } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ShopNoteCreateArgs>({
  shopNote: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2023-08-28T17:13:15.387Z',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        updatedAt: '2023-08-28T17:13:15.387Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<ShopNote, 'shopNote'>
