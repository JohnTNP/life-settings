import { ThemeProvider } from '@/providers/theme-provider'
import { Home } from '@/components/home'
import { ModeToggle } from './components/theme-mode-toggle'
import { AppStateProvider } from './providers/app-state-provider'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <AppStateProvider>
        <div className='w-full max-w-7xl gap-2 mx-auto items-center flex flex-col h-screen p-4 font-sans'>
            <ModeToggle />
            <Home />
        </div>
      </AppStateProvider>
    </ThemeProvider>
  )
}

export default App
