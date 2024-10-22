import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <h2>404</h2>
      <h1>Page Not Found</h1>
    </div>
  )
};

export default NotFound;