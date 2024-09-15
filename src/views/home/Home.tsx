import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import LoginPage from "../auth/Login";
import API from "../../api/API";

export default function Home() {
    const { user, logout, isAuthenticated } = useContext(AuthContext);  

    const [ rings, setRings ] = useState([])
    const {getAllRings} =  API.useAPI()
    
    
    const updateRings =  async () => {
        if(user){
            const db_rings =  await getAllRings()
            console.log(`db rings?`, db_rings)
            setRings(db_rings)

        }
    }
    useEffect(() => {
        updateRings()
    }, [isAuthenticated])


    console.log(`rings?`, rings)
    return (
        <>
        <div className="bg-[url(https://cdn.freebiesupply.com/logos/large/2x/the-one-ring-2-logo-svg-vector.svg)] bg-cover bg-center h-screen flex flex-col items-center justify-center" >
            {
                isAuthenticated ? (
                    <div>
                        <h1>Wellcome, user</h1>
                        <button className="border-2 rounded bg-white text-black p-4" onClick={logout} >Logout</button>
                    </div>
                ) : (
                    <div>
                        <LoginPage />
                    </div>
                )
            }
        </div>
        
        </>
    )
}