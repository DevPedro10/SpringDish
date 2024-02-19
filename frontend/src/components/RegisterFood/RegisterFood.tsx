import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { CakeSlice } from 'lucide-react';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';

type RegisterFoodProps ={
    title: string;
}

const RegisterFood = ({ title }: RegisterFoodProps) => {
    const { toast } = useToast();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='font-bold'><CakeSlice size={20} className='mr-2' />{title}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Insert the food data</DialogTitle>
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
    )

};

export default RegisterFood;    