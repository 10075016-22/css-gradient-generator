"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { GradientType } from "@/lib/gradient"
import { useTranslations } from "@/hooks/use-translations"
import { Skeleton } from "@/components/ui/skeleton"

interface GradientTypeSelectorProps {
  value: GradientType
  onChange: (value: GradientType) => void
}

const gradientTypes: GradientType[] = [
  "linear",
  "radial",
  "conic",
  "repeating-linear",
  "repeating-radial",
  "repeating-conic"
]

export function GradientTypeSelector({ value, onChange }: GradientTypeSelectorProps) {
  const t = useTranslations()

  const handleValueChange = (newValue: string) => {
    onChange(newValue as GradientType)
  }

  if (!t) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <div className="grid grid-cols-2 gap-2">
          {gradientTypes.map((type) => (
            <Skeleton key={type} className="h-8" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <Label>{t.configuration.gradientType.label}</Label>
      <RadioGroup
        value={value}
        onValueChange={handleValueChange}
        className="grid grid-cols-2 gap-2"
      >
        {gradientTypes.map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <RadioGroupItem value={type} id={type} />
            <Label htmlFor={type} className="text-sm">
              {t.configuration.gradientType[type]}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
} 