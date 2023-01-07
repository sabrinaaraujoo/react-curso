import { useState, useEffect } from "react";

// custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refatorando o POST

  const [config, setConfig] = useState(null);
  const [method, setMehod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // loading
  const [loading, setLoading] = useState(false);

  // error
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMehod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // loading
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // refatorando o POST
  useEffect(() => {
    const htttpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    htttpRequest();
  }, [config, url, method]);

  return { data, httpConfig, loading, error };
};
