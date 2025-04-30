interface ActivitiesProps {
  activitySlug: string;
  title: string;
  image: string;
  cardBg?: string;
  content: string;
}

const Activities: { [key: string]: ActivitiesProps } = {
  "star-gazing": {
    title: "Star Gazing",
    activitySlug: "star-gazing",
    image: "/images/star-gazing.jpg",
    cardBg: "/images/star-gazing.jpg",
    content: `
  # Star Gazing Adventures
  
  Star gazing is one of the most magical experiences our tours offer. Far away from city lights and pollution, 
  you'll witness the night sky in all its glory. Our expert guides will help you identify constellations, 
  planets, and even distant galaxies.
  
  ## What to Expect
  
  During our star gazing activities, you'll get to:
  
  - Use professional telescopes to observe celestial objects
  - Learn about constellations and their mythology
  - Capture stunning astrophotography with expert guidance
  - Enjoy the peaceful ambiance of the night in beautiful natural settings
  
  We carefully select locations known for their clear skies and minimal light pollution to ensure you have 
  the best possible view of the stars. Many of our star gazing spots are in designated dark sky reserves 
  or remote wilderness areas.
  
  ## Best Time for Star Gazing
  
  The best time for star gazing depends on several factors including moon phases, seasonal constellations, 
  and local weather patterns. Our packages are timed to provide optimal viewing conditions, often around 
  new moon periods when the sky is darkest.
  
  Join us for an unforgettable night under the stars on one of our adventures featuring star gazing experiences.
      `,
  },
  "river-rafting": {
    title: "River Rafting / Water-Sports ",
    activitySlug: "river-rafting",
    image: "/images/packages/tehri-dam/water-sports2.jpg",
    cardBg: "/images/act-rafting-card.jpg",
    content: `
  # River Rafting
    
  An adventure is an exciting or unusual experience. It may also be a bold, usually risky undertaking, with an uncertain outcome.Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.
    
  ### Policy
    
  The term also broadly refers to any enterprise that is potentially fraught with physical, financial, or psychological  risk, such as a business, venture ,or other major life undertakings.

    `,
  },
  "jungle-safari": {
    title: "Jungle Safari",
    activitySlug: "jungle-safari",
    image: "/images/packages/jim-corbat/jungle-safari.jpg",
    cardBg: "/images/packages/jim-corbat/jungle-safari.jpg",
    content: `

# Jungle Safari

A is an overland journey, usually a trip by tourists to Africa. In the past, the trip was often a big-game hunt, but today, safari often refers to trips to observe and photograph wildlife—or hiking and sightseeing, as well.

The Swahili word safari means journey, originally from the Arabic meaning a journey; the verb for “to travel” in Swahili is kusafiri. These words are used for any type of journey, e.g. by bus from Nairobi to Mombasa or by ferry from Dar es Salaam to Unguja. Safari entered the English language at the end of the 1850s thanks to Richard Francis Burton, the famous explorer.
The Regimental March of the King’s African Rifles was ‘Funga Safari’, literally ‘tie up the March’, or, in other words, pack up equipment ready to march.

In 1836 William Cornwallis Harris led an expedition purely to observe and record wildlife and landscapes by the expedition’s members. Harris established the safari style of journey, starting with a not too strenuous rising at first light, an energetic day walking, an afternoon rest then concluding with a formal dinner and telling stories in the evening over drinks and tobacco.
`,
  },

  "bungee-jumping": {
    activitySlug: "bungee-jumping",
    title: "Bungee Jumping",
    image: "/images/packages/rishikesh/bungee-jumping.jpg",
    cardBg: "/images/packages/rishikesh/bungee-jumping.jpg",
    content: `

## Experience the Ultimate Thrill

Bungee jumping in Rishikesh, offered by Jumpin Heights, is India’s highest jump at 83m, 111m, or 117m above the Ganges. Set in Mohanchatti Village, ~25 km from Rishikesh, this adventure delivers an adrenaline rush amidst stunning Himalayan views. The fixed cantilever platform, designed by New Zealand experts, ensures top-notch safety with imported equipment and trained professionals. Perfect for thrill-seekers aged 12–45 (min. 40 kg), it’s a must-do for adventure enthusiasts visiting Uttarakhand.

`,
  },
  trekking: {
    title: "Trekking",
    activitySlug: "trekking",
    image: "/images/trekking.jpg",
    cardBg: "/images/act-trekking-card.jpg",
    content: `
  # Trekking Adventures
  
  Immerse yourself in nature and challenge your limits with our trekking experiences. From beginner-friendly 
  trails to challenging multi-day expeditions, our treks offer a unique way to experience the natural world.
  
  ## What to Expect
  
  Our trekking adventures include:
  
  - Professionally guided hikes with knowledgeable local experts
  - Routes through diverse landscapes including forests, mountains, and valleys
  - Opportunities to spot local wildlife and learn about regional ecosystems
  - Achievements that push your personal boundaries
  
  Each trek is rated by difficulty level, allowing you to choose an experience that matches your fitness and comfort level.
  
  ## Best Time for Trekking
  
  Different regions have ideal trekking seasons based on weather patterns, rainfall, and temperature. We carefully 
  schedule our packages to coincide with the best trekking conditions for each location.
  
  Lace up your boots and join us for a memorable trekking adventure!
      `,
  },
  hiking: {
    title: "Hiking",
    activitySlug: "hiking",
    image: "/images/hiking.png",
    cardBg: "/images/hiking.png",
    content: `

# Introduction

Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks. On the other hand, in the United Kingdom, and the Republic of Ireland, the word “walking” is acceptable to describe all forms of walking, whether it is a walk in the park or backpacking in the Alps. The word hiking is also often used in the UK, along with rambling (a slightly old-fashioned term), hillwalking, and fell walking (a term mostly used for hillwalking in northern England). The term bushwalking is endemic to Australia, having been adopted by the Sydney Bush Walkers club in 1927. In New Zealand a long, vigorous walk or hike is called tramping.It is a popular activity with numerous hiking organizations worldwide, and studies suggest that all forms of walking have health benefits.

## What to Expect

In the United States, Canada, the Republic of Ireland, and United Kingdom, hiking means walking outdoors on a trail, or off trail, for recreational purposes. A day hike refers to a hike that can be completed in a single day. However, in the United Kingdom, the word walking is also used, as well as rambling, while walking in mountainous areas is called hillwalking. In Northern England, Including the Lake District and Yorkshire Dales, fellwalking describes hill or mountain walks, as fell is the common word for both features there.

`,
  },

  camping: {
    title: "Camping",
    activitySlug: "camping",
    image: "/images/packages/nag-tibba/nag-tibba7.jpg",
    cardBg: "/images/act-camping-card.jpg",
    content: `

# Camping 

Discover the thrill of camping in India’s breathtaking landscapes! From the serene hills of Uttarakhand to the deserts of Rajasthan, our camping packages offer adventure and tranquility. Pitch your tent under starry skies, enjoy bonfires, and reconnect with nature. Popular spots like Nag Tibba, Rishikesh, and Spiti Valley provide perfect settings for family or solo trips. Our SEO-optimized camping tours ensure safe, guided experiences with top-notch gear. Book now for an unforgettable outdoor escape!  



    

`,
  },
  paragliding: {
    title: "Paragliding",
    activitySlug: "paragliding",
    image: "/images/paragliding.jpg",
    cardBg: "/images/paragliding.jpg",
    content: `

# Soar High with Paragliding    

Feel the rush of paragliding in India’s stunning locations! From Bir Billing, the paragliding capital, to Manali and Nainital, our packages offer exhilarating experiences for beginners and pros. Glide over lush valleys and majestic mountains with certified instructors ensuring safety. Our SEO-driven paragliding tours guarantee thrilling adventures paired with scenic beauty. Book your flight today and elevate your travel story!  


    `,
  },
};

export default Activities;
