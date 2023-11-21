import React from "react";

const carData = [
  {
    imgsrc: "https://bluesky-cogcms.cdn.imgeng.in/media/un3nh3s1/1.png",
    model: "A class",
    description:
      "Introducing the new Mercedes-Benz A-Class, a compact car that brings class to your everyday life. Available as both a hatchback and a saloon, the A-Class has a sporty and dynamic exterior, featuring a forward-sloping bonnet, redesigned radiator grille, and flat headlamps with optional LED lights. The high-class exterior is complemented by a wide choice of exterior paintwork, including metallic, non-metallic, and MANUFAKTUR finishes.",
    configurations: [
      {
        title: "A class saloon Amg line",
        subtitle: "A180 AMG Line Executive 4DR Auto",
        price: "$36,230",
      },
      {
        title: "A class Diesel saloon amg line",
        subtitle: "A200d AMG Line Executive 4dr Auto",
        price: "$37,230",
      },
      {
        title: "A class saloon amg line",
        subtitle: "A200 AMG Line Premium 4dr Auto",
        price: "$37,730",
      },
      {
        title: "A class saloon amg line",
        subtitle: "A250e AMG Line Executive 4dr Auto",
        price: "$41,340",
      },
      {
        title: "A class saloon diesel amg line",
        subtitle: "A200d AMG Line Premium Plus 4dr Auto",
        price: "$82,230",
      },
      {
        title: "A class saloon amg line",
        subtitle: "A250e AMG Line Premium Plus 4dr Auto",
        price: "$82,230",
      },
      {
        title: "A class saloon amg line",
        subtitle: "A35 4Matic Premium 4dr Auto",
        price: "$82,230",
      },
      {
        title: "A class amg saloon amg line",
        subtitle: "A35 4Matic Premium Plus 4dr Auto",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-b-class-2023-amg-line-premium-rose-gold.png?w=600&auto=format",
    model: "B class",
    description:
      "The Mercedes-Benz B-Class is a sporty, comfortable and safety-conscious, family-friendly hatchback which features a state of the art interior; offering highlights such as a Windscreen Cockpit with MBUX infotainment system, built in ambient lighting with a choice of 64 colours and a wealth of intelligent options to make your life on the road simpler. The MBUX (Mercedes-Benz User Experience) system offers functionality which allows the vehicle to adapt to your needs and routines by; finding you faster routes to work, a voice control system allowing you to control elements such as temperature and radio as well as Augmented Reality Navigation which merges virtual maps with the real world allowing you to find your destination with ease.",
    configurations: [
      {
        title: "B class hatchback Amg line",
        subtitle: "B200 AMG Line Premium 5dr Auto",
        price: "$36,230",
      },
      {
        title: "B class Diesel hatchback amg line",
        subtitle: "B200 AMG Line Premium 5dr Auto",
        price: "$37,230",
      },
      {
        title: "B class hatchback amg line",
        subtitle: "B200 AMG Line Premium Plus 5dr Auto",
        price: "$37,730",
      },
      {
        title: "B diesel class hatchback amg line",
        subtitle: "B200d AMG Line Premium Plus 5dr Auto",
        price: "$41,340",
      },
      {
        title: "B diesel class hatchback diesel amg line",
        subtitle: "B200d AMG Line Executive 5dr Auto",
        price: "$82,230",
      },
      {
        title: "B class hatchback amg line",
        subtitle: "B200 AMG Line Premium Plus 5dr Auto",
        price: "$82,230",
      },
      {
        title: "B class hatchback amg line",
        subtitle: "B200 AMG Line Premium Plus 5dr Auto",
        price: "$82,230",
      },
      {
        title: "B diesel class amg hatchback amg line",
        subtitle: "B200d AMG Line Premium Plus 5dr Auto",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/35074/c-class-mercedes-amg-c-43-4matic.png",
    model: "C class",
    description:
      "Eye-catching looks. Innovative technology. Extraordinary comfort. Remarkable efficiency. The Mercedes-Benz C-Class Saloon combines all these and more to provide an exceptional driving experience.",
    //
    configurations: [
      {
        title: "C CLASS SALOON amg line",
        subtitle: "C300e AMG Line Premium 4dr 9G-Tronic",
        price: "$36,230",
      },
      {
        title: "C CLASS diesel SALOON amg line",
        subtitle: "C300 AMG Line Premium Plus 4dr 9G-Tronic",
        price: "$37,230",
      },
      {
        title: "C CLASS SALOON amg line",
        subtitle: "C300d AMG Line Premium Plus 4dr 9G-Tronic",
        price: "$37,730",
      },
      {
        title: "C CLASS SALOON amg line",
        subtitle: "C300e AMG Line Premium Plus 4dr 9G-Tronic",
        price: "$41,340",
      },
      {
        title: "C CLASS AMG SALOON AMG",
        subtitle: "C43 4Matic Premium 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "C CLASS AMG SALOON AMG",
        subtitle: "C43 4Matic Premium Plus 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "C CLASS AMG SALOON AMG",
        subtitle: "C63 S e 4Matic+ Night Ed Premium + 4dr MCT",
        price: "$82,230",
      },
      {
        title: "C CLASS AMG SALOON AMG",
        subtitle: "C63 S e 4Matic+ Carbon Edition 4dr MCT",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/35267/cla-coupe-amg-cla-35-4matic.png",
    model: "CLA class",
    description:
      "The Mercedes-Benz CLA Coupe delivers enormous driving pleasure, state-of-the-art technology and peerless performance that puts you straight in the fast lane. Elegance at every angle, the CLA Coupe has never been one to follow fashion, it’s a pioneer that commands a league entirely of its own. Its muscular lines, and agile, flowing chassis clearly portray the sleek, sporty nature that this one-of-a-kind Coupe brings to the table.",
    //
    configurations: [
      {
        title: "CLA AMG coupe amg line",
        subtitle: "CLA 35 Premium 4Matic 4dr Tip Auto",
        price: "$36,230",
      },
      {
        title: "CLA diesel SALOON amg line",
        subtitle: "CLA 220d AMG Line Premium Plus 4dr Tip Auto",
        price: "$37,230",
      },
      {
        title: "CLA AMG COUPE amg s",
        subtitle: "CLA 250e AMG Line Premium Plus 4dr Tip Auto",
        price: "$37,730",
      },
      {
        title: "CLA AMG COUPE amg s",
        subtitle: "CLA 35 Premium Plus 4Matic 4dr Tip Auto",
        price: "$41,340",
      },
      {
        title: "CLA AMG COUPE amg s",
        subtitle: "CLA 35 Premium Plus 4Matic 4dr Tip Auto",
        price: "$82,230",
      },
      {
        title: "CLA AMG COUPE amg s",
        subtitle: "CLA 45 S 4Matic+ Plus 4dr Tip Auto",
        price: "$82,230",
      },
      {
        title: "CLA AMG COUPE amg s",
        subtitle: "CLA 45 S 4Matic+ Plus 4dr Tip Auto",
        price: "$82,230",
      },
      {
        title: "CLA AMG COUPE SPECIAL EDITIONS AMG S Street Style Edition",
        subtitle: "CLA 45 S 4Matic+ Plus Street Style Ed 4dr Tip Auto",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-cls-coupe-2018-amg-line-night-edition-premium-plus-emerald-green.png?w=600&auto=format",
    model: "CLS class",
    description: "",
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/35110/e-class-amg-line-edition.png",
    model: "E class",
    description:
      "The E-Class Saloon is engineered to deliver more comfort, more efficiency and a more connected drive than ever before. The confidently styled exterior merges elegant proportions with dramatic bodywork. Inside the spacious cabin, class-leading specification includes leather upholstery, ambient lighting with 64 colour settings, KEYLESS-GO starting function and a multi-function steering wheel with innovative touch-control buttons.",
    configurations: [
      {
        title: "E class diesel saloon exclusive edition",
        subtitle: "E220d Exclusive Edition 4dr 9G-Tronic",
        price: "$36,230",
      },
      {
        title: "E class saloon amg line",
        subtitle: "E300e AMG Line Premium 4dr 9G-Tronic",
        price: "$37,230",
      },
      {
        title: "E CLASS AMG SALOON amg night edition",
        subtitle: "E53 4Matic+ Night Edition Prem+ 4dr TCT",
        price: "$37,730",
      },
      {
        title: "E class saloon amg line ",
        subtitle: "E300e AMG Line Premium Plus 4dr 9G-Tronic",
        price: "$41,340",
      },
      {
        title: "E class diesel saloon exclusive edition",
        subtitle: "E450d 4Matic Exclusive Edition 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "E Class Diesel saloon amg Line",
        subtitle: "E450d 4Matic AMG Line Premium Plus 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "E class AMG saloon amg night edition",
        subtitle: "E63 S 4Matic+ Night Edition Prem+ 4dr TCT",
        price: "$82,230",
      },
      {
        title: "E CLASS AMG Saloon Final Edition",
        subtitle: "E63 S 4Matic+ Final Edition Prem+ 4dr TCT",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-eqa-2021-amg-line-premium-cosmos-black.png?w=600&auto=format",
    model: "EQA class",
    description:
      "The Mercedes-Benz EQA is newest member of the Mercedes-EQ family and is our first all-electric compact car and is available in two trim lines: Sport and AMG Line. The 66.5 kWh lithium-ion battery provides a range of up to 263 miles. Navigation with Electric Intelligence – included as standard on both trim levels –calculates the route that will get the driver to their destination fastest, taking into account charging times, and taking the stress out of route planning. A three-year subscription to the Mercedes me Charge public charging service is also available as standard.",
    configurations: [
      {
        title: "EQA hatchback amg line",
        subtitle: "EQA 350 4Matic 215kW AMG Line 66.5kWh 5dr Auto",
        price: "$82,230",
      },
      {
        title: "EQA hatchback amg line",
        subtitle: "EQA 250+ 140kW AMG Line Premium 70.5kWh 5dr Auto",
        price: "$82,230",
      },
      {
        title: "EQA hatchback amg line",
        subtitle: "EQA 300 4M 168kW AMG Line Premium 66.5kWh 5dr Auto",
        price: "$82,230",
      },
      {
        title: "EQA hatchback amg line",
        subtitle: "EQA 300 4M 168kW AMG Line Premium 66.5kWh 5dr Auto",
        price: "$82,230",
      },
      {
        title: "EQA hatchback amg line",
        subtitle: "EQA 350 4M 215kW AMG Line Premium 66.5kWh 5dr Auto",
        price: "$82,230",
      },
      {
        title: "EQA hatchback amg line",
        subtitle: "EQA 250+ 140kW AMG Line Prem+ 70.5kWh 5dr Auto",
        price: "$82,230",
      },
      {
        title: "EQA hatchback amg line",
        subtitle: "EQA 300 4M 168kW AMG Line Prem+ 66.5kWh 5dr Auto",
        price: "$82,230",
      },
      {
        title: "EQA hatchback amg line",
        subtitle: "EQA 350 4M 215kW AMG Line Prem+ 66.5kWh 5dr Auto",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-g-class-2013-63-amg-magno-edition-manganite-grey.png?w=600&auto=format",
    model: "G class",
    description:
      "Since its inception in 1954, the Mercedes G Wagon - G Class has inspired successive generations with its breathtaking looks and sensational performance - and this latest version reflects that illustrious heritage.",
    configurations: [
      {
        title: "G class diesel station wagon amg line",
        subtitle: "G400d AMG Line Premium Plus 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "G class amg station wagon amg",
        subtitle: "G63 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "G CLASS AMG STATION WAGON SPECIAL EDITIONS Carbon edition",
        subtitle: "G63 Carbon Edition 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "G CLASS AMG STATION WAGON SPECIAL EDITIONS Magno Edition  ",
        subtitle: "G63 Magno Edition 5dr 9G-Tronic",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-gla-2024-amg-line-executive-iridium-silver.png?w=600&auto=format",
    model: "GLA class",
    description:
      "The all-new Mercedes-Benz GLA is a sight to behold; sporty, sleek and striking with powerful lines and bold Multibeam LED headlights ensuring you’ll stand out on the road. The panoramic sliding sunroof allows you a sense of space and freedom on the road and lends itself to the flowing modern design of the new GLA. The technology inside the all-new GLA offers both practicality and entertainment; with ambient lighting to set the mood of the cabin, high quality sound system for entertainment and our innovative MBUX operating system to connect your vehicle to the digital world. The new GLA is packed with safety features to keep you and your loved ones safe on the road. With Active Brake Assist, Driving Assistance Package, Blind Spot Assist and our Active Lane Keeping Assist but to name a few. Parking, lighting and suspension systems are all on hand to help you too.",
    configurations: [
      {
        title: "GLA amg hatchback amg",
        subtitle: "GLA 35 4Matic 5dr Auto",
        price: "$82,230",
      },
      {
        title: "GLA hatchback AMG line",
        subtitle: "GLA 250e AMG Line Premium Plus 5dr Auto",
        price: "$82,230",
      },
      {
        title: "GLA AMG hatchback amg",
        subtitle: "GLA 35 4Matic Premium 5dr Auto",
        price: "$82,230",
      },
      {
        title: "GLA diesel hatchback amg line",
        subtitle: "GLA 220d 4Matic AMG Line Premium Plus 5dr Auto",
        price: "$82,230",
      },
      {
        title: "GLA Amg hatchback amg",
        subtitle: "GLA 35 4Matic Premium 5dr Auto",
        price: "$82,230",
      },
      {
        title: "GLA Amg hatchback amg",
        subtitle: "GLA 35 4Matic Premium Plus 5dr Auto",
        price: "$82,230",
      },
      {
        title: "GLA Amg hatchback amg",
        subtitle: "GLA 35 4Matic Premium Plus 5dr Auto",
        price: "$82,230",
      },
      {
        title: "GLA Amg hatchback amg s",
        subtitle: "GLA 45 S 4Matic+ Plus 5dr Auto",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-glb.png?w=500&auto=format",
    model: "GLB class",
    description:
      "The new GLB has arrived. Our most compact SUV makes a striking statement on the road, from its unique headlight design to its distinctive silhouette, the GLB leaves a lasting impression. Every line and detail of the new GLB is there for a reason, from its striking and unique appearance, to its distinctive silhouette, the GLB leaves a lasting impression. The new GLB raises the bar for compact SUV levels of relaxation and convenience. With optional third-row seating (suitable for people up to 1.68m tall), the GLB provides room for up to seven occupants.",
    configurations: [
      {
        title: "GLB ESTATE SPECIAL EDITIONS Exclusive Launch Edition",
        subtitle: "GLB 200 Exclusive Launch Edition 5dr 7G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLB diesel estate AMG line",
        subtitle: "GLB 200d AMG Line Premium Plus 5dr 8G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLB diesel estate amg",
        subtitle: "GLB 220d 4Matic AMG Line Premium 5dr 8G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLB diesel estate amg line",
        subtitle: "GLB 220d 4Matic AMG Line Premium Plus 5dr Auto",
        price: "$82,230",
      },
      {
        title: "GLB diesel estate amg",
        subtitle: "GLB 220d 4M AMG Line Prem + Night Ed 5dr 8G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLB diesel estate amg",
        subtitle: "GLB 220d 4Matic AMG Line Premium + 5dr 8G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLB Amg estate amg",
        subtitle: "GLB 35 4Matic Premium Plus 5dr 8G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLB Amg estate amg s",
        subtitle: "GLB 35 4Matic Premium Plus 5dr 8G-Tronic",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/34789/glc-amg-glc-43.png",
    model: "GLC class",
    description:
      "Attractive. On every route.    Clear lines and dynamic proportions characterise the design of the new GLC. The sporty presence of the SUV is just as impressive in the city as it is off the road.    When it comes to the exterior equipment of the new GLC SUV the new design and equipment lines lend the vehicle its very own character with its sporty front end, split tail lights and light-alloy wheels ranging from 19 to 20-inches.   The interior equipment of the new GLC SUV features high-quality materials which deliver a level of luxurious comfort that you can really feel - on every journey. The interior of the new GLC SUV sets the standard, be it the central display tilted towards the driver, the multifunction sports steering wheel or the high-quality trim elements. Available with either Mild Hybrid and Hybrid engine types, our plug-in hybrid technology inspires with high performance, short charging times and an electric range suitable for everyday use.",
    configurations: [
      {
        title: "GLC amg estate amg",
        subtitle: "GLC 43 4Matic+ Premium Plus 5DR 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLC AMG ESTATE AMG S",
        subtitle: "GLC 63 S 4M+ e Performance Premium 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLC AMG ESTATE SPECIAL EDITION AMG S Night Edition",
        subtitle: "GLC 63 S 4M+ e Perform Night Ed Prem+ 5dr 9G-Tron",
        price: "$82,230",
      },
      {
        title: "GLC AMG ESTATE SPECIAL EDITION AMG S Night Edition",
        subtitle: "GLC 63 S 4M+ e Perform Night Ed Prem+ 5dr 9G-Tron",
        price: "$82,230",
      },
      {
        title: "GLC amg estate amg",
        subtitle: "GLC 43 4Matic+ Premium Plus 5DR 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLC AMG ESTATE AMG S",
        subtitle: "GLC 63 S 4M+ e Performance Premium 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLC AMG ESTATE SPECIAL EDITION AMG S Night Edition",
        subtitle: "GLC 63 S 4M+ e Perform Night Ed Prem+ 5dr 9G-Tron",
        price: "$82,230",
      },
      {
        title: "GLC AMG ESTATE SPECIAL EDITION AMG S Night Edition",
        subtitle: "GLC 63 S 4M+ e Perform Night Ed Prem+ 5dr 9G-Tron",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/34962/gle-amg-line-executive.png",
    model: "GLE class",
    description:
      "Introducing the newly refreshed Mercedes-Benz GLE and GLE Coupé, now available at Sinclair Mercedes-Benz. The GLE SUV boasts an updated exterior with a new front bumper, radiator grille, and MULTIBEAM LED headlamps. Inside, it features a new steering wheel and various leather upholstery choices. Both the GLE SUV and GLE Coupé now include the latest generation MBUX with over-the-air updates and the 'Hey Mercedes' voice assistant. Powertrains have been electrified, offering mild hybrid and plug-in hybrid options. AIRMATIC Air suspension with Adaptive Damping System comes standard, ensuring a luxurious and comfortable ride. The GLE also features the class-leading Burmester® surround sound system. Customers can choose from a range of options and customizations to suit their preferences. For more technical details, visit the Mercedes-Benz UK press website. Experience the luxury and technology of the new GLE, setting a new standard for SUVs.",
    configurations: [
      {
        title: "GLE amg estate amg",
        subtitle: "GLE 450 4Matic AMG Line Prem 5dr 9G-Tronic [7 St]",
        price: "$82,230",
      },
      {
        title: "GLE Diesel ESTATE AMG line",
        subtitle: "GLE 300d 4Matic AMG Line Prem + 5dr 9G-Tron [7 St]",
        price: "$82,230",
      },
      {
        title: "GLE diesel ESTATE AMG line",
        subtitle: "GLE 450d 4Matic AMG Line Prem + 5dr 9G-Tron [7 St]",
        price: "$82,230",
      },
      {
        title: "GLE ESTATE AMG Line",
        subtitle: "GLE 400e 4Matic AMG Line Premium + 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLEe state amg line",
        subtitle: "GLE 450 4Matic AMG Line Prem + 5dr 9G-Tron [7 St]",
        price: "$82,230",
      },
      {
        title: "GLE AMG ESTATE AMG ",
        subtitle: "GLE 53 4Matic+ Premium 5dr TCT [7 Seats]",
        price: "$82,230",
      },
      {
        title: "GLE AMG ESTATE AMG Night Edition",
        subtitle: "GLE 53 4Matic+ Night Ed Premium+ 5dr TCT [7 Seats]",
        price: "$82,230",
      },
      {
        title: "GLE AMG ESTATE SPECIAL EDITION AMG Night Edition",
        subtitle: "GLE 63 S 4Matic+ Night Edition Premium + 5dr TCT",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/34979/gls-amg-line-premium.png",
    model: "GLS class",
    description:
      "The Mercedes-Benz SUV GLS offers unrivalled luxury, versatility and driving refinement. Imposing proportions and dramatic exterior styling emphasise the car’s formidable performance, with striking design elements including a reworked twin-louvre grille, 21-inch AMG alloy wheels, and privacy glass.",
    configurations: [
      {
        title: "GLS diesel   ESTATE Business Class",
        subtitle: "GLS 450d 4Matic Business Class 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLS ESTATE Business Class",
        subtitle: "GLS 450 4Matic Business Class 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLS AMG ESTATE night edition",
        subtitle: "GLS 63 4Matic+ Night Edition Executive 5dr TCT",
        price: "$82,230",
      },
      {
        title: "GLS AMG ESTATE night edition",
        subtitle: "GLS 63 4Matic+ Night Edition Executive 5dr TCT",
        price: "$82,230",
      },
      {
        title: "GLS ESTATE Maybach",
        subtitle: "Maybach GLS 600 4Matic 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLS ESTATE Maybach ",
        subtitle: "GLE 53 4Matic+ Premium 5dr TCT [7 Seats]",
        price: "$82,230",
      },
      {
        title: "GLS ESTATE Maybach First Class",
        subtitle: "Maybach GLS 600 4Matic First Class 5dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "GLS ESTATE Maybach First Class",
        subtitle: "Maybach GLS 600 4Matic First Class 5dr 9G-Tronic",
        price: "$82,230",
      },
    ],
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/keaj4col/s-class-saloon-amg-line-premium.png",
    model: "S class",
    description:
      "Successive generations of the Mercedes-Benz S-Class Saloon have raised the bar for automotive design and engineering, and this latest incarnation not only continues this proud tradition but exceeds all expectations - The trailblazing S-Class is simply the personification of innovation and provides drivers with the perfect balance of power and efficiency, but when it comes to luxurious travel it represents the ultimate in passenger comfort.",
    configurations: [
      {
        title: "S CLASS SALOON amg line ",
        subtitle: "S580e L AMG Line Premium Plus 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "S CLASS SALOON amg line",
        subtitle: "S500L 449 4Matic AMG Line Prem+ Exec 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "S CLASS SALOON amg line ",
        subtitle: "S580e L AMG Line Prem + Executive 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "S CLASS SALOON maybach",
        subtitle: "Maybach S580 4Matic 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "S CLASS amg SALOON amg touring",
        subtitle: "S63 4Matic AMG E Performance Touring 4dr MCT",
        price: "$82,230",
      },
      {
        title: "S CLASS SALOON amg night edition ",
        subtitle: "S63 4Matic AMG E Performance Night Edition 4dr MCT",
        price: "$82,230",
      },
      {
        title: "S CLASS SALOON maybach",
        subtitle: "Maybach First Class S580 4Matic 4dr 9G-Tronic",
        price: "$82,230",
      },
      {
        title: "S CLASS SALOON maybach",
        subtitle: "Maybach First Class S680 4Matic 4dr 9G-Tronic",
        price: "$82,230",
      },
    ],
  },
];

export default carData;
