"use client"

import { HexColorPicker } from "react-colorful"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface ColorPickerProps {
  label: string
  color: string
  alpha: number
  stop: number
  onColorChange: (color: string) => void
  onAlphaChange: (value: number) => void
  onStopChange: (value: number) => void
}

export function ColorPicker({
  label,
  color,
  alpha,
  stop,
  onColorChange,
  onAlphaChange,
  onStopChange,
}: ColorPickerProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="grid grid-cols-[1fr,auto] gap-4">
        <HexColorPicker 
          color={color} 
          onChange={onColorChange}
          className="!w-full !h-[150px]"
        />
        <div className="space-y-4 w-[120px]">
          <Input 
            value={color} 
            onChange={(e) => onColorChange(e.target.value)}
            className="text-sm"
          />
          <div className="space-y-1">
            <Label className="text-xs">Opacidad: {Math.round(alpha * 100)}%</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[alpha * 100]}
              onValueChange={(value: number[]) => onAlphaChange(value[0])}
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Posición: {stop}%</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[stop]}
              onValueChange={(value: number[]) => onStopChange(value[0])}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 