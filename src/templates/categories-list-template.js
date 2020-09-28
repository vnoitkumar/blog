// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useCategoriesList } from '../hooks';

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout title={`Authors - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title='Authors'>
        <br />
        <ul className='listContainer'>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/author/${kebabCase(category.fieldValue)}/`}>
                <span>{category.fieldValue}</span>
              </Link>
              <span>{category.totalCount}</span>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
