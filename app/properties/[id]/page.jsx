'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error('Impossible de récupérer la propriété', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [id]);

  if (loading) {
    return <p>Chargement de la propriété...</p>;
  }

  if (!property) {
    return <p>Aucune propriété trouvée</p>;
  }

  return (
    <div>
      <h1 className="text-3xl">Propriété</h1>
      <div>
        <h2 className="text-xl">{property.name}</h2>
        <p>{property.description}</p>
        {/* Ajoutez d'autres champs de propriété ici */}
      </div>
    </div>
  );
};

export default PropertyPage;
