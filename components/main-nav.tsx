import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

import { Logo } from "./logo"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Logo />
      <nav className="flex gap-6">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex items-center text-sm font-medium text-muted-foreground",
              "hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
