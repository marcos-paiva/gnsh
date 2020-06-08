import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

// Internal components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Cover from "../components/bookCover"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} história${
    totalCount === 1 ? "" : "s"
  } sobre ${tag}`

  return (
    <Layout>
      <Seo title={tagHeader} />
      <Header title={tagHeader} />
      <Link to="/tema/" className="link">
        Todos os temas
      </Link>
      <ul className="book-wrapper">
        {edges.map(({ node }) => (
          <li key={node.fields.slug}>
            <Cover
              title={node.frontmatter.title}
              readtime={node.timeToRead}
              excerpt={node.excerpt}
              url={node.fields.slug}
              theme={node.frontmatter.theme}
            />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query getTheme($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            theme
          }
          timeToRead
        }
      }
    }
  }
`
