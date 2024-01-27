import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { memo, useState } from "react";
import './Sidebar.css'
import { items } from "../../model/utils/items";

const styles: React.CSSProperties = {
    background: 'var(--inverted-bg-color)',
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
