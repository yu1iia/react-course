import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.css';

const Panel = ({ title, children }) => (
  <div className={styles.container}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);
// если true слева, рендрится то что справа !!!

// если не обязательные значения, то поставить значения по умолчанию !!
Panel.defaultProps = {
  title: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
