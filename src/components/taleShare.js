import React from 'react'
import PropTypes from "prop-types"
import Article from '../styles/modules/article.module.css'
import GirlShare from '../static/persons/girl-sharing.inline.svg'

import ShareButtons from './shareButtons'

const TaleShare = ({time, topics}) => {
    return(
        <section className={Article.data}>
            <section className={Article.dataImage}>
            <GirlShare/>
            </section>
            <section className={Article.dataContent}>
                <h5>Antes de ir, compartilhe essa história com a sua rede</h5>
                <ShareButtons />
            </section>
        </section>
    )
}

TaleShare.propTypes = {

}

TaleShare.defaultProps = {

}

export default TaleShare