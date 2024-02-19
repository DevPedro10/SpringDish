import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { Pagination } from '@/components/ui/pagination'
// import { Skeleton } from '@/components/ui/skeleton'
// import { Switch } from '@/components/ui/switch'
import { Search, CakeSlice } from 'lucide-react';
import { Toaster } from './components/ui/toaster'
import { useToast } from './components/ui/use-toast'
import { DialogClose } from '@radix-ui/react-dialog'
import Card from './components/Card/Card'

export default function App() {
  const { toast } = useToast()


  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main className="w-3/5 mx-auto ">
        <header>
          <h1 className='text-center text-2xl font-medium mx-auto mt-10'>Spring Dish Menu</h1>
          <form className='flex w-auto my-10 justify-between'>
            <div className='flex gap-5'>
              <Input type='text' placeholder='Order ID' className='w-auto' />
              <Input type='text' placeholder='Order Name' className='' />
              <Button className='font-bold' variant={'secondary'}><Search size={20} className='mr-2' />Filter results</Button>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className='font-bold'><CakeSlice size={20} className='mr-2' />New Food</Button>
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
          </form>
          <Toaster />
        </header>
        <section className='grid grid-cols-3 grid-rows-2'>
          <Card title='Pizza' price={45} image='https://www.pizzas.com/pepperoni.png' />
          <Card title='Pizza' price={45} image='https://www.pizzas.com/pepperoni.png' />
          <Card title='Pizza' price={45} image='https://www.pizzas.com/pepperoni.png' />
          
          <Card title='Pizza' price={45} image='https://www.pizzas.com/pepperoni.png' />
          <Card title='Pizza' price={45} image='https://www.pizzas.com/pepperoni.png' />
        </section>

      </main>
    </ThemeProvider >
  )
}

