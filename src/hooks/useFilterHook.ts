import { useState, useMemo } from 'react';

function useDataFilter(data:any) {
  const [filterSearch, setFilterSearch] = useState('');

  const filteredData = useMemo(() => {
    if (!data || !filterSearch) return data;

    const lowerCaseFilter = filterSearch.toLowerCase();

    return data.filter(
      (user:any) =>
        user.name.toLowerCase().includes(lowerCaseFilter) ||
        user.detail.toLowerCase().includes(lowerCaseFilter)
    );
  }, [data, filterSearch]);

  return {
    filteredData,
    filterSearch,
    setFilterSearch,
  };
}

export default useDataFilter;