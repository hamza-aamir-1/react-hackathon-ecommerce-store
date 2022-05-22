import React, {useState} from 'react'
import './AddProduct.css'
import { Link } from 'react-router-dom'
import { storage } from '../../../config/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore/lite";
import { firestore } from '../../../config/firebase'
import { toast } from 'react-toastify'

const AddProduct = () => {

    const [progress, setProgress] = useState(0)
    const [downloadURL, setDownloadURL] = useState("");

    const handleUpload = (e) => {

        let file = e.target.files[0];

        console.log(file)

        if (!file) return;

        // Create a reference to 'mountains.jpg'
        const fileRef = ref(storage, "images/" + file.name);

        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log('Upload is ' + progress + '% done');

            setProgress(progress)
        },
            (error) => {
                console.log(error)
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setDownloadURL(downloadURL)
                });
            }
        )
    }

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const collectionName = "profile"
    const docsCollectionRef = collection(firestore, collectionName)

    const createDoc = async (e) => {
        e.preventDefault();

        let formData = { title, price, desc }

        try {
            const docRef = await addDoc(collection(firestore, "users"), {
              title: title,
              price: price,
              desc: desc,
              img: downloadURL
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        // try {
        //     const docRef = await addDoc(docsCollectionRef, formData);
        //     toast.success('User has been added!', {
        //         position: "bottom-left",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //     toast.error('Something went wrong.', {
        //         position: "bottom-left",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        //     console.error("Error adding document: ", e);
        // }
    }

  return (
    <div>
        <form action="" className='addProductForm mx-auto my-5 p-5 position-relative' onSubmit={createDoc}>
            <div className="login_form_heading text-center">Add Product</div>
            <Link to='/dashboard' className="top-0 position-absolute login_back_icon mt-5">
                <i className="bi bi-arrow-left-short"></i>
            </Link>
            <div className='mt-5'>
                <label htmlFor="title" className='labelAddProduct'>Title</label>
                <input type="text" id='title' className='form-control shadow-none mt-1' onChange={e => { setTitle(e.target.value) }} />
            </div>
            <div className='mt-3'>
                <label htmlFor="price" className='labelAddProduct'>Price</label>
                <input type="number" id='price' className='form-control shadow-none mt-1' onChange={e => { setPrice(e.target.value) }} />
            </div>
            <div className='mt-3'>
                <label htmlFor="description" className='labelAddProduct'>Description</label> 
                <textarea name="" cols="30" rows="5" id='description' className='form-control shadow-none mt-1' onChange={e => { setDesc(e.target.value) }}></textarea>
            </div>
            <div className='mt-3'>
                <label htmlFor="image" className='labelAddProduct'>Image</label>
                <input type="file" accept="image/*" id='image' className='form-control shadow-none mt-1' onChange={handleUpload} />
                <h6 className='text-center text-white mt-2'>Upload is <b>{progress} %</b> done.</h6>
            </div>
            <div className='mt-5 text-center'>
                <button className='btn addProductBtn'>Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct