import React from 'react'

export const Centy = ({children}) =>{
    const StyleCent = {
        width : "100%",
        height : "auto",
        position:"absolute",
        margin:"auto",
        textAlign:"center",
        top:"45%",
        transform:"translateY(-50%)",
    }as React.CSSProperties
    return (

        <div style={StyleCent}>
            {children}
        </div>
    )
}

export const Logo = () =>{
    return(
        
<svg width="212" height="269" viewBox="0 0 712 669" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M74.1667 264.812H637.833V529.625H74.1667V264.812Z" fill="#CFD8DC"/>
<path d="M74.1667 529.625H637.833V585.375H74.1667V529.625Z" fill="#B0BEC5"/>
<path d="M400.5 334.5H578.5V585.375H400.5V334.5Z" fill="#455A64"/>
<path d="M133.5 334.5H341.167V487.812H133.5V334.5Z" fill="#E3F2FD"/>
<path d="M148.333 348.438H326.333V473.875H148.333V348.438Z" fill="#1E88E5"/>
<path d="M541.417 466.906C536.967 466.906 534 469.694 534 473.875V501.75C534 505.931 536.967 508.719 541.417 508.719C545.867 508.719 548.833 505.931 548.833 501.75V473.875C548.833 469.694 545.867 466.906 541.417 466.906Z" fill="#90A4AE"/>
<path d="M356 306.625C380.577 306.625 400.5 287.905 400.5 264.812C400.5 241.72 380.577 223 356 223C331.423 223 311.5 241.72 311.5 264.812C311.5 287.905 331.423 306.625 356 306.625Z" fill="#68319F"/>
<path d="M534 306.625C558.577 306.625 578.5 287.905 578.5 264.812C578.5 241.72 558.577 223 534 223C509.423 223 489.5 241.72 489.5 264.812C489.5 287.905 509.423 306.625 534 306.625Z" fill="#68319F"/>
<path d="M178 306.625C202.577 306.625 222.5 287.905 222.5 264.812C222.5 241.72 202.577 223 178 223C153.423 223 133.5 241.72 133.5 264.812C133.5 287.905 153.423 306.625 178 306.625Z" fill="#68319F"/>
<path d="M593.333 83.625H118.667C102.35 83.625 89 96.1687 89 111.5V153.312H623V111.5C623 96.1687 609.65 83.625 593.333 83.625Z" fill="#823FC6"/>
<path d="M311.5 153.312H400.5V264.812H311.5V153.312Z" fill="#823FC6"/>
<path d="M548.833 153.312H474.667L489.5 264.812H578.5L548.833 153.312Z" fill="#823FC6"/>
<path d="M163.167 153.312H237.333L222.5 264.812H133.5L163.167 153.312Z" fill="#823FC6"/>
<path d="M445 306.625C469.577 306.625 489.5 287.905 489.5 264.812C489.5 241.72 469.577 223 445 223C420.423 223 400.5 241.72 400.5 264.812C400.5 287.905 420.423 306.625 445 306.625Z" fill="#FFA000"/>
<path d="M667.5 264.812C667.5 288.506 648.217 306.625 623 306.625C597.783 306.625 578.5 288.506 578.5 264.812C578.5 241.119 597.783 223 623 223L667.5 264.812Z" fill="#FFA000"/>
<path d="M267 306.625C291.577 306.625 311.5 287.905 311.5 264.812C311.5 241.72 291.577 223 267 223C242.423 223 222.5 241.72 222.5 264.812C222.5 287.905 242.423 306.625 267 306.625Z" fill="#FFA000"/>
<path d="M44.5 264.812C44.5 288.506 63.7833 306.625 89 306.625C114.217 306.625 133.5 288.506 133.5 264.812C133.5 241.119 114.217 223 89 223L44.5 264.812Z" fill="#FFA000"/>
<path d="M474.667 153.312H400.5V264.812H489.5L474.667 153.312Z" fill="#FFC107"/>
<path d="M623 153.312H548.833L578.5 264.812H667.5L623 153.312Z" fill="#FFC107"/>
<path d="M237.333 153.312H311.5V264.812H222.5L237.333 153.312Z" fill="#FFC107"/>
<path d="M89 153.312H163.167L133.5 264.812H44.5L89 153.312Z" fill="#FFC107"/>
</svg>
    )
}