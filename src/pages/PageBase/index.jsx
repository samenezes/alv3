import { useState } from 'react'
import styles from './PageBase.module.css'
import { Link } from 'react-router-dom'

function PageBase() {

    return (
    <>
        <section>
            <h1>Temperaturas</h1>
            <Link to="/Home" className={styles.Button}>Start!</Link>
        </section>
    </>
    )
}

export default PageBase