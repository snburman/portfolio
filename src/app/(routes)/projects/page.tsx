import {
    Box,
    Typography,
} from "@mui/material";

export default function Projects() {
    return (
        <Box sx={styles.root}>
            <Typography variant="h4">Projects</Typography>
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
