'use client'
import { useState, useEffect } from 'react'

const PropertyAddForm = () => {
  const [mounted, setMounted] = useState(false)
  const [fields, setFields] = useState({
    type: 'Apartment',
    name: 'Test property',
    description: '',
    location: {
      street: '',
      city: 'test city',
      state: 'test state',
      zipcode: '',
    },
    beds: '3',
    baths: '3',
    square_feet: '3',
    amenities: [],
    rates: {
      nightly: '',
      weekly: '',
      monthly: 3000,
    },
    seller_info: {
      name: '',
      email: 'test@mail.com',
      phone: '',
    },
    images: [],
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = () => {}
  const handleAmenitiesChange = () => {}
  const handleImagesChange = () => {}

  return (
    mounted && (
      <form>
        <h2 className="text-3xl text-center font-semibold mb-6">
          Ajouter une propriété
        </h2>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Type de propriété
          </label>
          <select
            value={fields.type}
            onChange={handleChange}
            id="type"
            name="type"
            className="border rounded w-full py-2 px-3"
            required
          >
            <option value="Apartment">Appartement</option>
            <option value="Condo">Condo</option>
            <option value="House">Maison</option>
            <option value="Cabin Or Cottage">Cabane ou Cottage</option>
            <option value="Room">Chambre</option>
            <option value="Studio">Studio</option>
            <option value="Other">Autre</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Nom de l'annonce
          </label>
          <input
           value={fields.name}
           onChange={handleChange}
            type="text"
            id="name"
            name="name"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="ex. Bel Appartement à Nouméa"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
           value={fields.description}
           onChange={handleChange}
            id="description"
            name="description"
            className="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="Ajouter une description optionnelle de votre propriété"
          ></textarea>
        </div>

        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">
            Localisation
          </label>
          <input
           value={fields.location.street}
           onChange={handleChange}
            type="text"
            id="street"
            name="location.street"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Rue"
          />
          <input
           value={fields.location.city}
           onChange={handleChange}
            type="text"
            id="city"
            name="location.city"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Ville"
            required
          />
          <input
           value={fields.location.state}
           onChange={handleChange}
            type="text"
            id="state"
            name="location.state"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Région"
            required
          />
          <input
           value={fields.location.zipcode}
           onChange={handleChange}
            type="text"
            id="zipcode"
            name="location.zipcode"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="Code postal"
          />
        </div>

        <div className="mb-4 flex flex-wrap">
          <div className="w-full sm:w-1/3 pr-2">
            <label
              htmlFor="beds"
              className="block text-gray-700 font-bold mb-2"
            >
              Lits
            </label>
            <input
             value={fields.beds}
             onChange={handleChange}
              type="number"
              id="beds"
              name="beds"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="w-full sm:w-1/3 px-2">
            <label
              htmlFor="baths"
              className="block text-gray-700 font-bold mb-2"
            >
              Salles de bain
            </label>
            <input
             value={fields.baths}
             onChange={handleChange}
              type="number"
              id="baths"
              name="baths"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="w-full sm:w-1/3 pl-2">
            <label
              htmlFor="square_feet"
              className="block text-gray-700 font-bold mb-2"
            >
              Surface (m²)
            </label>
            <input
             value={fields.square_feet}
             onChange={handleChange}
              type="number"
              id="square_feet"
              name="square_feet"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Équipements
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <input
                 
                type="checkbox"
                id="amenity_wifi"
                name="amenities"
                value="Wifi"
                className="mr-2"
                checked={fields.amenities.includes('Wifi')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_wifi">Wifi</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_kitchen"
                name="amenities"
                value="Full Kitchen"
                className="mr-2"
                checked={fields.amenities.includes('Full Kitchen')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_kitchen">Cuisine complète</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_washer_dryer"
                name="amenities"
                value="Washer & Dryer"
                className="mr-2"
                checked={fields.amenities.includes('Washer & Dryer')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_washer_dryer">
                Lave-linge et sèche-linge
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_free_parking"
                name="amenities"
                value="Free Parking"
                className="mr-2"
                checked={fields.amenities.includes('Free Parking')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_free_parking">Parking gratuit</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_pool"
                name="amenities"
                value="Swimming Pool"
                className="mr-2"
                checked={fields.amenities.includes('Swimming Pool')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_pool">Piscine</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_hot_tub"
                name="amenities"
                value="Hot Tub"
                className="mr-2"
                checked={fields.amenities.includes('Hot Tub')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_hot_tub">Jacuzzi</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_24_7_security"
                name="amenities"
                value="24/7 Security"
                className="mr-2"
                checked={fields.amenities.includes('24/7 Security')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_24_7_security">Sécurité 24/7</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_wheelchair_accessible"
                name="amenities"
                value="Wheelchair Accessible"
                className="mr-2"
                checked={fields.amenities.includes('Wheelchair Accessible')}
                onChange={handleAmenitiesChange}
                
              />
              <label htmlFor="amenity_wheelchair_accessible">
                Accès fauteuil roulant
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_elevator_access"
                name="amenities"
                value="Elevator Access"
                className="mr-2"
                checked={fields.amenities.includes('Elevator Access')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_elevator_access">Ascenseur</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_dishwasher"
                name="amenities"
                value="Dishwasher"
                className="mr-2"
              />
              <label htmlFor="amenity_dishwasher">Lave-vaisselle</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_gym_fitness_center"
                name="amenities"
                value="Gym/Fitness Center"
                className="mr-2"
                checked={fields.amenities.includes('Gym/Fitness Center')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_gym_fitness_center">Salle de sport</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_air_conditioning"
                name="amenities"
                value="Air Conditioning"
                className="mr-2"
                checked={fields.amenities.includes('Air Conditioning')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_air_conditioning">Climatisation</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_balcony_patio"
                name="amenities"
                value="Balcony/Patio"
                className="mr-2"
                checked={fields.amenities.includes('Balcony/Patio')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_balcony_patio">Balcon/Terrasse</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_smart_tv"
                name="amenities"
                value="Smart TV"
                className="mr-2"
                checked={fields.amenities.includes('Smart TV')}
                onChange={handleAmenitiesChange}
           
              />
              <label htmlFor="amenity_smart_tv">Télévision intelligente</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="amenity_coffee_maker"
                name="amenities"
                value="Coffee Maker"
                className="mr-2"
                checked={fields.amenities.includes('Coffee Maker')}
                onChange={handleAmenitiesChange}
              />
              <label htmlFor="amenity_coffee_maker">Machine à café</label>
            </div>
          </div>
        </div>

        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">
            Tarifs (Laissez vide si non applicable)
          </label>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <label htmlFor="weekly_rate" className="mr-2">
                Hebdomadaire
              </label>
              <input
                type="number"
                id="weekly_rate"
                name="rates.weekly"
                className="border rounded w-full py-2 px-3"
                value={fields.rates.weekly}
                onChange={handleChange}
            
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="monthly_rate" className="mr-2">
                Mensuel
              </label>
              <input
                type="number"
                id="monthly_rate"
                name="rates.monthly"
                className="border rounded w-full py-2 px-3"
                value={fields.rates.monthly}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="nightly_rate" className="mr-2">
                Nuitée
              </label>
              <input
                type="number"
                id="nightly_rate"
                name="rates.nightly"
                className="border rounded w-full py-2 px-3"
                value={fields.rates.nightly}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="seller_name"
            className="block text-gray-700 font-bold mb-2"
          >
            Nom du vendeur
          </label>
          <input
            type="text"
            id="seller_name"
            name="seller_info.name"
            className="border rounded w-full py-2 px-3"
            placeholder="Nom"
            value={fields.seller_info.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seller_email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email du vendeur
          </label>
          <input
            type="email"
            id="seller_email"
            name="seller_info.email"
            className="border rounded w-full py-2 px-3"
            placeholder="Adresse email"
            required
            value={fields.seller_info.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seller_phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Téléphone du vendeur
          </label>
          <input
            type="tel"
            id="seller_phone"
            name="seller_info.phone"
            className="border rounded w-full py-2 px-3"
            placeholder="Téléphone"
            value={fields.seller_info.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 font-bold mb-2"
          >
            Images (Sélectionnez jusqu'à 4 images)
          </label>
          <input
            type="file"
            id="images"
            name="images"
            className="border rounded w-full py-2 px-3"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
          />
        </div>

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ajouter la propriété
          </button>
        </div>
      </form>
    )
  )
}

export default PropertyAddForm
