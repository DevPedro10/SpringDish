import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { CakeSlice } from 'lucide-react';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';
import { useFoodMutate } from '../hooks/useFoodMutate';
import { useState } from 'react';
interface RegisterFoodProps {
    title: string;
}

const RegisterFood = ({ title: titleLabel }: RegisterFoodProps) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const { toast } = useToast();
    const { mutate } = useFoodMutate();

    const submit = () => {
        const data = {
            title,
            price,
            image,
        }
        mutate(data);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='font-bold'><CakeSlice size={20} className='mr-2' />{titleLabel}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Insert the food data</DialogTitle>
                </DialogHeader>

                <form action="">
                    <Label htmlFor='food'>Food Name</Label>
                    <Input
                        className="my-2 w-full align-right"
                        type='text'
                        id='food'
                        placeholder='Ex: Pizza'
                        // value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <Label htmlFor='price'>Price</Label>
                    <Input
                        className="my-2 w-full"
                        type='number'
                        id='price'
                        placeholder='Ex: 45'
                        // value={price}
                        onChange={(e) => { setPrice(Number(e.target.value)) }}
                    />
                    <Label htmlFor='image'>Image</Label>
                    <Input
                        className="my-2 w-full"
                        type='text'
                        id='image'
                        placeholder='Ex: https://www.pizzas.com/pepperoni.png'
                        // value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />


                    <DialogFooter className='mt-5 gap-2'>
                        <DialogClose asChild>
                            <Button className='font-bold' type='button' onClick={() => {
                                submit();
                                toast({
                                    title: 'Food added',
                                    description: 'The food has been added to the menu',
                                    duration: 5000,
                                })
                            }}>Create</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )

};

export default RegisterFood;    