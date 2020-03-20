import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from 'gatsby'
import HeroImage from '../static/hero-image.inline.svg'
import Logo from '../static/logo.inline.svg'
import head from '../styles/modules/header.module.css'

const Header = ({data, isHome}) => (
  <header className={head.header}>
    <nav>
      <Link to="/" className={head.logo}><Logo /></Link>
    </nav>
    {isHome &&
    <section className='grid'>
      <section className='grid-1of2'>
        <h1 className={head.mainTitle}>{data.site.siteMetadata.heroTitle}</h1>
        <p>{data.site.siteMetadata.description}</p>
      </section>
      <section className={`grid-1of2 ${head.imageHero}`}>
        <HeroImage />
      </section>
    </section>
    }
  </header>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            heroTitle
            description
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)

Header.propTypes = {
  isHome: PropTypes.bool
}

Header.defaultProps = {
  isHome: false
}