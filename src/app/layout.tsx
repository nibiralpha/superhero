import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#f9873d",
            },
            components: {
              Button: {
                colorPrimary: "#f9873d",
                colorPrimaryHover: "#f9873d",
                colorText: "#f9873d",
                colorBorder: "#f9873d",
              },
              Switch: {
                /* The background color when it is ON */
                colorPrimary: "#f9873d",
                colorPrimaryHover: "#ff9c5e",

                /* The background color when it is OFF */
                colorTextQuaternary: "rgb(162 162 162)",
                colorTextTertiary: "rgb(172, 172, 172)", // Hover state for OFF

                /* The handle (circle) color */
                colorWhite: "#fff",
              },
            },
          }}
        >
          <body>{children}</body>
        </ConfigProvider>
      </AntdRegistry>
    </html>
  );
}
