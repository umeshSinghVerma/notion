import Link from "next/link";
import { cookies } from 'next/headers'
import Header from "./components/Header";
import Between from "./components/Between";
import MainContent from "./components/MainContent";

export default async function page(params) {
  return (
    <>
      <Header />
      <Between />
      <MainContent current={params?.searchParams?.dataSource} />
    </>

  )
}
