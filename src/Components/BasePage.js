import {
    BarChartOutlined,
    DashboardOutlined,
    FolderOutlined,
    SettingOutlined,
    TableOutlined,
    ToolOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "./DashBoardHeader";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem("Dashboard", "dashboard", <DashboardOutlined />),
    getItem("Components", "component", <SettingOutlined />, [
        getItem("Buttons", "buttons"),
        getItem("Cards", "cards")
    ]),
    getItem("Utilities", "utilities", <ToolOutlined />, [
        getItem("Colors", "colors"),
        getItem("Borders", "borders"),
        getItem("Animations", "animations"),
        getItem("Others", "others"),
    ]),
    getItem("Pages", "pages", <FolderOutlined />, [
        getItem("Login", "/login"),
        getItem("Register", "/register"),
        getItem("Forgot Password", "/forgot-password"),
        getItem("404 Page", "error-page"),
        getItem("Blank page", "blank-page"),
    ]),
    getItem("Charts", "charts", <BarChartOutlined />),
    getItem("Tables", "table", <TableOutlined />),
];
const App = () => {
    const history = useNavigate();
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const clicking = (val) => {
        history(val)
        console.log(val)
    }
    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <h5
                    className="text-light text-center mt-5 mb-3"
                >ADMIN</h5>
                <Menu
                    onClick={(e) => clicking(e.key)}
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <DashboardHeader />
                </Header>
                <Content
                    style={{
                        margin: "0 16px",
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: "16px 0",
                        }}
                    />
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>

                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                    }}
                >
                    Admin Page ©2023 Created by Kavin
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;