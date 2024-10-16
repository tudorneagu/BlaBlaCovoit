db.createCollection("travel");
db.travel.insert([
  {
    description: "Super voyage jusqu'en Roumanie!",
    start_location: "Paris",
    end_location: "Roumanie",
    date: "2024-11-14T12:33:02.694697",
    price: 25,
    capacity: 3,
    detour_allowed: true,
    user_id: 1,
  },
]);
