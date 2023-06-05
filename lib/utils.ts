import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * # `getOgImgUrl`
 * Get base url for `og:image` to make og image api with `searchParams.set`
 *
 * @returns {URL} og:image url
 */
export function getOgImgUrl(): URL {
  const url = getBaseUrl().origin + "/og"

  return new URL(url)
}

export function getBaseUrl(): URL {
  const baseUrl = () => {
    if (process.env.VERCEL_ENV === "production") {
      return `https://sehyunchung.dev`
    }

    if (process.env.VERCEL_ENV === "preview") {
      return `https://${process.env.VERCEL_URL}`
    }

    return `http://localhost:3000`
  }

  return new URL(baseUrl())
}
