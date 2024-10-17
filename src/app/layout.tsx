import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme";
import AppBarMenu from "@/components/menu/appBarMenu";
import CssBaseline from "@mui/material/CssBaseline";
import { StyleSheet } from "./types";

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
                        <AppBarMenu />
                        <Box style={styles.contentWrapper}>
                            <Box sx={styles.content}>{children}</Box>
                        </Box>
                    </ThemeProvider>
                </AppRouterCacheProvider>
                <footer style={styles.footer}>
                    <Typography align="center">
                        © {new Date().getFullYear()} Sean Burman
                    </Typography>
                </footer>
            </body>
        </html>
    );
}

const styles: StyleSheet = {
    contentWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        width: "100%",
        padding: "1.5rem",
        marginTop: "1rem",
    },
};
