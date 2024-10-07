import {
    Box,
    Typography,
} from "@mui/material";

export default function Contact() {
    return (
        <Box sx={styles.root}>
            <Typography variant="h4">Contact</Typography>
        </Box>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    root: {
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
    },
};
