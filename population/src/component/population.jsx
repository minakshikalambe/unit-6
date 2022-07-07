
function PopulationDetails({
   country,
   city,
   population1
}){

 return(
        <div style={{display:"flex" ,gap:"2rem", border:"1px solid black", padding:"1rem", margin:"0.5rem"}}>
        <div>
            <div>Country{country}</div>
            <div>City{city}</div>
            <div>Population{population1}</div>
        </div>
        <button>Edit</button>
        <button>Delete</button>
        </div>
    )

}
export default PopulationDetails