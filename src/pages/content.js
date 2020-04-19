import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Header from '../components/header'
import TaleData from '../components/taleData'
import TaleShare from '../components/taleShare'

import '../styles/variables.css'
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
          <TaleData time={post.timeToRead} topics={post.frontmatter.categories}/>
        </header>

        <div dangerouslySetInnerHTML={{ __html: post.html }} className={Article.container} />

        <footer>
          <p><strong>Fonte:</strong> {post.frontmatter.source}</p>
        </footer>
        <TaleShare/>
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
            source
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