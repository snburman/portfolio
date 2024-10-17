import { Alert } from "@mui/material";

export type Severity = "error" | "warning" | "info" | "success";

export default function AlertMessage(props: {
    message: string;
    severity: Severity;
}) {
    if (props.message === "") return null;
    return <Alert severity={props.severity}>{props.message}</Alert>;
}
