import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Toaster } from "../ui/toaster";
import { toast } from "../ui/use-toast";
import { Pencil } from "lucide-react";


type CardProps = {
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
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="py-3 px-2 mt-14 mr-3" variant="secondary">{<Pencil size={18} />}</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Update the food data</DialogTitle>
                            </DialogHeader>

                            <form action="">
                                <Label htmlFor='food'>Food Name</Label>
                                <Input className="my-2 w-full align-right" type='text' id='food' placeholder='Ex: Pizza' />
                                <Label htmlFor='price'>Price</Label>
                                <Input className="my-2 w-full" type='text' id='price' placeholder='Ex: 45' />
                                <Label htmlFor='image'>Image</Label>
                                <Input className="my-2 w-full" type='text' id='image' placeholder='Ex: https://www.pizzas.com/pepperoni.png' />


                                <DialogFooter className='mt-5 gap-2'>
                                    <DialogClose asChild>
                                        <Button className='font-bold' type='button' onClick={() => {
                                            toast({
                                                title: 'Food added',
                                                description: 'The food has been added to the menu',
                                                duration: 5000,
                                            })
                                        }} >Save</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                    <Toaster />
                </div>
            </div>
        </div >
    )
}