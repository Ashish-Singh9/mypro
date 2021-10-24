import React from 'react'
import NavBar from './myComp/NavBar'
import EnterOtpComp from './myComp/EnterOtpComp'

function EnterOtp() {
    return (
        <div>
            <NavBar plus="false" user="false" login="true" signup="true" black={true}/>
            <EnterOtpComp/>
        </div>
    )
}

export default EnterOtp
