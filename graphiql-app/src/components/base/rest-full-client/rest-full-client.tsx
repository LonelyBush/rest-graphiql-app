import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Response from '../../component/response/response';
import BodyHeadersTabs from '../../component/rest-body-headers/rest-body-headers';
import { addRestLinks } from '../../../lib/slices/rest-history-slice';
import Button from '../../ui/button/button';
import { RequestData, RequestItem } from '../../../types/interface';
import createEncodedUrl from '../../../utils/const/base64';
import styles from './rest-full-client.module.scss';

interface RequestItemProps {
  /* eslint-disable react/require-default-props */
  requestItem?: RequestItem;
}

function RESTFullClient({ requestItem }: RequestItemProps) {
  const [method, setMethod] = useState(
    requestItem?.requestData.method || 'GET',
  );
  const [url, setUrl] = useState(requestItem?.requestData.url || '');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState(requestItem?.requestData.body || '');
  const [response, setResponse] = useState('');
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRequest = async () => {
    setResponse('');
    setError(null);
    const requestTime = new Date().toISOString();

    const parsedHeaders = headers ? JSON.parse(headers) : {};

    const requestData: RequestData = {
      url,
      method,
      headers: parsedHeaders,
      body: method !== 'GET' ? body : undefined,
    };

    const urlPage = createEncodedUrl(
      method,
      url,
      method !== 'GET' ? body : '',
      parsedHeaders,
    );

    const requestItemStore: RequestItem = {
      urlPage,
      requestData,
      data: requestTime,
    };

    dispatch(addRestLinks([requestItemStore]));

    try {
      const options: RequestInit = {
        method,
        headers: parsedHeaders,
        body: method !== 'GET' ? body : undefined,
      };

      const res = await fetch(url, options);
      if (!res.ok) {
        setResponseStatus(res.status);
        const errorText = await res.text();
        setError(errorText);
        return;
      }

      setResponseStatus(res.status);
      const data = await res.text();
      try {
        setResponse(JSON.stringify(JSON.parse(data), null, 2));
      } catch {
        setResponse(data);
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.RestBlock}>
        <h2>{t('RESTClient')}</h2>
        <div className={styles.methodSection}>
          <div className={styles.methodBlock}>
            <select
              className={styles.customSelect}
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
            <input
              className={styles.inputUrl}
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <Button btnType="button" onClick={handleRequest}>
            {t('Send')}
          </Button>
        </div>
        <BodyHeadersTabs setHeaders={setHeaders} setBody={setBody} />
      </div>
      <Response
        responseStatus={responseStatus}
        response={response}
        error={error}
      />
    </div>
  );
}

export default RESTFullClient;