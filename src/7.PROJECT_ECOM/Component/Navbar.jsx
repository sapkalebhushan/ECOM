import { Link } from "react-router-dom"
import './Navbar.css'
import { useState } from "react"


const Navbar = ({setSearch , size , data, setData ,Data}) =>{

    const [cat, setCat] = useState(false);
   
    
    
    const filterResult1 = (catItem)=>{
        var newData = Data;
        const result = newData.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
        
    }

    const filterResult2 = (catItem)=>{
        var newData = Data;
        const result = newData.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    const filterResult3 = (catItem)=>{
        var newData = Data;

        const result = newData.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }

    const filterResult4 = (catItem)=>{
        var newData = Data;

        const result = newData.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }
    const filterResult5 = ()=>{
        var newData = Data;
        setData(newData)
    }


    function option(){
        var navart2=document.getElementById('navart2')
        if(!cat){
            navart2.style.visibility= 'visible';
        }
        else(
            navart2.style.visibility= 'hidden'
        )
        setCat(!cat)
    }

    return(
        <div>
            <nav className="navbar">
                <div id='option'>
                
                    <div><Link to='/e-commerce'><img src="data:image/png;base64,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" alt="" /></Link></div>
                
                    <article className="navart1">
                    <div onClick={option}>{cat ? <p>Category</p> : <p>Category</p>} </div>
                        <div><Link style={{color:'black',textDecoration:'none'}} to='/'>Home</Link></div>
                        <div><Link style={{color:'black',textDecoration:'none'}} to='/'>product</Link></div>
                        <div><Link style={{color:'black',textDecoration:'none'}} to='/cart'>Cart🛒<sup style={{fontSize:'15px'}}>{size}</sup></Link></div>
                    </article>
                </div>
                
                <div id="categrory">
                    <div id='search'>
                        <div><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search your Products" /></div>
                        <br></br>
                        {/* <div onClick={option}>{cat ? <p>Category</p> : <p>Category</p>} </div> */}
                    </div>
                    <article id="navart2">
                        <button onClick={()=>filterResult1(`men's clothing`)}>Men</button>
                        <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
                        <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
                        <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
                        <button onClick={()=>filterResult5()}>All Products</button>
                    </article>
                </div>
            </nav>
        </div>
    )
}
export default Navbar