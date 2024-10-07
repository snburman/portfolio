import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import AppBarMenu from "@/components/menu/appBarMenu";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
    title: "Sean Burman",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={"antialiased"}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <AppBarMenu>
                          {children}
                        </AppBarMenu>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
