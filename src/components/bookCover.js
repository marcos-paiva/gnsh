import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Cover from '../styles/modules/bookCover.module.css'
import ChevronRight from '../static/icon-chevron-right.inline.svg'

const bookCover = ({title, category, readtime, image, excerpt, url, theme}) => {
    return (
        <Link to={url} className={`${Cover.item} ${Cover[theme]}`}>
            <header>
                <h2 className={Cover.title}>{title}</h2>
                <h4 className={Cover.subTitle}>{`${readtime}min de leitura`}</h4>
            </header>
        </Link>
    )
}


bookCover.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.array,
    readtime: PropTypes.number,
    image: PropTypes.object,
    excerpt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    theme: PropTypes.string
}

export default bookCover