// import React, {useState} from 'react'
// import {studentData} from "../data/data";
//
// const TaxaCazareUpdateValoare = () =>
// {
//     const [roleUpdateValoare, setRoleUpdateValoare] = useState(studentData.TaxaCazareUpdateValoare.Autorizari[0].Rol)
//
//     const handleRoleUpdateValoareChange = (e) =>
//     {
//         const role = e.target.value
//         setRoleUpdateValoare(role)
//     }
//     return (
//         <div className='ui segment'>
//             <h3 className='ui dividing header'>Taxa cazare update valoare</h3>
//             <div className="field">
//                 {/*TODO Make this into a dropDown list*/}
//                 <label>Rol student</label>
//                 <input type="text" placeholder="Sef admin camine" value={roleUpdateValoare} onChange={handleRoleUpdateValoareChange}/>
//             </div>
//         </div>
//     )
// }
//
// export default TaxaCazareUpdateValoare