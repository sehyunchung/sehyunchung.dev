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
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.VERCEL_URL
      ? "https://" + process.env.VERCEL_URL
      : "https://sehyunchung.dev"

  return new URL(baseUrl)
}
