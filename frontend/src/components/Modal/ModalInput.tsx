import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ModalInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    type: string;
    id: string;

}

export function ModalInput({ label, placeholder, type, id, ...rest }: ModalInputProps) {
    return (
        <div>
            <Label htmlFor='food'>{label}</Label>
            <Input {...rest} className="my-2 w-full" type={type} id={id} placeholder={placeholder} />
        </div>
    );
}