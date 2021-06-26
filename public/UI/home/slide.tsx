import React from 'react'
import {Centy} from './../tools'

import Link from 'next/link'

export const Slide = () =>{
    const st = {
        width : "100%",
        height:"auto",
        background:"#181824",
    }as React.CSSProperties
    return (
        <div style={st} >
            <div className="container">
            <p>ShopyWhere : In Progress</p>
            <Link href="">Sign In</Link>
            <br/>
            <Link href="">Sign Up</Link>
            </div>
            
        </div>
    )
}
