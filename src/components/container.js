import React from 'react'
import containerStyles from '../styles/modules/container.module.css'

export default ({children}) => (
    <main className={containerStyles.container}>{children}</main>
);