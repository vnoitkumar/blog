// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';
import { Link } from 'gatsby';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <>
    <Link
      to='/pages/terms-and-conditions'
      style={{ color: '#fff', marginBottom: '20px', display: 'inline-block' }}
    >
      Terms and conditions apply
    </Link>
    <div className={styles['copyright']}>
      Developed by <span>GITSBIDEA</span>.
    </div>
    <div className={styles['copyright']}>{copyright}</div>
  </>
);

export default Copyright;
