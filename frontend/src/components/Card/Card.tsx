import { Pencil } from "lucide-react";
import { Modal } from "../Modal";
import { Toaster } from "../ui/toaster";

interface CardProps {
    title: string;
    price: number;
    image?: string;
}


export default function Card({ title, price, image }: CardProps) {
    return (
        <div className="bg-zinc-900 rounded-lg border-2 border-gray50 w-11/12 h-72 mt-6">
            <img className="w-11/12 h-40 object-cover rounded-lg m-auto mt-3" src={image} alt={title} />
            <div className="flex justify-between">
                <div className="p-4 flex-col justify-center">
                    <h1 className="text-xl font-medium ">{title}</h1>
                    <p className="text-sm text-zinc-500 mt-5">${price}</p>
                </div>
                <div>
                    <Modal.Root>
                        <Modal.Icon icon={Pencil} />
                        <Modal.Content
                            dialogTitle="Update the food data"
                            toastTitle="Food added"
                            toastDescription="asdasd"
                            toastDuration={3000}
                            key={title}
                        >
                            <Modal.Input id="food" label="Food" type="text" placeholder="Ex: Pizza" />
                            <Modal.Input id="food" label="Price" type="number" placeholder="Ex: 45" />
                            <Modal.Input id="food" label="Image" type="text" placeholder="Ex: https://www.pizzas.com/pepperoni.png" />
                        </Modal.Content>
                    </Modal.Root>
                    <Toaster />
                </div>
            </div>
        </div >
    )
}
