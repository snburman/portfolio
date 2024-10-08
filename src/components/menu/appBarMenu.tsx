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
    const [selected, setSelected] = React.useState(0);

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
                                onClick={() => setSelected(index)}
                            >
                                <Button sx={[styles.menuButton, {
                                    fontWeight: selected === index ? "bold" : "normal",
                                    borderBottom: selected === index ? "1px solid #FFFFFF" : "none",
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
            {children}
        </Box>
    );
}

const styles: StyleSheet = {
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8rem",
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
};
