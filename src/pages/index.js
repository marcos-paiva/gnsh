import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => {
  return(
    <Layout>
      <SEO title="Todo o conteúdo"/>
      {data.allMarkdownRemark.edges.map( ({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
          <h2>{node.frontmatter.title}</h2>
          <h4>{node.frontmatter.date}</h4>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
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
