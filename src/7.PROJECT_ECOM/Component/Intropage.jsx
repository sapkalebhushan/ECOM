import './Intropage.css'
import { Link } from 'react-router-dom'
import Data from '../Data'
const Intro = ({handleClick}) =>{
    return(
        <section id='sec'>
            <div className='main'>
                <div>
                    <h1>Mega offer 80% off</h1>
                    <Link to='/'><button>Shop Now...</button ></Link>
                </div>
            </div>
            <div className='main2'>
                
            </div>
            <div id='offers'>
                <div><img src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                <div><img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></div>
                <div><img src="https://i.pinimg.com/originals/87/b0/2b/87b02b25551236024b9142260e908afe.jpg" alt="" /></div>
                <div><img src="https://www.bustedtees.com/cdn/shop/files/Sci-Fi_1512x.jpg?v=1625586190" alt="" /></div>
                <div><img src="https://www.bustedtees.com/cdn/shop/files/BTHats_540x.jpg?v=1616758164" alt="" /></div>
                <div><img src="https://www.bustedtees.com/cdn/shop/files/11_3_1512x.jpg?v=1614699072" alt="" height={'450px'} width={'300px'}/></div>
            </div>
            <h2>Products ➡️</h2>
            <div id='product'>
                {Data.map((item) => { 
                    return(
                        <div className='card'>
                           <Link to={`/about/${item.id}`}><img src={item.image} alt="" height={'200px'} width={'200px'}/></Link>
                            <div>{item.title}</div>
                            <div>Price: ${item.price}</div>
                            <div>Rating: {item.rating.rate}⭐</div>
                            <button onClick={()=>handleClick(item)}>Add Cart</button>
                        </div>
                    )
                } )}
            </div>
            <footer>
                <div id='box1'>
                    <img  src="https://dwglogo.com/wp-content/uploads/2016/02/Amazoncom-yellow-arrow.png" height={'64px'} width={'150px'} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore aliquid necessitatibus, blanditiis sunt facilis cumque, dicta omnis delectus error quod repellat, maiores hic ab odio amet suscipit. In facilis.
                    </p>
                    <div>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div id='box2'>
                    <table>
                        <thead>
                           <tr>
                                <td>Discover</td> 
                                <td>Community</td>
                                <td>About</td>
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Editor's Choice</td>
                                <td>Blog</td>
                                <td>About Us</td>
                            </tr>
                            <tr>
                                <td>Curated Collections</td>
                                <td>Forum</td>
                                <td>FAQ</td>
                            </tr>
                            <tr>
                                <td>Radio</td>
                                <td>Creators</td>
                                <td>License Summary</td>
                            </tr>
                            <tr>
                                <td>Popular Image</td>
                                <td>Camera</td>
                                <td>Terms of Service</td>
                            </tr>
                            <tr>
                                <td>Popular Videos</td>
                                <td></td>
                                <td>Privacy Policy</td>
                            </tr>
                            <tr>
                                <td>Popular Music</td>
                                <td></td>
                                <td>Cookies Policy</td>
                            </tr>
                            <tr>
                                <td>Popular Searches</td>
                                <td></td>
                                <td>API</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </footer>
        </section>
    )
}
export default Intro