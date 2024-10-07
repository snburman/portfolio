import { StyleSheet } from "@/app/types";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function CourseList() {
    return (
        <>
            <Link
                href="https://www.sait.ca/programs-and-courses/certificates/object-oriented-software-development"
                target="_blank"
            >
                <Typography variant="h5" style={styles.courseListTitle}>
                    Object Oriented Software Development - SAIT
                </Typography>
            </Link>
            <ul style={styles.courseList}>
                {courseList.map((course, i) => (
                    <div
                        key={i}
                        tabIndex={0}
                        className="collapse collapse-arrow border-base-300 border"
                        style={styles.courseListItem}
                    >
                        <div className="collapse-title">{course.title}</div>
                        <div className="collapse-content">
                            <p>{course.info}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </>
    );
}

const styles: StyleSheet = {
    courseListTitle: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
    },
    courseListItem: {
        marginBottom: "1rem",
        listStyleType: "disc",
        paddingLeft: "1rem",
    },
};

const courseList = [
    {
        title: "Java Programming for OOSD",
        info: "Covered object-oriented software development with Java, including basic concepts and advanced topics like GUI, exception handling, and networking. The second half focused on Android app development, integrating these advanced Java concepts to meet market demand.",
    },
    {
        title: "Operating Systems and Networks",
        info: "Introduced network concepts, designs, client/server configurations, and system administration in a Unix/Linux environment, along with basic instruction in the latest Windows server environment. Emphasis was placed on the services necessary for effective administration and security.",
    },
    {
        title: "Career Planning and Management",
        info: "Taught skills necessary for career management, such as writing resumes and cover letters, job search strategies, and interviewing techniques.",
    },
    {
        title: "Rapid Application Development for OOSD",
        info: "Provided an introduction to the Microsoft .NET framework with Visual Studio and the C# programming language.",
    },
    {
        title: "Security for Developers",
        info: "Provided the necessary skills to write modern web applications securely.",
    },
    {
        title: "Web Application Development",
        info: "This course provided the skills to create websites and web applications using modern web languages like HTML, JavaScript, CSS, and PHP. It covered database processing with MySQL and publishing sites via FTP, along with an introduction to responsive web design techniques.",
    },
    {
        title: "Database Development",
        info: "This course introduced database concepts in three parts, integrated with programming to build database skills. It began with MS-Access, covering Entity Relationship Modeling, relational theory, and basic SQL. The second part explored SQL in depth using MS-SQL-Server, while the third focused on development and advanced SQL and TSQL on the MS-SQL-Server platform.",
    },
    {
        title: ".NET Web Applications",
        info: "This course introduced web application development using Microsoft's technologies and XML. Learned to install, configure, and maintain Internet Information Server (IIS) and built multi-tiered, database-driven web applications with ASP.NET, VB.NET, C#, and MS-SQL Server. XML for data transfer and web services architecture were also covered.",
    },
    {
        title: "Open Source Web Applications",
        info: "This course introduced web application development using open-source technologies, including Apache Web Server configuration. Built multi-tiered, database-driven applications with Java Server Pages using Oracle and MySQL and explored IOT technologies with Python, electronic components, and sensors.",
    },
    {
        title: "Career Advancement Practicum",
        info: "Conducted for 3 months off-campus at a participating company, offered a realistic experience of working in the technology industry.",
    },
    {
        title: "Threaded Project for OOSD",
        info: "Performed a system analysis, created a project schedule, designed and developed a prototype for a database and web-based software application, and prepared a proposal.",
    },
    {
        title: "Software Project Concepts",
        info: "Focused on software project definition, management, control, and related issues. Examined project management tools and business documents, such as requests for proposals and project plans, while learning about the Software Development Lifecycle and alternative models. Additionally, they explored team development with agile and varied programming methods, as well as object-oriented design using UML diagramming techniques.",
    },
];
