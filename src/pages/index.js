import React from "react"
import { graphql } from "gatsby"

// Internal components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Cover from "../components/bookCover"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Todo o conteúdo" />
      <Header isHome={true} />
      <ul className="book-wrapper">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={node.id} data-tale-number={index + 1}>
            <Cover
              title={node.frontmatter.title}
              readtime={node.timeToRead}
              excerpt={node.excerpt}
              url={node.fields.slug}
              image={node.frontmatter.featured.childImageSharp.fluid}
              theme={node.frontmatter.theme}
            />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            categories
            date(formatString: "DD MMMM, YYYY")
            theme
            featured {
              childImageSharp {
                fluid(maxHeight: 800, jpegProgressive: true) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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