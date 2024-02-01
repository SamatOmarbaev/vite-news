import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { memo, useState } from "react";
import './Sidebar.css'
import { items } from "../../model/utils/items";

const styles: React.CSSProperties = {
  background: 'var(--inverted-bg-color)',
  width: '50px',
  flex: '0 0 50px',
  maxWidth: '50px',
  minWidth: '50px',
}

export const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      style={styles} 
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  )
})
