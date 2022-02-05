import React, {useState, useEffect} from 'react';
import "./app.css";

const Robots = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false)

    let componentMounted = true;

    useEffect(() => {
        const getRobots = async () => {
            setLoading(true)
            const response = await fetch("http://localhost:8000/api/robots")
           
            
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter.data);
            }
            return () => {
                componentMounted = false;
            }
            

        }

        getRobots()
    }, [])

    const Loading = () => {
        return(
            <> Loading....</>
        )
    }

    const ShowRobots = () => {
        return(
            <>
         <div className="buttons d-flex justify-content-center mb-5 pb-5">
             <button className="btn btn-outline-dark me-2">
               All
             </button>
         </div>
         {filter.data?.map((robot)=> {
               return(
                   <>
                <div className="col-md-3">
            <div className="card h-100 text-center p-4" key={robot.createdAt} >
                   <img src={robot.image} className="card-img-top photo " alt={robot.name}   
  
                  height="250px"/>
                   <div className="card-body">
               <h5 className="card-title mb-0">{robot.name}</h5>
               <p className="card-text">${robot.price}</p>
               <p className="card-text">{robot.stock}</p>
               <p className="card-text">{robot.material}</p>
               <button className="btn btn-outline-dark me-2">
               Add to Cart
             </button>
    
  </div>
                   </div>
                      </div>
                     
                    
                   </>
              
               )
           })}
       
         </>
        ) 
    }

    return (
        <div>
           <div className="container my-5 py-5">
               <div className="row">
                   <div className="col-12 mb-5">
                       <h1 className="display-6 fw-bolder text-center">Latest Robots</h1>
                       <hr/>
                   </div>
               </div>
               <div className="row justify-content-center">
                   {loading ? <Loading /> : <ShowRobots />}

               </div>
           </div>
           
        </div>
    )
}

export default Robots
