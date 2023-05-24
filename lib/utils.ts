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
      ? "http://localhost:3000/api/og"
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/og`
      : "https://sehyunchung.dev/api/og"

  return new URL(baseUrl)
}
