import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './modules/ui/components/NavBar'
import LeftSide from './modules/ui/HomePage/Left-side'
import RightSide from './modules/ui/HomePage/Right-side'

function App() {
  return (
    <>
    <main className='bg-[#1a1823] h-screen w-screen flex flex-col '>
      <Navigation/>
      <div className='flex flex-grow items-center ml-15 mr-10 justify-between gap-100 h-screen flex-1'>
        <LeftSide />
        <RightSide />
      </div>
    </main>
    </>
  )
}

export default App
