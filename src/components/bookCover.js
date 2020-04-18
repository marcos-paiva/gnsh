import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Cover from '../styles/modules/bookCover.module.css'
import ChevronRight from '../static/icon-chevron-right.inline.svg'

const bookCover = ({title, category, readtime, image, excerpt, url}) => {
    return (
        <Link to={url} className={Cover.item}>
            <header>
                <h2 className={Cover.title}>{title}</h2>
                <h4 className={Cover.readtime}>{`${readtime}min de leitura`}</h4>
            </header>

            <footer className={Cover.footer}>
                <ul className={Cover.categories}>
                    {category.map((tag,i) => {
                        return (<li key={i}>{tag}</li>)
                    }) }
                </ul>
                <div className={`btn btn-circle ${Cover.link}`}>
                    <ChevronRight/>
                </div>
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