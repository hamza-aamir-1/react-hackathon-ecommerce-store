import React from 'react'
import './AddProduct.css'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <div>
        <form action="" className='addProductForm mx-auto my-5 p-5 position-relative'>
            <div className="login_form_heading text-center">Add Product</div>
            <Link to='/dashboard' className="top-0 position-absolute login_back_icon mt-5">
                <i className="bi bi-arrow-left-short"></i>
            </Link>
            <div className='mt-5'>
                <label htmlFor="title" className='labelAddProduct'>Title</label>
                <input type="text" id='title' className='form-control shadow-none mt-1' />
            </div>
            <div className='mt-3'>
                <label htmlFor="price" className='labelAddProduct'>Price</label>
                <input type="number" id='price' className='form-control shadow-none mt-1' />
            </div>
            <div className='mt-3'>
                <label htmlFor="description" className='labelAddProduct'>Description</label> 
                <textarea name="" cols="30" rows="5" id='description' className='form-control shadow-none mt-1'></textarea>
            </div>
            <div className='mt-3'>
                <label htmlFor="image" className='labelAddProduct'>Image</label>
                <input type="file" accept="image/*" id='image' className='form-control shadow-none mt-1' />
            </div>
            <div className='mt-5 text-center'>
                <button className='btn addProductBtn'>Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct