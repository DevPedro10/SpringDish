import { ReactNode } from "react";
import { Dialog } from "../ui/dialog";

interface ModalRootProps extends React.HTMLAttributes<HTMLDivElement>{
    children: ReactNode
}
export function ModalRoot({ children, ...rest }: ModalRootProps) {
    return (
        <Dialog {...rest}>
            {children}
        </Dialog>
    );
}