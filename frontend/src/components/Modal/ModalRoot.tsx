import { ReactNode } from "react";
import { Dialog } from "../ui/dialog";

interface ModalRootProps {
    children: ReactNode
}
export function ModalRoot({ children }: ModalRootProps) {
    return (
        <Dialog>
            {children}
        </Dialog>
    );
}