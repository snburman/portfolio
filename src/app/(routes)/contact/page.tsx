"use client";

import { ContactForm, sendEmail } from "@/app/api/email/sendEmail";
import { validateEmail } from "@/app/utils/validate";
import AlertMessage from "@/components/alert";
import {
    Box,
    Button,
    FormControl,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
    const router = useRouter();
    const { register, handleSubmit } = useForm<ContactForm>();
    const [alert, setAlert] = useState({ message: "", severity: "" });
    const [loading, setLoading] = useState(false);

    async function onSubmit(data: ContactForm) {
        if (!validateEmail(data.email)) {
            setAlert({
                message: "Please enter a valid email address.",
                severity: "error",
            });
            return;
        }
        setLoading(true);
        const sent = await sendEmail(data);
        if (sent) {
            setLoading(false)
            router.push("/contact/success")
        } else {
            setLoading(false)
            setAlert({
                message: "Message failed to send.",
                severity: "error",
            });
        }
    }

    function onError() {
        setAlert({
            message: "Message failed to send.",
            severity: "error",
        });
    }

    return (
        <>
            <Box sx={styles.root}>
                <Typography variant="h3">Contact</Typography>
                <Typography>
                    Feel free to contact me with any inquiries at
                    sean@seanburman.com, via Linkedin, or with the form below.
                </Typography>
                <Box sx={styles.formContainer}>
                    <FormControl style={styles.formControl}>
                        <form
                            onSubmit={handleSubmit(onSubmit, onError)}
                            style={styles.form}
                        >
                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                                required
                                {...register("email", { required: true })}
                            />
                            <TextField
                                id="message"
                                placeholder="Message"
                                multiline
                                rows={4}
                                {...register("message", { required: true })}
                            />
                            <Button type="submit" variant="contained" disabled={loading}>
                                {!loading ? "Submit" : "Loading"}
                            </Button>
                        </form>
                    </FormControl>
                </Box>
            </Box>
            <AlertMessage severity={alert.severity} message={alert.message} />
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    root: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        // width: "100%",
    },
    formContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "1rem",
    },
    formControl: {
        width: "90%",
        maxWidth: "400px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
    },
};
