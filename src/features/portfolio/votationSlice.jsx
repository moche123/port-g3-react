import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    status: 'idle',
    skills: [
        {id:0,value:'frontend',count: 0},
        {id:1,value:'backend',count:0},
        {id:2,value:'database',count:0},
        {id:3,value:'devops',count: 0} 
    ]
};


export const votationSlice = createSlice ({

    name: 'votation',
    initialState,
    reducers: {
        voteSkill: (state,action) => {
            state.skills.forEach( el => {
                if (el.id === action.payload)  el.count++ 
            } )
        },
        clearVotes: (state,action={}) => {
            state.skills.forEach( el => {
                el.count = 0
            } )
        }
        

    }

})

export const { voteSkill,clearVotes } = votationSlice.actions; //! ACTION


export const selectVote = (state) => state.votation.value; //! DATOS DE SOLO LECTORA PARA LEER MI STORE

export default votationSlice.reducer