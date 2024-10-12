"use client";

import { Box, Typography } from "@mui/material";
import TimeLine, { TimeLineData } from "./components/timeline";
import { useWindowSize } from "@/app/hooks";
import { MAX_WIDTH_MOBILE } from "@/app/constants";
import AnchorMenu from "@/components/menu/anchorMenu";
import Link from "next/link";
import LanguageBadges from "@/components/languageBadges";

const sections = [
    { title: "Awake Labs Inc." },
    { title: "H3alth Technologies Inc." },
];

export default function Experience() {
    const window = useWindowSize();
    const isMobile = window ? window.width < MAX_WIDTH_MOBILE : false;

    return (
        <Box sx={styles.root}>
            {!isMobile && <AnchorMenu data={sections} />}
            <Box sx={[styles.content, { marginLeft: isMobile ? "0" : "4rem" }]}>
                <Box sx={styles.title}>
                    <Typography variant="h3">Experience</Typography>
                </Box>
                <Box>
                    <LanguageBadges />
                </Box>
                <Box>
                    <Link href="https://awakelabs.com" target="_blank">
                        <Typography
                            variant="h4"
                            id="Awake Labs Inc."
                            sx={styles.topicTitle}
                        >
                            Awake Labs Inc.
                        </Typography>
                    </Link>
                    <Typography>
                        <i>July 2021 - Sept 2024</i>
                        <br />
                        <i>Fully Remote</i>
                    </Typography>
                    <Typography>
                        Awake Labs is a company that specializes in creating
                        technology solutions for individuals with intellectual
                        and developmental disabilities. 
                    </Typography>
                    <br />
                    <TimeLine data={ALtimeLineData} />
                </Box>
                <Box>
                    <Typography
                        variant="h4"
                        id="H3alth Technologies Inc."
                        sx={styles.topicTitle}
                    >
                        H3alth Technologies Inc.
                    </Typography>
                    <TimeLine data={healthTimeLineData} />
                </Box>
            </Box>
        </Box>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    root: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    content: {
        maxWidth: "60rem",
        width: "100%",
    },
    title: {
        marginBottom: "2rem",
    },
};

const ALtimeLineData: TimeLineData[] = [
    {
        date: "July 2021",
        items: [
            {
                title: "Internship",
                description: "Started as a software development intern.",
            },
            {
                title: "Legacy System Repair",
                description:
                    "Inherited and repaired legacy system code which had stopped functioning, preventing the import of crucial client data. Reparations included system analysis, code refactoring, and performance optimization.",
            },
        ],
    },
    {
        date: "August - September 2021",
        items: [
            {
                title: "Architecture Research and Development",
                description:
                    "Met with team members and consultants to plan the development of a new system architecture. Conducted research on various technologies and frameworks to determine the best fit for the project.",
            },
        ],
    },
    {
        date: "October 2021",
        items: [
            {
                title: "Database Implementation",
                description:
                    "Co-designed and implemented a new database system to store client data using PostgreSQL and MongoDB.",
            },
            {
                title: "Authentication API",
                description:
                    "Co-developed an authentication API to secure client data access and manage user permissions.",
            },
            {
                title: "Data Migration Planning",
                description:
                    "Created a data migration plan to transfer data from the legacy system to the new database.",
            },
        ],
    },
    {
        date: "November 2021",
        items: [
            {
                title: "Data Migration",
                description:
                    "Developed a data migration tool using Python to parse and transfer client data from the legacy system to the new database. Began an incremental migration process to onboard clients to the new system.",
            },
            {
                title: "Client Data API",
                description:
                    "Co-designed and implemented a RESTful API using NodeJS to provide client data access to internal and external applications. ",
            },
        ],
    },
    {
        date: "December 2021",
        items: [
            {
                title: "Notification API",
                description:
                    "Co-designed and implemented a RESTful API using NodeJS to send mobile notifications to clients and staff via Firebase.",
            },
            {
                title: "Legacy IOT adaptation",
                description:
                    "Adapted legacy IOT device code to communicate with the new system architecture.",
            },
        ],
    },
    {
        date: "January - February 2022",
        items: [
            {
                title: "Promotion: Junior Developer",
                description:
                    "Promoted to Junior Developer following a successful internship.",
            },
            {
                title: "React Web Dashboard",
                description:
                    "Developed a React web dashboard for both clients and staff to visualize and manage client data. Features included a custom heatmap, line graph, notification data tables, and user management tools.",
            },
            {
                title: "Supporting APIs",
                description:
                    "Developed supporting APIs using NodeJS to provide data to the React web dashboard.",
            },
        ],
    },
    {
        date: "March - April 2022",
        items: [
            {
                title: "Maintence and Features",
                description:
                    "Maintained and added new features to the React web dashboard and supporting APIs.",
            },
            {
                title: "Product Planning",
                description:
                    "Met with team members and consultants to plan future product development. Conducted research and development on new features and technologies.",
            },
        ],
    },
    {
        date: "May 2022",
        items: [
            {
                title: "Interviewing, Onboarding, and Training",
                description:
                    "Created coding challenges and helped conduct interviews for intern and junior developer positions. Onboarded and helped train new team members.",
            },
        ],
    },
    {
        date: "June 2022",
        items: [
            {
                title: "Training",
                description:
                    "Continued training and assisting new team members.",
            },
            {
                title: "Maintenance and Features",
                description:
                    "Continued adding new features to React web dashboard and APIs for mobile consumption.",
            },
        ],
    },
    {
        date: "July 2022",
        items: [
            {
                title: "Promotion: Full Stack Developer",
                description:
                    "Promoted to Full Stack Developer with additional responsibilities in talent acquisition and the development and maintenance of full stack applications.",
            },
        ],
    },
    {
        date: "September 2022",
        items: [
            {
                title: "AWS Research and Development",
                description:
                    "Met with team members for cross-training of the planning, development, and deployment of various services using AWS. Learned to deploy services with Docker and Elastic Container Service via AWS.",
            },
        ],
    },
    {
        date: "October 2022",
        items: [
            {
                title: "Fall Intern Interviews, Onboarding, and Training",
                description:
                    "Created coding challenges, conducted interviews, and onboarded and trained new fall intern.",
            },
        ],
    },
    {
        date: "November 2022",
        items: [
            {
                title: "Training, Flask API Development",
                description:
                    "Worked with intern to develop a Flask API for a new graph feature in the React web dashboard.",
            },
            {
                title: "Redux Toolkit",
                description:
                    "Worked with intern to refactor React web dashboard to use Redux Toolkit for state management.",
            },
        ],
    },
    {
        date: "December 2022",
        items: [
            {
                title: "User Insights Feature",
                description:
                    "Developed and released new APIs and React web dashboard features with enhanced insights into user activity across platforms.",
            },
        ],
    },
    {
        date: "January - February 2023",
        items: [
            {
                title: "Golang Research and Development",
                description:
                    "Learned Golang for API development and began planning and implementation of new APIs using concurrency and performance optimization.",
            },
            {
                title: "Analytics API",
                description:
                    "Used Golang to create a new analytics API to provide granular insights into user interaction with specific front end features and components.",
            },
        ],
    },
    {
        date: "March 2023",
        items: [
            {
                title: "Access Control API",
                description:
                    "Created an API using Golang to manage user access control and permissions for the React web dashboard and mobile application.",
            },
        ],
    },
    {
        date: "April - May 2023",
        items: [
            {
                title: "Cross-Platform API Integration",
                description:
                    "Worked with developers to integrate new APIs into back and front end applications for cross-platform feature parity.",
            },
        ],
    },
    {
        date: "June - July 2023",
        items: [
            {
                title: "Fitbit Code Refactoring",
                description:
                    "Worked with IOT developer to refactor Fitbit code to improve data collection and synchronization.",
            },
        ],
    },
    {
        date: "September - October 2023",
        items: [
            { 
                title: "Promotion: Full Stack Developer II", 
                description: "Promoted to Full Stack Developer II with additional responsibilities in project management and team leadership." 
            },
            {
                title: "Stakeholder Meetings and Feedback",
                description: "Met with stakeholders to plan and develop new features and improvements to the platform."
            }
        ],
    },
    {
        date: "November 2023 - January 2024",
        items: [
            {
                title: "Project Planning: Fitbit Pairing Feature",
                description:
                    "Designed and planned the development of a new feature to pair Fitbit devices with the system architecture for improved data collection and synchronization.",
            },
            {
                title: "Golang Websocket API Development",
                description:
                    "Developed new APIs using Golang and Websockets to pair Fitbit devices in with a more efficient, secure, and user-friendly experience.",
            }
        ]
    },
    {
        date: "February 2024",
        items: [
            {
                title: "Fitbit Pairing: Major Update",
                description:
                    "Released major update to Fitbit pairing feature with improved user experience across all platforms.",
            },
        ]
    },
    {
        date: "March 2024",
        items: [
            
        ]
    },
    {
        date: "April 2024",
        items: [
            
        ]
    },
    {
        date: "May 2024",
        items: [
            
        ]
    },
    {
        date: "June 2024",
        items: [
            
        ]
    },
    {
        date: "July 2024",
        items: [
            
        ]
    },
    {
        date: "August 2024",
        items: [
            
        ]
    },
];

const healthTimeLineData: TimeLineData[] = [
    {
        date: "November 2020",
        items: [
            {
                title: "Co-op Internship",
                description: "Started as a software development co-op intern.",
            },
            {
                title: "Project Planning and Delegation",
                description:
                    "Met with team members to plan and delegate tasks for a new project involving hosting a 3D imaging application using Three.js and React.",
            },
            {
                title: "Cloud Platform Research and Development",
                description:
                    "Met with team members ",
            },
            
        ]
    },
    {
        date: "December 2020",
        items: [],
    }
];
