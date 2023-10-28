import React from 'react';
import { useGetNewGoodsQuery } from './redux/services/goods';

function App() {
  const { data } = useGetNewGoodsQuery();
  return (
    <div className="App">
      <h1>{data?.name}</h1>
    </div>
  );
}

export default App;
