"use client";

import { Recursive, IBM_Plex_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const recursive = Recursive({
    subsets: ["latin"],
});

export const ibmPlexSans = IBM_Plex_Sans({
    weight: ["400", "600"],
    subsets: ["latin"],
});

export const theme = createTheme({
    typography: {
        h3: {
            fontFamily: recursive.style.fontFamily,
        },
        h5: {
            fontFamily: recursive.style.fontFamily,
        },
        button: {
            fontFamily: ibmPlexSans.style.fontFamily,
            textTransform: "none",
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#28292f",
        },
        secondary: {
            main: "#379614",
        },
    },
});
