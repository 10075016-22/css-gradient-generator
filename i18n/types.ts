export interface Dictionary {
  title: string
  description: string
  configuration: {
    title: string
    gradientType: {
      label: string
      linear: string
      radial: string
      conic: string
      "repeating-linear": string
      "repeating-radial": string
      "repeating-conic": string
    }
    angle: string
    position: string
    opacity: string
    color: string
  }
  preview: {
    title: string
    cssCode: string
    copy: string
    copied: string
    copySuccess: string
  }
  footer: {
    by: string
    repository: string
  }
} 