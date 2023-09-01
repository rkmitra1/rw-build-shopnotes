import { useCallback } from 'react'

import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import debounce from 'lodash.debounce'

import { useMutation } from '@redwoodjs/web'

import { QUERY } from 'src/components/ShopNote/ShopNotesCell'

/***  QUERIES  ***/
const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      id
    }
  }
`

const UPDATE_ITEM_URGENT_MUTATION = gql`
  mutation UpdateItemUrgentMutation($id: Int!, $urgent: Boolean!) {
    updateItemUrgent(id: $id, urgent: $urgent) {
      id
      __typename
      urgent
    }
  }
`

const UPDATE_ITEM_CHECKED_MUTATION = gql`
  mutation UpdateItemCheckedMutation($id: Int!, $checked: Boolean!) {
    updateItemChecked(id: $id, checked: $checked) {
      id
      __typename
      checked
    }
  }
`

const UPDATE_ITEM_NAME_MUTATION = gql`
  mutation UpdateItemNameMutation($id: Int!, $name: String!) {
    updateItemName(id: $id, name: $name) {
      id
      __typename
      name
    }
  }
`

const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`

/***  COMPONENT  ***/
const ShopNoteItemsDisplay = ({ item }: { item: Item }) => {
  const [updateItemUrgent] = useMutation(UPDATE_ITEM_URGENT_MUTATION)
  const [updateItemChecked] = useMutation(UPDATE_ITEM_CHECKED_MUTATION)
  const [updateItemName] = useMutation(UPDATE_ITEM_NAME_MUTATION)
  const [createItem] = useMutation(CREATE_ITEM_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onUpdateUrgent = (id: any, urgent: boolean) => {
    console.log('onUpdateUrgent:', id, urgent)
    updateItemUrgent({ variables: { id, urgent } })
  }

  const onUpdateChecked = (e: React.ChangeEvent<HTMLInputElement>, id: any) => {
    const checked = e.target.checked
    console.log('onUpdateChecked:', id, checked)
    updateItemChecked({ variables: { id, checked } })
  }

  const debouncedUpdateName = useCallback(
    debounce(
      (id: any, name: any) => updateItemName({ variables: { id, name } }),
      1000
    ),
    [] // will be created only once initially
  )

  const onUpdateName = (id: any, name: string) => {
    debouncedUpdateName(id, name)
    // updateItemName({ variables: { id, name } })
  }

  const onClickDeleteItem = (item: Item) => {
    console.log('onClickDeleteItem')
    if (
      confirm(
        'Are you sure you want to delete item ' +
          item.id +
          ' "' +
          item.name +
          '" ?'
      )
    ) {
      const id = item.id
      deleteItem({ variables: { id } })
      // window.location.reload()
    }
  }

  const onClickAddItem = (noteId: any) => {
    const newItem = {
      name: '',
      urgent: false,
      checked: false,
      noteId: noteId,
    }
    console.log('onClickAddItem: ', newItem)
    createItem({ variables: { input: newItem } })
    // window.location.reload()
  }

  const urgentIcon =
    'inline-block cursor-pointer rounded-lg bg-red-500 align-middle'
  const normalIcon =
    'inline-block cursor-pointer rounded-lg bg-gray-500 align-middle'

  return (
    <div className="text-sm">
      <input
        name="checked"
        type="checkbox"
        className=""
        onChange={(e) => {
          onUpdateChecked(e, item.id)
        }}
        checked={item.checked}
      />
      <span
        className={`mx-2 h-4 w-4 rounded-lg ${
          item.urgent ? urgentIcon : normalIcon
        }`}
        onClick={(e) => onUpdateUrgent(item.id, !item.urgent)}
      ></span>
      <span className="">
        <input
          key={item.id}
          className="border-b-2 border-secondary-300 bg-transparent text-white md:w-56"
          type="text"
          defaultValue={item.name}
          onChange={(e) => onUpdateName(item.id, e.target.value)}
        />
      </span>
      <span>
        <PlusCircleIcon
          className="display: mx-1 inline-block h-4 w-4"
          onClick={(e) => onClickAddItem(item.noteId)}
        ></PlusCircleIcon>
      </span>
      <span>
        <TrashIcon
          className="display: mx-1 inline-block h-4 w-4"
          onClick={(e) => onClickDeleteItem(item)}
        ></TrashIcon>
      </span>
    </div>
  )
}
export default ShopNoteItemsDisplay
