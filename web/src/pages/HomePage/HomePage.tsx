import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Head } from '@redwoodjs/web'

import ShopNotesCell from 'src/components/ShopNote/ShopNotesCell'
import ShopNotesLayout from 'src/layouts/ShopNotesLayout'

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-primary-100">
      <Head>
        <title>Home Page</title>
      </Head>
      <ShopNotesLayout>
        <div className="flex flex-wrap p-4">
          <ShopNotesCell />
        </div>
      </ShopNotesLayout>
    </div>
  )
}

export default HomePage
