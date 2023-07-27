import { useState, useEffect } from 'react';

function useTagsData(initialDataTags:any, initialDataDescription:any) {
  const [dataFilterTag, setDataFilterTag] = useState('');
  const [dataFilterTagNew, setDataFilterTagNew] = useState(initialDataTags);
  const [dataFilterTagDescription, setDataFilterTagDescription] = useState('');
  const [dataFilterTagNewDescription, setDataFilterTagNewDescription] = useState(initialDataDescription);

  useEffect(() => {
    setDataFilterTagNew(initialDataTags);
  }, [initialDataTags]);

  useEffect(() => {
    setDataFilterTagNewDescription(initialDataDescription);
  }, [initialDataDescription]);

  const handleClickRemoveTags = (index:number) => {
    const updateResultTagnames = [...dataFilterTagNew];
    updateResultTagnames.splice(index, 1);
    setDataFilterTagNew(updateResultTagnames);
  };

  const handleRemoveDescriptionTags = (index:number) => {
    const updateResultDescriptionData = [...dataFilterTagNewDescription];
    updateResultDescriptionData.splice(index, 1);
    setDataFilterTagNewDescription(updateResultDescriptionData);
  };

  return {
    dataFilterTag,
    setDataFilterTag,
    dataFilterTagNew,
    setDataFilterTagNew,
    dataFilterTagDescription,
    setDataFilterTagDescription,
    dataFilterTagNewDescription,
    setDataFilterTagNewDescription,
    handleClickRemoveTags,
    handleRemoveDescriptionTags,
  };
}

export default useTagsData;