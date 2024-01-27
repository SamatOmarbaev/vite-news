import React, { memo } from 'react';

interface IconWrapperProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

const styles: React.CSSProperties = {
    fill: 'var(--secondary-color)',
    transition: 'fill .3s',
    height: '100%',
    width: '100%',
}

export const IconWrapper = memo((props: IconWrapperProps) => {
    const {Svg} = props

    return (
       <Svg style={styles} />
    )
})
