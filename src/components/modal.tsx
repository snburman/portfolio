import { StyleSheet } from "@/app/types";
import { Box, Button, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

interface Props {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

export default function PlainModal({ open, handleClose, children }: Props) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={styles.modal}
        >
            <>
                <Box sx={styles.content}>{children}</Box>
                <Button style={styles.button} onClick={handleClose}>
                    <CancelIcon style={styles.icon} />
                </Button>
            </>
        </Modal>
    );
}

const styles: StyleSheet = {
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
        marginTop: "4.5rem",
        maxHeight: "80%",
        maxWidth: "80%",
        backgroundColor: "background.paper",
        padding: "1rem",
        overflowY: "scroll",
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem", 
        scrollbarColor: "#000 transparent",
        scrollbarGutter: "1rem",
        scrollbarWidth: "auto",
    },
    button: {
        position: "absolute",
        right: "1rem",
        top: "1rem",
        zIndex: 100,
        cursor: "pointer",
        padding: 0,
    },
    icon: {
        color: "#FFFFFF",
        fontSize: "2.5rem",
    },
};
