"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useTranslations } from "@/hooks/use-translations"

interface AngleControlProps {
  angle: number
  onChange: (value: number) => void
}

export function AngleControl({ angle, onChange }: AngleControlProps) {
  const t = useTranslations()

  return (
    <div className="space-y-4">
      <Label>{t.configuration.angle.replace("{angle}", angle.toString())}</Label>
      <Slider 
        min={0} 
        max={360} 
        step={1} 
        value={[angle]} 
        onValueChange={(value: number[]) => onChange(value[0])} 
      />
    </div>
  )
} 