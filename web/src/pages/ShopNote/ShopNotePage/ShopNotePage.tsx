import ShopNoteCell from 'src/components/ShopNote/ShopNoteCell'

type ShopNotePageProps = {
  id: number
}

const ShopNotePage = ({ id }: ShopNotePageProps) => {
  return <ShopNoteCell id={id} />
}

export default ShopNotePage
