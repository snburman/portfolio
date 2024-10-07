// badges available from: https://badges.pages.dev/

import { StyleSheet } from "@/app/types";
import { Box } from "@mui/material";
import Image from "next/image";

const badges = [
    "react",
    "golang",
    "javascript",
    "typescript",
    "python",
    "html5",
    "css3",
    "mongodb",
    "postgresql",
    "bash",
    "github",
    "bitbucket",
    "mui",
    "figma",
    "fitbit",
];

export default function LanguageBadges() {

    return(
        <Box style={styles.root}>
            {badges.map((badge) => (
                <Image
                    key={badge}
                    src={`/img/${badge}.svg`}
                    alt={badge}
                    style={styles.badge}
                    width={100}
                    height={100}
                />
            ))}
        </Box>
    )
}

const styles: StyleSheet = {
    root: {
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem",
        gap: "0.5rem",
    },
    badge: {
        height: "auto",
        width: "auto",
    },
}