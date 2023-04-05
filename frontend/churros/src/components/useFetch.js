// useFetch.js
import { useState, useEffect, useCallback } from "react";
import { api } from "../axios-instance/api";
function useFetch(searchData, pageNum) {
  const [loading, setLoading] = useState(true);
  const [searchList, setSearchList] = useState([]);
  const [last, setLast] = useState(false);
  const fetchData = async () => {
    try {
      const response = await api.post(`/news/search`, {
        text: searchData,
        page: pageNum,
        size: 10,
      });
      const { content, empty, size, last } = response.data;
      console.log(
        `loading sample search result ${searchData}: ${empty} ${size}`
      );
      setSearchList((prev) => [...prev, ...content]);
      setLast(last)
    } catch (error) {
      console.log(error);
    }
  };
  const sendQuery = useCallback(() => {
    try {
      setLoading(true);
      fetchData();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [searchData, pageNum]);

  useEffect(() => {
    sendQuery(searchData);
  }, [searchData, sendQuery, pageNum]);

  return { loading, searchList, last };
}

export default useFetch;