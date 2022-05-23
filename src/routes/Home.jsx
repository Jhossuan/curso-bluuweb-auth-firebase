import Title from "../components/Title"
import { useFirestore } from "../hooks/useFirestore"

const Home = () => {

  const {data, error, loading} = useFirestore()
  if(loading) return <p>Loading data...</p>
  if(error) return <p>{error}</p>


  return (
    <div>
      <Title text='Home'/>
      {
        data.map(item => (
          <div key={item.nanoid}>
            <p>{item.nanoid}</p>
            <p>{item.origin}</p>
            <p>{item.uid}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home
