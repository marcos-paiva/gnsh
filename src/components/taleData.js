import React from "react"
import PropTypes from "prop-types"
import Article from "../styles/modules/article.module.css"
import GirlExplaining from "../static/persons/girl-explaining.inline.svg"

const TaleData = ({ time, topics }) => {
  return (
    <section className={Article.data}>
      <section className={Article.dataImage}>
        <GirlExplaining />
      </section>
      <section className={Article.dataContent}>
        <h2>Tempo médio</h2>
        <p>{`${time} min de leitura`}</p>
        <h2>Temas</h2>
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
  topics: "",
}

export default TaleData
