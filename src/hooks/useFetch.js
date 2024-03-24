import { useState, useEffect } from "react";

const waitFor = 0;

const useFetch = url => {
	const [data, setData] = useState();
	const [loadingState, setLoadingState] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const abortCont = new AbortController();

		const getData = async () => {
			try {
				setLoadingState(() => true);
				const response = await fetch(url, { signal: abortCont.signal });
				if (!response.ok) {
					throw Error(
						"Something went wrong..!!\nCould not get the data."
					);
					setError(prev => true);
				}
				const data = await response.json();
				setLoadingState(() => false);
				setData(prev => data);
				setError(prev => false);
			} catch (err) {
				if (err.name !== "AbortError") {
					setLoadingState(false);
					setError(prev => true);
					console.log(err);
				}
			}
		};
		setTimeout(() => {
			getData();
		}, waitFor);
		return () => abortCont.abort();
	}, []);

	return { data, loadingState, error };
};

export default useFetch;
