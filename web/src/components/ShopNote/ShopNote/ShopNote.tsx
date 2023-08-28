import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteShopNoteMutationVariables,
  FindShopNoteById,
} from 'types/graphql'

const DELETE_SHOP_NOTE_MUTATION = gql`
  mutation DeleteShopNoteMutation($id: Int!) {
    deleteShopNote(id: $id) {
      id
    }
  }
`

interface Props {
  shopNote: NonNullable<FindShopNoteById['shopNote']>
}

const ShopNote = ({ shopNote }: Props) => {
  const [deleteShopNote] = useMutation(DELETE_SHOP_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('ShopNote deleted')
      navigate(routes.shopNotes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteShopNoteMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete shopNote ' + id + '?')) {
      deleteShopNote({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ShopNote {shopNote.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{shopNote.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{shopNote.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{shopNote.description}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(shopNote.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editShopNote({ id: shopNote.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(shopNote.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ShopNote
