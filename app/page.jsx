import Link from "next/link";
import { cookies } from 'next/headers'
const { Client } = require("@notionhq/client")
export default async function page(req) {
  const value = cookies().get('user')?.value;
  console.log('this is the cookies value ', value);
  let pages=[];
  if (value) {
    pages = await alpha(value)
  }
  return (
    <div>
      <Link target="_top" href={process.env.NOTION_AUTH_URL}>Notion api</Link>
      {
        pages.map((page,key)=>{
          return(
            <div key={key}>
              {page}
            </div>
          )
        })
      }
    </div>
  );
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
  finally{
    return pageList;
  }
}