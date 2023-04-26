import logo from './assets/logo.png'
import { MultiStepForm } from './components/'

function App() {
  return (
    <div className='flex flex-col justify-center items-center border-t-4 border-sky-700 min-h-screen transition-all sm:bg-white md:bg-gray-50'>
      <header className='p-3'>
        <img src={logo} alt="logo" />
      </header>
      <MultiStepForm />
    </div>
  )
}

export default App
