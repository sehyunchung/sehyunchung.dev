import React from 'react'
import { animated, useTransition } from 'react-spring'
import { AnimationWrapper } from './src/templates/AnimationWrapper'
import './src/style/style.css'
import 'open-color/open-color.css'

export const wrapPageElement = ({ element, props }) => {
  return <AnimationWrapper props={props}>{element}</AnimationWrapper>
}
