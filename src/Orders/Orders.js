/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import './Orders.css';
import {useStateValue} from '../Reducers/StateProvider';
import {db} from '../Login/firebase';
import { collection,doc,getDoc, onSnapshot} from 'firebase/firestore';



function Orders() {
    const [{basket,user},dispatch]=  useStateValue();
    const [orders,setOrders] = useState([]);

    
    
    useEffect( async ()=>{
        try{
        const ordersRef = doc(collection(db, `users/${user?.uid}/orders`));
        const ordersQuerySnapshot = await getDoc(ordersRef);
        ordersQuerySnapshot.docs.forEach((doc) => {
            console.log(doc.id, doc.data());
        })
    }catch(err) {
        console.log(err)
    }
    });
        // const docRef = doc(db, "orders", user?.uid);
        // const docSnap = getDoc(docRef);
        // console.log(docSnap);
        // if(docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        //    }
   // });

    return (
        <div>
        <h1>This is the orders page</h1>
        </div>
    )
}

export default Orders;
