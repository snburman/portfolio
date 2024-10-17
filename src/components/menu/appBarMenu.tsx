"use client";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { StyleSheet } from "@/app/types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RouteMenu from "./routeMenu";

export default function AppBarMenu() {
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
                    <RouteMenu />
                    <Box style={styles.iconContainer}>
                        <Link
                            href="https://github.com/snburman"
                            target="_blank"
                        >
                            <GitHubIcon style={styles.icon} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/seanburman/"
                            target="_blank"
                        >
                            <LinkedInIcon style={styles.icon} />
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const styles: StyleSheet = {
    root: {
        height: "100%",
        marginTop: "6rem",
        zIndex: 1,
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "4rem",
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
