import React from 'react'
import PropTypes from "prop-types"
import Article from '../styles/modules/article.module.css'
import GirlExplaining from '../static/persons/girl-explaining.inline.svg'

const TaleData = ({time, topics}) => {
    return(
        <section className={Article.data}>
            <section className={Article.dataImage}>
            <GirlExplaining/>
            </section>
            <section className={Article.dataContent}>
                <h5>Tempo médio</h5>
                <p>{`${time} min de leitura`}</p>
                <h5>Temas</h5>
                <p>
                    {topics.map((item, i) => {
                        return (` ${item}`)
                    })}
                </p>
            </section>
        </section>
    )
}

TaleData.propTypes = {
    time: PropTypes.number,
    topics: PropTypes.array,
}

TaleData.defaultProps = {
    time: 3,
    topics: '',
}

export default TaleData