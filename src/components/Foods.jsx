// import React, { useState } from 'react'

// function Foods() {

//     const [data,setData]=useState({
//         name:"",
//         email:"",
//         phone:"",
//         city:"",
//         food:""
//     });

//     const [submittedData, setSubmittedData] = useState(null);
//     const handleChange = (e) => {
//         setData({
//             ...data,
//             [e.target.name]: e.target.value
//         });
//     };
   

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmittedData(prev => [...prev, data]);
//         setData({ name: "", email: "", phone: "", city: "", food: "" });
//     };

   
    
//   return (
//     <div>
//       <h1>Foods update</h1>
//       <form  onSubmit={handleSubmit}>
//       <div>
//           <label>Name</label>
//           <input
//             type="Name"
//             placeholder="Enter Name"
//             value={data.name}
//        onChange={handleChange}
           
//             required
           
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             value={data.email}
//            onChange={handleChange}
           
//             required
           
//           />
//         </div>
//         <div>
//           <label>Phone</label>
//           <input
//             type="tel"
//             placeholder="enter Mobile"
//             value={data.phone}
//            onChange={handleChange}
           
//             required
           
//           />
//         </div>
//         <div>
//           <label>City</label>
//           <input
//             type="text"
//             placeholder="enter city"
//            onChange={data.city}
           
//             required
           
//           />
//         </div>
//         <div>
//           <label>Food</label>
//           <select name="food" id="food" value={data.food} onChange={handleSubmit}>
//             <option value="Veg">Veg</option>
//             <option value="non-veg">Non-veg</option>
//           </select>
//         </div>
       
//         <button type="submit" >Submit</button>
//       </form>
//       {submittedData && (

//     <div>
//         <table>
//   <tr>
//     <th></th>
//     <th>Name</th>
//     <th>Email</th>
//     <th>Phone</th>
//     <th>City</th>
//   </tr>
//   <tr>
//     <td>{submittedData.name}</td>
//     <td>{submittedData.email}</td>
//     <td>{submittedData.phone}</td>
//     <td>{submittedData.city}</td>
   
//   </tr>
  
// </table>
//     </div>
       
//       )}
      
    
//     </div>



//   )
// }

// export default Foods
