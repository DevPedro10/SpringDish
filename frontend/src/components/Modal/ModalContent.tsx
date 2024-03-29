import { ReactNode } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

interface ModalContentProps {
    dialogTitle: string;
    children: ReactNode;
}

export function ModalContent({ children, dialogTitle }: ModalContentProps) {
    return (

        <DialogContent>
            <DialogHeader>
                <DialogTitle>{dialogTitle}</DialogTitle>
            </DialogHeader>

            <form action="">{children}</form>
        </DialogContent>
    );
}

