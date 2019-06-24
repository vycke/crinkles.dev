import React from 'react';
import BlogPostTemplate from '../../components/BlogPostTemplate';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const meta = {
    title: entry.getIn(['data', 'title']),
    description: entry.getIn(['data', 'description']),
    tags: entry.getIn(['data', 'tags'])
  };

  return <BlogPostTemplate meta={meta}>{widgetFor('body')}</BlogPostTemplate>;
};

export default BlogPostPreview;
