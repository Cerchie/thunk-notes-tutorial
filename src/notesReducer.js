import{ ADD_NOTE,  SET_NOTES } from './actions'
import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {setNotes} from './actions'
const initialState = {
    notes : []
}


function notesReducer(state = initialState, action){
    switch(action.type){
        case ADD_NOTE: {
            return {...state, notes: [...state.notes, action.payload]}
        }
        case SET_NOTES: {
            return {...state, notes: action.payload}
        }
        default: 
        return state;
    }
}

export const saveNotes = () => async (dispatch, getState) => {
    const notes = getState().notes
    await fetch("https://localhost:3000/notes", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(notes)
    })
    alert('success')
}
export const loadNotes = () => async (dispatch, getState) => {
    const notes = await fetch("https://localhost:3000/notes").then(res => res.json);
    dispatch(setNotes(notes))
    
}

export default notesReducer;