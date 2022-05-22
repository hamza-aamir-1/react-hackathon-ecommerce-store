import React from 'react'
import img0 from '../../assets/img/p-0.jpg'
import img1 from '../../assets/img/p-1.jpg'
import img2 from '../../assets/img/p-2.jpg'
import img3 from '../../assets/img/p-3.jpg'
import img4 from '../../assets/img/p-4.jpg'

const Home = () => {
  return (
    <div className='container'>
        <div className='row g-4 my-5'>

          <div className='col-lg-3 col-md-4 col-6'>
            <div>
              <div>
                <img src={img0} width="100%" alt="" />
              </div>
              <div>
                <div className='h3'>
                  Shoes 0
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit consequuntur illum ratione laborum quos natus beatae debitis est maiores vitae.
                </div>
                <form action="">
                  <button>Add to Cart</button>
                </form>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-6'>
            <div>
              <div>
                <img src={img1} width="100%" alt="" />
              </div>
              <div>
              <div className='h3'>
                  Shoes 1
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit consequuntur illum ratione laborum quos natus beatae debitis est maiores vitae.
                </div>
                <form action="">
                  <button>Add to Cart</button>
                </form>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-6'>
            <div>
              <div>
                <img src={img2} width="100%" alt="" />
              </div>
              <div>
                <div className='h3'>
                  Shoes 2
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit consequuntur illum ratione laborum quos natus beatae debitis est maiores vitae.
                </div>
                <form action="">
                  <button>Add to Cart</button>
                </form>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-6'>
            <div>
              <div>
                <img src={img3} width="100%" alt="" />
              </div>
              <div>
                <div className='h3'>
                  Shoes 3
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit consequuntur illum ratione laborum quos natus beatae debitis est maiores vitae.
                </div>
                <form action="">
                  <button>Add to Cart</button>
                </form>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-4 col-6'>
            <div>
              <div>
                <img src={img4} width="100%" alt="" />
              </div>
              <div>
                <div className='h3'>
                  Shoes 4
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit consequuntur illum ratione laborum quos natus beatae debitis est maiores vitae.
                </div>
                <form action="">
                  <button>Add to Cart</button>
                </form>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Home