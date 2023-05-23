import './App.css'
import { Header } from './components'
import { ResumeProduct } from './components/Resumeproduct'
import { ProductContextProvider } from './context'

function App() {

  return <>
    <Header />
    <ProductContextProvider>
      <ResumeProduct />

    </ProductContextProvider>
  </>

}


export default App
