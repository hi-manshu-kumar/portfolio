import React from 'react';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout';

// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: {slug: {eq: $slug}}) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishDate(formatString: "MMMM Do, YYYYY")
            body{
                json
            }
        }
    }
`

const blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} url={url}/>
            }
        }
    }
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
        </Layout>
    )
}

export default blog; 