export interface PackageImage {
  id: number;
  src: string;
  alt: string;
}

export interface TripInfo {
  accommodation: {
    text: string;
    icon: string;
  };
  arrivalCity: {
    text: string;
    icon: string;
  };
  bestSeason: {
    text: string;
    icon: string;
  };
  guide: {
    text: string;
    icon: string;
  };
  maximumAltitude: {
    text: string;
    icon: string;
  };
  meals?: {
    text: string;
    icon: string;
  };
  transportation: {
    text: string;
    icon: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stay {
  id: number;
  name: string;
  description: string;
  images: PackageImage[];
  amenities: string[];
}

export interface Package {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  state: string;
  price: number;
  duration: string;
  activityTags: string[];
  images: PackageImage[];
  tripInfo?: TripInfo;
  overview?: {
    title: string;
    description: string;
    highlights?: Array<{
      id: number;
      highlight: string;
    }>;
    activities?: Array<{
      title: string;
      description: string;
      emoji: string;
    }>;
  };
  itinerary?: Array<{
    day: number;
    title: string;
    description: string;
    activities?: string[];
  }>;
  cost?: {
    includes: string[];
    excludes: string[];
    notes: string[];
  };
  stays?: Stay[];
  faqs?: FAQ[];
  mapUrl: string;
}

const packages: Package[] = [
  {
    id: 1,
    slug: "water-sports-tehri-dam",
    title: "Water Sports Tehri Dam",
    state: "Uttarakhand",
    shortDescription:
      "Embark on an unforgettable journey to Tehri Lake, a stunning destination nestled in the picturesque hills of Uttarakhand. Over the course of days and 1 night, immerse yourself in a variety of thrilling water sports and enjoy the serene beauty of this artificial lake.",
    price: 1200,
    duration: "2 Days & 1 Night",
    activityTags: ["river-rafting", "water-sports"],
    images: [
      {
        id: 1,
        src: "/images/packages/tehri-dam/tehri-dam.webp",
        alt: "Group of people white water rafting at Tehri Dam",
      },
      {
        id: 2,
        src: "/images/packages/tehri-dam/water-sports.jpg",
        alt: "Jet skiing on Tehri Lake",
      },
    ],
    tripInfo: {
      accommodation: {
        text: "Subjected To Request With Extra Charge",
        icon: "building",
      },
      arrivalCity: {
        text: "Tehri Lake",
        icon: "city",
      },
      bestSeason: {
        text: "All Around The Year.",
        icon: "sun",
      },
      guide: {
        text: "Professional Guidance: Expert instructors to ensure a safe and enjoyable experience.",
        icon: "guide",
      },
      maximumAltitude: {
        text: "Between 1550 to 1950 mts (5086-6400 feet) above Sea level.",
        icon: "mountain",
      },
      transportation: {
        text: "Bus, Taxi, or other mode of transportation can be arranged on request for extra charges.( Package Price Does Not Include Transportation.)",
        icon: "bus",
      },
    },
    overview: {
      title: "Water Sports Overview",
      description:
        "Tehri Lake, nestled in the scenic hills, offers an array of exhilarating water sports that cater to all adventure enthusiasts. Whether you're seeking a thrilling experience or a leisurely exploration, Tehri Lake has something for everyone:",
      activities: [
        {
          title: "Jet skiing",
          description:
            "Feel the rush as you ride a high-speed water scooter across the expansive lake, exploring its hidden corners.",
          emoji: "🏄‍♂️",
        },
        {
          title: "Kayaking",
          description:
            "Navigate the peaceful waters at your own pace, perfect for both beginners and experienced paddlers.",
          emoji: "🛶",
        },
        {
          title: "Banana Boat Rides",
          description:
            "Enjoy the thrill of balancing on this inflatable boat as it zips across the lake, a perfect activity for groups.",
          emoji: "🍌",
        },
        {
          title: "Rafting",
          description:
            "Experience the adrenaline rush of navigating through the flowing waters with a team, supervised by professional guides.",
          emoji: "🚣‍♀️",
        },
        {
          title: "Swimming",
          description:
            "Take a refreshing dip in designated safe zones under the watchful eyes of lifeguards.",
          emoji: "🏊‍♂️",
        },
      ],
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Adventure Begins",
        description:
          "Arrive at Tehri Lake in the morning. After a safety briefing and equipment check, dive into your chosen water sports activities.",
        activities: [
          "Arrival at Tehri Lake",
          "Welcome refreshments",
          "Safety briefing and equipment distribution",
          "Start with beginner-friendly activities like swimming and banana boat rides",
          "Lunch at lakeside cafe",
          "Afternoon session of kayaking and jet skiing",
          "Evening relaxation with lakeside views",
          "Dinner and overnight stay (if accommodation booked)",
        ],
      },
      {
        day: 2,
        title: "Adventure Continues & Departure",

        description:
          "Continue your water adventure with remaining activities and finally depart with memories to cherish.",
        activities: [
          "Early morning lake view and breakfast",
          "Morning session of rafting",
          "Advanced jet skiing for interested participants",
          "Lunch break",
          "Leisure time for swimming or repeating favorite activities",
          "Souvenir shopping at local stalls",
          "Departure with certificates of participation",
        ],
      },
    ],
    cost: {
      includes: [
        "All water sports activities mentioned in the itinerary",
        "Safety equipment (life jackets, helmets, etc.)",
        "Professional instructors",
        "First aid facilities",
        "Activity completion certificates",
      ],
      excludes: [
        "Transportation to and from Tehri Lake",
        "Accommodation (can be arranged at extra cost)",
        "Meals and beverages",
        "Personal expenses",
        "Insurance",
        "Anything not mentioned in inclusions",
      ],
      notes: [
        "Prices are subject to change during peak seasons",
        "Children below 12 years must be accompanied by adults",
        "Participants should know swimming or inform the instructors beforehand",
        "Activities are subject to weather conditions",
      ],
    },
    stays: [
      {
        id: 1,
        name: "Lakeside Retreat",
        description:
          "Comfortable accommodation with stunning views of Tehri Lake and the surrounding mountains. Just minutes away from all water activities.",
        images: [
          {
            id: 1,
            src: "/images/packages/tehri-dam/stays/lakeside-retreat-1.jpg",
            alt: "Lakeside Retreat exterior view",
          },
          {
            id: 2,
            src: "/images/packages/tehri-dam/stays/lakeside-retreat-2.jpg",
            alt: "Lakeside Retreat room interior",
          },
        ],
        amenities: [
          "Free WiFi",
          "Restaurant",
          "Room Service",
          "Parking",
          "Laundry",
          "Mountain View Rooms",
        ],
      },
      {
        id: 2,
        name: "Adventure Camp",
        description:
          "Experience camping by the lake with basic amenities and the authentic feel of living close to nature. Perfect for adventure enthusiasts.",
        images: [
          {
            id: 1,
            src: "/images/packages/tehri-dam/stays/adventure-camp-1.jpg",
            alt: "Adventure Camp tents",
          },
          {
            id: 2,
            src: "/images/packages/tehri-dam/stays/adventure-camp-2.jpg",
            alt: "Adventure Camp common area",
          },
        ],
        amenities: [
          "Tents with bedding",
          "Shared Washrooms",
          "Bonfire Area",
          "Common Dining",
          "Basic Electricity",
        ],
      },
    ],
    faqs: [
      {
        question: "Is prior experience required for water sports?",
        answer:
          "No prior experience is required for most activities. Our professional instructors will guide you through each activity and ensure your safety.",
      },
      {
        question: "What should I bring for the water activities?",
        answer:
          "We recommend bringing swimming attire, towel, change of clothes, sunscreen, sunglasses, and any personal medications you might need. All safety equipment will be provided.",
      },
      {
        question: "Is it safe for non-swimmers?",
        answer:
          "Yes, all participants are provided with life jackets. However, please inform the instructors if you cannot swim so they can provide extra attention.",
      },
      {
        question: "Can children participate in the activities?",
        answer:
          "Yes, children above 8 years can participate in most activities under adult supervision. There are specific restrictions for some activities like jet skiing where age limits apply.",
      },
      {
        question: "What happens if the weather is unfavorable?",
        answer:
          "In case of unfavorable weather conditions, we may reschedule certain activities or offer alternative adventures. Safety is our primary concern.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d78.12345678901234!3d30.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjQiTiA3OMKwMDcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1601234567890!5m2!1sen!2sin",
  },
  {
    id: 2,
    slug: "nag-tibba-trek",
    title: "Nag Tibba Trek",
    state: "Uttarakhand",
    shortDescription:
      "Embark on the Nag Tibba Trek with YK Travels, a perfect getaway for both novice and seasoned trekkers. Located in the Garhwal region of Uttarakhand, this trek offers stunning panoramic views of the Himalayas, lush forests, and serene landscapes. At 9,915 feet, Nag Tibba / Serpent's Peak, is the highest peak in the lower Himalayas of Uttarakhand.",
    duration: "2 Days & 1 Night",
    price: 4000,
    activityTags: ["camping", "trekking", "hiking", "peak climbing"],
    overview: {
      title: "Trek Overview",
      description:
        "The Nag Tibba Trek, curated by YK Travels, offers an enchanting journey through the serene landscapes of the Garhwal region in Uttarakhand. Rising to an altitude of 9,915 feet, Nag Tibba, also known as the “Serpent’s Peak,” is the highest peak in the lower Himalayas of Uttarakhand. This trek is a perfect blend of natural beauty, cultural immersion, and adventure, making it an ideal choice for both novice and seasoned trekkers.",
      activities: [
        {
          title: "Breathtaking Scenery",
          description:
            "Experience the diverse beauty of the Himalayas with dense oak and rhododendron forests, expansive meadows, and panoramic mountain vistas. Enjoy stunning views of peaks like Bandarpoonch, Kedarnath, Gangotri, and the Swargarohini range.",
          emoji: "🏞️",
        },
        {
          title: "Cultural Immersion",
          description:
            "Trek through quaint villages and interact with the warm locals of the Garhwal region. Immerse yourself in the rich culture and traditions, adding a unique cultural dimension to your adventure.",
          emoji: "🤝",
        },
        {
          title: "Accessible Adventure",
          description:
            "Perfect for beginners and experienced trekkers alike, this trek offers a moderate ascent suitable for various fitness levels, ensuring a manageable and rewarding experience.",
          emoji: "🥾",
        },
        {
          title: "Rich Biodiversity",
          description:
            "Explore varied landscapes filled with vibrant wildflowers, diverse bird species, and potential wildlife sightings, showcasing the rich flora and fauna of the region.",
          emoji: "🌿",
        },
      ],
    },
    tripInfo: {
      accommodation: {
        text: "Alpine tents or Decathlon tents (2-3 sharing base)",
        icon: "building",
      },
      arrivalCity: {
        text: "Pantwari",
        icon: "city",
      },
      bestSeason: {
        text: "All Around The Year.",
        icon: "sun",
      },
      guide: {
        text: "Professional Guidance: Expert instructors to ensure a safe and enjoyable experience.",
        icon: "guide",
      },
      maximumAltitude: {
        text: "9,915 feet (3,022 meters)",
        icon: "mountain",
      },

      transportation: {
        text: "Bus, Taxi",
        icon: "bus",
      },
    },

    cost: {
      includes: [
        "Alpine tents, Decathlon tent (2-3) with proper mattress, bedsheet and pillow and tent light.",
        "Veg.Meal (breakfast + lunch + eve. Snacks + dinner) included.",
        "Proper toilet with Bathroom.",
        "Trek lead or guide/cook/staff included.",
        "Proper sitting area with comfortable chair and bean bags.",
        "Game (Chess, Ludo, Carrom, String Hockey, Badminton, Football, Bat-Bowl)",
        "Power backup available for phones charging.",
        "Music system for party.",
        "Dental Kit.",
        "Bonfire included for winters.",
        "Camping Gears(torch, stick included)",
        "Hydration bag and Power Bank available additional on charges 50 and 100 each.",
        "Providing self camping gear for staying one night in summit at just 500 per couple.",
        "Body massager at @50 for 15 mint.",
        "Raincoat available @100 per head.",
      ],
      excludes: [
        "Personal trekking gear such as clothing, shoes, and personal toiletries.",
        "Snacks, beverages, and additional food items beyond the provided meals.",
        "Any personal medication or medical supplies.",
        "It is highly recommended to have personal travel insurance that covers trekking activities, medical emergencies, and evacuation.",
        "(Incase Pantwari Package) Travel costs to and from the starting point at Pantwari village are not included. You will need to arrange your transportation to and from Pantwari.",
        "Accommodation and meals in any city or town before the start of the trek and after the trek ends are not included.",
        "Any additional services such as laundry, phone calls, or room service if you stay in accommodations before or after the trek.",
        "Any meals and drinks not mentioned in the itinerary.",
        "Alcoholic beverages.",
        "Costs incurred in case of evacuation due to medical reasons  or other emergencies are not covered by the package.",
      ],
      notes: [
        "Prices are subject to change during peak seasons",
        "Children below 12 years must be accompanied by adults",
        "Participants should know swimming or inform the instructors beforehand",
        "Activities are subject to weather conditions",
      ],
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival and Trek to Base Camp",
        description:
          "Activities: Upon arriving at Pantwari, meet your trekking guide and group. Begin your trek from the village, gradually ascending through picturesque trails lined with lush greenery and captivating vistas. Reach the base camp by evening, where you’ll set up tents and enjoy a campfire under the starlit sky. Indulge in local cuisine and listen to stories of the region from your guide.",
      },
      {
        day: 2,
        title: "Summit Day",
        description:
          "Summit Ascent: Wake up early to a refreshing mountain morning and start your ascent to the Nag Tibba summit. The trail offers breathtaking views and diverse landscapes, from dense forests to open meadows. Summit Experience: Upon reaching the summit, relish the panoramic views of the snow-capped Himalayan peaks. Spend some time soaking in the magnificent scenery, taking photographs, and enjoying the sense of accomplishment. Descent: After savoring the summit experience, begin your descent back to the base camp. Enjoy a relaxed evening and a hearty meal at the camp.",
      },
      {
        day: 3,
        title: "Return Journey",
        description:
          "Return Trek: After breakfast, pack up and trek back to Pantwari village. Reflect on the memorable experience as you make your way down the trail. Departure: Arrive back in Pantwari and prepare for your return journey, carrying with you unforgettable memories and a deep appreciation for the beauty of the Himalayas.",
      },
    ],
    images: [
      {
        id: 1,
        src: "/images/packages/nag-tibba/nag-tibba-1.jpg",
        alt: "Yk Travels Nag Tibba Trek",
      },
      {
        id: 2,
        src: "/images/packages/nag-tibba/nag-tibba2.jpg",
        alt: "Yk travesls nag tibba trek",
      },
      {
        id: 3,
        src: "/images/packages/nag-tibba/nag-tibba3.jpg",
        alt: "Yk travels nag tibba trek",
      },
      {
        id: 4,
        src: "/images/packages/nag-tibba/nag-tibba4.jpg",
        alt: "yk travels nag tibba trek",
      },
      {
        id: 5,
        src: "/images/packages/nag-tibba/nag-tibba5.jpg",
        alt: "yk travels nag tibba trek",
      },
    ],
    faqs: [
      {
        question: "What is the maximum altitude of the Nag Tibba Trek?",
        answer:
          "The Nag Tibba Trek reaches a maximum altitude of 9,915 feet (3,022 meters) above sea level.",
      },
      {
        question: "How difficult is the Nag Tibba Trek?",
        answer:
          "The Nag Tibba Trek is classified as an easy to moderate trek. It is suitable for beginners with a basic level of fitness as well as experienced trekkers looking for a short and refreshing adventure.",
      },
      {
        question: "What is the best time to do the Nag Tibba Trek?",
        answer:
          "The Nag Tibba Trek is accessible year-round, with each season offering a unique experience: \n Spring (March to April): Pleasant weather and blooming rhododendrons.  \nSummer (May to June): Clear skies and warm temperatures. \nMonsoon (July to September): Lush greenery, though trails can be slippery. \nAutumn (October to November): Crisp air and clear views of snow-capped peaks. \n Winter (December to February): Snowy landscapes, ideal for a winter trekking experience.",
      },
      {
        question: "How long does the Nag Tibba Trek take?",
        answer:
          "The Nag Tibba Trek typically takes 2-3 days to complete, making it an excellent option for a weekend getaway.",
      },
      {
        question: "What should I pack for the trek?",
        answer:
          "Essential items to pack include: \nComfortable trekking shoes \n Warm clothing (layers, thermal wear, jacket) \n Rain gear (if trekking in monsoon season) \n Sun protection (hat, sunglasses, sunscreen) \n Personal toiletries and first-aid kit \n Water bottle and snacks \n Trekking poles (optional but recommended) \n Backpack",
      },
      {
        question: "Are permits required for the Nag Tibba Trek?",
        answer:
          "Permits may be required for trekking in certain areas. Please check with YK Travels or local authorities to ensure you have the necessary permits before starting the trek.",
      },
      {
        question: "What kind of accommodation is provided during the trek?",
        answer:
          "Accommodation during the trek typically includes camping in tents. All the mentioned amenities in package such as sleeping bags and mats are provided all around good and fun adventure. In some cases, homestays or guesthouses in nearby villages may also be an option.",
      },
      {
        question: "Is there a provision for meals during the trek?",
        answer:
          "Yes, meals are provided during the trek. This usually includes breakfast, lunch, and dinner. Vegetarian options are available, and we can accommodate dietary restrictions if informed in advance.",
      },
      {
        question: "What about drinking water during the trek?",
        answer:
          "We provide safe drinking water during the trek. It’s advisable to carry a reusable water bottle that you can refill at designated points.",
      },
      {
        question: "What are the transportation arrangements for the trek?",
        answer:
          "YK Travels provides flexible transportation options based on the package selection of the traveler: \n Delhi to Delhi: Transportation from Delhi to Pantwari and back. \n Dehradun to Dehradun: Transportation from Dehradun to Pantwari and back. \n Pantwari to Pantwari: For those who arrange their own transport to Pantwari, we start and end the trek at Pantwari.",
      },
      {
        question: "Is travel insurance necessary for the trek?",
        answer:
          "While not mandatory, it is highly recommended to have travel insurance that covers trekking activities, medical emergencies, and evacuation.",
      },
      {
        question: "What safety measures are in place for the trek?",
        answer:
          "At YK Travels, your safety is our top priority. Our experienced guides are trained in first aid and emergency response. We use high-quality trekking and camping equipment to ensure your safety and comfort.",
      },
      {
        question: "Can children join the Nag Tibba Trek?",
        answer:
          "Yes, children can join the Nag Tibba Trek, provided they are in good health and have a basic level of fitness. It is advisable to consult with us for specific recommendations based on the age and fitness level of the children.",
      },
      {
        question: "What is not included in the Nag Tibba Trek package?",

        answer:
          "terms not included in the package are : \n  Personal expenses (trekking gear, snacks, beverages) \nTravel insurance \nAccommodation before and after the trek \nExtra services (laundry, phone calls, etc.) \n Tips for guides and staff \n Any permits and entry fees not specified",
      },
      {
        question: "How can I book the Nag Tibba Trek with Yk Travels? ",
        answer:
          "You can book the Nag Tibba Trek through our website or by contacting us directly via phone or email. Our team will assist you with all the details and help you prepare for an unforgettable trekking experience. \n For any additional questions or specific concerns, feel free to reach out to YK Travels. We're here to ensure you have a safe, enjoyable, and memorable trek to Nag Tibba.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54955.144569258184!2d78.151389!3d30.586110999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908c5abdd38b5a9%3A0xd9c2fb3b7e664514!2sNag%20Tibba!5e0!3m2!1sen!2sin!4v1745789305326!5m2!1sen!2sin",
  },

  {
    id: 3,
    slug: "ruinsara-tal-trek",
    title: "Ruinsara Tal Trek",
    state: "Uttarakhand",
    shortDescription:
      "The Ruinsara Tal Trek is a breathtaking adventure through the heart of the Garhwal Himalayas in Uttarakhand, India. This trek offers an unparalleled blend of natural beauty, cultural encounters, and a glimpse into the pristine wilderness of the Himalayas. Ruinsara Tal, a high-altitude glacial lake, is the highlight of this trek, renowned for its serene beauty and the majestic peaks that surround it.",
    duration: "8 Days",
    price: 12100,
    activityTags: ["camping", "trekking", "hiking", "peak climbing"],
    overview: {
      title: "Trek Overview",
      description:
        "The Ruinsara Tal Trek is a breathtaking adventure through the heart of the Garhwal Himalayas in Uttarakhand, India. This trek offers an unparalleled blend of natural beauty, cultural encounters, and a glimpse into the pristine wilderness of the Himalayas. Ruinsara Tal, a high-altitude glacial lake, is the highlight of this trek, renowned for its serene beauty and the majestic peaks that surround it.",
      activities: [
        {
          title: "Ruinsara Tal Serenity",
          description:
            "Marvel at the pristine, crystal-clear waters of Ruinsara Tal, set against snow-capped peaks. This sacred lake offers a serene and peaceful environment, perfect for reflection and tranquility.",
          emoji: "💧",
        },
        {
          title: "Majestic Himalayan Views",
          description:
            "Enjoy panoramic views of stunning peaks like Swargarohini, Black Peak (Kalanag), and Bandarpoonch. The clear, crisp air makes this a photographer's paradise with breathtaking vistas.",
          emoji: "🏔️",
        },
        {
          title: "Diverse Landscapes",
          description:
            "Traverse dense pine, oak, and rhododendron forests, lush meadows, and rugged mountain terrains, offering a visually rewarding and exciting trekking experience.",
          emoji: "🌲",
        },
        {
          title: "Cultural Encounters",
          description:
            "Pass through Himalayan villages like Osla and Seema, experiencing the traditional lifestyle and warm hospitality of local communities, adding a rich cultural dimension to the trek.",
          emoji: "🤝",
        },
        {
          title: "Wildlife and Flora",
          description:
            "Journey through the Govind Wildlife Sanctuary, home to diverse flora and fauna. Spot Himalayan birds, langurs, and possibly the elusive Himalayan black bear amidst vibrant landscapes.",
          emoji: "🐾",
        },
      ],
    },
    tripInfo: {
      accommodation: {
        text: "Alpine tents or Decathlon tents (4 - 2 sharing base)",
        icon: "building",
      },
      arrivalCity: {
        text: "Sankri",
        icon: "city",
      },
      bestSeason: {
        text: "May to June, September to December",
        icon: "sun",
      },
      guide: {
        text: "Professional Guidance: Expert instructors to ensure a safe and enjoyable experience.",
        icon: "guide",
      },
      maximumAltitude: {
        text: "11,811 feet",
        icon: "mountain",
      },
      meals: {
        text: "Breakfast + Lunch + Eve. Snacks + Dinner",
        icon: "bowl",
      },
      transportation: {
        text: "Bus, Taxi",
        icon: "bus",
      },
    },

    cost: {
      includes: [
        "Alpine tents, Decathlon tent (2-3) with proper mattress, bedsheet and pillow and tent light.",
        "Veg.Meal (breakfast + lunch + eve. Snacks + dinner) included.",
        "Proper toilet with Bathroom.",
        "Trek lead or guide/cook/staff included.",
        "Proper sitting area with comfortable chair and bean bags.",
        "Game (Chess, Ludo, Carrom, String Hockey, Badminton, Football, Bat-Bowl)",
        "Power backup available for phones charging.",
        "Music system for party.",
        "Dental Kit.",
        "Bonfire included for winters.",
        "Camping Gears(torch, stick included)",
        "Hydration bag and Power Bank available additional on charges 50 and 100 each.",
        "Providing self camping gear for staying one night in summit at just 500 per couple.",
        "Body massager at @50 for 15 mint.",
        "Raincoat available @100 per head.",
      ],
      excludes: [
        "Personal trekking gear such as clothing, shoes, and personal toiletries.",
        "Snacks, beverages, and additional food items beyond the provided meals.",
        "Any personal medication or medical supplies.",
        "It is highly recommended to have personal travel insurance that covers trekking activities, medical emergencies, and evacuation.",
        "(Incase Pantwari Package) Travel costs to and from the starting point at Pantwari village are not included. You will need to arrange your transportation to and from Pantwari.",
        "Accommodation and meals in any city or town before the start of the trek and after the trek ends are not included.",
        "Any additional services such as laundry, phone calls, or room service if you stay in accommodations before or after the trek.",
        "Any meals and drinks not mentioned in the itinerary.",
        "Alcoholic beverages.",
        "Costs incurred in case of evacuation due to medical reasons  or other emergencies are not covered by the package.",
      ],
      notes: [
        "Prices are subject to change during peak seasons",
        "Children below 12 years must be accompanied by adults",
        "Participants should know swimming or inform the instructors beforehand",
        "Activities are subject to weather conditions",
      ],
    },
    itinerary: [
      {
        day: 1,
        title:
          "Dehradun To Sankri (Drive: 210 km, Duration: 8–9 hrs, Altitude: 6,299 ft)",
        description:
          "The trekkers will be picked up from near Dehradun Railway Station at 7 a.m. from where the journey will begin. As part of the Kedarkantha trekking package, set out early in the morning on a road trip from Dehradun to Sankri Village. We have a 10- to 11-hour (approximately) enjoyable drive during which you can even see some priceless animals at the sanctuary! We arrive in Sankri village and check into a hotel, homestay, or guest house following an exciting drive through the alpine scenery.",
      },
      {
        day: 2,
        title:
          "Drive from Sankri To Taluka & Trek to Cheludgad (Drive: 11 km, Trek: 12 km, Duration: 5-6 hours, Altitude:8,858 ft)",
        description:
          "The drive from Sankri to Taluka offers picturesque views of the Himalayan landscape, winding through villages and lush forests. Upon reaching Taluka, we start the trek to Cheludgad, leading adventurers through serene trails adorned with alpine flora. Overnight stay in Cheludgad.",
      },
      {
        day: 3,
        title:
          "Trek From Cheludgad To Devsu Bugyal (Trek: 6 km, Duration: 4-5 hrs, Altitude: 9,842 ft)",
        description:
          "Trekking from Cheludgad to Devsu Bugyal offers trekkers a diverse and scenic route through lush meadows and dense forests. After reaching Taluka, adventurers embark on a scenic drive back to Sankri, reminiscing about the journey's stunning landscapes and memorable experiences. The serene ambience and stunning scenery make this trek a perfect escape. Overnight stay in Devsu, Bugyal.",
      },
      {
        day: 4,
        title:
          "Trek From Devsu Bugyal To Ruinsara Tal (Trek: 12 km, Duration: 7-8 hrs, Altitude: 11,482 ft)",
        description:
          "The trek from Devsu Bugyal to Ruinsara Tal is an awe-inspiring adventure, culminating in the majestic beauty of the lake's serene waters. As trekkers ascend towards the summit point, they are greeted with panoramic views of towering peaks and verdant valleys. Upon reaching the enchanting Ruinsara Lake, nestled amidst pristine wilderness, sunset at Ruinsara Lake is a truly magical moment. The serene lake waters reflect this magnificent spectacle of the sun setting, casting brilliant hues of pink and orange across the sky, creating a captivating symphony of colors. Overnight stay at Ruinsara Lake.",
      },
      {
        day: 5,
        title: "Exploring The Surroundings",
        description:
          "Enjoy the breathtaking views of Ruinsara Lake, surrounded by towering Himalayan peaks reflecting in its serene waters. Stroll along the lakeshore, soaking in the tranquility of the surroundings. The rest of the day is to explore nearby meadows, observe wildlife, or simply relax.",
      },
      {
        day: 6,
        title:
          "Trek from Ruinsara Tal To Devsu Bugyal (Drive: 12 km, Duration: 7-8 hours, Altitude: 9,842 ft)",
        description:
          "Bid farewell to the serene Ruinsara Lake as you descend towards Devsu Bugyal. Reluctantly leaving behind the lake's tranquil beauty, trekkers journey through lush forests and scenic trails. As Devsu Bugyal comes into view, adventurers cherish the journey and overnight stay.",
      },
      {
        day: 7,
        title:
          "Trek From Devsu Bugyal To Taluka & Drive To Sankri (Drive: 18 km, Duration: 8–9 hours, Altitude: 6,299 ft)",
        description:
          "Trekking from Devsu Bugyal to Taluka via Cheludgad offers trekkers a diverse and scenic route through lush meadows and dense forests. After reaching Taluka, adventurers embark on a scenic drive back to Sankri, reminiscing about the journey's stunning landscapes and memorable experiences.",
      },
      {
        day: 8,
        title:
          "Drive Back To Dehradun From Sankri (Drive: 210 km, Duration: 8–9 hrs, Altitude: 1,480 ft)",
        description:
          "We travel by road for ten to eleven hours, stopping occasionally for food and refreshments, on our way to Dehradun. After such a fulfilling experience, we feel changed and content even though we crossed the same alpine road on our way uphill. By late evening, we are back in Dehradun.",
      },
    ],
    images: [
      {
        id: 1,
        src: "/images/packages/ruinsara/ruinsara-1.jpeg",
        alt: "Yk Travels Ruinsara Tal Trek",
      },
      {
        id: 2,
        src: "/images/packages/ruinsara/ruinsara-2.jpg",
        alt: "Yk travesls Ruinsara Tal Trek",
      },
    ],
    faqs: [
      {
        question: "What is the Ruinsara Tal Trek?",
        answer:
          "The Ruinsara Tal Trek is a high-altitude trek in the Garhwal Himalayas of Uttarakhand, India. It leads trekkers to the serene glacial lake of Ruinsara Tal, offering stunning views of Himalayan peaks and a diverse range of landscapes, including dense forests, alpine meadows, and traditional villages.",
      },
      {
        question: "What is the best time to undertake the Ruinsara Tal Trek?",
        answer:
          "The best time to undertake the Ruinsara Tal Trek is during the pre-monsoon (May to June) and post-monsoon (September to October) seasons. During these months, the weather is pleasant with clear skies and moderate temperatures, making it ideal for trekking.",
      },
      {
        question: "How difficult is the Ruinsara Tal Trek?",
        answer:
          "The Ruinsara Tal Trek is considered to be of moderate difficulty. It involves some steep ascents and descents, but the trails are well-marked. Basic fitness and stamina are required, making it suitable for both novice and experienced trekkers.",
      },
      {
        question: "How long is the Ruinsara Tal Trek?",
        answer:
          "The trek typically spans 8 days, including travel time from Dehradun to the starting point and back. The actual trekking distance is approximately 54 kilometers (33.5 miles).",
      },
      {
        question: "What kind of accommodation is provided during the trek?",
        answer:
          "Accommodation includes guesthouses or lodges in Lohajung and camping in tents at various points along the trek. YK Travels ensures comfortable stays with basic amenities to provide a good rest after trekking.",
      },
      {
        question: "Are permits required for the Nag Tibba Trek?",
        answer:
          "Permits may be required for trekking in certain areas. Please check with YK Travels or local authorities to ensure you have the necessary permits before starting the trek.",
      },
      {
        question: "What kind of accommodation is provided during the trek?",
        answer:
          "Accommodation during the trek typically includes camping in tents. All the mentioned amenities in package such as sleeping bags and mats are provided all around good and fun adventure. In some cases, homestays or guesthouses in nearby villages may also be an option.",
      },
      {
        question: "What should I pack for the Ali Bedni Bugyal Trek?",
        answer:
          "Essential items to pack include: \nWarm clothing (layers, thermal wear, fleece jackets) \n Waterproof trekking shoes with good grip \n Rain gear (poncho or raincoat) \n Personal toiletries and medications \n Sunglasses, sunscreen, and hats \n Water bottles and energy snacks \n A small first-aid kit \n Trekking poles (optional) \n A backpack with a rain cover",
      },
      {
        question: "What about drinking water during the trek?",
        answer:
          "We provide safe drinking water during the trek. It’s advisable to carry a reusable water bottle that you can refill at designated points.",
      },
      {
        question: "What are the transportation arrangements for the trek?",
        answer:
          "YK Travels provides flexible transportation options based on the package selection of the traveler: \n Delhi to Delhi: Transportation from Delhi to Pantwari and back. \n Dehradun to Dehradun: Transportation from Dehradun to Pantwari and back. \n Pantwari to Pantwari: For those who arrange their own transport to Pantwari, we start and end the trek at Pantwari.",
      },
      {
        question: "Is travel insurance necessary for the trek?",
        answer:
          "While not mandatory, it is highly recommended to have travel insurance that covers trekking activities, medical emergencies, and evacuation.",
      },
      {
        question: "What are the transportation arrangements for the trek?",
        answer:
          "YK Travels provides transportation from Dehradun to Sankri and back. Safe and comfortable vehicles with experienced drivers are arranged for the journey.",
      },
      {
        question: "Are there age restrictions for the trek?",
        answer:
          "There are no specific age restrictions, but the trek is recommended for individuals above the age of 12 who are physically fit and able to handle the demands of trekking.",
      },
      {
        question: "What are the meal arrangements during the trek?",
        answer:
          "YK Travels provides nutritious vegetarian meals throughout the trek. Breakfast, lunch, and dinner are included in the package, and special dietary requirements can be accommodated with prior notice.",
      },
      {
        question: "Is drinking water available during the trek?",
        answer:
          "Yes, drinking water is available at campsites. Trekkers are advised to carry their own water bottles and purification tablets or filters for use during the trek.",
      },
      {
        question: "What permits are required for the Ruinsara Tal Trek?",
        answer:
          "Trekkers need to obtain permits from the Forest Department to enter the trekking regions. YK Travels assists in obtaining all necessary permits and registrations as part of our service.",
      },
      {
        answer:
          "Basic medical facilities and first-aid are available at various points along the trek. However, it is advisable to carry a personal first-aid kit and any specific medications you may need. YK Travels’ guides are trained in first-aid and emergency response.",
        question: "Are there medical facilities available during the trek?",
      },
      {
        question: "What safety measures are in place during the trek?",
        answer:
          "YK Travels prioritizes the safety of all trekkers. Our experienced guides are trained in first aid and emergency response. We use high-quality trekking and camping equipment and ensure that all travel arrangements are secure and reliable.",
      },
      {
        question: "How can I book the Ruinsara Tal Trek with YK Travels?",
        answer:
          "You can book the Ruinsara Tal Trek through our website or by contacting us directly via phone or email. Our team will assist you with all the details and help you prepare for an unforgettable adventure. \n For any additional questions or specific concerns, feel free to reach out to YK Travels. We’re here to ensure you have a safe, enjoyable, and memorable Ruinsara Tal Trek experience.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27336.191538728915!2d78.458088!3d31.081260999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39089dec9859d14f%3A0x371ffec9ece1bc0a!2sRuinsara%20Lake!5e0!3m2!1sen!2sin!4v1745906655386!5m2!1sen!2sin",
  },
  // {
  //   id: 4, 
  //   title : "Har Ki Dun Trek", 
  //   state: "Uttarakhand", 
  //   shortDescription: "",
  //   images: [
  //     {
  //       id: 1,
  //       src: "/images/packages/harkidun/Har-ki-Doon-1.jpeg",
  //       alt: "Yk Travels Har ki Dun Trek",
  //     },
  //     {
  //       id: 2,
  //       src: "/images/packages/harkidun/Har-ki-Doon-2.jpeg",
  //       alt: "Yk travels Har ki Dun Trek",
  //     },
  //     {
  //       id: 3, 
  //       src: "/images/packages/harkidun/Har-ki-Doon-3.jpeg",
  //       alt: "Yk travels Har ki Dun Trek"
  //     }, 
  //     {
  //       id: 4, 
  //       src: '/images/packages/harkidun/Har-ki-Doon-4.jpeg', 
  //       alt: 'Yk travels Har ki Dun Trek'
  //     }, 
  //     {
  //       id: 5, 
  //       src: '/images/packages/harkidun/Har-ki-Doon-5.jpeg', 
  //       alt: 'Yk travels Har ki Dun Trek'
  //     }
  //   ],
  //   mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d218529.56705764393!2d78.430991!3d31.150718000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390627eba9f05881%3A0x7f12a5dfe906eaa7!2sHar%20Ki%20Dun!5e0!3m2!1sen!2sin!4v1745930384254!5m2!1sen!2sin"
  // }
];

export default packages;
