import './App.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from './components/theme-mode-toggle'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <ModeToggle />
      <h1>Let's get started!</h1>
    </ThemeProvider>
  )
}

export default App
