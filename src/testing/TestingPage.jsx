import React, { useState, useEffect } from 'react';
import Table from './Table';

const TestingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8443/getApplications/Admin1');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>My Data</h1>
      <Table data={data} excludeColumns={['Admin' ]}/>
    </div>
  );
};

export default TestingPage;
