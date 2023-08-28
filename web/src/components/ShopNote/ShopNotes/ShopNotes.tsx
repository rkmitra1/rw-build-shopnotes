import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ShopNote/ShopNotesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteShopNoteMutationVariables,
  FindShopNotes,
} from 'types/graphql'

const DELETE_SHOP_NOTE_MUTATION = gql`
  mutation DeleteShopNoteMutation($id: Int!) {
    deleteShopNote(id: $id) {
      id
    }
  }
`

const ShopNotesList = ({ shopNotes }: FindShopNotes) => {
  const [deleteShopNote] = useMutation(DELETE_SHOP_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('ShopNote deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteShopNoteMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete shopNote ' + id + '?')) {
      deleteShopNote({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {shopNotes.map((shopNote) => (
            <tr key={shopNote.id}>
              <td>{truncate(shopNote.id)}</td>
              <td>{truncate(shopNote.name)}</td>
              <td>{truncate(shopNote.description)}</td>
              <td>{timeTag(shopNote.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.shopNote({ id: shopNote.id })}
                    title={'Show shopNote ' + shopNote.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editShopNote({ id: shopNote.id })}
                    title={'Edit shopNote ' + shopNote.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete shopNote ' + shopNote.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(shopNote.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShopNotesList
