import { Box, Typography } from "@mui/material";
import ProjectCard from "./components/projectCard";
import { MAX_WIDTH_CONTENT } from "@/app/constants";

export default function Projects() {
    return (
        <Box sx={styles.root}>
            <Box sx={styles.headerContainer}>
                <Typography variant="h3">Projects</Typography>
                <Typography>
                    Below are some of the non work-related projects I have been
                    working on recently which are mostly comprised of Go at
                    present but will soon incorporate front-end elements.
                </Typography>
            </Box>

            <ProjectCard
                {...{
                    title: "Fncmp",
                    description:
                        "FnCmp extends the Component interface to bring enhanced functionality to server-side rendering with Go.",
                    links: [
                        {
                            name: "Documentation",
                            url: "https://snburman.github.io/docs/fncmp",
                        },
                        {
                            name: "Github",
                            url: "https://github.com/snburman/fncmp",
                        },
                        {
                            name: "pkg.go.dev",
                            url: "https://pkg.go.dev/github.com/snburman/fncmp",
                        },
                    ],
                }}
            />
            <ProjectCard
                {...{
                    title: "Mnemo",
                    description:
                        "Mnemo is a simple, lightweight, and fast in-memory key-value store written in Go.",
                    links: [
                        // {
                        //     name: "Documentation",
                        //     url: "https://snburman.github.io/docs/mnemo",
                        // },
                        {
                            name: "Github",
                            url: "https://github.com/snburman/mnemo",
                        },
                        {
                            name: "pkg.go.dev",
                            url: "https://pkg.go.dev/github.com/snburman/mnemo",
                        },
                    ],
                }}
            />
        </Box>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    root: {
        display: "flex",
        flexDirection: "column",
        maxWidth: MAX_WIDTH_CONTENT,
    },
    headerContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "1rem",
    }
};
