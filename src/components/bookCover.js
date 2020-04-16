import React from 'react'
import PropTypes from 'prop-types'
import cover from '../styles/modules/bookCover.module.css'
import { Link } from 'gatsby'
import ChevronRight from '../static/icon-chevron-right.inline.svg'

const bookCover = ({title, category, readtime, image, excerpt, url}) => {
    return (
        <Link to={url} className={cover.item}>
            <header>
                <h2 className={cover.title}>{title}</h2>
                <h4 className={cover.readtime}>{`${readtime}min de leitura`}</h4>
            </header>

            <footer className={cover.footer}>
                <ul className={cover.categories}>
                    {category.map((tag,i) => {
                        return (<li key={i}>{tag}</li>)
                    }) }
                </ul>
                <div className={`btn btn-circle ${cover.link}`}>
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