import React, { memo } from 'react';
import cls from './IconWrapper.module.css'

interface IconWrapperProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const IconWrapper = memo((props: IconWrapperProps) => {
  const {Svg} = props

  return (
    <Svg className={cls.iconWrapper} />
  )
})
