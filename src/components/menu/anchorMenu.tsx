import { StyleSheet } from "@/app/types";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
    sections: { title: string }[];
    children?: React.ReactNode;
}

export default function AnchorMenu(props: Props) {
    return (
        <>
            <Box sx={styles.listBox}>
                <ul style={styles.topicList}>
                    {props.sections.map((item) => (
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
            <Box style={styles.content}>{props.children}</Box>
        </>
    );
}

const styles: StyleSheet = {
    listBox: {
        width: "15rem",
        margin: "5rem 0 0 1rem",
    },
    topicList: {
        borderRight: "2px solid rgba(0, 0, 0, 0.12)",
        paddingTop: "1rem",
        paddingBottom: "0.5rem",
        position: "sticky",
        top: "8rem",
        listStyleType: "none",
    },
    content: {
        maxWidth: "55rem",
    }
};
