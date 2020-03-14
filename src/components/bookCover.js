import React from 'react'
import PropTypes from 'prop-types'
import covers from '../styles/modules/bookCover.module.css'
import { Link } from 'gatsby'

const bookCover = ({title, category, readtime, image, excerpt, url}) => {
    return (
        <Link to={url} className={covers.item}>
            <h2>{title}</h2>
            <p>{excerpt}</p>
        </Link>
    )
}

bookCover.propTypes = {
    title: PropTypes.node.isRequired,
    category: PropTypes.node,
    readtime: PropTypes.node,
    image: PropTypes.node,
    excerpt: PropTypes.node.isRequired,
    url: PropTypes.node.isRequired
}

export default bookCover