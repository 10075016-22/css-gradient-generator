import "../globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitch } from "@/components/language-switch"
import { Footer } from "@/components/footer"
import { locales, dictionaries } from "@/i18n/config"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ 
  params 
}: Props): Promise<Metadata> {
  const resolvedParams = await params
  const dict = await dictionaries[resolvedParams.locale as "es" | "en"]()

  return {
    title: dict.title,
    description: dict.description,
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Props & {
  children: React.ReactNode
}) {
  const resolvedParams = await params
  const { locale } = resolvedParams

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className="min-h-screen flex flex-col">
            <div className="absolute right-4 top-4 flex items-center gap-2">
              <LanguageSwitch />
              <ThemeToggle />
            </div>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 