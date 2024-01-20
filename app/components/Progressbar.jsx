'use client'
import React from 'react'
import NextNProgress from "nextjs-progressbar"

export default function Progressbar() {
    return (
        <>
            <NextNProgress
                color="#b594ed"
                startPosition={0.3}
                stopDelayMs={200}
                height={2}
                showOnShallow={true}
                options={{ showSpinner: true }}
            />

        </>
    )
}
