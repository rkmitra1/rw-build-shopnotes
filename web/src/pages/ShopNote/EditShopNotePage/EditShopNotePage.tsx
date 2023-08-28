import EditShopNoteCell from 'src/components/ShopNote/EditShopNoteCell'

type ShopNotePageProps = {
  id: number
}

const EditShopNotePage = ({ id }: ShopNotePageProps) => {
  return <EditShopNoteCell id={id} />
}

export default EditShopNotePage
