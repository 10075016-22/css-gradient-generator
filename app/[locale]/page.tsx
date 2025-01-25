"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import { ColorPicker } from "@/components/gradient-generator/color-picker"
import { GradientTypeSelector } from "@/components/gradient-generator/gradient-type-selector"
import { GradientPreview } from "@/components/gradient-generator/gradient-preview"
import { AngleControl } from "@/components/gradient-generator/angle-control"
import { createGradientStyle } from "@/lib/gradient"
import type { GradientType } from "@/lib/gradient"
import { useTranslations } from "@/hooks/use-translations"

export default function GradientGenerator() {
  const t = useTranslations()
  const [colors, setColors] = useState(["#ff0000", "#0000ff"])
  const [alphas, setAlphas] = useState([1, 1])
  const [angle, setAngle] = useState(90)
  const [stops, setStops] = useState([0, 100])
  const [gradientType, setGradientType] = useState<GradientType>("linear")

  const gradientStyle = createGradientStyle(gradientType, colors, alphas, angle, stops)
  const cssCode = `background: ${gradientStyle.background};`

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{t.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t.configuration.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {/* Primera fila: Tipo de gradiente y ángulo */}
              <div className="grid grid-cols-2 gap-4">
                <GradientTypeSelector 
                  value={gradientType} 
                  onChange={setGradientType} 
                />
                {gradientType === "linear" && (
                  <AngleControl angle={angle} onChange={setAngle} />
                )}
              </div>

              {/* Segunda fila: Color pickers */}
              <div className="grid gap-4">
                <ColorPicker
                  label={t.configuration.color.replace("{number}", "1")}
                  color={colors[0]}
                  alpha={alphas[0]}
                  stop={stops[0]}
                  onColorChange={(color) => {
                    const newColors = [...colors]
                    newColors[0] = color
                    setColors(newColors)
                  }}
                  onAlphaChange={(value) => {
                    const newAlphas = [...alphas]
                    newAlphas[0] = value / 100
                    setAlphas(newAlphas)
                  }}
                  onStopChange={(value) => {
                    const newStops = [...stops]
                    newStops[0] = value
                    setStops(newStops)
                  }}
                />
                <ColorPicker
                  label={t.configuration.color.replace("{number}", "2")}
                  color={colors[1]}
                  alpha={alphas[1]}
                  stop={stops[1]}
                  onColorChange={(color) => {
                    const newColors = [...colors]
                    newColors[1] = color
                    setColors(newColors)
                  }}
                  onAlphaChange={(value) => {
                    const newAlphas = [...alphas]
                    newAlphas[1] = value / 100
                    setAlphas(newAlphas)
                  }}
                  onStopChange={(value) => {
                    const newStops = [...stops]
                    newStops[1] = value
                    setStops(newStops)
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.preview.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <GradientPreview 
              gradientStyle={gradientStyle} 
              cssCode={cssCode} 
            />
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  )
} 