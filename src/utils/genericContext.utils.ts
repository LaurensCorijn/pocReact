import React from 'react'

const createGenericContext = <T>(defaultValue?: T) => {
    const genericContext = React.createContext<T | undefined>(defaultValue)

    const useGenericContext = () => {
        const contextIsDefined = React.useContext(genericContext)
        if (contextIsDefined === undefined) {
            throw new Error('Context not loaded')
        }
        return contextIsDefined
    }

    return [useGenericContext, genericContext.Provider] as const
}

export default createGenericContext
