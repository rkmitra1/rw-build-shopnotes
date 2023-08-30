import type { FindShopNotes, ShopNote } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ShopNoteCard from 'src/components/ShopNoteCard/ShopNoteCard'

export const QUERY = gql`
  query FindShopNotes {
    shopNotes {
      id
      name
      description
      updatedAt
      items {
        id
        name
        checked
        urgent
        noteId
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  //  normally this would take us the new shopnote page. We do not use this in this app.
  return (
    <div className="rw-text-center mx-auto w-96 rounded-xl border-2 border-clear-500 bg-clear-300 p-2">
      No ShopNotes yet. <br />
      Create one using the +ShopNote button.
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shopNotes }: CellSuccessProps<FindShopNotes>) => {
  // Sort shopNotes by name
  const sortedShopNotes = [...shopNotes].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  )

  return (
    <>
      {sortedShopNotes.map((shopnote) => (
        <ShopNoteCard shopnote={shopnote as ShopNote} key={shopnote.id} />
      ))}
    </>
  )
}
