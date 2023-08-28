import type { FindShopNoteById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShopNote from 'src/components/ShopNote/ShopNote'

export const QUERY = gql`
  query FindShopNoteById($id: Int!) {
    shopNote: shopNote(id: $id) {
      id
      name
      description
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ShopNote not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shopNote }: CellSuccessProps<FindShopNoteById>) => {
  return <ShopNote shopNote={shopNote} />
}
