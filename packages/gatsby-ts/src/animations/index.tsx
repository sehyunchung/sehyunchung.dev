/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Children, FC, useRef } from 'react'
import { animated, useTrail, useTransition } from 'react-spring'
import { useIntersectionObserver } from '../hooks'

export const RouteFadeIn = ({ children, props }) => {
  const transitions = useTransition(children, props.path, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  })

  return (
    <div
      css={css`
        position: relative;
        height: 100%;
        width: 100%;
      `}
    >
      {transitions.map(({ item: page, key, props }) => (
        <animated.div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
          `}
          key={key}
          style={props}
        >
          {page}
        </animated.div>
      ))}
    </div>
  )
}

export const TrailUp: FC = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [inView] = useIntersectionObserver(elementRef, {
    threshold: 0.5,
  })

  const trail = useTrail(Children.count(children), {
    from: {
      opacity: 0,
      transform: 'translate(0px, 4px)',
    },
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(0px, 4px)',
    config: {
      mass: 1,
      tension: 200,
      friction: 30,
    },
  })

  return (
    <div
      ref={elementRef}
      css={css`
        position: relative;
        height: 100%;
        width: 100%;
      `}
    >
      {trail.map((props: any, key: number) => (
        <animated.div key={key} style={props}>
          {Children.toArray(children)[key]}
        </animated.div>
      ))}
    </div>
  )
}
