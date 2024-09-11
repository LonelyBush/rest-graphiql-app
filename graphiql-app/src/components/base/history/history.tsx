import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useAuth from '../../../utils/hooks/useAuth-hook';
import { RootState } from '../../../lib/store';
import Button from '../../ui/button/button';
import styles from './history.module.scss';

function History() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate('/');
    } else {
      navigate('/history');
    }
  }, [user, loading, navigate]);

  const restHistory = useSelector(
    (state: RootState) => state.restLinks.restLinks,
  );

  const graphiQLHistory = useSelector(
    (state: RootState) => state.restLinks.restLinks,
  );

  const sortedRequests = [...restHistory, ...graphiQLHistory].sort((a, b) => {
    const dateA = new Date(a[2]).getTime();
    const dateB = new Date(b[2]).getTime();

    return dateA - dateB;
  });

  return (
    <div className={styles.historyBlock}>
      {sortedRequests.length === 0 ? (
        <>
          <p>{t('NoHistory')} </p>
          <div className={styles.buttonBlock}>
            {' '}
            <Button btnType="button" to="/REST/GET">
              {t('RESTClient')}
            </Button>
            <Button btnType="button" to="/graphiql">
              {t('GraphiQLClient')}
            </Button>
          </div>
        </>
      ) : (
        <>
          {' '}
          <h2>{t('HistoryRequests')}</h2>
          {sortedRequests.map((result, index) => (
            /* eslint-disable react/no-array-index-key */
            <div className={styles.resultBlock}>
              <p key={`rest-${result[0] + index}`} className={styles.method}>
                {result[0]}
              </p>
              <p key={`rest-${result[1] + index}`}>{result[1]}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default History;