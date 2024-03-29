import { useState } from 'react';
import { Pencil } from 'lucide-react';
import { Modal } from '../Modal';
// import { useToast } from '../ui/use-toast';
// import { useFoodMutate } from '../hooks/useFoodMutate';

const UpdateFood = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    // const { toast } = useToast();
    // const { mutate } = useFoodMutate();

    // const submit = () => {
    //     const data = {
    //         title,
    //         price,
    //         image,
    //     }
    //     mutate(data);
    // }

    return (
        <Modal.Root>
            <Modal.Icon icon={Pencil} />
            <Modal.Content
                dialogTitle="Update the food data"
                key={title}
            >
                <Modal.Input id="food" label="Food" type="text" placeholder="Ex: Pizza" />
                <Modal.Input id="food" label="Price" type="number" placeholder="Ex: 45" />
                <Modal.Input id="food" label="Image" type="text" placeholder="Ex: https://www.pizzas.com/pepperoni.png" />
                <Modal.Button labelContent="Update" toastTitle="New food added" toastDescription="Food added successfully!" toastDuration={3000} />
            </Modal.Content>
        </Modal.Root>
    )

};

export default UpdateFood;    