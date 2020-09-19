'use strict';

const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      const dirname = getNode(node.parent).relativeDirectory;
      createNodeField({
        node,
        name: 'slug',
        value: `/${dirname}/${node.frontmatter.slug}`
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: 'slug',
        value
      });
    }

    if (node.frontmatter.submission) {
      const tagSlugs = `/submission/${_.kebabCase(node.frontmatter.submission)}/`;
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.author) {
      const categorySlug = `/author/${_.kebabCase(node.frontmatter.author)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};

module.exports = onCreateNode;
