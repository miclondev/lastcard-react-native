import { useState } from "react"

function useTheme(initialVal = "theme1") {
    const [theme, setTheme] = useState(initialVal)
    const changeTheme = newTheme => setTheme(newTheme)
    return [theme, changeTheme]
}

export default useTheme