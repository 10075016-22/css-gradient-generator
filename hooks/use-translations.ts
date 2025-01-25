"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { dictionaries, type ValidLocale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/types"

export function useTranslations() {
  const params = useParams()
  const locale = params?.locale as ValidLocale || 'es'
  const [dictionary, setDictionary] = useState<Dictionary | null>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await dictionaries[locale]()
      setDictionary(dict)
    }
    loadDictionary()
  }, [locale])

  if (!dictionary) {
    // Retornar un objeto vacío con la misma estructura mientras carga
    return {
      title: "",
      description: "",
      configuration: {
        title: "",
        gradientType: {
          label: "",
          linear: "",
          radial: "",
          conic: "",
          "repeating-linear": "",
          "repeating-radial": "",
          "repeating-conic": ""
        },
        angle: "",
        position: "",
        opacity: "",
        color: ""
      },
      preview: {
        title: "",
        cssCode: "",
        copy: "",
        copied: "",
        copySuccess: ""
      },
      footer: {
        by: "",
      }
    }
  }

  return dictionary
}