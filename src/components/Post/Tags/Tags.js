// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';

type Props = {
  tags: string,
  tagSlugs: string
};

const Tags = ({ tags, tagSlugs }: Props) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {tagSlugs && (<li className={styles['tags__list-item']} key={tags}>
          <Link to={tagSlugs} className={styles['tags__list-item-link']}>
            {tags}
          </Link>
        </li>)
      }
    </ul>
  </div>
);

export default Tags;
