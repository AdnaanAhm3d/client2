import { useState, createContext } from 'react'

export const DefaultContext = createContext()

function DefaultContextProvider(props) {
  // const [loader, setLoader] = useState(true)
  const [loader, setLoader] = useState(true)
  const [a, seta] = useState(true)
  return (
    <DefaultContext.Provider
      value={{
        loader,
        setLoader,
        a,
        seta,
      }}
    >
      {props.children}
    </DefaultContext.Provider>
  )
}

export default DefaultContextProvider
