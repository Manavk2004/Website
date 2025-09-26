import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './modules/ui/components/NavBar'
import LeftSide from './modules/ui/HomePage/Left-side'
// import RightSide from './modules/ui/HomePage/Right-side'

function App() {
  return (
    <>
    <main className='bg-[#1a1823] h-screen w-screen flex flex-col '>
      <Navigation/>
      <div className='flex flex-grow-1 items-center ml-10'>
        <LeftSide />
        {/* <RightSide /> */}
      </div>
    </main>
    </>
  )
}

export default App
