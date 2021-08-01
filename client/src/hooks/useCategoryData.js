import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategoryData(initial) {
  const [state, setState] = useState({
    values: [],
  });

  useEffect(() => {
    axios.get('http://localhost:3002/api/categories').then(res => {
      const categories = res.data;
      const temp = [];
      categories.map(ele => {
        if(ele.budget_id === 2) {
          temp.push([ele.name, ele.spending_limit])
        }
        return ele;
      })
      setState(prev => ({...prev, values: temp}))
    });
  }, []);

  return { state }
}