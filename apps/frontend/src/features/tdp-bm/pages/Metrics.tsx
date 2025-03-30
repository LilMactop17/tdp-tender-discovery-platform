import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Metrics = () => {
  const [metrics, setMetrics] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:3000/metrics');
        setMetrics(response.data);
      }
      
      catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'Unable to fetch metrics');
        }
        
        else {
          setError('An unexpected error occurred');
        }
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div>
      <h1>Metrics</h1>
      {error && <p>Error: {error}</p>}
      <pre>{metrics}</pre>
    </div>
  );
};

export default Metrics;