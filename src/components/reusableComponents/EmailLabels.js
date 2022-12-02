import React from 'react'

const EmailLabels = ({emails}) =>
{
    return(
        emails.length === 0 ? <></> :
            <div className="ui horizontal list">
                {emails.map(email =>
                {
                    return(
                        <div className='ui label' key={email}>
                            {email}
                            <i className='delete icon'/>
                        </div>
                    )
                })}
            </div>
    )
}

export default EmailLabels