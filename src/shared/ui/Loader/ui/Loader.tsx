import { Spin } from 'antd';
import cls from './Loader.module.css'

export const Loader = () => {
  return (
    <Spin className={cls.loader} size="large" />
  )
}
