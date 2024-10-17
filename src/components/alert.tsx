import { Alert } from "@mui/material";

export default function AlertMessage(props: {
    message: string;
    severity: string;
}) {
    if (props.message === "") return null;
    return <Alert severity={props.severity as any}>{props.message}</Alert>;
}
