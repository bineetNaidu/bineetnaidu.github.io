import { useState, useEffect } from 'react';
import { IProject } from 'src/@types/types';
import { projectFirestore } from '../lib/firebase';

// takes a collection name
const useFirestore = (collection: string) => {
  // STATES
  const [docs, setDocs] = useState<IProject[]>([]);

  // HOOKS
  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      // .orderBy('createdAt', 'desc')
      .onSnapshot((snaps) => {
        let documents: any = [];
        snaps.forEach((doc) => documents.push({ ...doc.data(), id: doc.id }));
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default useFirestore;
