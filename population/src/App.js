import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PopulationDetails from './component/population';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [assOrder, setAssOrder]= useState("asc");
  

  useEffect(()=>{
    fetchData({
      page, 
      assOrder
    });
  },[page,assOrder])

  const fetchData = async ({page,assOrder
  }) => {
    setLoading(true);
 
    axios({
      method: 'get',
      url: "http://localhost:3000/population",
      params: {
        _page: page,
        _sort: "population1",
      }
    })
    .then(res => {
      console.log(res)
      setData(res.data);
      setLoading(false);
    })
    .catch(err => {
      setError(true);
      setLoading(false);
    })
  } 

  return (
    <div className="App">
        <h1>Population Details</h1>
        { loading && <div>loading</div>}
        <br/>
        <div>
          <button disabled={assOrder==="desc"} onClick={()=>setAssOrder("desc")}>
            COST SORT BY DESC
          </button>
        </div>
        <div>
          <button disabled={page===1} onClick={() => setPage(page - 1)}>prev</button>
          <button onClick={() => setPage(page + 1)}>next</button>
        </div>
        <div>
          {
            data.map(data1=>
              <PopulationDetails key={data1.id} {...data1} />)
          }
        </div>
    </div>
  );
}






export default App;
