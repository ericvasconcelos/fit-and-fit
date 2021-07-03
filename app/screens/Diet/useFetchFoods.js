import { useState, useCallback } from 'react';
import api from '../../utils/api';

const useFetchFoods = () => {
  const [foods, setFoods] = useState([]);
  const [foodsLoading, setFoodsLoading] = useState(false);
  const [foodsError, setFoodsError] = useState('');

  const fetchFoods = useCallback(async (name) => {
    setFoodsLoading(true);
    setFoods(null);

    await api.get(`/foods?description_like=${name}&_limit=10`)
      .then(({ data }) => {
        setFoods(data);
      })
      .catch(({ response }) => {
        setFoodsError(response.data.message || 'Oops I\'m so sorry. foods did not load correctly');
      });

    setFoodsLoading(false);
  }, []);

  return {
    fetchFoods,
    foods,
    foodsLoading,
    foodsError,
  };
};

export default useFetchFoods;
