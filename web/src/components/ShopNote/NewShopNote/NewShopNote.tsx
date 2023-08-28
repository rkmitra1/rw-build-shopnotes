import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ShopNoteForm from 'src/components/ShopNote/ShopNoteForm'

import type { CreateShopNoteInput } from 'types/graphql'

const CREATE_SHOP_NOTE_MUTATION = gql`
  mutation CreateShopNoteMutation($input: CreateShopNoteInput!) {
    createShopNote(input: $input) {
      id
    }
  }
`

const NewShopNote = () => {
  const [createShopNote, { loading, error }] = useMutation(
    CREATE_SHOP_NOTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ShopNote created')
        navigate(routes.shopNotes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateShopNoteInput) => {
    createShopNote({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ShopNote</h2>
      </header>
      <div className="rw-segment-main">
        <ShopNoteForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewShopNote
