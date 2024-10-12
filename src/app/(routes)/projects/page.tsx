import {
    Box,
    Typography,
} from "@mui/material";
import ProjectCard from "./components/projectCard";

export default function Projects() {
    return (
        <Box sx={styles.root}>
            <Typography variant="h3">Projects</Typography>
            {/* <Box sx={styles.projectBox}> */}
                <ProjectCard {... {
                    title: "Fncmp",
                    description: "FnCmp extends the Component interface to bring enhanced functionality to server-side rendering with Go.",
                    links: [
                        { name: "Documentation", url: "https://snburman.github.io/docs/fncmp" },
                        { name: "Github", url: "https://github.com/snburman/fncmp" },
                        { name: "pkg.go.dev", url: "https://pkg.go.dev/github.com/snburman/fncmp" },
                    ],
                }}/>
                <ProjectCard {... {
                    title: "Mnemo",
                    description: "Mnemo is a simple, lightweight, and fast in-memory key-value store written in Go.",
                    links: [
                        { name: "Documentation", url: "https://snburman.github.io/docs/mnemo" },
                        { name: "Github", url: "https://github.com/snburman/mnemo" },
                        { name: "pkg.go.dev", url: "https://pkg.go.dev/github.com/snburman/mnemo" },
                    ],
                }}/>
            {/* </Box> */}
        </Box>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    root: {
        display: "flex",
        flexDirection: "column",
    },

};
