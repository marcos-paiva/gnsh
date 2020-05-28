import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Get CSS
import "../styles/variables.css"
import "../styles/reset.css"
import "../styles/global.css"

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
      <main className="container">{children}</main>
      <footer className="footer">
        <div className="container">
          <p>
            Feito com <span role="img">❤️☕️</span>no meio da pandemia{" "}
            <span role="img">🦠</span>de COVID-19
          </p>
          <p>
            Projeto no{" "}
            <a href="https://github.com/marcos-paiva/gnsh" className="link">
              GitHub
            </a>
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
