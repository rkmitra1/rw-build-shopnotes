import { useState } from 'react'

import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Markdown from 'markdown-to-jsx'

import helpContent from './Help.md?raw'

export function HelpModal() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <QuestionMarkCircleIcon
        className="w-12 text-white"
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <>
          <div className="justify-left fixed inset-10 z-50 flex overflow-x-hidden rounded rounded-xl border-2 border-clear-500 bg-clear-200">
            <div className="mt-4 flex h-full flex-col border-r border-solid border-clear-800 px-12">
              <h3 className="text-2xl font-semibold">Help</h3>
              <button
                className=""
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

              <button
                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              ></button>
            </div>

            {/*body*/}
            <div className="prose mt-4  block  px-6 marker:text-black">
              <Markdown>{helpContent}</Markdown>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default HelpModal
