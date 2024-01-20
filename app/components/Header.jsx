import Image from 'next/image'
import React from 'react'
import { logo } from '/public/chatbase-logo.svg'
export default function Header() {
    return (
        <header className="w-full flex-col rounded-t-3xl border-b lg:flex">
            <section className="z-10 flex flex-row items-center justify-between p-6 lg:px-8">
                <div className="flex items-center">
                    <div>
                        <nav className="flex" aria-label="Breadcrumb">
                            <div
                                role="list"
                                className="flex flex-row items-center space-x-2 sm:space-x-0"
                            >
                                <div className="flex items-center">
                                    <a href="/">
                                        <div className="flex flex-row items-center gap-1">
                                            <img
                                                alt="Chatbase"
                                                loading="lazy"
                                                width={32}
                                                height={32}
                                                decoding="async"
                                                data-nimg={1}
                                                className="aspect-square rounded-lg"
                                                style={{ color: "transparent" }}
                                                src="https://www.chatbase.co/images/chatbase-logo.svg"
                                            />
                                            <span className="hidden text-lg font-normal md:block text-zinc-800 ">
                                                Chatbase
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-3">
                    <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:R1j2l6:"
                        data-state="closed"
                        className="flex flex-row items-start justify-start gap-3 lg:hidden"
                    >
                        <div className="flex flex-row items-center font-medium transition-all ease-in-out">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-zinc-900"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </div>
                    </button>
                    <a
                        className="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block"
                        href="/help"
                    >
                        Help
                    </a>
                    <a
                        className="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block"
                        href="/account"
                    >
                        Account<span aria-hidden="true"> {/* */}→</span>
                    </a>
                </div>
            </section>
        </header>
    )
}
