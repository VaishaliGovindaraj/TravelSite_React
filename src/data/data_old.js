function TravelDestination(country, cities) {
    this.country = country;
    this.cities = cities;
}

function City(name, thingsToDo) {
    this.name = name;
    this.thingsToDo = thingsToDo;
}

function Activity(title, description, cost, timing, difficultyLevel, ageGroup, imageGallery) {
    this.title = title;
    this.description = description;
    this.cost = cost;
    this.timing = timing;
    this.difficultyLevel = difficultyLevel;
    this.ageGroup = ageGroup;
    this.imageGallery = imageGallery;
}

export const travelDestinations = [
    new TravelDestination("Sweden", [
        new City("Stockholm", [
            new Activity(
                "Explore Gamla Stan",
                "Walk through Stockholm’s medieval old town filled with cobbled streets and colorful buildings.",
                "$0 (Free Walk)",
                "9 AM - 6 PM",
                "Easy",
                "All Ages",
                ["gamla_stan1.jpg", "gamla_stan2.jpg"]
            ),
            new Activity(
                "Vasa Museum Visit",
                "See the world-famous Vasa warship that sank in 1628 and was recovered in near-perfect condition.",
                "$20",
                "10 AM - 5 PM",
                "Easy",
                "All Ages",
                ["vasa1.jpg", "vasa2.jpg"]
            ),
            new Activity(
                "Stockholm Archipelago Boat Tour",
                "Take a scenic boat ride through thousands of beautiful islands around Stockholm.",
                "$50",
                "11 AM - 7 PM",
                "Easy",
                "All Ages",
                ["archipelago1.jpg", "archipelago2.jpg"]
            ),
        ]),
        new City("Gothenburg", [
            new Activity(
                "Liseberg Amusement Park",
                "Enjoy thrilling rides and family-friendly attractions in Sweden’s largest amusement park.",
                "$40",
                "10 AM - 9 PM",
                "Medium",
                "7+",
                ["liseberg1.jpg", "liseberg2.jpg"]
            ),
            new Activity(
                "Visit Universeum",
                "Explore Sweden’s largest science center with an indoor rainforest and aquarium.",
                "$30",
                "9 AM - 6 PM",
                "Easy",
                "All Ages",
                ["universeum1.jpg", "universeum2.jpg"]
            ),
            new Activity(
                "Slottsskogen Park Walk",
                "Relax in this beautiful urban park, home to free-roaming animals and picnic spots.",
                "$0 (Free)",
                "Anytime",
                "Easy",
                "All Ages",
                ["slottsskogen1.jpg", "slottsskogen2.jpg"]
            ),
        ]),
    ]),

    new TravelDestination("Japan", [
        new City("Kyoto", [
            new Activity(
                "Fushimi Inari Shrine",
                "Walk through thousands of bright orange torii gates leading to the sacred Mount Inari.",
                "$0 (Free)",
                "6 AM - 6 PM",
                "Medium",
                "All Ages",
                ["fushimi_inari1.jpg", "fushimi_inari2.jpg"]
            ),
            new Activity(
                "Arashiyama Bamboo Forest",
                "Stroll through this magical bamboo forest and visit the nearby Tenryu-ji Temple.",
                "$0 (Free)",
                "Anytime",
                "Easy",
                "All Ages",
                ["bamboo1.jpg", "bamboo2.jpg"]
            ),
            new Activity(
                "Kiyomizu-dera Temple",
                "Visit this UNESCO-listed temple with stunning views of Kyoto.",
                "$5",
                "9 AM - 5 PM",
                "Easy",
                "All Ages",
                ["kiyomizu1.jpg", "kiyomizu2.jpg"]
            ),
        ]),
        new City("Tokyo", [
            new Activity(
                "Shibuya Crossing",
                "Experience the world’s busiest pedestrian crossing in the heart of Tokyo.",
                "$0 (Free)",
                "Anytime",
                "Easy",
                "All Ages",
                ["shibuya1.jpg", "shibuya2.jpg"]
            ),
            new Activity(
                "Tokyo Tower Observation Deck",
                "Get a breathtaking view of the city from this famous landmark.",
                "$15",
                "10 AM - 10 PM",
                "Easy",
                "All Ages",
                ["tokyo_tower1.jpg", "tokyo_tower2.jpg"]
            ),
            new Activity(
                "Ghibli Museum",
                "Explore the magical world of Studio Ghibli with interactive exhibits and artwork.",
                "$25",
                "10 AM - 5 PM",
                "Easy",
                "All Ages",
                ["ghibli1.jpg", "ghibli2.jpg"]
            ),
        ]),
    ]),

    new TravelDestination("USA", [
        new City("New York", [
            new Activity(
                "Statue of Liberty Tour",
                "Visit one of the most iconic landmarks in the USA with ferry rides and guided tours.",
                "$25",
                "9 AM - 5 PM",
                "Easy",
                "All Ages",
                ["statue_liberty1.jpg", "statue_liberty2.jpg"]
            ),
            new Activity(
                "Central Park Cycling",
                "Rent a bike and explore the scenic landscapes of Central Park.",
                "$15",
                "8 AM - 8 PM",
                "Easy",
                "All Ages",
                ["central_park1.jpg", "central_park2.jpg"]
            ),
            new Activity(
                "Times Square at Night",
                "Experience the dazzling lights and energy of Times Square after dark.",
                "$0 (Free)",
                "Anytime",
                "Easy",
                "All Ages",
                ["times_square1.jpg", "times_square2.jpg"]
            ),
        ]),
    ]),

    new TravelDestination("Australia", [
        new City("Sydney", [
            new Activity(
                "Sydney Opera House Tour",
                "Take a guided tour of Australia’s most famous architectural landmark.",
                "$40",
                "9 AM - 5 PM",
                "Easy",
                "All Ages",
                ["opera_house1.jpg", "opera_house2.jpg"]
            ),
            new Activity(
                "Bondi Beach Surfing",
                "Catch the waves and learn surfing on the iconic Bondi Beach.",
                "$50",
                "7 AM - 5 PM",
                "Medium",
                "12+",
                ["bondi_beach1.jpg", "bondi_beach2.jpg"]
            ),
            new Activity(
                "Blue Mountains Hiking",
                "Embark on a scenic hike through lush forests and waterfalls.",
                "$0 (Free)",
                "Anytime",
                "Hard",
                "10+",
                ["blue_mountains1.jpg", "blue_mountains2.jpg"]
            ),
        ]),
    ]),
];
