"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface StopControlProps {
  label: string
  value: number
  onChange: (value: number) => void
}

export function StopControl({ label, value, onChange }: StopControlProps) {
  return (
    <div className="space-y-4">
      <Label>{label}: {value}%</Label>
      <Slider
        min={0}
        max={100}
        step={1}
        value={[value]}
        onValueChange={(value: number[]) => onChange(value[0])}
      />
    </div>
  )
} 