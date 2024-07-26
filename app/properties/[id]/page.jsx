'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import { FaArrowLeft } from 'react-icons/fa';

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
    return (
      <p className="text-2xl font-bold text-center mt-10">
        Aucune propriété trouvée
      </p>
    );
  }

  return (
    <div>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="fas fa-arrow-left mr-2" />
                Retour aux propriétés
              </Link>
            </div>
          </section>
          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                    <div className="text-gray-500 mb-4">Appartement</div>
                    <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
                    <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                      <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                      <p className="text-orange-700">
                        {property.location.street} {property.location.city}, {property.location.state} {property.location.zipcode}
                      </p>
                    </div>

                    <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                      Tarifs et Options
                    </h3>
                    <div className="flex flex-col md:flex-row justify-around">
                      <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                        <div className="text-gray-500 mr-2 font-bold">Nuitée</div>
                        <div className="text-2xl font-bold">
                          <i className="fa fa-xmark text-red-700"></i>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                        <div className="text-gray-500 mr-2 font-bold">Semaine</div>
                        <div className="text-2xl font-bold text-blue-500">{property.rates.weekly} XPF</div>
                      </div>
                      <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                        <div className="text-gray-500 mr-2 font-bold">Mois</div>
                        <div className="text-2xl font-bold text-blue-500">{property.rates.monthly} XPF</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-lg font-bold mb-6">Description et Détails</h3>
                    <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
                      <p>
                        
                        <i className="fa-solid fa-bed"></i> {property.beds}
                        <span className="hidden sm:inline"> Lits</span>
                      </p>
                      <p>
                        <i className="fa-solid fa-bath"></i> {property.baths}
                        <span className="hidden sm:inline"> Salles de bain</span>
                      </p>
                      <p>
                        <i className="fa-solid fa-ruler-combined"></i>
                        {property.square_feet} <span className="hidden sm:inline">m²</span>
                      </p>
                    </div>
                    <p className="text-gray-500 mb-4">
                      {property.description}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-lg font-bold mb-6">Équipements</h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
                      {property.amenities.map((amenity, index) => (
                        <li key={index}>
                          <i className="fas fa-check text-green-600 mr-2 mt-3"></i> {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <div id="map"></div>
                  </div>
                </main>

                {/* Sidebar */}
                <aside className="space-y-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                    <i className="fas fa-bookmark mr-2"></i> Enregistrer la propriété
                  </button>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                    <i className="fas fa-share mr-2"></i> Partager la propriété
                  </button>

                  {/* Formulaire de contact */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Contacter le gestionnaire de la propriété</h3>
                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                          Nom :
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Entrez votre nom"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email :
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          placeholder="Entrez votre email"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                          Téléphone :
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="phone"
                          type="text"
                          placeholder="Entrez votre numéro de téléphone"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                          Message :
                        </label>
                        <textarea
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                          id="message"
                          placeholder="Entrez votre message"
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                          type="submit"
                        >
                          <i className="fas fa-paper-plane mr-2"></i> Envoyer le message
                        </button>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default PropertyPage;
