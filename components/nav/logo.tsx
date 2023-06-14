"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Icons.logo className="h-6 w-6" />
      <span className="inline-block font-bold">{siteConfig.name}</span>
    </Link>
  )
}
