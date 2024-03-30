import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import RegisterFood from "../RegisterFood/RegisterFood";
import { Toaster } from "../ui/toaster";

const Header = () => {
    return (
        <header>
            <h1 className='text-center text-2xl font-medium mx-auto mt-10'>Spring Dish Menu</h1>
            <form className='flex w-auto my-10 justify-between'>
                <div className='flex gap-5'>
                    <Input type='text' placeholder='Order ID' className='w-auto' />
                    <Input type='text' placeholder='Order Name' className='' />
                    <Button className='font-bold' variant={'secondary'}><Search size={20} className='mr-2' />Filter results</Button>
                </div>
                <RegisterFood />

            </form>
            <Toaster />
        </header>
    );
}

export default Header;