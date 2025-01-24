"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface GradientTypeSelectorProps {
  value: "linear" | "radial"
  onChange: (value: "linear" | "radial") => void
}

export function GradientTypeSelector({ value, onChange }: GradientTypeSelectorProps) {
  return (
    <div className="space-y-2">
      <Label>Tipo de Gradiente</Label>
      <RadioGroup
        defaultValue="linear"
        value={value}
        onValueChange={(value) => onChange(value as "linear" | "radial")}
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="linear" id="linear" />
          <Label htmlFor="linear" className="text-sm">Lineal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="radial" id="radial" />
          <Label htmlFor="radial" className="text-sm">Radial</Label>
        </div>
      </RadioGroup>
    </div>
  )
} 