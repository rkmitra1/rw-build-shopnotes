import { FolderPlusIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import HelpModal from 'src/components/HelpModal/HelpModal'
import { QUERY } from 'src/components/ShopNote/ShopNotesCell'

/***  QUERIES ***/
const CREATE_SHOP_NOTE_MUTATION = gql`
  mutation CreateShopNoteMutation($input: CreateShopNoteInput!) {
    createShopNote(input: $input) {
      id
    }
  }
`

type ShopNoteLayoutProps = {
  children?: React.ReactNode
}

/*** COMPONENT ***/
const ShopNoteLayout = ({ children }: ShopNoteLayoutProps) => {
  const [createShopNote] = useMutation(CREATE_SHOP_NOTE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  /*** HANDLERS ***/
  const onClickAddShopNote = () => {
    const newShopNote = {
      name: '',
      description: '',
    }
    createShopNote({ variables: { input: newShopNote } })
  }

  return (
    <>
      <header className="flex items-center justify-between bg-primary-700 px-2 py-4 md:px-8">
        <h1 className="text-xl">
          <Link to={routes.home()} className="text-white">
            ShopNotes
          </Link>
        </h1>

        <div className="flex space-x-2">
          <span
            id="add-shopnote-button"
            className="flex rounded-lg border border-new-900 bg-new-600 px-1 text-gray-600"
            onClick={() => {
              return onClickAddShopNote()
            }}
          >
            <FolderPlusIcon className="mr-2 w-4" /> ShopNote
          </span>
          <HelpModal />
        </div>
      </header>
      {children}
    </>
  )
}

export default ShopNoteLayout
