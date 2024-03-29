import { ButtonHTMLAttributes } from "react";
import { Button } from "../ui/button";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { toast } from "../ui/use-toast";

interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    labelContent: string;
    toastTitle: string;
    toastDescription: string;
    toastDuration: number;
}


const defaultToastDurationTime = 3000;
export function ModalButton({labelContent, toastTitle, toastDescription, toastDuration = defaultToastDurationTime }: ModalButtonProps) {
    return (
        <DialogFooter className='mt-5 gap-2'>
            <DialogClose asChild>
                <Button className='font-bold' type='button' onClick={() => {
                    toast({
                        title: toastTitle,
                        description: toastDescription,
                        duration: toastDuration,
                    })
                }} >{labelContent}</Button>
            </DialogClose>
        </DialogFooter>
    );
}