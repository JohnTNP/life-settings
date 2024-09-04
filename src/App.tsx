import { ThemeProvider } from '@/providers/theme-provider'
import { Home } from '@/components/home'
import { AppStateProvider } from './providers/app-state-provider'
import Navbar from './components/navbar'
import { Toaster } from '@/components/ui/sonner'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <AppStateProvider>
        <div className='w-full max-w-7xl gap-2 mx-auto items-center flex flex-col h-screen p-4 font-sans'>
            <Navbar />
            <Home />
            <Toaster position='top-right' duration={2000} />
        </div>
      </AppStateProvider>
    </ThemeProvider>
  )
}

export default App
