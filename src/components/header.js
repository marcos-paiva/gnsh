import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Logo from '../static/logo.inline.svg'
import head from '../styles/modules/header.module.css'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(id: {eq: "bbb0f830-b7f9-5e22-9d4e-fd3ca792eec6"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            title
            heroTitle
            description
          }
        }
      }
    `}
    render={data => (
      <header className={head.header}>
        <section className='grid'>
          <section className='grid-1of2'>
            <Link to="/" className={head.logo}><Logo /></Link>
            <h1 className={head.mainTitle}>{data.site.siteMetadata.heroTitle}</h1>
            <p>{data.site.siteMetadata.description}</p>
          </section>
          <section className='grid-1of2'>
            <Img fluid={data.file.childImageSharp.fluid} alt=""/>
          </section>
        </section>
      </header>
    )}
  />
)