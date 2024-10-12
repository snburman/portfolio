"use client";

import { StyleSheet } from "@/app/types";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
} from "@mui/material";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    links: {
        name: string;
        url: string;
    }[];
}

export default function ProjectCard({ title, description, links }: Props) {
    return (
        <Card sx={styles.card}>
            <CardHeader title={title} sx={styles.cardHeader} />
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <Box sx={styles.cardActionAreaBox}>
                {links.map((link, i) => (
                    <Link key={i} href={link.url} target="_blank">
                        <CardActionArea sx={styles.cardActionArea}>
                            <p>{link.name}</p>
                        </CardActionArea>
                    </Link>
                ))}
            </Box>
        </Card>
    );
}

const styles: StyleSheet = {
    card: {
        width: "100%",
        minWidth: "80%",
        margin: "1rem 0",
    },
    cardHeader: { 
        backgroundColor: "primary.main", 
        color: "#FFFFFF" 
    },
    cardContent: {
        padding: "1rem",
    },
    cardActionAreaBox: {
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    cardActionArea: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
    },
};
