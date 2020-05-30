import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Cover from '../styles/modules/bookCover.module.css'

const catCover = ({title, readtime, url}) => {

    const messageSuffix = readtime > 1 ? 's' : '' ;

    return (
        <Link to={url} className={Cover.itemSmall}>
            <header>
                <h2 className={Cover.title}>{title}</h2>
                <h4 className={Cover.subTitle}>{`${readtime} história${messageSuffix}`}</h4>
            </header>
        </Link>
    )
}


catCover.propTypes = {
    title: PropTypes.string.isRequired,
    readtime: PropTypes.number,
    url: PropTypes.string.isRequired
}

export default catCover