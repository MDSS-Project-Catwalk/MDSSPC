import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList';

export const DataContext = React.createContext();

const questionAnswers = (props) => {
  const [data, setData] = useState({ product_id: null, results: [] });

  useEffect(() => {
    axios.get('qa/questions/', {
      params: {
        product_id: 25165,
        count: 4,
      },
    })
      .then((result) => {
        setData(currentState => (result.data));
      });
  }, []);

  return (
    <div className="QA_list">
      <DataContext.Provider value={data}>
        <QuestionsList />
      </DataContext.Provider>
    </div>
  );
};

export default questionAnswers;
