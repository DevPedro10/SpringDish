import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { CakeSlice } from 'lucide-react';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';
import { useFoodMutate } from '../hooks/useFoodMutate';
import { useState } from 'react';
import { Modal } from '../Modal';
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
        <Modal.Root>
            <Modal.Icon icon={CakeSlice} className="" label='Add new food' />
            <Modal.Content
                dialogTitle="Insert the food data"
                toastTitle="New food added"
                toastDescription="Food added successfully!"
                toastDuration={3000}
                key={title}
            >
                <Modal.Input onChange={e => setTitle(e.target.value)} id="food" label="Food Name" type="text" placeholder="Ex: Pizza" />
                <Modal.Input onChange={e => setPrice(Number(e.target.value))} id="food" label="Price" type="number" placeholder="Ex: 45" />
                <Modal.Input onChange={e => setImage(e.target.value)} id="food" label="Image" type="text" placeholder="Ex: https://www.pizzas.com/pepperoni.png" />
            </Modal.Content>
        </Modal.Root>
    )

};

export default RegisterFood;    