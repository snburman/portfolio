"use client";

import { StyleSheet } from "@/app/types";
import { Box, Typography } from "@mui/material";

export type TimeLineData = {
    date: string;
    items: { title: string; description: string }[];
};

export default function TimeLine(props: { data: TimeLineData[] }) {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {props.data.map((data, index) => (
                <li key={index}>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div
                        className={`timeline-${
                            index % 2 === 0 ? "start" : "end"
                        } mb-10 md:text-end`}
                    >
                        <time className="font-mono italic">{data.date}</time>
                        {data.items.map((item, index) => (
                            <Box key={index} sx={styles.itemBox}>
                                <Typography><b>{item.title}</b></Typography>
                                <Typography variant="body1">
                                    {item.description}
                                </Typography>
                            </Box>
                        ))}
                    </div>
                    <hr />
                </li>
            ))}
        </ul>
    );
}

const styles: StyleSheet = {
    itemBox: {
        marginTop: "0.5rem",
    }
}