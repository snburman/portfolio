import { StyleSheet } from "@/app/types";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function AnchorMenu(props: { items: { title: string }[] }) {
    return (
        <Box sx={styles.listBox}>
            <ul style={styles.topicList}>
                {props.items.map((item) => (
                    <li key={item.title} style={styles.listItem}>
                        <Link href={"#" + item.title}>
                            <div className="timeline-start mb-10">
                                <Typography>{item.title}</Typography>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

const styles: StyleSheet = {
    listBox: {
        width: "auto",
        margin: "5rem 0 0 4rem",
    },
    topicList: {
        borderRight: "2px solid rgba(0, 0, 0, 0.12)",
        paddingTop: "1rem",
        paddingBottom: "0.5rem",
        paddingRight: "2rem",
        position: "sticky",
        top: "8rem",
        listStyleType: "none",
    },
    listItem: {
    },
};