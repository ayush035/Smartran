import React, { useState } from "react"
import UAuth from "@uauth/js"
import { Button } from "react-bootstrap"

const uauth = new UAuth({
    
    clientID: "3b1445ca-439f-4d97-9059-3b62b0e9f523",
    redirectUri: "https://smartran.vercel.app/",

  
})

function UnstoppableDomain() {
    const [Uauth, setUauth] = useState()

    async function Connect() {
        try {
            const authorization = await uauth.loginWithPopup()
            setUauth(JSON.parse(JSON.stringify(authorization))["idToken"])

            //await authenticate()
        } catch (error) {
            console.error(error)
        }
    }

    // async function logOut() {
    //     uauth.logout()
    //     logout()
    // }

    function log() {
        if (Uauth === null || Uauth === undefined) {
            Connect()
        } else {
          //  logOut()
        }
    }

    return (
        <>
        <font color ='white' face ="Verdana">
            <Button className="btn btn-outline-light" onClick={log} >
                {Uauth != null ? Uauth["sub"] : "Login with Unstoppable"}
            </Button>
            </font>
        </>
    )
}

export default UnstoppableDomain;