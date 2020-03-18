import React from 'react'
import PropTypes from 'prop-types'
import covers from '../styles/modules/bookCover.module.css'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const bookCover = ({title, category, readtime, image, excerpt, url}) => {
    return (
        <Link to={url} className={covers.item}>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <Img fluid={image} alt={title}/>
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