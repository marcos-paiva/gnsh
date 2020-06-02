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

exports.createPages = async({graphql, actions, reporter}) => {
    const { createPage } = actions
    const result = await graphql(`
        query myQuery {
            talesRemark: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 2000) {
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
                        id
                    }
                }
            }
        }
    `)

    // handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

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
    const postsPerPage = 6

    tags.forEach( (tag) => {
    //Array.from({ length: postsPerPage }).forEach( (_, i, tag) => {
        createPage({
            path: `/tema/${__.kebabCase(tag.fieldValue)}/`,
            component: path.resolve(`./src/pages/category.js`),
            context: {
                tag: tag.fieldValue
            }
        })
    })
}