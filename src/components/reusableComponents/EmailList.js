import React from 'react'
import EmailLabels from "./EmailLabels";

const EmailList = ({title, emails}) =>
{
    return(
        <>
            <div className="field">
                <label>{title}</label>
                <input type="email" placeholder="default@unitbv.ro"/>
            </div>
            <EmailLabels emails={emails}/>
        </>
    )
}

export default EmailList