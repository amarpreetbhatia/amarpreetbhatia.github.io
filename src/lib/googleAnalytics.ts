const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
const isProduction = import.meta.env.MODE === 'production'

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

const loadExternalScript = (src: string) => {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head?.appendChild(script)
}

export function isGoogleAnalyticsEnabled(): boolean {
  return isProduction && typeof measurementId === 'string' && measurementId.trim().length > 0
}

export function initGoogleAnalytics(): void {
  if (!isGoogleAnalyticsEnabled() || typeof window === 'undefined' || !document.head) {
    return
  }

  loadExternalScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`)

  const inlineScript = document.createElement('script')
  inlineScript.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { page_path: window.location.pathname });`
  document.head.appendChild(inlineScript)
}
