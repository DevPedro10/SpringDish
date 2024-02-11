import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'

export default function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <main className="">
      <Button></Button>
    </main>
    </ThemeProvider>
    )
}

