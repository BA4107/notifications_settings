// import {studentData} from "../data/data";
// import {useEffect, useState} from "react";
// import Api from "../api/Api";
//
// const CazareAdd = () =>
// {
//     const [permiteRecazare, setPermiteRecazare] = useState()
//     const [trimiteMail, setTrimiteMail] = useState()
//
//     useEffect(() =>
//     {
//         const getData = async() =>
//         {
//             await Api.get(`/data`)
//                 .then(response => response.data)
//                 .then(data => {
//                     setPermiteRecazare(data.CazareAdd.PermiteRecazareInAcelasiAn)
//                     setTrimiteMail(data.CazareAdd.TrimiteMailStudent)
//                 })
//         }
//         getData()
//     }, [])
//
//     const handlePermiteRecazareChange = async () => {
//         setPermiteRecazare(!permiteRecazare)
//         await Api.put(`data/1`, {
//
//         })
//     }
//
//     const handleTrimiteMailChange = () =>
//     {
//         setTrimiteMail(!trimiteMail)
//     }
//     return (
//         <div className='ui segment'>
//             <h3 className='ui dividing header'>Cazare add</h3>
//             <div className="ui checkbox">
//                 <input type="checkbox" checked={permiteRecazare} onChange={handlePermiteRecazareChange}/>
//                 <label>Permite recazarea in acelasi an</label>
//             </div>
//             <br/>
//             <div className='ui checkbox'>
//                 <input type="checkbox" checked={trimiteMail} onChange={handleTrimiteMailChange}/>
//                 <label>Trimite mail studentului pentru instiintare</label>
//             </div>
//         </div>
//     )
// }
//
// export default CazareAdd