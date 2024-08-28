import { useState } from 'react';
import Button from '../ui/button/button';
import styles from './rest-full-client.module.scss';

function RESTFullClient() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRequest = async () => {
    setResponse('');
    setError(null);

    try {
      const options: RequestInit = {
        method,
        headers: headers ? JSON.parse(headers) : {},
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
      <div className={styles.methodBlock}>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button btnType="button" onClick={handleRequest}>
          Send
        </Button>
      </div>
      <div>
        <textarea
          id="headers"
          value={headers}
          onChange={(e) => setHeaders(e.target.value)}
        />
      </div>
      <div>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      {error && (
        <div>
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div>
      )}

      {responseStatus !== null && (
        <div>
          <h3>Status Code: {responseStatus}</h3>
          {response && (
            <pre className={styles.response}>
              <code>{response}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

export default RESTFullClient;
