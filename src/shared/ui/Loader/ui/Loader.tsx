import { Spin } from 'antd';
import React from 'react';

const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

export const Loader = () => {
    return (
        <Spin style={styles} size="large" />
    )
}
