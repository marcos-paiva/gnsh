import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import HeroImage from "../static/hero-image.inline.svg"
import Logo from "../static/logo.inline.svg"
import head from "../styles/modules/header.module.css"
import svg from "../styles/modules/svg.module.css"

const Header = ({ data, isHome, title }) => {
  if (isHome) {
    title = data.site.siteMetadata.heroTitle
  }

  return (
    <header className={head.header}>
      <nav className={head.nav}>
        <Link to="/" className={head.logo}>
          <Logo />
        </Link>
        <Link to="/temas/" className="link">
          Histórias por tema
        </Link>
      </nav>

      {title && (
        <section className="grid">
          <section className="grid-1of2">
            <h1 className={head.mainTitle}>{title}</h1>
            {isHome && (
              <p className={head.subTitle}>
                {data.site.siteMetadata.description}
              </p>
            )}
          </section>
          {isHome && (
            <section className="grid-1of2 right-block">
              <HeroImage className={svg.hero} />
            </section>
          )}
        </section>
      )}
    </header>
  )
}

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
  isHome: PropTypes.bool,
  title: PropTypes.string,
}

Header.defaultProps = {
  isHome: false,
}
