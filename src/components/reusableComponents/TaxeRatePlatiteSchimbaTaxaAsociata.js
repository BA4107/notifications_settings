// import React, {useState} from 'react'
// import {studentData} from "../data/data";
//
// const TaxeRatePlatiteSchimbaTaxaAsociata = () =>
// {
//     const [roleRatePlatite, setRoleRatePlatite] = useState(studentData.TaxeRatePlatiteSchimbaTaxaAsociata.Autorizari[0].Rol)
//
//     const handleRoleRatePlatiteChange = (e) =>
//     {
//         const role = e.target.value
//         setRoleRatePlatite(role)
//     }
//     return (
//         <div className='ui segment'>
//             <h3 className='ui dividing header'>Taxe rate platite schimba taxa asociata</h3>
//             <div className="field">
//                 <label>Rol student</label>
//                 {/*TODO Make this into a dropDown list*/}
//                 <input type="text" placeholder="Sef admin camine" value={roleRatePlatite} onChange={handleRoleRatePlatiteChange}/>
//             </div>
//         </div>
//     )
// }
//
// export default TaxeRatePlatiteSchimbaTaxaAsociata