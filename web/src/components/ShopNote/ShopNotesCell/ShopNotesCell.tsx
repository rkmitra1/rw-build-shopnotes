import type { FindShopNotes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShopNotes from 'src/components/ShopNote/ShopNotes'

export const QUERY = gql`
  query FindShopNotes {
    shopNotes {
      id
      name
      description
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No shopNotes yet. '}
      <Link to={routes.newShopNote()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shopNotes }: CellSuccessProps<FindShopNotes>) => {
  return <ShopNotes shopNotes={shopNotes} />
}
