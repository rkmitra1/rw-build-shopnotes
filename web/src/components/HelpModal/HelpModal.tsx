import { useState } from 'react'

import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Markdown from 'markdown-to-jsx'

// import helpContent from '/Help.md?url&raw' // import of markdown file is in public folder
import helpContent from './Help.md?raw' // import of markdown file is component folder
// const helpContent = `test`

export function HelpModal({ initialShowModal = false }) {
  const [showModal, setShowModal] = useState(initialShowModal)

  return (
    <>
      <QuestionMarkCircleIcon
        className="w-6 text-white"
        onClick={() => setShowModal(!showModal)}
      />
      {showModal ? (
        <>
          <div className="fixed inset-2 z-50 mx-auto flex w-11/12 rounded rounded-xl border-2 border-clear-500 bg-clear-200 md:inset-10 md:w-3/4">
            <div className="mt-4 w-1/4 px-2 text-center">
              <h3 className="text-2xl font-semibold">Help</h3>
              <button
                className="-pb-1 mt-4 rounded-md border border-clear-500 bg-clear-600 px-1 text-sm text-gray-700"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>

            {/*body*/}
            <div className="prose mt-4 w-11/12 overflow-y-auto border-l border-black px-6 marker:text-black">
              <Markdown>{helpContent}</Markdown>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default HelpModal
