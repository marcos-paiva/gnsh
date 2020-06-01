const path = require(`path`)
const __ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `tales`})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async({graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            talesRemark: allMarkdownRemark (
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 2000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                        }
                    }
                }
            }
            tagsRemark: allMarkdownRemark {
                group(field: frontmatter___tags) {
                    fieldValue
                    nodes {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)


    const tales = result.data.talesRemark.edges

    tales.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/pages/content.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })

    const tags = result.data.tagsRemark.group
    const contentTags = result.data.tagsRemark.group.nodes
    const postsPerPage = 6

    console.log(contentTags)

    //const numPages = Math.ceil(contentTags.length / postsPerPage)

    // path: i === 0 ? `/blog` : `/blog/${i + 1}`
    // Array.from({ length: numPages }).forEach((_, i) => {

    tags.forEach((_, i, tag) => {
        createPage({
            path: `/tema/${ i === 0 ? __.kebabCase(tag.fieldValue) : __.kebabCase(tag.fieldValue)}/${i + 1}/ }`,
            component: path.resolve(`./src/pages/category.js`),
            context: {
                tag: tag.fieldValue,
                limit: postsPerPage,
                skip: i * postsPerPage
            },
        })
    })
}