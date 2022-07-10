import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { changeColor } from "../features/theme"
import { ReduxButton, ReduxInput, ReduxWrapper } from '../styles/layout.style'

export default function ChangeColor() {

    const [color, setColor] = useState("")
    const dispatch = useDispatch()

    return (
        <ReduxWrapper>
            <ReduxInput type="text" onChange={(e) => setColor(e.target.value)} placeholder="Change background color using redux.." />
            <ReduxButton onClick={() => { dispatch(changeColor(color)) }}>Change Color</ReduxButton>
        </ReduxWrapper>
    )
}
