import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            key={1}
            heading={"For Renters"}
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "properties",
              backgroundColor: "bg-black",
            }}
            children={
              "Find your dream rental property. Bookmark properties and contact owners."
            }
          />

          <InfoBox
            key={2}
            heading={"For Property Owners"}
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "properties/add",
              backgroundColor: "bg-blue-500",
            }}
            children={
              "List your properties and reach potential tenants. Rent as an airbnb or long term."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
