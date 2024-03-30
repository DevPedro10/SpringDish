import { ButtonHTMLAttributes, ElementType } from "react";
import { Button } from "../ui/button";
import { DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";

interface IconProps extends ButtonHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon: ElementType;
}

export function ModalIcon({ label, icon: Icon }: IconProps) {
    return (
        <DialogTrigger asChild>
            <Button className="py-3 px-2 mr-3" variant="secondary">
                <Icon size={18}/>
                <Label>{label}</Label>
            </Button>
        </DialogTrigger>
    );
}