import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
  FaTimes,
  FaMapMarker,
} from 'react-icons/fa'
const PropertyDetails = ({ property }) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">Appartement</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <FaMapMarker className="text-orange-700 mr-2" />
          <p className="text-orange-700">
            {property.location.street} {property.location.city},{' '}
            {property.location.state} {property.location.zipcode}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Tarifs et Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nuitée</div>
            <div className="text-2xl font-bold text-blue-500">
                {property.rates.nightly ? property.rates.nightly + ' XPF' :  <FaTimes className="text-red-700" />}
             
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Semaine</div>
            <div className="text-2xl font-bold text-blue-500">
            {property.rates.weekly ? property.rates.weekly + ' XPF' :  <FaTimes className="text-red-700" />}
              
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Mois</div>
            <div className="text-2xl font-bold text-blue-500">
            {property.rates.monthly ? property.rates.monthly + ' XPF' :  <FaTimes className="text-red-700" />}
             
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description et Détails</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <p>
            <FaBed className="inline mr-2" />
            {property.beds}
            <span className="hidden sm:inline"> Lits</span>
          </p>
          <p>
            <FaBath className="inline mr-2" />
            {property.baths}
            <span className="hidden sm:inline"> Salles de bain</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2" />
            {property.square_feet} <span className="hidden sm:inline">m²</span>
          </p>
        </div>
        <p className="text-gray-500 mb-4  text-center">{property.description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Équipements</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property.amenities.map((amenity, index) => (
            <li key={index}>
              <FaCheck className="text-green-600 mr-3 inline" />
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map">
          <FaMapMarker className="text-red-700" />
        </div>
      </div>
    </main>
  )
}

export default PropertyDetails
