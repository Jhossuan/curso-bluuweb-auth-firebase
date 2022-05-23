import { collection, getDocs, query, where } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { db } from '../firebase' 

export const useFirestore = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        getData()
    },[])

    const getData = async() => {
        try {
            setLoading(true)
            const dataRef = collection(db, 'urls')
            const q = query(
                dataRef, 
                where('uid', '==' , 'AsbrzOTXRCNp3G1R7DwNIoOt93I2')
            );
            const querySnapshot = await getDocs(q)
            const dataDb = querySnapshot.docs.map((doc) => doc.data())
            setData(dataDb)
        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setLoading(false)

        }
    }

    return {
        data, error, loading
    }
}