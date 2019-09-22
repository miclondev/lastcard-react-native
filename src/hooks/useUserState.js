import { useState } from "react"

const initialState = {
    number: "",
    conf: "",
    confirm: false,
    loading: false,
    message: undefined
}


function userState(initialState) {
    const [user, setUser] = useState(initialState)

    return [user]
}

export default userState