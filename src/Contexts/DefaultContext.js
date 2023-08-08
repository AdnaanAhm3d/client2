import { useState, createContext, useRef } from 'react'

export const DefaultContext = createContext()

function DefaultContextProvider(props) {
  const [toggleNav, setToggleNav] = useState('false')
  const [password, setPassword] = useState('Tsm@123')
  const [access, setAccess] = useState(false)
  const [text, setText] = useState('')

  return (
    <DefaultContext.Provider
      value={{
        password,
        setPassword,
        text,
        setText,
        toggleNav,
        setToggleNav,
        access,
        setAccess,
      }}
    >
      {props.children}
    </DefaultContext.Provider>
  )
}
export default DefaultContextProvider
