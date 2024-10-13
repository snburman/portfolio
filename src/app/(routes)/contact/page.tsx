"use client";

import { ContactForm, sendEmail } from "@/app/api/email/sendEmail";
import { validateEmail } from "@/app/utils/validate";
import {
    Alert,
    Box,
    Button,
    FormControl,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit } = useForm<ContactForm>();
    const [alert, setAlert] = useState("");

    function onSubmit(data: ContactForm) {
        if (!validateEmail(data.email)) {
            setAlert("Please enter a valid email address.");
            setTimeout(() => setAlert(""), 5000);
            return;
        }
        sendEmail(data);
    }

    function onError() {
        setAlert("Please fill out all fields.");
        setTimeout(() => setAlert(""), 5000);
    }

    return (
        <>
            <Box sx={styles.root}>
                <Typography variant="h3">Contact</Typography>
                <Typography>Feel free to contact me with any inquiries at sean@seanburman.com, via Linkedin, or with the form below.</Typography>
                <Box sx={styles.formContainer}>
                    <FormControl>
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
                            <Button type="submit" variant="contained">
                                Submit
                            </Button>
                        </form>
                    </FormControl>
                </Box>
            </Box>
            {alert !== "" && (
                <Alert severity="error">
                    {alert}
                </Alert>
            )}
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
        flexDirection: "column",
        gap: "1rem",
        width: "20rem",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        // gap: "1rem",
    },
};
