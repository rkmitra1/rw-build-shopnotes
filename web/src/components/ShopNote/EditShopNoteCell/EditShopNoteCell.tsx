import type { EditShopNoteById, UpdateShopNoteInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ShopNoteForm from 'src/components/ShopNote/ShopNoteForm'

export const QUERY = gql`
  query EditShopNoteById($id: Int!) {
    shopNote: shopNote(id: $id) {
      id
      name
      description
      updatedAt
    }
  }
`
const UPDATE_SHOP_NOTE_MUTATION = gql`
  mutation UpdateShopNoteMutation($id: Int!, $input: UpdateShopNoteInput!) {
    updateShopNote(id: $id, input: $input) {
      id
      name
      description
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shopNote }: CellSuccessProps<EditShopNoteById>) => {
  const [updateShopNote, { loading, error }] = useMutation(
    UPDATE_SHOP_NOTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ShopNote updated')
        navigate(routes.shopNotes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateShopNoteInput,
    id: EditShopNoteById['shopNote']['id']
  ) => {
    updateShopNote({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ShopNote {shopNote?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ShopNoteForm
          shopNote={shopNote}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
