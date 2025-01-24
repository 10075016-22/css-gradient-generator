export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const createGradientStyle = (
  type: "linear" | "radial",
  colors: string[],
  alphas: number[],
  angle: number,
  stops: number[]
) => ({
  background: type === "linear"
    ? `linear-gradient(${angle}deg, ${hexToRgba(colors[0], alphas[0])} ${stops[0]}%, ${hexToRgba(colors[1], alphas[1])} ${stops[1]}%)`
    : `radial-gradient(circle at center, ${hexToRgba(colors[0], alphas[0])} ${stops[0]}%, ${hexToRgba(colors[1], alphas[1])} ${stops[1]}%)`
}) 