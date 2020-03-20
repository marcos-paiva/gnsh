import React from 'react'
import PropTypes from 'prop-types'
import cover from '../styles/modules/bookCover.module.css'
import { Link } from 'gatsby'
import ChevronRight from '../static/icon-chevron-right.inline.svg'

import Img from 'gatsby-image'

const bookCover = ({title, category, readtime, image, excerpt, url}) => {
    return (
        <Link to={url} className={cover.item}>
            <h2 className={cover.title}>{title}</h2>
            <h4 className={cover.readtime}>{`${readtime} de leitura`}</h4>
            <footer className={cover.footer}>
                <span className={cover.categories}>
                    Clássicos, contos
                </span>
                <span className={`btn btn-circle ${cover.link}`}>
                    <ChevronRight/>
                </span>
            </footer>
        </Link>
    )
}

bookCover.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.array,
    readtime: PropTypes.number,
    image: PropTypes.object,
    excerpt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default bookCover