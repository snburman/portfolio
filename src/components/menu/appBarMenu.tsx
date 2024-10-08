"use client";

import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { usePathname } from 'next/navigation'
import { StyleSheet } from "@/app/types";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const routes = [
    {
        title: "About",
        href: "/",
    },
    {
        title: "Experience",
        href: "/experience",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default function AppBarMenu({
    children,
}: {
    children: React.ReactNode;
}) {

    const pathname = usePathname();

    return (
        <Box sx={styles.root}>
            <AppBar>
                <Toolbar sx={styles.toolbar}>
                    <Box sx={styles.logo}>
                        <Link href="/">
                            <Typography variant="h5" component="div">
                                Sean Burman
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={styles.menu}>
                        {routes.map((route, index) => (
                            <Link
                                key={route.title}
                                href={route.href}
                            >
                                <Button sx={[styles.menuButton, {
                                    fontWeight: pathname === route.href ? "bold" : "normal",
                                    borderBottom: pathname === route.href ? "1px solid #FFFFFF" : "none",
                                }]}>
                                    {route.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box style={styles.iconContainer}>
                        <Link href="https://github.com/snburman" target="_blank">
                            <GitHubIcon style={styles.icon}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/seanburman/" target="_blank">
                            <LinkedInIcon style={styles.icon}/>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={styles.content}>
                {children}
            </Box>
            <footer style={styles.footer}>
                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} Sean Burman
                </Typography>
            </footer>
        </Box>
    );
}

const styles: StyleSheet = {
    root: {
        height: "100%",
        marginTop: "6rem",
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    menu: {
        display: "flex",
        gap: "1rem",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        justifySelf: "center",
        padding: "1rem",
    },
    menuButton: {
        fontSize: "1rem",
        borderRadius: 0,
        color: "#FFFFFF !important",
    },
    logo: {
        position: "absolute",
        left: "1rem",
    },
    iconContainer: {
        position: "absolute",
        right: "1rem",
    },
    icon: {
        fontSize: "2rem",
        color: "#FFFFFF",
        marginLeft: "0.5rem",
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
    },
    footer: {
        width: "100%",
        padding: "1rem",
        position: "relative",
        bottom: 0,
    },
};
