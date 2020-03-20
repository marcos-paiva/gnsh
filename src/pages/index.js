import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import coverStyle from "../styles/modules/bookCover.module.css"
import Cover from '../components/bookCover'

export default ({data}) => {
  return(
    <Layout>
      <SEO title="Todo o conteúdo"/>
      <Header isHome={true}/>
        <ul className={coverStyle.wrapper}>
          {data.allMarkdownRemark.edges.map( ({ node }, index) => (
            <li key={node.id} data-tale-number={index + 1}>
              <Cover
                title={node.frontmatter.title}
                readtime={node.timeToRead}
                excerpt={node.excerpt}
                url={node.fields.slug}
                image={node.frontmatter.featured.childImageSharp.fluid}
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
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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