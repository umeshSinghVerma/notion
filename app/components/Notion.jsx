import Link from 'next/link'
import { cookies } from 'next/headers'
import React from 'react'
import { DialogDemo } from './DialogDemo'
const { Client } = require("@notionhq/client")
export default async function Notion() {
    const value = cookies().get('user')?.value;
    let pages = [];
    if (value) {
        pages = await alpha(value)
    }
    return (
        <div className="max-w-2xl lg:w-4/6">
            <div className="mb-10 rounded border border-zinc-200">
                <div className="border-b border-zinc-200 bg-white px-5 py-4">
                    <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">Notion</h3>
                </div>
                <div className="p-5">
                    <div className="flex flex-col items-center">
                        <div className="py-12">
                            <DialogDemo />
                        </div>
                        <div className="font-semibold" />
                        {pages.length > 0 && <div className="flex w-full  flex-col items-center">
                            <div className="w-full">
                                <div className="my-4 flex items-center">
                                    <hr className="w-full border-t border-zinc-300" />
                                    <span className="whitespace-nowrap px-2 text-zinc-600">
                                        Imported Pages
                                    </span>
                                    <hr className="w-full border-t border-zinc-300" />
                                </div>
                            </div>
                            <div className="max-h-[36rem] w-full overflow-auto p-4 pr-6">
                                {
                                    pages.map((page, key) => {
                                        return (
                                            <div className="grid grid-cols-10 pb-4" key={key}>
                                                <div className="col-span-9">
                                                    <span className="break-words">{page}</span>{" "}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>

    )
}
async function alpha(secret) {
    const pageList = [];
    try {
        const notion = new Client({
            auth: secret,
        })
        const myPage = await notion.search({
            filter: { property: "object", value: 'page' }
        });
        for (let i = 0; i < myPage.results.length; i++) {
            if (myPage.results[i]?.id) {
                const pageInfo = await notion.pages.retrieve({ page_id: myPage.results[i]?.id });
                // console.log(pageInfo?.properties?.title?.title[0]?.plain_text);
                if (pageInfo?.properties?.title?.title[0]?.plain_text) {
                    pageList.push(pageInfo?.properties?.title?.title[0]?.plain_text);
                }
            }
        }
    } catch (error) {
        console.error(error)
    }
    finally {
        return pageList;
    }
}