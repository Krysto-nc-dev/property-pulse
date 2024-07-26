import Image from 'next/image';
import Link from 'next/link';
import {
  FaBath,
  FaBed,
  FaMapMarker,
  FaMoneyBill,
  FaRulerCombined,
} from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()} XPF/mois`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()} XPF/semaine`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()} XPF/nuit`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="relative w-full h-64">
        <Image
          src={`/images/properties/${property.images[0]}`}
          alt={property.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline mr-2" />
            {property.beds} <span className="md:hidden lg:inline">Lits</span>
          </p>
          <p>
            <FaBath className="inline mr-2" />
            {property.baths}{' '}
            <span className="md:hidden lg:inline">Salle de bains</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2" />
            {property.square_feet} <span className="md:hidden lg:inline">m²</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-center text-sm mb-4">
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className="inline mr-2" />
              Nuit
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <FaMoneyBill className="inline mr-2" />
              Semaine
            </p>
          )}
          {property.rates.monthly && (
            <p>
              <FaMoneyBill className="inline mr-2" />
              Mois
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-orange-700 mt-1" />
            <span className="text-orange-700">
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
