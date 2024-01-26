import cls from './IconWrapper.module.css';
import { memo } from 'react';

interface IconWrapperProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const IconWrapper = memo((props: IconWrapperProps) => {
    const {Svg} = props

    return (
       <Svg className={cls.icon} />
    )
})
