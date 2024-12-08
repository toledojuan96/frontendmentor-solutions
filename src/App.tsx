import {PATHS} from "./constants/elements.tsx";
import {Link} from "react-router";


const App =  ()=>{
    return <ul>
        {
            PATHS.map( (route, index) =>{
                return <li key={index}>
                    <Link to={route.path}>{route.title}</Link>
                </li>
            })
        }
    </ul>
}

export default App
