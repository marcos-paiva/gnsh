import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import l from '../styles/modules/logo.module.css'
import Logo from '../static/logo.inline.svg'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
    <main className="container">
      {children}
    </main>
    <footer className="footer">
      <div className="container">
        <p>
        <Logo className={l.logo} />

          Feito com ❤️☕️no meio da pandemia 🦠de COVID-17
        </p>
      </div>
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout