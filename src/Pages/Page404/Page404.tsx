import { useTranslation } from 'react-i18next';
import './Page404.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Page404: FC = () => {
  const { t } = useTranslation('translation');
  return (
    <section className="page p-5 d-flex flex-column align-items-center justify-content-center">
      <div className="page-header">
        <h1 className="page-header__title">{t('pagenotfound')}</h1>
      </div>
      <div className="page-back">
        <Link to="/">{t('back')}</Link>
      </div>
    </section>
  );
};
export default Page404;
