import React from 'react'

export default function TextContent() {
  return (
    <div className="max-w-2xl lg:w-4/6">
  <div className="mb-10 rounded border border-zinc-200">
    <div className="border-b border-zinc-200 bg-white px-5 py-4">
      <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">Text</h3>
    </div>
    <div className="p-5">
      <div className="w-full">
        <textarea
          placeholder="data"
          name="data"
          rows={20}
          className="my-2 w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
          spellCheck="false"
          data-ms-editor="true"
          defaultValue={""}
        />
        <p className="h-8 text-center text-sm text-zinc-600" />
      </div>
    </div>
  </div>
</div>

  )
}
