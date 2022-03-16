import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

import { Card } from '../Card'
import api from '../../services/api';

import { AssigmentListDiv, Header } from './style';

export const AssigmentList = () => {
  
  const [assigments, setAssigiments] = useState([]);

  useEffect(() => {
    api.get('/').then(({data}) => {
      setAssigiments(data);
      console.log(data);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, [])

  return(
    <AssigmentListDiv>
      <Header>
        <button>adicionar</button>
      </Header>

      {assigments?.map((assigment) => 
        <Card
          key={assigment._id}
          data={assigment}
          id={`card-id-${uuid()}`}
        />
      )}
    </AssigmentListDiv>
  )
}