"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { StyleSheet } from "./types";
import CourseList from "@/components/courseList";
import PlainModal from "@/components/modal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LanguageBadges from "@/components/languageBadges";
import { useWindowSize } from "./hooks";
import { MAX_WIDTH_MOBILE } from "./constants";
import AnchorMenu from "@/components/menu/anchorMenu";

const sections = [
    { title: "Bio" },
    { title: "Education" },
    { title: "Alumni" },
    { title: "Volunteering" },
];

export default function About() {
    const [courseListOpen, setCourseListOpen] = React.useState(false);
    const window = useWindowSize();
    const isMobile = window ? window.width < MAX_WIDTH_MOBILE: false;

    return (
        <Box sx={styles.root}>
            {!isMobile && <AnchorMenu items={sections} />}
            <Box sx={[styles.content, { marginLeft: isMobile ? "0" : "4rem" }]}>
                <Box sx={styles.title}>
                    <Typography variant="h3">About</Typography>
                </Box>
                <Box sx={styles.topic}>
                    <Typography variant="h4" id="Bio" sx={styles.topicTitle}>
                        Bio
                    </Typography>
                    <LanguageBadges />
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
                        Certificate:&nbsp;
                        <Link
                            href="https://www.sait.ca/programs-and-courses/certificates/object-oriented-software-development"
                            style={styles.link}
                            target="_blank"
                        >
                            Object Oriented Software Development
                        </Link>
                        <br />
                        Southern Alberta Institute of Technology (SAIT)
                        <br />
                        <i>2020 - 2021 (Condensed)</i>
                    </Typography>
                    <br />
                    <Button onClick={() => setCourseListOpen(true)}>
                        <Typography style={styles.listItem}>
                            View Course Descriptions&nbsp;
                            <OpenInNewIcon sx={styles.openIcon} />
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
                    <Typography>
                        <b>Guest Q & A</b>
                    </Typography>
                    <Typography>
                        Southern Alberta Institute of Technology (SAIT)
                    </Typography>
                    <Typography>
                        <i>Fall 2022 / 2023</i>
                    </Typography>
                    <Typography>
                        Coordinated with faculty to observe final project
                        presentations from Object Oriented Software Development
                        students. Provided feedback and answered questions about
                        career paths and my experience in the industry.
                    </Typography>
                    <br />
                    <Typography>
                        <b>Mentorship Program</b>
                    </Typography>
                    <Typography>
                        Southern Alberta Institute of Technology (SAIT)
                    </Typography>
                    <Typography>
                        <i>Present</i>
                    </Typography>
                    <Typography>
                        Currently working with two fall semester Objected
                        Oriented Software Development students on a weekly basis
                        to provide guidance, feedback, and support while they
                        prepare to utilize their new skills in the software
                        industry.
                    </Typography>
                </Box>
                <Box sx={styles.topic}>
                    <Typography variant="h4" id="Alumni" sx={styles.topicTitle}>
                        Volunteering
                    </Typography>
                    <Typography>
                        <b>Food Service</b>
                    </Typography>
                    <Typography>Potter&lsquo;s Hands Soup Kitchen</Typography>
                    <Typography>
                        <i>Present</i>
                    </Typography>
                    <Typography>
                        Assisting with food preparation, serving, and cleanup
                        for the homeless and low-income community in Red Deer,
                        Alberta.
                    </Typography>
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
    content: {
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
