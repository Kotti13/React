import React, { useState } from "react";

function Foods() {
  const [data, setData] = useState([]);

   const [fieldInfo,updateFieldInfo] = useState({
    name : "",
    email : "",
    phone : "",
    city : "",
    food : "",
   })

   function handleInput(e){
        const {value,name} = e.target;

        updateFieldInfo((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
   }

   function handledelete(index){

        const updatedData= [...data]
        updatedData.splice(index,1);

        setData(updatedData)
   }
 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const data = {...fieldInfo};

    console.log(data);
    

    for(let key in data){
        if(data[key].trim() === ""){
            return
        }
    }
    
    setData((prev)=>{
        console.log(prev);
        
        return [...prev,data]
    });
  };

  return (
    <div>
      <h1>Foods Update</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInput}
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleInput}
            placeholder="Enter Mobile"
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleInput}
            placeholder="Enter City"
            required
          />
        </div>
        <div>
          <label>Food</label>
          <select name="food" value={data.food} onChange={handleInput}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      { 
        data && data.map((e,i)=>{
            console.log(e);
            
            return(
                <div key={i}>
          <table>
  <thead>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>City</th>
    <th>Food</th>
  </thead>
  <tbody>
  <tr>
    <td>{e.name}</td>
    <td>{e.email}</td>
    <td>{e.phone}</td>
    <td>{e.city}</td>
    <td>{e.food}</td>
    <td><button onClick={()=> handledelete(i)}>delete</button></td>
  </tr>
  </tbody>
  
  
</table>
        </div>
            )
        })
    }
    </div>
  );
}

export default Foods;
