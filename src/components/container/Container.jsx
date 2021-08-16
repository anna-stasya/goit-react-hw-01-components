//import s from './Container.module.css';
import s from 'components/container/Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
