import { Button } from "../ui/button";
import { CardProps } from "./CardProps";
import { Plus } from "lucide-react";


export default function Card({ title, price, image }: CardProps) {
    return (
        <div className="bg-zinc-900 rounded-lg border-2 border-gray50 w-11/12 h-72">
            <img className="w-11/12 h-40 object-cover rounded-lg m-auto mt-3" src="https://blog.biglar.com.br/wp-content/uploads/2023/06/iStock-1212512019.jpg" alt={title} />
            <div className="flex justify-between">
                <div className="p-4 flex-col justify-center">
                    <h1 className="text-xl font-medium ">{title}</h1>
                    <p className="text-sm text-zinc-500 mt-5">${price}</p>
                </div>
                <Button className="py-5 px-2 mt-14 mr-3" variant="secondary">{<Plus size={28}/>}</Button>
            </div>
        </div>
    )
}