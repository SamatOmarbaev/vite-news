import { useEffect, useState } from "react"


interface FetchFunction<P, T> {
    (params?: P): Promise<T>;
}
  
interface UseFethcResult<T> {
    data: T | null | undefined;
    isLoading: boolean;
    error: Error | null;
}

export const useFetch = <T, P>(fetchFunc: FetchFunction<P, T>, params?: P): UseFethcResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const stringParams = params ? new URLSearchParams(params).toString() : "";
  
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunc(params);
  
        setData(result);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFunc, stringParams]);
  
  return { data, isLoading, error };
}