import styles from './brag-document-module.module.css';

/* eslint-disable-next-line */
export interface BragDocumentModuleProps {}

export function BragDocumentModule(props: BragDocumentModuleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BragDocumentModule!</h1>
    </div>
  );
}

export default BragDocumentModule;
