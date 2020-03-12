import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default ({ data }) => {
    const post = data.markdownRemark
    const image = post.frontmatter.featured ? post.frontmatter.featured.childImageSharp.resize : null

    return(
        <Layout>
            <Seo
                title={post.frontmatter.title}
                image={image}
                />
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String){
        site {
            siteMetadata {
              title
              author
            }
          }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            excerpt(pruneLength: 160)
            frontmatter {
              title
              featured {
                childImageSharp {
                  resize(width: 1200, cropFocus: CENTER, quality: 80) {
                    src
                    width
                    height
                  }
                  resolutions {
                    srcWebp
                    src
                  }
                  sizes {
                    src
                    srcWebp
                    srcSet
                  }
                }
              }
            }
          }
    }
`