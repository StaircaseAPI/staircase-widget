import React from 'react'
import { Api } from './api'

export const Context = React.createContext<{ [k: string]: any } & { api: Api }>(
    { api: new Api() }
)
