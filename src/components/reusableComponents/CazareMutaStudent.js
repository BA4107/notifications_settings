// import React, {useState} from 'react'
// import EmailList from "./EmailList";
// import {studentData} from "../data/data";
//
// const CazareMutaStudent = () =>
// {
//     const [trimiteMail, setTrimiteMail] = useState(studentData.CazareMutaStudent.Notificari.TrimiteMail)
//     const [notificaStudent, setNotificaStudent] = useState(studentData.CazareMutaStudent.Notificari.NotificaStudent)
//     const [notificaProdecani, setNotificaProdecani] = useState(studentData.CazareMutaStudent.Notificari.NotificaProdecaniCazare)
//     const [emails, setEmails] = useState(studentData.CazareMutaStudent.Notificari.EmailuriCC)
//     const [role, setRole] = useState(studentData.CazareMutaStudent.Autorizari[0].Rol)
//
//     const handleTrimiteMailChange = () =>
//     {
//         setTrimiteMail(!trimiteMail)
//     }
//
//     const handleNotificaStudent = () =>
//     {
//         setNotificaStudent(!notificaStudent)
//     }
//
//     const handleNotificaProdecani = () =>
//     {
//         setNotificaProdecani(!notificaProdecani)
//     }
//
//     const handleEmailsChange = () =>
//     {
//         //TODO Add functionality
//     }
//
//     const handleRoleChange = (e) =>
//     {
//         const role = e.target.value
//         setRole(role)
//     }
//
//     return (
//         <div className='ui segment'>
//             <h3 className='ui header'>Cazare Muta Student</h3>
//             <h4 className='ui dividing header'>Notificari</h4>
//             <div className="ui checkbox">
//                 <input type="checkbox" checked={trimiteMail} onChange={handleTrimiteMailChange}/>
//                 <label>Trimite mail studentului pentru instiintare</label>
//             </div>
//             <br/>
//             <div className="ui checkbox">
//                 <input type="checkbox" checked={notificaStudent} onChange={handleNotificaStudent}/>
//                 <label>Notifica studentul</label>
//             </div>
//             <br/>
//             <div className="ui checkbox">
//                 <input type="checkbox" checked={notificaProdecani} onChange={handleNotificaProdecani}/>
//                 <label>Notifica prodecani</label>
//             </div>
//             <br/>
//             <EmailList title='Email-uri CC' emails={emails} onChange={handleEmailsChange()}/>
//             <h4 className='ui dividing header'>Autorizari</h4>
//             <div className="field">
//                 <label>Rol student</label>
//                 <input type="text" placeholder="Sef admin camine" value={role} onChange={handleRoleChange}/>
//             </div>
//         </div>
//     )
// }
//
// export default CazareMutaStudent