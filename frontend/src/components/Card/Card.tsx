import { Toaster } from "../ui/toaster";
import UpdateFood from "../UpdateFood/UpdateFood";

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
                    <UpdateFood  />
                    <Toaster />
                </div>
            </div >
        </div >

    )
}
