// badges available from: https://badges.pages.dev/

import { StyleSheet } from "@/app/types";
import { Box } from "@mui/material";
import Image from "next/image";

export default function LanguageBadges() {

    return(
        <Box style={styles.root}>
            <Image style={styles.badge} src="/img/react.svg" alt="react" width={90} height={40}/>
            <Image style={styles.badge} src="/img/golang.svg" alt="golang" width={100} height={40}/>
            <Image style={styles.badge} src="/img/javascript.svg" alt="javascript" width={100} height={40}/>
            <Image style={styles.badge} src="/img/typescript.svg" alt="typescript" width={100} height={40}/>
            <Image style={styles.badge} src="/img/python.svg" alt="python" width={100} height={40}/>
            <Image style={styles.badge} src="/img/html5.svg" alt="html5" width={100} height={40}/>
            <Image style={styles.badge} src="/img/css3.svg" alt="css3" width={100} height={40}/>
            <Image style={styles.badge} src="/img/mongodb.svg" alt="mongodb" width={100} height={40}/>
            <Image style={styles.badge} src="/img/postgresql.svg" alt="postgresql" width={100} height={40}/>
            <Image style={styles.badge} src="/img/bash.svg" alt="GNU bash" width={100} height={40}/>
            <Image style={styles.badge} src="/img/github.svg" alt="GNU bash" width={100} height={40}/>
            <Image style={styles.badge} src="/img/bitbucket.svg" alt="GNU bash" width={100} height={40}/>
            <Image style={styles.badge} src="/img/mui.svg" alt="MUI" width={100} height={40}/>
            <Image style={styles.badge} src="/img/figma.svg" alt="figma" width={100} height={40}/>
            <Image style={styles.badge} src="/img/fitbit.svg" alt="fitbit" width={100} height={40}/>
        </Box>
    )
}

const styles: StyleSheet = {
    root: {
        display: "flex",
        // justifyContent: "space-between",
        // alignItems: "center",
        flexWrap: "wrap",
        padding: "1rem",
        gap: "0.5rem",
    },
    badge: {
        height: "auto",
        width: "auto",
    },
}