import { ThemeProvider } from '@/components/theme-provider'
// import { Pagination } from '@/components/ui/pagination'
// import { Skeleton } from '@/components/ui/skeleton'
// import { Switch } from '@/components/ui/switch'
import Card from './components/Card/Card'
import Header from './components/Header/Header';
import { useFoodData } from './components/hooks/useFoodData';
import { FoodData } from './components/Interfaces/food-data';

function App() {
  const { data } = useFoodData();

  if (!Array.isArray(data)) return <div>Dados inválidos.</div>;

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <main className="w-3/5 mx-auto">
        <Header />
        <section className='grid grid-cols-3 grid-rows-2'>
          {
            data?.map((food: FoodData) => (
              <Card key={food.id} title={food.title} price={food.price} image={food.image} />
            )
            )}
        </section>
      </main>
    </ThemeProvider >
  )
}

export default App;