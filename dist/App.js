"use strict";
// import React, { useContext, useMemo } from 'react'
// import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from 'react-router-dom'
//
// import { Context } from './context'
// import { Api } from './api'
// import { useGlobalContext } from './states'
//
// const colors = {
//     brand: {
//         black: '#1C1C1E',
//         grey: '#B8B8C2',
//         inputHoverGrey: '#9C9CAB',
//         lowerBlue: '#001CDB',
//         lightBlue: '#0064FF',
//         green: '#00D200',
//         purple: '#6236FF',
//         errorRed: '#E80000',
//         backgroundColor: '#ECEFFF',
//     },
// }
//
// const theme = extendTheme({
//     colors,
//     components: {
//         Button: {
//             variants: {
//                 staircase: {
//                     bg: 'brand.lowerBlue',
//                     minWidth: '160px',
//                     borderRadius: 0,
//                     color: 'white',
//                     _disabled: {
//                         bg: 'brand.lowerBlue',
//                     },
//                     _hover: {
//                         bg: 'white',
//                         border: '1px solid #001CDB',
//                         color: 'brand.lowerBlue',
//                     },
//                 },
//             },
//         },
//     },
// })
//
// function App() {
//     const api = useMemo(() => new Api(), [])
//     const globalContext = useGlobalContext()
//     return (
//         <Context.Provider
//             value={{
//                 api,
//                 ...globalContext,
//             }}
//         >
//             <ChakraProvider theme={theme}>
//                 <Router>
//                     <Routes>
//                         <Route path="/" element={<DemoComponent />} />
//                     </Routes>
//                 </Router>
//             </ChakraProvider>
//         </Context.Provider>
//     )
// }
//
// export default App
