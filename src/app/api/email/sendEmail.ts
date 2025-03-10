export type ContactForm = {
    email: string;
    message: string;
};

export async function sendEmail(data: ContactForm) {
    const endpoint = "/api/email";
    return fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((res) => {
            if (!res.success) {
                console.error("failed to send email", res);
                return false;
            } else {
                return true;
            }
        })
        .catch((err) => {
            console.error("failed to send email", err);
            return false;
        });
}