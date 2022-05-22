import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

const Home = () => {
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
    <div className="container">
      <div className="row g-4 my-5">

        {documents.map((doc) => {
          return (
            <div className="col-lg-3 col-md-4 col-6" key={doc.id}>
              <div>
                <div>
                  <img src={doc.img} width="100%" alt="" />
                </div>
                <div>
                  <div className="h3">{doc.title}</div>
                  <div className="h4 text-danger">{doc.price}</div>
                  <div>{doc.desc}</div>
                  <form action="">
                    <button>Add to Cart</button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Home;