import 'dotenv/config.js';
import '../../config/database.js';
import City from '../City.js';

let cities = [
  {
    name: "Paris",
    photo: "https://i.imgur.com/KOWjGOW.jpg",
    country: "France",
    description: "Paris, also known as the City of Light, is a beautiful and historic city located in France. It is famous for its stunning architecture, world-class museums, delicious cuisine, and romantic atmosphere. Some of the top attractions in Paris include the Eiffel Tower, Notre-Dame Cathedral, the Louvre Museum, and the Champs-Élysées. Visitors can also enjoy strolling along the Seine River, exploring charming neighborhoods like Montmartre and Le Marais, and indulging in French pastries and wine. Paris is truly a must-visit destination for anyone who loves art, culture, and history."
  },{
    name: "Malaga",
    photo: "https://i.imgur.com/T2RFKnx.jpg",
    country: "Spain",
    description: "Malaga is a beautiful coastal city located in the southern region of Spain. It is known for its sunny weather, stunning beaches, and rich history. Malaga is the birthplace of famous artist Pablo Picasso, and visitors can explore his childhood home and museum dedicated to his life and work. The city is also home to historic landmarks such as the Alcazaba fortress, the Roman Theatre, and the Cathedral of Malaga. Visitors can enjoy strolling through the charming streets of the Old Town, savoring delicious tapas, and soaking up the vibrant culture of Andalusia. With its warm climate and abundance of attractions, Malaga is a wonderful destination for travelers seeking a mix of relaxation and adventure."
  },{
    name: "Athens",
    photo: "https://i.imgur.com/FeONoqX.jpg",
    country: "Greece",
    description: "Athens is a historic city located in Greece, known for its rich culture and ancient landmarks. It is home to the iconic Acropolis, which includes the Parthenon, one of the most famous ancient temples in the world. Visitors can also explore other historic sites such as the Ancient Agora, the Temple of Olympian Zeus, and the Theatre of Dionysus. In addition to its ancient history, Athens also offers a vibrant modern culture, with bustling markets, delicious cuisine, and lively nightlife. Visitors can enjoy strolling through the charming neighborhoods of Plaka and Monastiraki, sampling local delicacies like souvlaki and feta cheese, and soaking up the Mediterranean sun on the nearby beaches. Athens is a must-visit destination for history buffs and anyone seeking a mix of ancient and modern culture."
  },{
    name: "Antalya",
    photo: "https://i.imgur.com/w38WVfY.jpg",
    country: "Turkey",
    description: "Antalya is a beautiful coastal city located in Turkey, known for its stunning beaches, ancient ruins, and vibrant culture. It is situated on the Mediterranean coast and boasts a warm climate year-round. Visitors can explore historic landmarks such as the Hadrian's Gate, the ancient city of Perge, and the ruins of Termessos. Antalya also offers a variety of outdoor activities such as hiking, rafting, and paragliding. The city has a bustling nightlife scene, with many bars and clubs offering live music and entertainment. Visitors can also enjoy sampling traditional Turkish cuisine, including dishes like kebabs, baklava, and Turkish delight. With its rich history, beautiful scenery, and lively culture, Antalya is a wonderful destination for travelers seeking adventure and relaxation."
  },{
    name: "Tokyo",
    photo: "https://i.imgur.com/lpziUGr.jpg",
    country: "Japan",
    description: "Tokyo is a bustling metropolis located in Japan, known for its cutting-edge technology, vibrant culture, and unique attractions. It is home to some of the world's most famous landmarks, including the Tokyo Tower, the Shibuya Crossing, and the Imperial Palace. Visitors can also explore the city's many museums, such as the Tokyo National Museum and the Mori Art Museum, and enjoy traditional Japanese culture at places like the Meiji Shrine and the Senso-ji Temple. Tokyo is also a food lover's paradise, with a wide variety of delicious cuisine to sample, including sushi, ramen, and tempura. The city is known for its efficient transportation system, including the iconic bullet trains, making it easy to explore all that Tokyo has to offer. With its unique blend of old and new, Tokyo is a must-visit destination for anyone seeking a truly unforgettable experience."
  },{
    name: "Beijing",
    photo: "https://i.imgur.com/VELlvTH.jpg",
    country: "China",
    description: "Beijing, also known as Peking, is the capital city of China and is known for its rich history, culture, and landmarks. The city is home to some of the most famous landmarks in China, including the Great Wall of China, the Forbidden City, and the Temple of Heaven. Visitors can also explore the many museums and galleries throughout the city, such as the National Museum of China and the Palace Museum. Beijing is also known for its delicious cuisine, including Peking duck and other traditional Chinese dishes. Visitors can enjoy shopping at local markets, such as the Silk Market and Panjiayuan Antique Market, and experience traditional Chinese art forms like calligraphy and martial arts. With its unique blend of ancient and modern culture, Beijing is a must-visit destination for anyone seeking a truly unforgettable experience."
  },{
    name: "Seol",
    photo: "https://i.imgur.com/su7Y3Dz.jpg",
    country: "South Korea",
    description: "Seoul is the capital city of South Korea and is known for its modern culture, historic landmarks, and delicious cuisine. The city is home to many famous landmarks, including Gyeongbokgung Palace, the N Seoul Tower, and the Bukchon Hanok Village. Visitors can also explore the many museums throughout the city, such as the National Museum of Korea and the Seoul Museum of Art. Seoul is also known for its delicious cuisine, including Korean BBQ, bibimbap, and kimchi. Visitors can enjoy shopping at local markets, such as the Namdaemun Market and Myeong-dong, and experience traditional Korean art forms like K-pop music and Taekwondo. With its unique blend of modern and traditional culture, Seoul is a must-visit destination for anyone seeking a truly unforgettable experience."
  },{
    name: "Siam",
    photo: "https://i.imgur.com/sGAwXST.jpg",
    country: "Thailand",
    description: "Siam was the former name of Thailand, which was changed to its current name in 1939. Thailand is located in Southeast Asia and is known for its beautiful beaches, ancient temples, and delicious cuisine. The country is home to many famous landmarks, including the Grand Palace in Bangkok, Wat Phra That Doi Suthep in Chiang Mai, and the ancient city of Ayutthaya. Visitors can also explore the many markets throughout the country, such as the Chatuchak Weekend Market in Bangkok and the Night Bazaar in Chiang Mai. Thailand is also known for its delicious cuisine, including pad thai, green curry, and mango sticky rice. Visitors can enjoy traditional Thai massage and experience traditional Thai art forms like Muay Thai boxing and classical dance. With its unique blend of ancient and modern culture, Thailand is a must-visit destination for anyone seeking a truly unforgettable experience."
  },{
    name: "Essaouira",
    photo: "https://i.imgur.com/pKG3ixd.jpg",
    country: "Morocco",
    description: "Essaouira is a beautiful coastal city located in Morocco, known for its stunning beaches, historic landmarks, and vibrant culture. The city is surrounded by ancient walls and is home to many famous landmarks, including the Skala de la Ville, the Moulay Hassan Square, and the Essaouira Citadel. Visitors can also explore the many museums throughout the city, such as the Sidi Mohammed Ben Abdallah Museum and the Essaouira Archaeological Museum. Essaouira is also known for its delicious cuisine, including traditional Moroccan dishes like tagine and couscous. Visitors can enjoy shopping at local markets, such as the Souk Jdid and the Essaouira Medina, and experience traditional Moroccan art forms like Gnawa music and dance. With its unique blend of ancient and modern culture, Essaouira is a must-visit destination for anyone seeking a truly unforgettable experience in Morocco."
  },{
    name: "Giza",
    photo: "https://i.imgur.com/icbieeR.jpg",
    country: "Egypt",
    description: "Giza is a city located in Egypt, known for its famous ancient landmarks, including the Great Pyramids and the Sphinx. The Great Pyramids of Giza are one of the Seven Wonders of the Ancient World and are the only remaining structures from the original list. Visitors can also explore other historic sites such as the Valley Temple and the Solar Boat Museum. Giza is also home to many museums and galleries, such as the Egyptian Museum and the Giza Plateau Archaeological Field School. Visitors can enjoy traditional Egyptian cuisine, including dishes like koshari and ful medames, and experience traditional Egyptian art forms like belly dancing and music. With its rich history and culture, Giza is a must-visit destination for anyone seeking a truly unforgettable experience in Egypt."
  },{
    name: "Tunez",
    photo: "https://i.imgur.com/RdP7pZw.jpg",
    country: "Tunez",
    description: "Tunis is the capital city of Tunisia, located in North Africa and is known for its rich history, culture, and beautiful Mediterranean beaches. The city is home to many historic landmarks, including the ancient ruins of Carthage, the Bardo Museum, and the Medina of Tunis, which is a UNESCO World Heritage site. Visitors can also explore the many markets throughout the city, such as the Souk El Attarine and the Souk El Berka, and experience traditional Tunisian cuisine, including dishes like brik and couscous. Tunis is also known for its beautiful beaches, such as La Marsa and Gammarth, where visitors can enjoy swimming, sunbathing, and water sports. With its unique blend of ancient and modern culture, Tunis is a must-visit destination for anyone seeking a truly unforgettable experience in North Africa."
  },{
    name: "Venice",
    photo: "https://i.imgur.com/f6cmOey.jpg",
    country: "Italy",
    description: "Venice is a beautiful city located in northeastern Italy, known for its stunning canals, historic landmarks, and romantic atmosphere. The city is built on a series of islands connected by bridges and is home to many famous landmarks, including St. Mark's Basilica, the Doge's Palace, and the Rialto Bridge. Visitors can also explore the many museums throughout the city, such as the Peggy Guggenheim Collection and the Accademia Gallery. Venice is also known for its delicious cuisine, including traditional Italian dishes like pizza and pasta, as well as local specialties like sarde in saor and fegato alla veneziana. Visitors can enjoy shopping at local markets, such as the Rialto Market and the Mercerie, and experience traditional Venetian art forms like glassblowing and lace-making. With its unique blend of history, culture, and romance, Venice is a must-visit destination for anyone seeking a truly unforgettable experience in Italy."
  }
]

City.insertMany(cities);