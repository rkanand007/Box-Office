import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

function Show() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=season&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);
  return <div>This is show page</div>;
}

export default Show;
