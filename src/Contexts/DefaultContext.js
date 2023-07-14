import { useState, createContext, useRef } from 'react'

export const DefaultContext = createContext()

function DefaultContextProvider(props) {
  const [toggleNav, setToggleNav] = useState('false')

  return (
    <DefaultContext.Provider
      value={{
        toggleNav,
        setToggleNav,
      }}
    >
      {props.children}
    </DefaultContext.Provider>
  )
}
export default DefaultContextProvider
