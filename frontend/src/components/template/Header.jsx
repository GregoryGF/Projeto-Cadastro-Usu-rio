import React from 'react'
import './Header.css'


export default props => 
    <header className='header d-none d-sm-flex flex-column'>
        <h1 className="mt-03">
            <i className={`fa fa-${props.icon}`}></i>{props.title}
        </h1>
        <p className="lea text-muted">{props.subtitle}</p>
    </header>