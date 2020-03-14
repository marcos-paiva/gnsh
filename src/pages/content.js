import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import texts from '../styles/modules/texts.module.css'

export default ({ data }) => {
    const post = data.markdownRemark
    const image = post.frontmatter.featured ? post.frontmatter.featured.childImageSharp.resize : null

    return(
        <Layout>
            <Seo
              title={post.frontmatter.title}
              image={image}
              pathname={post.fields.slug}
            />
            <article className={texts.article}>
              <h1 className={texts.title}>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} className={texts.container} />
            </article>
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
          fields {
            slug
          }
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