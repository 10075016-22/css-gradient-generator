"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface AngleControlProps {
  angle: number
  onChange: (value: number) => void
}

export function AngleControl({ angle, onChange }: AngleControlProps) {
  return (
    <div className="space-y-4">
      <Label>Ángulo: {angle}°</Label>
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