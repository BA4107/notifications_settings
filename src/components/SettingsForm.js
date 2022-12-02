import React, {useEffect, useState} from 'react'
import Api from "../api/Api";

const SettingsForm = () =>
{
    const [permiteRecazare, setPermiteRecazare] = useState()
    const [trimiteMailAdd, setTrimiteMailAdd] = useState()

    const [roleUpdateValoare, setRoleUpdateValoare] = useState()

    const [roleRatePlatite, setRoleRatePlatite] = useState()

    const [trimiteMailMutaStudent, setTrimiteMailMutaStudent] = useState()
    const [notificaStudent, setNotificaStudent] = useState()
    const [notificaProdecani, setNotificaProdecani] = useState()
    const [emailProdecani, setEmailProdecani] = useState()
    const [roleMutaStudent, setRoleMutaStudent] = useState()

    const [trimiteMailCazareStraini, setTrimiteMailCazareStraini] = useState()
    const [emailStudenti, setEmailStudenti] = useState()

    useEffect(() =>
    {
        const getData = async() =>
        {
            await Api.get(`/data/1`)
                .then(response => response.data)
                .then(data => {
                    setPermiteRecazare(data.CazareAdd.PermiteRecazareInAcelasiAn)
                    setTrimiteMailAdd(data.CazareAdd.TrimiteMailStudent)

                    setRoleUpdateValoare(data.TaxaCazareUpdateValoare.Autorizari[0].Rol)

                    setRoleRatePlatite(data.TaxeRatePlatiteSchimbaTaxaAsociata.Autorizari[0].Rol)

                    setTrimiteMailMutaStudent(data.CazareMutaStudent.Notificari.TrimiteMail)
                    setNotificaStudent(data.CazareMutaStudent.Notificari.NotificaStudent)
                    setNotificaProdecani(data.CazareMutaStudent.Notificari.NotificaProdecaniCazare)
                    setEmailProdecani(data.CazareMutaStudent.Notificari.EmailuriCC)
                    setRoleMutaStudent(data.CazareMutaStudent.Autorizari[0].Rol)

                    setTrimiteMailCazareStraini(data.ProgramareCazareStrainiActualizare.Notificari.TrimiteMail)
                    setEmailStudenti(data.ProgramareCazareStrainiActualizare.Notificari.EmailuriDestinatari)
                })
        }
        getData()
    }, [])

    const handlePermiteRecazareChange =  () => { setPermiteRecazare(!permiteRecazare) }

    const handleTrimiteMailAddChange = () => { setTrimiteMailAdd(!trimiteMailAdd) }

    const handleTrimiteMailMutaStudentChange = () => { setTrimiteMailMutaStudent(!trimiteMailMutaStudent) }

    const handleNotificaStudent = () => { setNotificaStudent(!notificaStudent) }

    const handleNotificaProdecani = () => { setNotificaProdecani(!notificaProdecani) }

    const handleEmailProdecaniChange = (e) =>
    {
        const email = e.target.value
        setEmailProdecani(email)
    }

    const handleRoleChange = (e) => {
        const role = e.target.value
        setRoleMutaStudent(role)
    }

    const handleRoleUpdateValoareChange = (e) =>
    {
        const role = e.target.value
        setRoleUpdateValoare(role)
    }

    const handleRoleRatePlatiteChange = (e) =>
    {
        const role = e.target.value
        setRoleRatePlatite(role)
    }

    const handleEmailStudentiChange = () => { setTrimiteMailCazareStraini(!trimiteMailCazareStraini) }

    const handleEmailStudentsChange = (e) =>
    {
        const email = e.target.value
        setEmailStudenti(email)
    }

    const handleSubmit = async(e) =>
    {
        e.preventDefault()

        await Api.put(`/data/1`, {
            "CazareAdd": {
                "PermiteRecazareInAcelasiAn": permiteRecazare,
                "TrimiteMailStudent": trimiteMailAdd
            },

            "TaxaCazareUpdateValoare": {
                "Autorizari": [
                    {
                        "Rol": roleUpdateValoare
                    }
                ]
            },
            "TaxeRatePlatiteSchimbaTaxaAsociata": {
                "Autorizari": [
                    {
                        "Rol": roleRatePlatite
                    }
                ]
            },
            "CazareMutaStudent": {
                "Notificari": {
                    "TrimiteMail": trimiteMailMutaStudent,
                    "NotificaStudent": notificaStudent,
                    "NotificaProdecaniCazare": notificaProdecani,
                    "EmailuriCC": [
                        emailProdecani
                    ]
                },
                "Autorizari": [
                    {
                        "Rol": roleMutaStudent
                    }
                ]
            },
            "ProgramareCazareStrainiActualizare": {
                "Notificari": {
                    "TrimiteMail": trimiteMailCazareStraini,
                    "EmailuriDestinatari": [
                        emailStudenti
                    ]
                }
            }
        })
        window.location.reload()
    }

    return(
        <div className='ui inverted segment'>
            <form className="ui form" onSubmit={handleSubmit}>
                <h2 className='ui inverted header'>Nume student</h2>

                {/* Cazare Add */}
                <div className='ui segment'>
                    <h3 className='ui dividing header'>Cazare add</h3>
                    <div className="ui checkbox">
                        <input type="checkbox" checked={permiteRecazare} onChange={handlePermiteRecazareChange}/>
                        <label>Permite recazarea in acelasi an</label>
                    </div>
                    <br/>
                    <div className='ui checkbox'>
                        <input type="checkbox" checked={trimiteMailAdd} onChange={handleTrimiteMailAddChange}/>
                        <label>Trimite mail studentului pentru instiintare</label>
                    </div>
                </div>

                {/* Taxa Cazare Update Valoare */}
                <div className='ui segment'>
                    <h3 className='ui dividing header'>Taxa cazare update valoare</h3>
                    <div className="field">
                        {/*TODO Make this into a dropDown list*/}
                        <label>Rol student</label>
                        <input type="text" placeholder="Sef admin camine" value={roleUpdateValoare} onChange={handleRoleUpdateValoareChange}/>
                    </div>
                </div>

                {/* Taxe Rate Platite Schimba Taxa Asociata */}
                <div className='ui segment'>
                    <h3 className='ui dividing header'>Taxe rate platite schimba taxa asociata</h3>
                    <div className="field">
                        <label>Rol student</label>
                        {/*TODO Make this into a dropDown list*/}
                        <input type="text" placeholder="Sef admin camine" value={roleRatePlatite} onChange={handleRoleRatePlatiteChange}/>
                    </div>
                </div>

                {/* Cazare Muta Student */}
                <div className='ui segment'>
                    <h3 className='ui header'>Cazare Muta Student</h3>
                    <h4 className='ui dividing header'>Notificari</h4>
                    <div className="ui checkbox">
                        <input type="checkbox" checked={trimiteMailMutaStudent} onChange={handleTrimiteMailMutaStudentChange}/>
                        <label>Trimite mail studentului pentru instiintare</label>
                    </div>
                    <br/>
                    <div className="ui checkbox">
                        <input type="checkbox" checked={notificaStudent} onChange={handleNotificaStudent}/>
                        <label>Notifica studentul</label>
                    </div>
                    <br/>
                    <div className="ui checkbox">
                        <input type="checkbox" checked={notificaProdecani} onChange={handleNotificaProdecani}/>
                        <label>Notifica prodecani</label>
                    </div>
                    <br/>
                    <div className="field">
                        <label>Email-uri CC</label>
                        <input type="email" value={emailProdecani} placeholder="default@unitbv.ro" onChange={handleEmailProdecaniChange}/>
                    </div>
                    <h4 className='ui dividing header'>Autorizari</h4>
                    <div className="field">
                        <label>Rol student</label>
                        <input type="text" placeholder="Sef admin camine" value={roleMutaStudent} onChange={handleRoleChange}/>
                    </div>
                </div>

                {/* Programare Cazare Straini Actualizare */}
                <div className='ui segment'>
                    <h3 className='ui dividing header'>Programare cazare straini</h3>
                    <div className="ui checkbox">
                        <input type="checkbox" checked={trimiteMailCazareStraini} onChange={handleEmailStudentiChange}/>
                        <label>Trimite mail</label>
                    </div>
                    <br/>
                    <div className="field">
                        <label>Email-uri Destinatari</label>
                        <input type="email" value={emailStudenti} placeholder="default@unitbv.ro" onChange={handleEmailStudentsChange}/>
                    </div>
                </div>

                <button className="ui blue button" type="">Submit</button>
            </form>
        </div>
    )
}

export default SettingsForm