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
  const url = getBaseUrl().toString() + "og"

  return new URL(url)
}

export function getBaseUrl(): URL {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.VERCEL_ENV === "production"
      ? "https://sehyunchung.dev"
      : `https://${process.env.VERCEL_URL}`

  return new URL(baseUrl)
}
