import { ThemeProvider } from '@/components/theme-provider'
// import { Pagination } from '@/components/ui/pagination'
// import { Skeleton } from '@/components/ui/skeleton'
// import { Switch } from '@/components/ui/switch'
import Card from './components/Card/Card'
import useFetch from './hooks/useFetch'
import Header from './components/Header/Header';

type Menu = {
  id: number;
  title: string;
  price: number;
  image: string;

}
export default function App() {

  const { data: menu, isFetching } = useFetch<Menu[]>(`${"http://localhost:8080"}/menu`);

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main className="w-3/5 mx-auto">
        <Header />
        <section className='grid grid-cols-3 grid-rows-2'>
          {isFetching && <p>Loading...</p>}
          {menu?.map((item) => (
            <Card key={item.id} title={item.title} price={item.price} image={item.image} />
          ))}
        </section>
      </main>
    </ThemeProvider >
  )
}

