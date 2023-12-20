
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './7.PROJECT_ECOM/Component/Home'

import Navbar from './7.PROJECT_ECOM/Component/Navbar'
import Cart from './7.PROJECT_ECOM/Component/Cart'
import { useState } from 'react'
import About from './7.PROJECT_ECOM/Component/About'
import Intro from './7.PROJECT_ECOM/Component/Intropage'
import Data from './7.PROJECT_ECOM/Data'


const App = () => {

    const [data, setData] = useState(Data);
    const [search, setSearch] = useState("");
    const [cart,setCart] = useState([]);

    function handleClick(item){
        setCart([...cart,item])
    }
    return(
        <section className="app">
            <BrowserRouter>
                <Navbar setSearch={setSearch} size={cart.length} data={data} setData={setData} Data={Data}/>
                <Routes>
                    <Route path='/e-commerce' element={<Intro handleClick={handleClick}/>}/>
                    <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}/>
                    <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
                    <Route path='/about/:aboutId' element={<About Data={Data} handleClick={handleClick} />}/>
                </Routes>
            </BrowserRouter>
            
            
        </section>
    )
}
export default App

