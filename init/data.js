const sampleListings = [
  {
    title: "Sunset Dune Villa",
    description:
      "A modern villa perched atop soft desert dunes—perfect for sunset views and stargazing nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601054110056-ed47ff702d40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674",
    },
    price: 4800,
    location: "Marrakesh",
    country: "Morocco",
  },
  {
    title: "Zen Mountain Hut",
    description:
      "Cozy timber hut with panoramic mountain vistas and a wood-burning stove for chilly evenings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1710196361873-7592e6763601?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072",
    },
    price: 2200,
    location: "Chamonix",
    country: "France",
  },
  {
    title: "Skyline Loft Studio",
    description:
      "Bright loft in the heart of the city with floor-to-ceiling windows and skyline panoramas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Treetop Rainforest Treehouse",
    description:
      "Elevated treehouse nestled among jungle canopies—wake to birdsong and rainforest air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1561396076-6cdb7c09d312?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=927",
    },
    price: 1800,
    location: "Monteverde",
    country: "Costa Rica",
  },
  {
    title: "Cliffside Infinity Villa",
    description:
      "Private villa with infinity pool and dramatic ocean views from a rocky cliff perch.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1408377926/photo/beautiful-sea-view-from-the-coastal-cafe.jpg?s=1024x1024&w=is&k=20&c=d8klHoY6IQNl7y3tf8dI4zAVm_U9vTHu7WYFExbAq6I=",
    },
    price: 6200,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Lakeside Glass Cabin",
    description:
      "Ultra-modern glass cabin right on the lake for reflective mornings and quiet evenings.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1465591869/photo/modern-cottage.jpg?s=1024x1024&w=is&k=20&c=wVEvX_EqrOZbWnKAQ5pzyVOXk4LZp137j_cxAfTF6Us=",
    },
    price: 3000,
    location: "Algonquin",
    country: "Canada",
  },
  {
    title: "Heritage Riads Retreat",
    description:
      "Charming riad with mosaic courtyard and rooftop terrace in the historic old city.",
    image:{
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/505239248/photo/humayun-tomb-new-delhi-india.jpg?s=1024x1024&w=is&k=20&c=eEvp7-HwZaY4itp3HAayDYdHPH_YSVDe9aLeHFI-A0w=",
    },
    price: 1900,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Aurora Ice Lodge",
    description:
      "Sculpted-ice rooms and panoramic glass ceilings for watching the northern lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Kiruna",
    country: "Sweden",
  },
  {
    title: "Private Atoll Overwater Villa",
    description:
      "Overwater villa on a private atoll—direct access to turquoise water and reef snorkeling.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697730288131-6684ca63584b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7800,
    location: "Baa Atoll",
    country: "Maldives",
  },
  {
    title: "Vintage Boathouse Escape",
    description:
      "Quaint boathouse on the water with private jetty—perfect for fishing and slow mornings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598269827339-8cbb4c495bc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    price: 1500,
    location: "Stockholm Archipelago",
    country: "Sweden",
  },
  {
    title: "Urban Designer Studio",
    description:
      "Minimalist studio with designer interiors—ideal for short stays and remote work.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1730724620512-0c7814610790?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    price: 2100,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Coastal Surf Cottage",
    description:
      "Small, charming cottage steps from the surf—surfboards and beach bonfires included.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/2220126118/photo/beautiful-murlough-bay-on-the-causeway-coast-of-northern-ireland.jpg?s=1024x1024&w=is&k=20&c=j_XvUWuKe3JhsUj8cGYdMra-zmhMt7Ygf-WCJcg8Xtw=",
    },
    price: 1700,
    location: "Byron Bay",
    country: "Australia",
  },
  {
    title: "Desert Camp Sanctuary",
    description:
      "Luxury canvas tents under the stars with local cuisine and guided dune walks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1610441783225-fc6b5d83b57b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
    },
    price: 2600,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Hilltop Vineyard Cottage",
    description:
      "Stone cottage surrounded by vines—enjoy tastings and sunset views over the valley.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/156509046/photo/tuscany-at-early-morning.jpg?s=1024x1024&w=is&k=20&c=NOJgvBJUZxyy5Um2HHiI_EDqSFL3bgGVTcnko4VB6CU=",
    },
    price: 2300,
    location: "Napa Valley",
    country: "United States",
  },
  {
    title: "Historic Castle Suite",
    description:
      "Stay in a renovated castle suite with antique furnishings and manicured gardens.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/144228962/photo/culzean-castle.jpg?s=1024x1024&w=is&k=20&c=NqzS-nnkgn-Uhz3DUF62c2H4K7TB2AMY73HrW2dipzs=",
    },
    price: 6400,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Countryside Farmstay Bungalow",
    description:
      "Family-run farmhouse with organic produce and quiet country walks from your door.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1400132632/photo/typical-yorkshire-farming-landscape-and-architecture-ribblesdale-yorkshire-dales-national.jpg?s=1024x1024&w=is&k=20&c=m-AeuBnsIDwpZ8Xju4vWI0wGLxEY3uF2OkKJvaydYN8=",
    },
    price: 1300,
    location: "Punjab",
    country: "India",
  },
  {
    title: "Chic City Penthouse",
    description:
      "Rooftop terrace and clean-lined interiors in a central location—urban luxury at its best.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1650397450276-f3036829fa38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
    },
    price: 4200,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Jungle Eco-Lodge",
    description:
      "Sustainable lodge with canopy walks and locally-sourced meals in the heart of the jungle.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2000,
    location: "Manuel Antonio",
    country: "Costa Rica",
  },
  {
    title: "clifftop Sunset House",
    description:
      "A modern house where the sun disappears into the ocean—perfect for romance and photos.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1711635595664-8ca45f3e7971?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    },
    price: 5400,
    location: "Big Sur",
    country: "United States",
  },
  {
    title: "Ski Chalet Retreat",
    description:
      "Cozy alpine chalet with ski-in access, roaring fireplace and hot cocoa evenings.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1687996107450-1cb812e04e2e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3100,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Secluded Forest Dome",
    description:
      "Glamping dome deep in the woods with starry nights, comfy bedding and a fire pit.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1718204438600-e8481c2e5b0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    price: 1400,
    location: "British Columbia",
    country: "Canada",
  },
  {
    title: "Old Town Charming Apartment",
    description:
      "Classic apartment in the historic quarter—cobblestone streets and local cafés at hand.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1742436012274-14981c8a5faf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    price: 1600,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Island Palm Bungalow",
    description:
      "Simple, breezy bungalow framed by palms and a short stroll to white sand beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602002418655-57aef867418e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674",
    },
    price: 2800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Northern Lights Cabin",
    description:
      "Wooden cabin with panoramic windows—ideal for watching the aurora in peaceful isolation.",
    image:{
      filename: "listingimage",
      url:  "https://plus.unsplash.com/premium_photo-1658506822827-fb0677fb8e1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    price: 3600,
    location: "Tromsø",
    country: "Norway",
  },
  {
    title: "Vintage Colonial Villa",
    description:
      "Gracious colonial home with high ceilings, verandas and a shady garden to relax in.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1699278269875-93295c60ad2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    },
    price: 2700,
    location: "Havana",
    country: "Cuba",
  },
  {
    title: "Palm Grove Retreat",
    description:
      "A villa surrounded by palm trees with a cool plunge pool and outdoor dining area.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697730270201-bdfc5b81a675?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
    },
    price: 3200,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Riverbend Cottage",
    description:
      "Quaint cottage set on a slow river bend—kayaks included for peaceful morning paddles.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1755613636924-e67a95beee71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    },
    price: 1700,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Modern Desert Oasis",
    description:
      "Architect-designed desert home with clean lines, pool and endless horizon views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1732828585135-7eb38b153b28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4500,
    location: "Palm Springs",
    country: "United States",
  },
  {
    title: "Coastal Lighthouse Cottage",
    description:
      "Charming cottage near a working lighthouse—coastal trails and seafood restaurants nearby.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1754337664547-1eed3ebe8bd7?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2000,
    location: "Cornwall",
    country: "United Kingdom",
  },
  {
    title: "Riverside Stone House",
    description:
      "Stone-built house with terrace overlooking the river—perfect for slow, scenic weekends.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1675328361786-effdf38ff876?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2232",
    },
    price: 1900,
    location: "Minnesota",
    country: "United States",
  },
  {
    title: "Skyline Rooftop Apartment",
    description:
      "Contemporary high-rise apartment with private rooftop and sweeping city views.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/2183940792/photo/huge-skyscraper-architecture-in-miami-photo-of-skyscraper-architecture-building.jpg?s=1024x1024&w=is&k=20&c=Ru2qq0luWscM2PAcY2Kx9wtN3_7kUQ9eklSUHcsHlQk=",
    },
    price: 4100,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Seaside Bungalow Escape",
    description:
      "Casual bungalow steps from the surf with hammock, outdoor shower and coastal breeze.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1760198315829-fc2bec60404a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    },
    price: 1600,
    location: "Goa",
    country: "India",
  },
  {
    title: "Vineyard Hillside Cottage",
    description:
      "Charming cottage on a hillside vineyard—perfect for wine lovers and slow dinners.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1748347856709-ea7c6e3aec94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2100,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Boutique City Loft",
    description:
      "Stylish loft with curated furnishings and a lively neighborhood full of cafés.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1748904577604-7d02167b6eb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    },
    price: 2900,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Garden Villa Hideaway",
    description:
      "Walled garden villa with leafy terraces—perfect for private breakfasts and afternoon naps.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1198357646/photo/luxury-apartment-with-private-pool.jpg?s=1024x1024&w=is&k=20&c=4OKIdGwdZdZjrMRIjMsibZs2OJlWW6gvWXHNQ-ZUt_I=",
    },
    price: 2500,
    location: "Chiang Mai",
    country: "Thailand",
  },
  {
    title: "Highland Log Cabin",
    description:
      "Rustic log cabin set among rolling highland pastures with wood stove and starry skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587578171396-20a367c5ad0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674",
    },
    price: 1600,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Island Coral Bungalow",
    description:
      "Cozy coral-stone bungalow with shady verandah and sea-salt air all day long.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1746779834043-7cb86df9d05f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2036",
    },
    price: 4700,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Historic Courtyard Home",
    description:
      "Renovated home around a sunlit courtyard—perfect blend of history and modern comfort.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1689974467887-fd222b592a42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3089",
    },
    price: 1800,
    location: "Seville",
    country: "Spain",
  },
  {
    title: "Secluded River Cabin",
    description:
      "Private cabin by a gentle river with deck, hammock and slow mornings guaranteed.",
    image:{
      filename: "listingimage",
      url:  "https://images.unsplash.com/photo-1650513452784-c91c0436f6d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072",
    },
    price: 1500,
    location: "Kerala Backwaters",
    country: "India",
  },
  {
    title: "Tropical Garden Suite",
    description:
      "Airy suite opening to a lush garden with outdoor seating and morning birdlife.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/956353452/photo/stairway-into-the-garden.jpg?s=1024x1024&w=is&k=20&c=kmDmHl9smzo9scyA-5BUO-DFoY1gVDUC0cr-tvJ0dg8=",
    },
    price: 2000,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Modern Sky Villa",
    description:
      "Sleek villa with rooftop pool and 360° skyline views—made for entertaining.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2167",
    },
    price: 6800,
    location: "Dubai Marina",
    country: "UAE",
  },
  {
    title: "Cozy Artist's Loft",
    description:
      "Sun-filled loft in a creative quarter with gallery walls and local markets nearby.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1320943618/photo/smiling-businesswoman-sitting-on-a-desk-and-writing-in-notebook.jpg?s=1024x1024&w=is&k=20&c=bzOWCjlX-U4As1E5fzmJBVkuB3P5AoeELlSOQOdtCy4=",
    },
    price: 1700,
    location: "Melbourne",
    country: "Australia",
  },
  {
    title: "Sandy Bay Cottage",
    description:
      "Quiet cottage on a sheltered bay—gentle waves and peaceful beachcombing.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/172919400/photo/petty-harbour-newfoundland.jpg?s=1024x1024&w=is&k=20&c=2M1s2Cp4G5_mp7bHQZG2gJKamvi_aGqZKKDyjAJgLAs=",
    },
    price: 1750,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Orchard View Cottage",
    description:
      "Country cottage surrounded by fruit orchards—fresh produce and peaceful walks included.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/909656188/photo/houses-in-capo-coda-cavallo-san-teodoro-olbia-temple-sardinia.jpg?s=1024x1024&w=is&k=20&c=G3H95ld_SbEoFVEA9ovhkPz7ESkTm_BAXgl_ILnrQ5U=",
    },
    price: 1600,
    location: "Napa Valley",
    country: "United States",
  },
  {
    title: "Harbor Loft Retreat",
    description:
      "Modern waterfront loft with sweeping harbor views and easy access to ferries and cafés.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1698785824345-cdb60f7133d8?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3400,
    location: "San Francisco",
    country: "United States",
  },
];

module.exports = { data: sampleListings };
