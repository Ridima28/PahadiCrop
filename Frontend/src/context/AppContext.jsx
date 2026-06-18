import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyChats, dummyUserData } from "../assets/assets";

const AppContext = createContext()

export const AppContextProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [chats, setChats] = useState(null) ;
    const [ selectedChat, setSelectedChat] = useState(null);


    const fetchUser = async () => {
        setUser(dummyUserData)
    }

    const fetchUserChats = async () => {
        setChats(dummyChats)
        setSelectedChat(dummyChats[0])
    }


    useEffect (() => {
        if(user){
            fetchUserChats()
        }
        else{
            setChats([])
                setSelectedChat(null)
            
        }
    },[])


    useEffect(()=> {
        fetchUser()
    },[])

    const value = {
        navigate,user,setUser,fetchUser,chats,setChats,setSelectedChat
    }
    return (
        <AppContext.Provider value= {value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)