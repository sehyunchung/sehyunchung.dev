import React from 'react'
import { animated, useTransition } from 'react-spring'

import './src/style/style.css'
import 'open-color/open-color.css'

const SimpleSpring = ({ children, props }) => {
  const transitions = useTransition(children, props.path, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  })

  return (
    <div>
      {transitions.map(({ item: page, key, props }) => (
        <animated.div key={key} style={props}>
          {page}
        </animated.div>
      ))}
    </div>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <SimpleSpring props={props}>{element}</SimpleSpring>
}
