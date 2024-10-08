"uce client";

import { MAX_WIDTH_MOBILE } from "@/app/constants";
import { useWindowSize } from "@/app/hooks";
import { StyleSheet } from "@/app/types";
import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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

export default function RouteMenu() {
    const pathname = usePathname();
    const window = useWindowSize();
    const isMobile = window ? window.width < MAX_WIDTH_MOBILE: false;
    const containerStyles = isMobile ? styles.menuMobile : styles.menuDesktop;
    const [open, setOpen] = React.useState(false);

    return (
        <>
        {
            isMobile && open && (
                <Box style={styles.mobileMenuBackdrop} onClick={() => setOpen(false)}/>
            )
        }
            <Box
                sx={[
                    containerStyles,
                    {
                        display: !isMobile || open ? "flex" : "none",
                    },
                ]}
            >
                {routes.map((route) => (
                    <Link key={route.title} href={route.href} onClick={() => setOpen(false)}>
                        <Button
                            sx={[
                                styles.menuButton,
                                {
                                    fontWeight:
                                        pathname === route.href
                                            ? "bold"
                                            : "normal",
                                    borderBottom:
                                        pathname === route.href
                                            ? "1px solid #FFFFFF"
                                            : "none",
                                },
                            ]}
                        >
                            {route.title}
                        </Button>
                    </Link>
                ))}
            </Box>
            {isMobile && (
                <Link href="#"
                onClick={() => setOpen(!open)}
                >
                    <Box sx={styles.openMenuButton}>
                        <MenuIcon style={styles.openMenuButtonIcon}/>
                    </Box>
                </Link>
            )}
        </>
    );
}

const styles: StyleSheet = {
    menuMobile: {
        flexDirection: "column",
        justifySelf: "center",
        gap: "1rem",
        padding: "1rem",
        backgroundColor: "primary.main",
        width: "80%",
        position: "absolute",
        top: "4rem",
        right: "0",
    },
    menuDesktop: {
        gap: "1rem",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        justifySelf: "center",
        padding: "1rem",
    },
    mobileMenuBackdrop: {
        width: "100vw",
        height: "calc(100vh - 4rem)",
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 0,
    },
    menuButton: {
        fontSize: "1rem",
        borderRadius: 0,
        color: "#FFFFFF !important",
    },
    openMenuButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "6.5rem",
        top: "1rem",
        width: "3rem",
        height: "2rem",
        border: "0px solid",
        backgroundColor: "white",
        padding: 0,
        borderRadius: '4px',
    },
    openMenuButtonIcon: {
        fontSize: "1.5rem",
        padding: 0,
        color: "#28292f",
        // backgroundColor: 'red'
    },
};
