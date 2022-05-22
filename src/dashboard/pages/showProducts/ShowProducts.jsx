import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../config/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import './ShowProducts.css'

const ShowProducts = () => {
  const [documents, setDocuments] = useState([]);
  const collectionName = "users";
  const docsCollectionRef = collection(firestore, collectionName);

  const readDocs = async () => {
    let array = [];

    const querySnapshot = await getDocs(docsCollectionRef);
    querySnapshot.forEach((doc) => {

      array.push({ ...doc.data(), id: doc.id });
    });

    setDocuments(array);
  };

  useEffect(() => {
    readDocs();
  }, []);

  return (
    <div className="container my-5">

      <div className="text-center h2 mb-5">
        All Products
      </div>

      <table className="table table-striped">
        <tr className="table_heading">
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
        </tr>
      {documents.map((doc) => {
          return (
            <tr className="table_row" key={doc.id}>
              <td>
                <img src={doc.img} width="50px" alt="" />
              </td>
              <td>{doc.title}</td>
              <td>{doc.price}</td>
            </tr>
          );
        })}
      </table>

    </div>
  );
};

export default ShowProducts;