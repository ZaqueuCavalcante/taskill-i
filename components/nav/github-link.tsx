"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function GithubLink() {
  return (
    <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
      <div
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
        })}
      >
        <Icons.gitHub className="h-5 w-5" />
      </div>
    </Link>
  )
}
