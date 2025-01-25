export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export type GradientType = "linear" | "radial" | "conic" | "repeating-linear" | "repeating-radial" | "repeating-conic";

export const createGradientStyle = (
  type: GradientType,
  colors: string[],
  alphas: number[],
  angle: number,
  stops: number[]
) => {
  const colorStops = colors.map((color, i) => 
    `${hexToRgba(color, alphas[i])} ${stops[i]}%`
  ).join(', ')

  switch (type) {
    case "linear":
      return { background: `linear-gradient(${angle}deg, ${colorStops})` }
    case "radial":
      return { background: `radial-gradient(circle at center, ${colorStops})` }
    case "conic":
      return { background: `conic-gradient(from ${angle}deg at center, ${colorStops})` }
    case "repeating-linear":
      return { background: `repeating-linear-gradient(${angle}deg, ${colorStops})` }
    case "repeating-radial":
      return { background: `repeating-radial-gradient(circle at center, ${colorStops})` }
    case "repeating-conic":
      return { background: `repeating-conic-gradient(from ${angle}deg at center, ${colorStops})` }
  }
}