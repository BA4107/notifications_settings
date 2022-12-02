// import React, {useState} from 'react'
// import EmailList from "./EmailList";
// import {studentData} from "../data/data";
//
// const ProgramareCazareStrainiActualizare = () =>
// {
//     const [trimiteMailCazareStraini, setTrimiteMailCazareStraini] = useState(studentData.ProgramareCazareStrainiActualizare.Notificari.TrimiteMail)
//     const [emailStudenti, setEmailStudenti] = useState(studentData.ProgramareCazareStrainiActualizare.Notificari.EmailuriDestinatari)
//
//     const handleEmailStudentiChange = () =>
//     {
//         setTrimiteMailCazareStraini(!trimiteMailCazareStraini)
//     }
//
//     const handleEmailsChange = () =>
//     {
//         //TODO Add functionality
//     }
//
//     return (
//         <div className='ui segment'>
//             <h3 className='ui dividing header'>Programare cazare straini</h3>
//             <div className="ui checkbox">
//                 <input type="checkbox" checked={trimiteMailCazareStraini} onChange={handleEmailStudentiChange}/>
//                 <label>Trimite mail</label>
//             </div>
//             <br/>
//             <EmailList title='Email-uri destinatari' emails={emailStudenti} onChange={handleEmailsChange}/>
//         </div>
//     )
// }
//
// export default ProgramareCazareStrainiActualizare