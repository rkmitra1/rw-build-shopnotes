import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import type { Item, ShopNote } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'

import { QUERY } from 'src/components/ShopNote/ShopNotesCell'
import ShopNoteItemsDisplay from 'src/components/ShopNoteItemsDisplay/ShopNoteItemsDisplay'

/***  QUERIES  ***/
const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      id
    }
  }
`

const UPDATE_SHOP_NOTE_NAME_MUTATION = gql`
  mutation UpdateShopNoteNameMutation($id: Int!, $name: String!) {
    updateShopNoteName(id: $id, name: $name) {
      id
      __typename
      name
    }
  }
`

const UPDATE_SHOP_NOTE_DESCRIPTION_MUTATION = gql`
  mutation UpdateShopNoteDescriptionMutation($id: Int!, $description: String!) {
    updateShopNoteDescription(id: $id, description: $description) {
      id
      __typename
      description
    }
  }
`

const DELETE_SHOP_NOTE_MUTATION = gql`
  mutation DeleteShopNoteMutation($id: Int!) {
    deleteShopNote(id: $id) {
      id
    }
  }
`

const DELETE_ITEMS_MUTATION = gql`
  mutation DeleteItemsMutation($noteId: Int!) {
    deleteItems(noteId: $noteId) {
      count
    }
  }
`

/***  COMPONENT  ***/
const ShopNoteCard = ({ shopnote }: { shopnote: ShopNote }) => {
  const [createItem] = useMutation(CREATE_ITEM_MUTATION)
  const [updateShopNoteName] = useMutation(UPDATE_SHOP_NOTE_NAME_MUTATION)
  const [updateShopNoteDescription] = useMutation(
    UPDATE_SHOP_NOTE_DESCRIPTION_MUTATION
  )
  const [deleteShopNote] = useMutation(DELETE_SHOP_NOTE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  const [deleteItems] = useMutation(DELETE_ITEMS_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  /*** HANDLERS  ***/
  const onClickAddItem = async (noteId: number) => {
    const newItem = {
      name: '',
      urgent: false,
      checked: false,
      noteId: noteId,
    }
    console.log('onClickAddItem: ', newItem)
    await createItem({ variables: { input: newItem } })
    window.location.reload()
  }

  const onDeleteClick = (shopnote: ShopNote) => {
    if (
      confirm(
        'Are you sure you want to delete shopNote ' +
          shopnote.id +
          ' "' +
          shopnote.name +
          '" ?'
      )
    ) {
      const id = shopnote.id
      deleteShopNote({ variables: { id } })
    }
  }

  const onClearClick = (shopnote: ShopNote) => {
    if (
      confirm(
        'Are you sure you want to clear all checked items for shopnote: ' +
          shopnote.name +
          '" ?'
      )
    ) {
      const noteId = shopnote.id
      deleteItems({ variables: { noteId } })
    }
  }

  const onUpdateShopNoteName = (id: number, name: string) => {
    updateShopNoteName({ variables: { id, name } })
  }

  const onUpdateShopNoteDescription = (id: number, description: string) => {
    updateShopNoteDescription({ variables: { id, description } })
  }

  return (
    <div className="shopnote-card m-1 w-96 max-w-full rounded-xl border-2 border-primary-400 bg-secondary-600 p-4 pt-2 shadow-md">
      <header className="flex items-center justify-between">
        <h1 className="text-lg">
          <span className="">
            <input
              key={shopnote.id}
              className="shopnote-description w-40 bg-transparent  placeholder-white placeholder:text-xs placeholder:text-placeholder-300"
              type="text"
              defaultValue={shopnote.name}
              placeholder="enter note name"
              onChange={(e) =>
                onUpdateShopNoteName(shopnote.id, e.target.value)
              }
            />
          </span>
        </h1>

        <div className="flex items-center justify-between space-x-2">
          <button
            title={'Delete shopNote ' + shopnote.id}
            className="-pb-1 rounded-md border border-delete-800 bg-delete-500 px-1 text-xs text-gray-600"
            onClick={() => onDeleteClick(shopnote)}
          >
            Delete
          </button>

          <button
            title={'Clear shopNote items ' + shopnote.id}
            className="-pb-1 rounded-md border border-clear-800 bg-clear-500 px-1 text-xs text-gray-600"
            onClick={() => onClearClick(shopnote)}
          >
            Clear
          </button>
        </div>
      </header>

      <div className="flex items-center justify-between">
        <hr className="display: inline-block w-1/3" />
        <span className="text-grey-darker mx-2 text-xs">
          {format(new Date(shopnote.updatedAt), 'MM/dd/yyyy')}
        </span>
        <hr className="display: inline-block w-1/3" />
      </div>

      <span className="">
        <input
          key={shopnote.id}
          className="mb-2 w-40  bg-transparent text-sm placeholder-white placeholder:text-xs placeholder:text-placeholder-300"
          type="text"
          defaultValue={shopnote.description}
          placeholder="enter note description"
          onChange={(e) =>
            onUpdateShopNoteDescription(shopnote.id, e.target.value)
          }
        />
      </span>

      {/* <div className="text-sm mb-2">{shopnote.description}</div> */}

      {!shopnote.items.length && (
        <span>
          <PlusCircleIcon
            className="display: mx-1 inline-block h-4 w-4"
            onClick={() => onClickAddItem(shopnote.id)}
          ></PlusCircleIcon>
        </span>
      )}

      {[...shopnote.items]
        .sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
        )
        .map((item, index) => (
          <div className="text-sm" key={`shopnote.id-item ${index}`}>
            <ShopNoteItemsDisplay item={item as Item} />
          </div>
        ))}
    </div>
  )
}

export default ShopNoteCard
