import { StyleSheet } from "@/app/types";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function AnchorMenu(props: { data: { title: string }[] }) {
    return (
        <Box sx={styles.listBox}>
            <ul style={styles.topicList}>
                {props.data.map((item) => (
                    <li key={item.title} style={styles.listItem}>
                        <Link href={"#" + item.title}>
                            <div className="timeline-start mb-5">
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
        width: "16rem",
        margin: "5rem 0 0 2rem",
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