import { StyleSheet } from "@/app/types";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function AnchorMenu(props: { items: { title: string }[] }) {
    return (
        <Box sx={styles.listBox}>
            <ul style={styles.topicList}>
                {props.items.map((item) => (
                    <li key={item.title}>
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
        listStyleType: "none",
        padding: 0,
    },
};