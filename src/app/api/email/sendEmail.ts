export type ContactForm = {
    email: string;
    message: string;
};

export function sendEmail(data: ContactForm) {
    const endpoint = "/api/email";
    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((res) => {
            if (!res.success) {
                alert(res.success);
                throw new Error("Failed to send email.");
            }
        })
        .catch((err) => {
            throw new Error(err);
        });
}