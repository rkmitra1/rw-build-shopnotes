import { useState } from 'react'

import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Markdown from 'markdown-to-jsx'

import helpContent from './Help.md?raw'

export function HelpModal() {
  const [showModal, setShowModal] = useState(false)

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
                className="-pb-1 rounded-md border border-clear-800 bg-clear-500 px-1 text-xs text-gray-600"
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
