"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { StyleSheet } from "./types";
import CourseList from "@/components/courseList";
import PlainModal from "@/components/menu/modal";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function About() {
    const [courseListOpen, setCourseListOpen] = React.useState(false);

    return (
        <Box sx={styles.root}>
            <Box sx={styles.listBox}>
                <ul style={styles.topicList}>
                    <li>
                        <Link href="#Education">
                            <div className="timeline-start mb-10">
                                <Typography>Education</Typography>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Alumni">
                            <div className="timeline-start mb-10">
                                <Typography>Alumni</Typography>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Alumni">
                            <div className="timeline-start mb-5">
                                <Typography>Volunteering</Typography>
                            </div>
                        </Link>
                    </li>
                </ul>
            </Box>
            <Box sx={styles.content}>
                <Box sx={styles.title}>
                    <Typography variant="h3">About</Typography>
                </Box>
                <Box sx={styles.topic}>
                    <Typography
                        variant="h4"
                        id="Education"
                        sx={styles.topicTitle}
                    >
                        Education
                    </Typography>
                    <Typography>
                        Certificate:
                        <Link
                            href="https://www.sait.ca/programs-and-courses/certificates/object-oriented-software-development"
                            style={styles.link}
                            target="_blank"
                        >
                            {" "}
                            Object Oriented Software Development{" "}
                        </Link>
                        <br />
                        Southern Alberta Institute of Technology (SAIT)
                        <br />
                        <i>2020 - 2021 (Condensed)</i>
                    </Typography>
                    <br />
                    <Button onClick={() => setCourseListOpen(true)}>
                        <Typography
                            style={styles.listItem}
                        >
                            View Course Descriptions <OpenInNewIcon sx={styles.openIcon}/>
                        </Typography>
                    </Button>
                    <br />
                    <PlainModal
                        open={courseListOpen}
                        handleClose={() => setCourseListOpen(false)}
                    >
                        <CourseList />
                    </PlainModal>
                </Box>
                <Box sx={styles.topic}>
                    <Typography variant="h4" id="Alumni" sx={styles.topicTitle}>
                        Alumni
                    </Typography>
                    <Typography variant="h6">Guest Q & A</Typography>
                </Box>
            </Box>
        </Box>
    );
}

const styles: StyleSheet = {
    root: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    listBox: {
        marginLeft: "4rem",
        marginTop: "5rem",
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
    content: {
        paddingLeft: "4rem",
        maxWidth: "60rem",
        width: "100%",
    },
    title: {
        marginBottom: "2rem",
    },
    topic: {
        marginBottom: "2rem",
    },
    topicTitle: {
        marginBottom: "1rem",
    },
    link: {
        fontWeight: "bold",
    },
    listItem: {
        fontWeight: "bold",
    },
    openIcon: {
        fontSize: "1.25rem",
        marginLeft: "0.5rem",
    },
};
