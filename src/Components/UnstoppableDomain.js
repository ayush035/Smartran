import React, { useState } from "react"
import UAuth from "@uauth/js"
import { Button } from "react-bootstrap"

const uauth = new UAuth({
    clientID: "ca047f44-91d0-42be-98b1-45557369cc19",
    redirectUri: "http://localhost:3000"
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
            <Button className="text-white" onClick={log} >
                {Uauth != null ? Uauth["sub"] : "Login with Unstoppable"}
            </Button>
        </>
    )
}

export default UnstoppableDomain;