"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Copy, Check } from "lucide-react"
import { useState, useEffect } from "react"
import { useTranslations } from "@/hooks/use-translations"

interface GradientPreviewProps {
  gradientStyle: React.CSSProperties
  cssCode: string
}

export function GradientPreview({ gradientStyle, cssCode }: GradientPreviewProps) {
  const { toast } = useToast()
  const [hasCopied, setHasCopied] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [hasCopied])

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(cssCode)
    setHasCopied(true)
    toast({
      title: t.preview.copied,
      description: t.preview.copySuccess,
    })
  }

  return (
    <div className="space-y-6">
      <div className="w-full h-64 rounded-lg checkered-background" style={gradientStyle} />
      <div className="space-y-2">
        <Label>{t.preview.cssCode}</Label>
        <div className="flex gap-2">
          <div className="flex-1 overflow-x-auto">
            <pre className="p-2 bg-muted rounded-md text-sm font-mono whitespace-pre-wrap break-all">
              {cssCode}
            </pre>
          </div>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleCopyCode}
            className="shrink-0 transition-all duration-200"
            title={hasCopied ? t.preview.copied : t.preview.copy}
          >
            {hasCopied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
} 