// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={`Submissions - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title='Submissions'>
        <ul className='listContainer'>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/submission/${kebabCase(tag.fieldValue)}/`}>
                <span>{tag.fieldValue}</span>
              </Link>
              <span>{tag.totalCount}</span>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
