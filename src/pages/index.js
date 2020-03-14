import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import coverStyle from "../styles/modules/bookCover.module.css"
import Cover from '../components/bookCover'

export default ({data}) => {
  return(
    <Layout>
      <SEO title="Todo o conteúdo"/>
        <ul className={coverStyle.wrapper}>
          {data.allMarkdownRemark.edges.map( ({ node }, index) => (
          <li key={node.id} data-tale-number={index + 1}>
            <Cover
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              url={node.fields.slug}
            />
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
