import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import covers from "../styles/modules/bookCover.module.css"

export default ({data}) => {
  return(
    <Layout>
      <SEO title="Todo o conteúdo"/>
        <ul className={covers.wrapper}>
          {data.allMarkdownRemark.edges.map( ({ node }, index) => (
          <li key={node.id} data-tale-number={index + 1}>
            <Link to={node.fields.slug} className={covers.item}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.excerpt}</p>
            </Link>
          </li>
          ))}
        </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}){
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
