import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'

import { Card } from '../Card'

import { AssigmentListDiv, Header } from './style';

export const AssigmentList = () => {
  
  const [assigments, setAssigiments] = useState([]);
  const assigmentsCollectionRef = collection(db, "assigments")
  useEffect(() => {
    const getAssigments = async () => {
      const data = await getDocs(assigmentsCollectionRef);
      setAssigiments(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(assigments);
    };

    getAssigments();
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