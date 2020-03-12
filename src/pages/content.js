import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default ({ data }) => {
    const post = data.markdownRemark
    return(
        <Layout>
            <Seo title={post.frontmatter.title}/>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String){
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
              title
            }
          }
    }
`