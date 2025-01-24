import { Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          By: Thiago Lopez
        </p>
        <Link
          href="https://github.com/10075016-22/css-gradient-generator"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium hover:text-primary"
        >
          <Github className="h-5 w-5" />
          <span>Like repository</span>
        </Link>
      </div>
    </footer>
  )
} 