import type { Prisma, Item } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: {
      data: {
        name: 'String',
        urgent: true,
        checked: true,
        description: 'String',
        note: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2023-08-28T17:21:36.357Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        urgent: true,
        checked: true,
        description: 'String',
        note: {
          create: {
            name: 'String',
            description: 'String',
            updatedAt: '2023-08-28T17:21:36.357Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Item, 'item'>
