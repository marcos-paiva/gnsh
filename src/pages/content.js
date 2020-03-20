import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Header from '../components/header'
import Article from '../styles/modules/article.module.css'

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
            <Header />
            <article className={Article.global}>
              <header className={Article.header}>
                <h1 className={Article.title}>{post.frontmatter.title}</h1>
                <h3>{`${post.timeToRead} min de leitura`}</h3>
              </header>
              <div dangerouslySetInnerHTML={{ __html: post.html }} className={Article.container} />
              <footer className={Article.footer}>
                <ul className={Article.category}>
                  {post.frontmatter.categories.map((tag,i) => {
                    return (<li key={i} className={Article.catItem}>{tag}</li>)
                  }) }
                </ul>
              </footer>
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
          timeToRead
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            title
            categories
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