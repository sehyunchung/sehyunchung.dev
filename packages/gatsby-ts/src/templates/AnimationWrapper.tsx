/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { animated, useTransition } from 'react-spring'

export const AnimationWrapper = ({ children, props }) => {
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
        margin: 0 auto;
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
