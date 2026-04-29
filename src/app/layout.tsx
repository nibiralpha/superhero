import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import "./globals.css";
// Import your NEW client wrapper
import StoreProvider from "../redux/StorePrvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Wrap everything inside body with the StoreProvider */}
        <StoreProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: { colorPrimary: "#f9873d" },
                components: {
                  Button: {
                    colorPrimary: "#f9873d",
                    colorPrimaryHover: "#f9873d",
                    colorText: "#f9873d",
                    colorBorder: "#f9873d",
                  },
                  Switch: {
                    colorPrimary: "#f9873d",
                    colorPrimaryHover: "#ff9c5e",
                    colorTextQuaternary: "rgb(162 162 162)",
                    colorTextTertiary: "rgb(172, 172, 172)",
                    colorWhite: "#fff",
                  },
                },
              }}
            >
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
