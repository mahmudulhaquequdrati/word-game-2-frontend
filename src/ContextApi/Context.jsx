import axios from 'axios';
import React, { createContext, useContext,  } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';




export const GStore = createContext()

const Context = ({children}) => {
    
    const email = localStorage.getItem("email");
    const {data : user , refetch : userRefetch} = useQuery({
        queryKey : ["user",email ],
        queryFn : ()=>axios.get(`https://word-game-2-backend.vercel.app/users?email=${email}`).then(res => res.data.user).catch(err => console.log(err))
      })

      const {data : words ,refetch : wordRefetch} = useQuery({
        queryKey : ["words"],
        queryFn : ()=>axios.get(`https://word-game-2-backend.vercel.app/words?email=${email}`).then(res => res.data).catch(err => console.log(err))
      })

    const information ={
        user,words,userRefetch ,wordRefetch
    }
// console.log(state)
    return (
        <div>
            <GStore.Provider value={information}>
                {children}
            </GStore.Provider>
        </div>
    );
};

export const useGStore = ()=>{
    const dataBundle = useContext(GStore);
    return dataBundle;
}

export default Context;