import React from "react"
import PropTypes from "prop-types"

// Get CSS
import "../styles/variables.css"
import "../styles/reset.css"
import "../styles/global.css"
import Footer from "../styles/modules/footer.module.css"

const Layout = ({ children }) => (
  <>
    <main className="container">{children}</main>
    <footer className={Footer.foot}>
      <div className="container">
        <p className={Footer.paragraph}>
          Feito com <span role="img" aria-label="love and coffe">❤️☕️</span>no meio da pandemia <span role="img" aria-label="Covid-19">🦠</span>de COVID-19
        </p>
        <p className={Footer.paragraph}>
          Projeto no
          <a href="https://github.com/marcos-paiva/gnsh" className="link">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  </>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
