module.exports = () => {
  return {
    name: "iEi Otago",
    menu: [
      { page:"About", route:"/About" },
      { page:"FAQ", route:"/FAQ" },
      { page:"Contact", route:"/Contact" }
    ],
    selectedService:{},
    services: [
      {
        service:"Property Inspection",
        image: "https://thumb7.shutterstock.com/display_pic_with_logo/53073/53073,1196472714,1/stock-photo-exterior-of-a-typical-small-town-house-in-rural-new-zealand-7426006.jpg",
        blurb: "There are many reasons why you could need an electrical test or inspection on your property or electrical items. It could be for insurance purposes, landlord's inspection, change of use, ownership or even just for your own peace of mind.",
        content: [
          {heading: "Did You Know?", content:"All electrical systems deteriorate with age and/or use so it is important that they are maintained regularly to ensure that the safety of people around the system are not at risk."},
          {heading: "What Does a Property Inspection Involve?", content:"An inspection will reveal potential hazards within the tested installation, check for earth and bonding (or the lack of it), as well as identify any defective work whilst checking all the fixed wiring. This includes testing RCDs to make sure they trip under fault conditions and checking fuse and circuit breaker ratings. Our report also lists non-compliant wiring or fittings."},
          {heading: "Why is a Property Inspection Important?", content:"When buying a property for yourself or an investment property it is important to know the condition of the electrical installation of your prospective purchase as unknown or unforeseen problems can soon consume a substantial portion of your budget."},
          {heading: "Why is a Property inspection important?", content:"With an in depth knowledge of the regulations and standards appropriate to the age of the property iEi Otago will visit the property, carry out the inspection and discuss the findings."},
        ],
        stepsHeading: "How do I book a Property Inspection?",
        steps: [
          "Contact iEi Otago",
          "Make an appointment",
          "You will need to provide your name, address, phone, email address (for the report to be sent to you) and the address of the property to be inspected.",
          "Often it is also necessary to provide the Real Estate agent’s contact details so access can be arranged for the inspection."
        ]
      },
      {
        service:"Electrical Warrant of Fitness",
        image: "https://thumb7.shutterstock.com/display_pic_with_logo/648904/500827201/stock-photo-caravan-trailer-on-a-green-lawn-on-a-sunny-spring-day-500827201.jpg",
        blurb: "iEi Otago can take the hassle out of your next Electrical Warrant of Fitness (EWOF) for your caravan, motorhome, mobile food van or boat. Our Inspectors can come to where the vehicle is located for your convenience.",
        content: [
          {heading: "Did You Know?", content:"It is a requirement under the Electricity Act 1992 that any connectable installation be certified before being connected to a power supply. For example, holiday park operators will require your caravan or motorhome to have a current EWOF before allowing you to connect on a powered site. Another example is, a local authority will require a current EWOF for a mobile food van before connecting into a public power point."},
          {heading: "Why is an EWOF Important?", content:"It is important your caravan, motorhome or boat is regularly checked to ensure your electrical installation is safe and fit for its intended use. Caravan, motorhome, mobile food van and boats are small confined spaces, often in damp crowded situations, thereby being of higher risk and hence requiring regular checks to ensure safety."},
          {heading: "Where do I get an EWOF Done?", content:"We can provide an EWOF for your caravan, motorhome or boat at your premise or a pre-arranged location. Any matters that require rectifying will be notified at the time of testing. If your caravan, motorhome, mobile food van or boat fails its EWOF the first time, there is a small charge for a retest."}
        ],
        stepsHeading: "How do I book an Electrical Warrant of Fitness?",
        steps: [
          "Contact iEi Otago",
          "Make an appointment",
          "You will need to provide the name, address and your contact phone number."
        ]
      },
      {
        service:"Explosive Area Inspection",
        image: "https://thumb7.shutterstock.com/display_pic_with_logo/3212969/579910117/stock-photo-gas-station-fuel-pump-579910117.jpg",
        blurb: "iEi Otago carries out explosive area inspections to AS/NZS:60079 standards for commercial businesses who have explosive environments  associated with their work activities.",
        content: [
          {heading: "Did You Know?", content:"Many business activities involve the use of airborne particles and inflammatory materials. These may ignite if an electrical fault occurred within the work area. These areas listed here require explosive area inspection: Fuel stations, Paint spraying and tinting booths &amp; mixing rooms, Dust environments, LPG stations &amp; storage facilities, Dangerous Goods stores, Printing areas, Woodworking dust areas, Bakeries, Silos, Industrial applications, DG Store certification/ verification"},
          {heading: "Why is an Explosive Area Inspection Important?", content:"It is important to check that all the electrical equipment is correctly operating and rated for the environment it is operating within. Another important aspect of the inspection is there are no potential voltage differences between conductive materials that can cause a spark."},
          {heading: "Where do I get an Explosive Area Inspection Done?", content:"With an in depth knowledge of the standards required iEi Otago will visit site and carry out the inspection and discuss the findings, working with you towards compliance."},
        ],
        stepsHeading: "How do I book an Explosive Area Inspection?",
        steps: [
          "Contact iEi Otago",
          "Make an appointment",
          "You will need to provide the business type, name, address and your contact phone number."
        ]
      },
      {
        service:"Certificate of Verification",
        image: "https://thumb9.shutterstock.com/display_pic_with_logo/4574812/581376208/stock-photo-high-voltage-post-high-voltage-tower-sky-background-581376208.jpg",
        content: [
          {heading: "Power Disconnected for 6 months or more?", content:"Where power is not used over long periods of time, people often have their electricity supply disconnected. It is important to note that if the power has been disconnected for longer than six months, your installation must (by law) be inspected before reconnection can occur. This applies to all installations including temporary supplies for builders, pumps, cowsheds, houses and cribs, regardless of age."},
          {heading: "Not Sure How Long your Power has been Disconnected?", content:"Call your power provider with the address. They will be able to tell you exactly how long the electricity has been turned off and advise whether an inspection is required."}

        ],
        stepsHeading: "How do I arrange to get my Power Reconnected?",
        steps: [
          "Arrange a Certificate of Verification with iEi Otago",
          "Call your power provider to agree to future power accounts, and request the reconnection. Advise your power provider that the COV has been arranged and a copy left on site."
        ]
      },
      {
        service:"New Building Connection",
        image: "https://thumb7.shutterstock.com/display_pic_with_logo/537709/209541841/stock-photo-crane-and-building-construction-site-against-blue-sky-209541841.jpg",
        content: [
          {heading: "", content:"If you are building a new house or require a new power supply, you must seek approval before connecting to the local power network. Network approval is intended to ensure the following: The connection is made to the correct supply point, There is legal access to the network, Network capacity is sufficient, Fusing is available"}
        ],
        stepsHeading: "How do I get a new or temporary Power Supply?",
        steps: [
          "You will need to complete a network application form (http://www.auroraenergy.co.nz/assets/Forms/AE-F008-Connection-Application-Web2.doc) to have a new installation connected to the Aurora network. This process provides you with an ICP number that is essential for Step 2.",
          "Contact an Energy Retailer to set up an account.",
          "Your Energy Retailer will authorise the connection of your new installation or temporary power supply. It is important to get your application in to your local network as early as possible in the building process. Don't wait until construction is complete before contacting them.",
          "Have your electrician contact iEi Otago for the high-risk mains inspection. We can arrange the revenue meter installation to coincide with our inspection."
        ]
      },
      {
        service:"Permanent Disconnection",
        image: "https://thumb1.shutterstock.com/display_pic_with_logo/789982/162319469/stock-photo-hydraulic-crusher-excavator-machine-at-site-demolition-162319469.jpg",
        content: [
          {heading: "Demolishing or Removing a Building?", content:"For the safety of everyone, it is important to have the electricity service disconnected before you begin demolition or removal of a building."}
        ],
        stepsHeading: "How do I arrange a Permanent Disconnection?",
        steps: [
          "Contact your Energy Retailer, giving them the address or ICP number of the building and request a permanent disconnection. It is important to organise this early so arrangements can be made well before demolition day.",
          "Your electricity retailer will arrange a Service Request for the disconnection to be carried out.",
          "Contact us and we will remove the meter and arrange to have the lines removed from the connection point on the building."
        ]
      },
      {
        service:"Electrical Upgrade",
        image: "https://thumb7.shutterstock.com/display_pic_with_logo/288118/127057241/stock-photo-senior-man-installing-a-bulb-in-a-freshly-renovated-appartment-127057241.jpg",
        content: [
          {heading: "", content:"As a property ages or is altered, it often becomes essential to replace or change certain elements of your electrical installation. New Zealand wiring regulations states that certain electrical work is high-risk when it is being carried out, and requires independent 3 rd party inspection."}
        ],
        stepsHeading: "an",
        steps: [
          "heck",
          "heck",
          "heck",
          "heck"
        ]
      }
    ],
    route: "/",
    routeHistory: []
  }
}
