import { ConfigProvider } from "antd";
import HeaderApp from "./header/header";
import Footer from "./footer/footer";

function LayoutApp({ children }) {
  return (
    <>
      <ConfigProvider>
        <HeaderApp />
        <div className="app_">{children}</div>
        <Footer />
      </ConfigProvider>
    </>
  );
}

export default LayoutApp;
