import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageBase from './pages/PageBase/index.jsx'
import Home from './pages/Home/index.jsx'
/*import TempAdd from './pages/TempAdd/index.jsx'
import TempDel from './pages/TempDel/index.jsx' */


function AppRoutes() {
    return (
        <>
        <BrowserRouter>
                <Routes>
                        <Route path='/' element={ <PageBase /> }></Route>
                        <Route path="/Home" element={ <Home /> }></Route>
                        {/* <Route path="/TempAdd" element={ <TempAdd /> }></Route>
                        <Route path="/TempDel" element={ <TempDel /> }></Route> */}
                </Routes>
        </BrowserRouter>
        </>
    )
}

export default AppRoutes