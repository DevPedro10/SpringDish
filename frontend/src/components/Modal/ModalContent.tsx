import { ReactNode } from "react";
import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { toast } from "../ui/use-toast";


interface ModalContentProps {
    dialogTitle: string;
    toastTitle: string;
    toastDescription: string;
    toastDuration: number
    children: ReactNode;
}

const defaultToastDurationTime = 3000;
export function ModalContent({ children, dialogTitle, toastTitle, toastDescription, toastDuration = defaultToastDurationTime }: ModalContentProps) {
    return (

        <DialogContent>
            <DialogHeader>
                <DialogTitle>{dialogTitle}</DialogTitle>
            </DialogHeader>

            <form action="">
                {children}


                <DialogFooter className='mt-5 gap-2'>
                    <DialogClose asChild>
                        <Button className='font-bold' type='button' onClick={() => {
                            toast({
                                title: toastTitle,
                                description: toastDescription,
                                duration: toastDuration,
                            })
                        }} >Save</Button>
                    </DialogClose>
                </DialogFooter>
            </form>
        </DialogContent>
    );
}

