import bhriguLake from "@/assets/bhrigu-lake.jpg";
import hamptaPass from "@/assets/hampta-pass.jpg";
import valleyOfFlowers from "@/assets/valley-of-flowers.jpg";
import kedarkantha from "@/assets/kedarkantha.jpg";
import roopkund from "@/assets/roopkund.jpg";
import chadarTrek from "@/assets/chadar-trek.jpg";
import sandakphu from "@/assets/sandakphu.jpg";
import triund from "@/assets/triund.jpg";

export type Difficulty = "Easy" | "Moderate" | "Hard";
export type Region = "Himachal Pradesh" | "Uttarakhand" | "Ladakh" | "West Bengal" | "All";

export interface CostBreakdown {
  trekFee: number;
  food: number;
  stay: number;
  permits: number;
}

export interface Review {
  name: string;
  initials: string;
  rating: number;
  date: string;
  comment: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
}

export interface Trek {
  id: string;
  name: string;
  slug: string;
  region: Region;
  location: string;
  images: string[];
  difficulty: Difficulty;
  duration: string;
  distance: string;
  altitude: string;
  bestTime: string;
  weather: string;
  price: number;
  costBreakdown: CostBreakdown;
  shortDescription: string;
  description: string;
  itinerary: ItineraryDay[];
  reviews: Review[];
}

export const treks: Trek[] = [
  {
    id: "1",
    name: "Bhrigu Lake Trek",
    slug: "bhrigu-lake",
    region: "Himachal Pradesh",
    location: "Manali, Himachal Pradesh",
    images: [bhriguLake],
    difficulty: "Moderate",
    duration: "4 Days",
    distance: "26 km",
    altitude: "14,100 ft",
    bestTime: "June – October",
    weather: "5°C to 15°C",
    price: 6999,
    costBreakdown: { trekFee: 3500, food: 1800, stay: 1200, permits: 499 },
    shortDescription: "A stunning glacial lake perched above 14,000 ft with jaw-dropping views of the Pir Panjal range.",
    description: "Bhrigu Lake sits at an astounding altitude of 14,100 ft in the Kullu Valley, offering one of the most rewarding short treks in India. Named after the sage Bhrigu from Hindu mythology, this alpine lake is surrounded by lush green meadows that transform into a carpet of wildflowers in summer. The trek offers panoramic views of Hanuman Tibba, Friendship Peak, and the Seven Sisters peaks. The trail winds through dense forests, vast meadows, and rocky moraines before revealing the emerald waters of Bhrigu Lake.",
    itinerary: [
      { day: 1, title: "Manali to Gulaba to Jonker Thatch", description: "Drive to Gulaba and trek through pine and oak forests to reach the beautiful campsite at Jonker Thatch.", altitude: "10,800 ft" },
      { day: 2, title: "Jonker Thatch to Rola Khuli", description: "Ascend through vast alpine meadows with panoramic views opening up. Camp at the scenic Rola Khuli.", altitude: "12,800 ft" },
      { day: 3, title: "Rola Khuli to Bhrigu Lake & back to Rola Khuli", description: "Summit day! Climb to the mystical Bhrigu Lake, spend time soaking in the views, then descend back to camp.", altitude: "14,100 ft" },
      { day: 4, title: "Rola Khuli to Gulaba to Manali", description: "Descend through meadows back to Gulaba and drive to Manali. Trek complete!", altitude: "8,600 ft" },
    ],
    reviews: [
      { name: "Priya Sharma", initials: "PS", rating: 5, date: "Sep 2025", comment: "Absolutely breathtaking! The meadows on day 2 felt like walking through a painting. The lake itself is surreal — pictures don't do it justice." },
      { name: "Arjun Mehta", initials: "AM", rating: 4, date: "Aug 2025", comment: "Well organized trek with great guides. The altitude hit me a bit on day 3 but the views were worth every step. Food was surprisingly good at camp." },
      { name: "Kavita Reddy", initials: "KR", rating: 5, date: "Jul 2025", comment: "My first Himalayan trek and what an introduction! The wildflower meadows in July are something else. Highly recommend for a first-timer who's moderately fit." },
      { name: "Rohit Nair", initials: "RN", rating: 4, date: "Oct 2025", comment: "Went in early October and caught the first snow near the lake. Magical experience. The descent was slippery though, so bring proper shoes." },
    ],
  },
  {
    id: "2",
    name: "Hampta Pass Trek",
    slug: "hampta-pass",
    region: "Himachal Pradesh",
    location: "Manali, Himachal Pradesh",
    images: [hamptaPass],
    difficulty: "Moderate",
    duration: "5 Days",
    distance: "35 km",
    altitude: "14,039 ft",
    bestTime: "June – September",
    weather: "2°C to 18°C",
    price: 8499,
    costBreakdown: { trekFee: 4500, food: 2200, stay: 1300, permits: 499 },
    shortDescription: "Cross from lush Kullu Valley to the barren Lahaul in one dramatic pass — a tale of two landscapes.",
    description: "Hampta Pass is one of India's most dramatic crossover treks. You start in the lush green Kullu Valley and cross over to the stark, arid landscape of Lahaul — the contrast is nothing short of cinematic. The trek offers river crossings, boulder fields, high-altitude meadows, and the crown jewel: Chandratal Lake. It's the perfect trek for those who want variety in terrain without extreme difficulty.",
    itinerary: [
      { day: 1, title: "Manali to Jobra to Chika", description: "Drive to Jobra and begin your trek through lush forests to the riverside camp at Chika.", altitude: "10,100 ft" },
      { day: 2, title: "Chika to Balu Ka Ghera", description: "Trek along the river through narrowing valley with towering cliffs. Cross streams and reach the boulder camp.", altitude: "11,900 ft" },
      { day: 3, title: "Balu Ka Ghera to Siagoru via Hampta Pass", description: "The big day! Cross the 14,039 ft Hampta Pass and descend into the stark Lahaul Valley. Dramatic landscape change.", altitude: "14,039 ft" },
      { day: 4, title: "Siagoru to Chatru, drive to Chandratal", description: "Descend to Chatru and drive to the legendary Chandratal Lake — the Moon Lake of Lahaul.", altitude: "14,100 ft" },
      { day: 5, title: "Chandratal to Manali", description: "Morning at the lake, then drive back to Manali via Rohtang. Journey complete!", altitude: "6,700 ft" },
    ],
    reviews: [
      { name: "Deepak Thakur", initials: "DT", rating: 5, date: "Aug 2025", comment: "The landscape change from green to barren as you cross the pass is one of the most surreal things I've ever experienced." },
      { name: "Simran Kaur", initials: "SK", rating: 5, date: "Jul 2025", comment: "Chandratal Lake alone makes this trek worth it. But the pass crossing on day 3 is pure adrenaline. Best trek of my life." },
      { name: "Vikram Das", initials: "VD", rating: 4, date: "Sep 2025", comment: "River crossings were challenging but thrilling. The guides were excellent and made sure everyone was safe. Would do it again." },
    ],
  },
  {
    id: "3",
    name: "Valley of Flowers Trek",
    slug: "valley-of-flowers",
    region: "Uttarakhand",
    location: "Joshimath, Uttarakhand",
    images: [valleyOfFlowers],
    difficulty: "Easy",
    duration: "6 Days",
    distance: "38 km",
    altitude: "14,400 ft",
    bestTime: "July – September",
    weather: "8°C to 20°C",
    price: 9499,
    costBreakdown: { trekFee: 5000, food: 2500, stay: 1500, permits: 499 },
    shortDescription: "A UNESCO World Heritage Site — a valley carpeted with over 600 species of wildflowers in the monsoon.",
    description: "The Valley of Flowers is a UNESCO World Heritage Site and one of the most enchanting places on Earth. During the monsoon months, this high-altitude valley transforms into a riot of color with over 600 species of flowering plants, many of them rare and endemic. Combined with the pilgrimage to Hemkund Sahib and views of the Himalayan peaks, this trek is a feast for both nature lovers and spiritual seekers.",
    itinerary: [
      { day: 1, title: "Haridwar to Joshimath", description: "Drive through stunning Himalayan highways along the Alaknanda river to Joshimath.", altitude: "6,150 ft" },
      { day: 2, title: "Joshimath to Govindghat to Ghangaria", description: "Drive to Govindghat and trek along the Pushpawati river to the basecamp at Ghangaria.", altitude: "10,200 ft" },
      { day: 3, title: "Ghangaria to Valley of Flowers", description: "Explore the magnificent valley! Walk through carpets of brahmakamal, blue poppy, and hundreds of wildflowers.", altitude: "12,500 ft" },
      { day: 4, title: "Ghangaria to Hemkund Sahib", description: "Trek to the sacred Hemkund Sahib lake and gurudwara at 14,400 ft. A spiritual and physical achievement.", altitude: "14,400 ft" },
      { day: 5, title: "Ghangaria to Govindghat to Joshimath", description: "Descend back to Govindghat and drive to Joshimath.", altitude: "6,150 ft" },
      { day: 6, title: "Joshimath to Haridwar", description: "Drive back to Haridwar with memories of a lifetime.", altitude: "1,000 ft" },
    ],
    reviews: [
      { name: "Meera Iyer", initials: "MI", rating: 5, date: "Aug 2025", comment: "I've traveled to 30 countries and the Valley of Flowers is still the most beautiful place I've ever seen. Go in late July for peak bloom." },
      { name: "Suresh Patel", initials: "SP", rating: 5, date: "Aug 2025", comment: "Easy enough for beginners but the altitude at Hemkund Sahib is no joke. The flower valley on day 3 was a once-in-a-lifetime experience." },
      { name: "Ananya Bhatt", initials: "AB", rating: 4, date: "Sep 2025", comment: "September was slightly past peak but still stunning. Rain made the trail muddy — waterproof boots are essential!" },
    ],
  },
  {
    id: "4",
    name: "Kedarkantha Trek",
    slug: "kedarkantha",
    region: "Uttarakhand",
    location: "Sankri, Uttarakhand",
    images: [kedarkantha],
    difficulty: "Easy",
    duration: "6 Days",
    distance: "20 km",
    altitude: "12,500 ft",
    bestTime: "December – April",
    weather: "-10°C to 10°C",
    price: 7499,
    costBreakdown: { trekFee: 4000, food: 1800, stay: 1200, permits: 499 },
    shortDescription: "India's best winter trek — walk through snow-laden forests to a summit with 360° Himalayan views.",
    description: "Kedarkantha is widely regarded as India's best winter trek. The trail passes through pristine pine and oak forests blanketed in snow, frozen streams, and serene campsites. The summit day rewards you with a stunning 360-degree panoramic view of some of India's highest peaks, including Swargarohini, Bandarpoonch, and Black Peak. It's beginner-friendly but feels like a true Himalayan expedition.",
    itinerary: [
      { day: 1, title: "Dehradun to Sankri", description: "Drive through scenic mountain roads to the charming village of Sankri.", altitude: "6,400 ft" },
      { day: 2, title: "Sankri to Juda Ka Talab", description: "Trek through gorgeous pine forests to the frozen lake campsite.", altitude: "9,100 ft" },
      { day: 3, title: "Juda Ka Talab to Kedarkantha Base", description: "Ascend through snow-covered meadows to the base camp below the summit.", altitude: "11,250 ft" },
      { day: 4, title: "Summit Kedarkantha & descend to Hargaon", description: "Early morning summit push for sunrise! 360° views of snow-capped peaks. Descend to Hargaon.", altitude: "12,500 ft" },
      { day: 5, title: "Hargaon to Sankri", description: "Final descent through forests back to Sankri.", altitude: "6,400 ft" },
      { day: 6, title: "Sankri to Dehradun", description: "Drive back to Dehradun. Trek complete!", altitude: "2,000 ft" },
    ],
    reviews: [
      { name: "Rahul Verma", initials: "RV", rating: 5, date: "Jan 2026", comment: "Did this in January and the snow was knee-deep! The summit sunrise was the most beautiful thing I've ever witnessed. Perfect first trek." },
      { name: "Neha Gupta", initials: "NG", rating: 5, date: "Feb 2026", comment: "The frozen Juda Ka Talab is magical. I was a complete beginner and managed it comfortably. The guides were patient and encouraging." },
      { name: "Aditya Rao", initials: "AR", rating: 4, date: "Dec 2025", comment: "December was cold but the clear skies made for incredible views. Invest in good thermals and a proper sleeping bag." },
    ],
  },
  {
    id: "5",
    name: "Roopkund Trek",
    slug: "roopkund",
    region: "Uttarakhand",
    location: "Lohajung, Uttarakhand",
    images: [roopkund],
    difficulty: "Hard",
    duration: "8 Days",
    distance: "53 km",
    altitude: "15,696 ft",
    bestTime: "May – June, Sep – Oct",
    weather: "-5°C to 12°C",
    price: 11999,
    costBreakdown: { trekFee: 6500, food: 3000, stay: 1800, permits: 699 },
    shortDescription: "The mysterious 'Skeleton Lake' at 15,700 ft — one of India's most challenging and rewarding treks.",
    description: "Roopkund is the legendary 'Skeleton Lake' — a glacial lake at 15,696 ft surrounded by rock-strewn glaciers and snow-capped peaks. Hundreds of ancient human skeletons lie at its bottom, adding an eerie mystery to an already dramatic landscape. The trek traverses lush meadows (Bedni Bugyal and Ali Bugyal are among Asia's largest), dense forests, and challenging rocky terrain. It demands fitness but rewards with some of the most stunning and haunting landscapes in the Himalayas.",
    itinerary: [
      { day: 1, title: "Drive to Lohajung", description: "Scenic drive from Kathgodam/Haridwar to the trailhead at Lohajung.", altitude: "7,600 ft" },
      { day: 2, title: "Lohajung to Didna Village", description: "Trek through terraced fields and forests to the remote village of Didna.", altitude: "8,500 ft" },
      { day: 3, title: "Didna to Ali Bugyal", description: "Enter one of Asia's most beautiful alpine meadows stretching for miles.", altitude: "11,200 ft" },
      { day: 4, title: "Ali Bugyal to Ghora Lotani", description: "Cross Bedni Bugyal and Pathar Nachuni to camp at Ghora Lotani.", altitude: "12,900 ft" },
      { day: 5, title: "Ghora Lotani to Bhagwabasa", description: "Challenging ascent through rocky terrain to the last camp before Roopkund.", altitude: "14,100 ft" },
      { day: 6, title: "Bhagwabasa to Roopkund to Bhagwabasa", description: "Summit push to the mysterious Skeleton Lake at 15,696 ft. Explore and return.", altitude: "15,696 ft" },
      { day: 7, title: "Bhagwabasa to Bedni Bugyal", description: "Long descent through meadows back to Bedni Bugyal campsite.", altitude: "11,500 ft" },
      { day: 8, title: "Bedni Bugyal to Lohajung", description: "Final descent to Lohajung. Drive back.", altitude: "7,600 ft" },
    ],
    reviews: [
      { name: "Karthik Sundaram", initials: "KS", rating: 5, date: "Oct 2025", comment: "The most challenging thing I've done — and the most rewarding. Ali Bugyal meadows are unreal. The lake itself gave me goosebumps." },
      { name: "Pooja Mishra", initials: "PM", rating: 4, date: "May 2025", comment: "Not for the faint-hearted. Altitude sickness hit hard at Bhagwabasa. But if you can push through, Roopkund is unforgettable." },
    ],
  },
  {
    id: "6",
    name: "Chadar Trek",
    slug: "chadar-trek",
    region: "Ladakh",
    location: "Leh, Ladakh",
    images: [chadarTrek],
    difficulty: "Hard",
    duration: "9 Days",
    distance: "62 km",
    altitude: "11,123 ft",
    bestTime: "January – February",
    weather: "-25°C to -5°C",
    price: 18999,
    costBreakdown: { trekFee: 10000, food: 4500, stay: 3000, permits: 1499 },
    shortDescription: "Walk on the frozen Zanskar River through dramatic canyons — the ultimate extreme winter adventure.",
    description: "The Chadar Trek is not just a trek — it's a survival experience. You walk on the frozen surface of the Zanskar River, navigating through narrow gorges with towering canyon walls on either side. Temperatures plummet to -25°C at night. The ice shifts, cracks, and groans beneath your feet. It's one of the most extreme and surreal treks on Earth, reserved for the adventurous and the bold. The frozen waterfalls, caves, and the raw beauty of Ladakh in winter make this truly unforgettable.",
    itinerary: [
      { day: 1, title: "Arrive in Leh", description: "Acclimatization day in Leh. Rest and prepare for the extreme cold ahead.", altitude: "11,500 ft" },
      { day: 2, title: "Leh acclimatization", description: "Second acclimatization day. Explore Leh, gear check, and briefing.", altitude: "11,500 ft" },
      { day: 3, title: "Leh to Tilat Sumdo, trek to Shingra Koma", description: "Drive to the starting point and begin walking on the frozen river.", altitude: "10,500 ft" },
      { day: 4, title: "Shingra Koma to Tibb Cave", description: "Navigate through narrow canyons on the frozen chadar. Camp in a cave.", altitude: "10,700 ft" },
      { day: 5, title: "Tibb Cave to Nerak", description: "Reach the stunning frozen waterfall at Nerak. The highlight of the trek.", altitude: "10,900 ft" },
      { day: 6, title: "Nerak — explore", description: "Explore the frozen waterfall and surrounding area. A day to soak it all in.", altitude: "10,900 ft" },
      { day: 7, title: "Nerak to Tibb Cave", description: "Begin the return journey on the chadar.", altitude: "10,700 ft" },
      { day: 8, title: "Tibb Cave to Shingra Koma", description: "Final day on the frozen river. Drive back to Leh.", altitude: "11,500 ft" },
      { day: 9, title: "Depart Leh", description: "Fly out of Leh with memories of a lifetime.", altitude: "11,500 ft" },
    ],
    reviews: [
      { name: "Manish Khatri", initials: "MK", rating: 5, date: "Feb 2026", comment: "The most extreme thing I've ever done. Walking on a frozen river at -20°C while canyon walls tower over you — there's nothing else like it on Earth." },
      { name: "Tanya Sen", initials: "TS", rating: 4, date: "Jan 2026", comment: "Incredibly demanding but life-changing. The frozen waterfall at Nerak is otherworldly. Prepare for the cold — it's beyond what you imagine." },
    ],
  },
  {
    id: "7",
    name: "Sandakphu Trek",
    slug: "sandakphu",
    region: "West Bengal",
    location: "Darjeeling, West Bengal",
    images: [sandakphu],
    difficulty: "Moderate",
    duration: "6 Days",
    distance: "51 km",
    altitude: "11,930 ft",
    bestTime: "October – December, March – May",
    weather: "0°C to 15°C",
    price: 8999,
    costBreakdown: { trekFee: 4800, food: 2200, stay: 1500, permits: 499 },
    shortDescription: "See four of the five highest peaks on Earth — Everest, Kangchenjunga, Lhotse, and Makalu — from one ridge.",
    description: "Sandakphu is the highest peak in West Bengal and offers what many call the best panoramic mountain view in the world. From the summit, you can see four of the five highest peaks on Earth: Everest, Kangchenjunga, Lhotse, and Makalu. The trek follows the Singalila Ridge along the India-Nepal border, passing through rhododendron forests that burst into color in spring. The trail offers teahouse-style accommodation and delicious Nepali-Tibetan cuisine.",
    itinerary: [
      { day: 1, title: "NJP/Bagdogra to Manebhanjan to Chitrey", description: "Drive to the trailhead and begin trekking through charming hillside villages.", altitude: "8,200 ft" },
      { day: 2, title: "Chitrey to Tumling", description: "Trek along the ridge with first views of Kangchenjunga appearing through the clouds.", altitude: "9,600 ft" },
      { day: 3, title: "Tumling to Kalipokhri", description: "Walk through dense rhododendron forests. Cross into Nepal and back to India.", altitude: "10,400 ft" },
      { day: 4, title: "Kalipokhri to Sandakphu", description: "Summit day! Arrive at the top and witness the 'Sleeping Buddha' — Kangchenjunga range at sunset.", altitude: "11,930 ft" },
      { day: 5, title: "Sandakphu to Gurdum via Phalut", description: "Sunrise with Everest views! Trek to Phalut and descend to Gurdum through forests.", altitude: "7,800 ft" },
      { day: 6, title: "Gurdum to Rimbick, drive to NJP", description: "Final descent to Rimbick. Drive back to NJP/Bagdogra.", altitude: "4,600 ft" },
    ],
    reviews: [
      { name: "Arunima Bose", initials: "AB", rating: 5, date: "Nov 2025", comment: "Seeing Everest and Kangchenjunga from the same viewpoint at sunrise — no photograph can capture that feeling. The Sleeping Buddha view at sunset is pure magic." },
      { name: "Debashis Ghosh", initials: "DG", rating: 4, date: "Mar 2026", comment: "March was perfect timing — the rhododendrons were in full bloom. The teahouse food (momos and thukpa) was incredible." },
      { name: "Lakshmi Rajan", initials: "LR", rating: 5, date: "Apr 2026", comment: "This trek changed my perspective on life. Not technically hard but the views are world-class. Worth every rupee." },
    ],
  },
  {
    id: "8",
    name: "Triund Trek",
    slug: "triund",
    region: "Himachal Pradesh",
    location: "McLeodganj, Himachal Pradesh",
    images: [triund],
    difficulty: "Easy",
    duration: "2 Days",
    distance: "9 km",
    altitude: "9,350 ft",
    bestTime: "March – June, Sep – Nov",
    weather: "5°C to 25°C",
    price: 3499,
    costBreakdown: { trekFee: 1500, food: 1000, stay: 700, permits: 299 },
    shortDescription: "The crown jewel of weekend treks — camp under stars with the Dhauladhar range as your backdrop.",
    description: "Triund is the quintessential gateway trek. A short but rewarding climb from McLeodganj brings you to a ridge that offers jaw-dropping views of the Dhauladhar mountain range on one side and the Kangra Valley on the other. It's perfect for beginners, weekend warriors, and anyone who wants a taste of Himalayan camping without a major commitment. The sunset and stargazing from Triund ridge are legendary.",
    itinerary: [
      { day: 1, title: "McLeodganj to Triund", description: "Trek through oak and rhododendron forests, gaining altitude steadily. Reach the ridge by afternoon for a spectacular sunset.", altitude: "9,350 ft" },
      { day: 2, title: "Triund to McLeodganj", description: "Wake up to Dhauladhar in golden morning light. Descend back to McLeodganj by noon.", altitude: "6,800 ft" },
    ],
    reviews: [
      { name: "Ishaan Tiwari", initials: "IT", rating: 5, date: "Oct 2025", comment: "Perfect weekend escape from Delhi. The sunset from the ridge is something else. Camping under a million stars with mountains everywhere — pure bliss." },
      { name: "Ritu Saxena", initials: "RS", rating: 5, date: "May 2025", comment: "Did this with zero trekking experience and loved every minute. The trail is well-marked and the views at the top make you forget all the huffing and puffing." },
      { name: "Nikhil Chopra", initials: "NC", rating: 4, date: "Mar 2026", comment: "Great for beginners but don't underestimate the last 1 km — it's steep! The camp food was delicious though, and the Milky Way at night was incredible." },
      { name: "Fatima Sheikh", initials: "FS", rating: 5, date: "Nov 2025", comment: "Took my 60-year-old parents and they managed it beautifully. The pace was gentle and the reward was extraordinary. Best value trek in India." },
    ],
  },
];

export const regions: Region[] = ["Himachal Pradesh", "Uttarakhand", "Ladakh", "West Bengal"];
