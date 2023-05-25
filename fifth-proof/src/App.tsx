import './App.css'
import { Header } from './components'
import { ResumeProduct } from './components/Resumeproduct'
import { } from './context'
import { OrderFormContextProvider } from './context/ProductContext'

function App() {

  return <>
    <Header />
    <OrderFormContextProvider>
      <ResumeProduct />
    </OrderFormContextProvider>
  </>

}


export default App
