import { useState, useEffect, RefObject } from 'react'

interface IuseIntersectionObserver {
  threshold?: number
  root?: any
  rootMargin?: string
}

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement | Element> | null | undefined,
  { threshold, root, rootMargin }: IuseIntersectionObserver
) => {
  const [state, setState] = useState<{
    inView: boolean
    triggered: boolean
    entry: unknown
  }>({
    inView: false,
    triggered: false,
    entry: undefined,
  })

  const observer =
    typeof window !== `undefined`
      ? new IntersectionObserver(
          (entries, observerInstance) => {
            if (entries[0].intersectionRatio > 0) {
              setState({
                inView: true,
                triggered: true,
                entry: observerInstance,
              })
              observerInstance.unobserve(ref.current)
            }
            return
          },
          {
            threshold: threshold || 0,
            root: root || null,
            rootMargin: rootMargin || '0%',
          }
        )
      : null

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (ref.current && !state.triggered) {
        observer.observe(ref.current)
      }
    }
  })

  return [state.inView, state.entry]
}
