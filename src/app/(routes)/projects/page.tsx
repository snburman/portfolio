import { Box, Typography } from "@mui/material";
import ProjectCard from "./components/projectCard";
import { MAX_WIDTH_CONTENT } from "@/app/constants";

export default function Projects() {
    return (
        <Box sx={styles.root}>
            <Box sx={styles.headerContainer}>
                <Typography variant="h3">Projects</Typography>
            </Box>

            <ProjectCard
                {...{
                    title: "bitscrawler.com",
                    description:
                        `Bitscrawler is a multiplayer online game made with Golang and React Native Web.
                        A full stack project consisting of three applications, it features real-time online gameplay using websockets and REST.
                        Included are a drawing application for creating custom game assets, a chat system, a game console compiled
                        to web assembly, and secure user authentication.
                        `,
                    links: [
                        {
                            name: "bitscrawler.com",
                            url: "https://bitscrawler.com",
                        },
                        {
                            name: "Documentation",
                            url: "https://docs.bitscrawler.com",
                        },
                        {
                            name: "Client Repo",
                            url: "https://github.com/snburman/game-client",
                        },
                        {
                            name: "Server Repo",
                            url: "https://github.com/snburman/game-server",
                        },
                        {
                            name: "Game Repo",
                            url: "https://github.com/snburman/game",
                        },
                    ],
                }}
            />
            <ProjectCard
                {...{
                    title: "Fncmp",
                    description:
                        "FnCmp extends the Component interface to bring enhanced functionality to server-side rendering with Go. Users can create functional components, handle events, and create lightening-fast dnyamic web pages with ease.",
                    links: [
                        {
                            name: "Documentation",
                            url: "https://snburman.github.io",
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
                        "Mnemo is a simple, lightweight, and fast in-memory key-value store written in Go. Users can store session data and implement hooks for cache updates for complex server-side applications.",
                    links: [
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
