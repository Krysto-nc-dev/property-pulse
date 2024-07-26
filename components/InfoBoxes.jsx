import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="Pour les locataires"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Parcourir les propriétés",
              link: "/properties",
              backgroundColor: "bg-black"
            }}
          >
            Trouvez la propriété locative de vos rêves. Ajoutez des propriétés aux favoris et contactez les propriétaires.
          </InfoBox>
          <InfoBox
            heading="Pour les propriétaires"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Ajouter une propriété",
              link: "/properties/add",
              backgroundColor: "bg-blue-500"
            }}
          >
            Listez vos propriétés et atteignez des locataires potentiels. Louez en tant qu'Airbnb ou à long terme.
          </InfoBox>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
