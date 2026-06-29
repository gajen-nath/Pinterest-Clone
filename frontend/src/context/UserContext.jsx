import React ,{createContext,useContext,useState,useEffect} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserContext = createContext();

export const UserProvider = ({children})=>{
    const[user,setUser] = useState(null);
    const[isAuth,setIsAuth] = useState(false);
    const[btnLoading,setBtnLoading] = useState(false);
    const[loading,setLoading] = useState(true);

    const loginUser = async(email,password,navigate)=>{
        setBtnLoading(true);
        try{
            const{data} = await axios.post('/api/user/login',{email,password});
            setUser(data.user);
            setIsAuth(true);
            toast.success(data.message);
            navigate('/')
        } catch(error){
            toast.error(error.response?.data?.message|| "Login failed");

        }finally{
            setBtnLoading(false);
        }
    };

    const registerUser = async(name,email,password,navigate)=>{
        setBtnLoading(true);
        try{
            const{data}= await axios.post('/api/user/register',{ name,email,password});
            setUser(data.user);
            setIsAuth(true);
            toast.success(data.message);
            navigate('/');

        }catch(error){
            toast.error(error.response?.data.message||"registeration failed"); 
        }finally{
            setBtnLoading(false);
        }
    };

    const fetchUser = async()=>{
        try{
            const{data}= await axios.get('/api/user/me');
            setUser(data);
            setIsAuth(true);
        }catch(error){
            console.log("No active user session.");
            setIsAuth(false);
        }finally{
            setLoading(false);
        }

    };

    useEffect(()=>{
        fetchUser();
    },[]);
    return(
        <UserContext.Provider value ={{loginUser,registerUser,user,isAuth,btnLoading}}>
            {children}
        </UserContext.Provider>
    );
};
export const UserData = ()=> useContext(UserContext);

