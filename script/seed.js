'use strict'

const {db, User, Product, Order, Review} = require('../server/db/models')

const users = [
  {
    email: 'nancy@gmail.com',
    firstName: 'Nancy',
    lastName: 'Rainbow',
    phoneNumber: '8885554325',
    password: '123',
    address: '3 Times Square, New York, NY 10004',
    adminStatus: true
  },
  {
    email: 'sesame@email.com',
    password: 'hungry',
    firstName: 'Sesame',
    lastName: 'Cat',
    phoneNumber: '5743568888',
    address: '50 Catnip Avenue, New York, NY 10004',
    adminStatus: false
  }
]

const products = [
  {
    company: 'Cerave',
    name: 'Hydrating Facial Cleanser',
    price: 1349,
    inventory: 53,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559841?$md$',
    category: 'cleanser'
  },
  {
    company: 'Murad',
    name: 'AHA/BHA Exfoliating Cleanser',
    price: 4000,
    inventory: 62,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2545153?$md$',
    category: 'cleanser'
  },
  {
    company: 'The Ordinary',
    name: 'Squalane Cleanser',
    price: 790,
    inventory: 10,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551159?$md$',
    category: 'cleanser'
  },
  {
    company: 'Murad',
    name: 'Essential-C Cleanser',
    price: 4000,
    inventory: 34,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2082350?$md$',
    category: 'cleanser'
  },
  {
    company: 'Dermalogica',
    name: 'Special Cleansing Gel',
    price: 3900,
    inventory: 94,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2152629?$md$',
    category: 'cleanser'
  },
  {
    company: 'Cerave',
    name: 'Foaming Facial Cleanser',
    price: 1499,
    inventory: 81,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2254420?$md$',
    category: 'cleanser'
  },
  {
    company: 'Cerave',
    name: 'Renewing SA Cleanser',
    price: 1399,
    inventory: 11,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2283676?$md$',
    category: 'cleanser'
  },
  {
    company: 'Tula',
    name: 'The Cult Classic Purifying Face Cleanser',
    price: 2800,
    inventory: 48,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2532485?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Take The Day Off Cleansing Balm',
    price: 3100,
    inventory: 68,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2282783?$md$',
    category: 'cleanser'
  },
  {
    company: 'Philosophy',
    name: 'Purity Made Simple One-Step Facial Cleanser',
    price: 1300,
    inventory: 22,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2565512?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Liquid Facial Soap - Mild',
    price: 1900,
    inventory: 15,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2153910?$md$',
    category: 'cleanser'
  },
  {
    company: 'Dermalogica',
    name: 'Clearing Skin Wash',
    price: 3900,
    inventory: 47,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2547231?$md$',
    category: 'cleanser'
  },
  {
    company: 'Banila Co',
    name: 'Clean It Zero 3-in-1 Cleansing Balm',
    price: 1900,
    inventory: 79,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2555801?$md$',
    category: 'cleanser'
  },
  {
    company: 'Philosophy',
    name: 'The Microdelivery Exfoliating Facial Wash',
    price: 1900,
    inventory: 48,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2504127?$md$',
    category: 'cleanser'
  },
  {
    company: 'La Roche-posay',
    name: 'Toleriane Purifying Foaming Face Wash for Oily Skin',
    price: 1499,
    inventory: 10,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2503388?$md$',
    category: 'cleanser'
  },
  {
    company: 'Garnier',
    name:
      'SkinActive Micellar Cleansing Water All-in-1 Cleanser & Waterproof Makeup Remover',
    price: 499,
    inventory: 48,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2504773?$md$',
    category: 'cleanser'
  },
  {
    company: 'Murad',
    name: 'Clarifying Cleanser',
    price: 3200,
    inventory: 31,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2082345?$md$',
    category: 'cleanser'
  },
  {
    company: 'First Aid Beauty',
    name: 'Face Cleanser',
    price: 2100,
    inventory: 39,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2295735?$md$',
    category: 'cleanser'
  },
  {
    company: 'La Roche-posay',
    name: 'Toleriane Hydrating Gentle Face Cleanser',
    price: 1499,
    inventory: 99,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2503387?$md$',
    category: 'cleanser'
  },
  {
    company: 'It Cosmetics',
    name: 'Confidence in a Cleanser Gentle Face Wash',
    price: 2800,
    inventory: 32,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2514626?$md$',
    category: 'cleanser'
  },
  {
    company: 'Cerave',
    name: 'Acne Foaming Cream Cleanser',
    price: 1499,
    inventory: 62,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2556948?$md$',
    category: 'cleanser'
  },
  {
    company: 'Lancôme',
    name: 'Crème Radiance Clarifying Cream-to-Foam Cleanser',
    price: 2700,
    inventory: 52,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2235582?$md$',
    category: 'cleanser'
  },
  {
    company: 'Dermalogica',
    name: 'UltraCalming Cleanser',
    price: 3900,
    inventory: 71,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2220559?$md$',
    category: 'cleanser'
  },
  {
    company: 'Origins',
    name: 'Checks and Balances Frothy Face Wash',
    price: 2400,
    inventory: 72,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2307120?$md$',
    category: 'cleanser'
  },
  {
    company: 'Garnier',
    name:
      'SkinActive Micellar Cleansing Water All-in-1 Cleanser & Makeup Remover',
    price: 499,
    inventory: 52,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2504774?$md$',
    category: 'cleanser'
  },
  {
    company: 'It Cosmetics',
    name: 'Your On-the-Go Confidence! Value Set',
    price: 3000,
    inventory: 46,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2562774?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'All About Clean Rinse-Off Foaming Cleanser',
    price: 2250,
    inventory: 85,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2154676?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Liquid Facial Soap - Oily Skin Formula',
    price: 1900,
    inventory: 20,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2153914?$md$',
    category: 'cleanser'
  },
  {
    company: 'Lancôme',
    name: 'Crème Mousse Confort Creamy Foaming Cleanser',
    price: 2700,
    inventory: 88,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2235580?$md$',
    category: 'cleanser'
  },
  {
    company: 'Proactiv',
    name: 'Renewing Cleanser',
    price: 2500,
    inventory: 63,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2515774?$md$',
    category: 'cleanser'
  },
  {
    company: 'Cetaphil',
    name: 'Daily Facial Cleanser',
    price: 899,
    inventory: 78,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2091454?$md$',
    category: 'cleanser'
  },
  {
    company: 'Mario Badescu',
    name: 'Glycolic Foaming Cleanser',
    price: 1600,
    inventory: 95,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2209926?$md$',
    category: 'cleanser'
  },
  {
    company: 'Proactiv',
    name: 'Deep Cleansing Face Wash',
    price: 3000,
    inventory: 85,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2515770?$md$',
    category: 'cleanser'
  },
  {
    company: 'Mario Badescu',
    name: 'Enzyme Cleansing Gel',
    price: 1400,
    inventory: 55,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2209927?$md$',
    category: 'cleanser'
  },
  {
    company: 'The Body Shop',
    name: 'Tea Tree Skin Clearing Facial Wash',
    price: 1400,
    inventory: 58,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2243365?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Blackhead Solutions 7 Day Deep Pore Cleanse & Scrub',
    price: 2400,
    inventory: 75,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2541688?$md$',
    category: 'cleanser'
  },
  {
    company: 'Dermalogica',
    name: 'Clear Start Breakout Clearing Foaming Wash',
    price: 1950,
    inventory: 41,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2264975?$md$',
    category: 'cleanser'
  },
  {
    company: 'Dermalogica',
    name: 'Skin Resurfacing Cleanser',
    price: 4500,
    inventory: 61,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2152643?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clarins',
    name: 'One-Step Gentle Exfoliating Cleanser with Orange Extract',
    price: 3800,
    inventory: 57,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2200605?$md$',
    category: 'cleanser'
  },
  {
    company: 'Peach & Lily',
    name: 'Power Calm Hydrating Gel Cleanser',
    price: 2800,
    inventory: 75,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2541744?$md$',
    category: 'cleanser'
  },
  {
    company: 'Mario Badescu',
    name: 'Acne Facial Cleanser',
    price: 1500,
    inventory: 72,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2209929?$md$',
    category: 'cleanser'
  },
  {
    company: "Kiehl's Since 1851",
    name: 'Ultra Facial Cleanser',
    price: 2200,
    inventory: 18,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536613?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Acne Solutions Cleansing Bar for Face & Body',
    price: 1650,
    inventory: 62,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2265614?$md$',
    category: 'cleanser'
  },
  {
    company: 'La Roche-posay',
    name: 'Effaclar Medicated Gel Cleanser for Acne Prone Skin',
    price: 1499,
    inventory: 88,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2276054?$md$',
    category: 'cleanser'
  },
  {
    company: 'Kate Somerville',
    name: 'ExfoliKate Cleanser Daily Foaming Wash',
    price: 3800,
    inventory: 11,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2531095?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Acne Solutions Cleansing Gel',
    price: 2250,
    inventory: 83,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2286506?$md$',
    category: 'cleanser'
  },
  {
    company: 'Tula',
    name: 'Keep It Clear Acne Foam Cleanser',
    price: 3400,
    inventory: 48,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2549758?$md$',
    category: 'cleanser'
  },
  {
    company: "Kiehl's Since 1851",
    name: 'Rare Earth Deep Pore Cleansing Mask',
    price: 3800,
    inventory: 73,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536691?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: '7 Day Scrub Cream Rinse-Off Formula',
    price: 2350,
    inventory: 8,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2154677?$md$',
    category: 'cleanser'
  },
  {
    company: 'Philosophy',
    name: 'Clear Days Ahead Oil-Free Salicylic Acid Acne Treatment Cleanser',
    price: 2500,
    inventory: 13,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2246248?$md$',
    category: 'cleanser'
  },
  {
    company: 'Peter Thomas Roth',
    name: 'Anti-Aging Cleansing Gel',
    price: 3900,
    inventory: 16,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2135154?$md$',
    category: 'cleanser'
  },
  {
    company: 'Mad Hippie',
    name: 'Cream Cleanser',
    price: 1599,
    inventory: 65,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2530016?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Acne Solutions Cleansing Foam',
    price: 2250,
    inventory: 62,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2153867?$md$',
    category: 'cleanser'
  },
  {
    company: 'It Cosmetics',
    name: 'Limited Edition Color Awakening Skin & Lip Duo',
    price: 5200,
    inventory: 97,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2565229?$md$',
    category: 'cleanser'
  },
  {
    company: 'Formula 10.0.6',
    name: 'So Totally Clean Deep Pore Cleanser',
    price: 699,
    inventory: 93,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2215032?$md$',
    category: 'cleanser'
  },
  {
    company: 'Cosrx',
    name: 'Low pH Good Morning Gel Cleanser',
    price: 1400,
    inventory: 53,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2517358?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Take The Day Off Cleansing Oil',
    price: 2900,
    inventory: 18,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2295200?$md$',
    category: 'cleanser'
  },
  {
    company: 'Juice Beauty',
    name: 'Green Apple Brightening Gel Cleanser',
    price: 2800,
    inventory: 88,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2236864?$md$',
    category: 'cleanser'
  },
  {
    company: 'Cetaphil',
    name: 'Gentle Skin Cleanser',
    price: 999,
    inventory: 42,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/5021812?$md$',
    category: 'cleanser'
  },
  {
    company: 'Lancôme',
    name: 'Mousse Radiance Clarifying Self-Foaming Cleanser',
    price: 3200,
    inventory: 33,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2235581?$md$',
    category: 'cleanser'
  },
  {
    company: 'Bareminerals',
    name: 'Pure Plush Gentle Deep Cleansing Foam',
    price: 2200,
    inventory: 41,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2296211?$md$',
    category: 'cleanser'
  },
  {
    company: 'Derma E',
    name: 'Acne Deep Pore Cleansing Wash',
    price: 1550,
    inventory: 25,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2541152?$md$',
    category: 'cleanser'
  },
  {
    company: 'Kylie Skin',
    name: 'Foaming Face Wash',
    price: 2400,
    inventory: 31,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2548223?$md$',
    category: 'cleanser'
  },
  {
    company: 'Jack Black',
    name: 'All-Over Wash',
    price: 2100,
    inventory: 20,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2238531?$md$',
    category: 'cleanser'
  },
  {
    company: 'Shiseido',
    name: 'Clarifying Cleansing Foam',
    price: 3600,
    inventory: 68,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2531807?$md$',
    category: 'cleanser'
  },
  {
    company: 'Kate Somerville',
    name: 'EradiKate Daily Foaming Cleanser',
    price: 3800,
    inventory: 37,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2531098?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Redness Solutions Soothing Cleanser',
    price: 2500,
    inventory: 36,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2157846?$md$',
    category: 'cleanser'
  },
  {
    company: 'La Roche-posay',
    name: 'Micellar Cleansing Water Ultra and Makeup Remover',
    price: 1599,
    inventory: 47,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2301524?$md$',
    category: 'cleanser'
  },
  {
    company: 'Cerave',
    name: 'Hydrating Micellar Water',
    price: 1299,
    inventory: 6,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2524863?$md$',
    category: 'cleanser'
  },
  {
    company: 'Cerave',
    name: 'Foaming Facial Cleanser',
    price: 499,
    inventory: 22,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2541441?$md$',
    category: 'cleanser'
  },
  {
    company: 'Proactiv',
    name: 'Deep Cleansing Wash',
    price: 3500,
    inventory: 50,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2500645?$md$',
    category: 'cleanser'
  },
  {
    company: 'Boscia',
    name: 'Clear Complexion Cleanser',
    price: 2800,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2534399?$md$',
    category: 'cleanser'
  },
  {
    company: 'Roc',
    name: 'Daily Resurfacing Disks',
    price: 1099,
    inventory: 90,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2208206?$md$',
    category: 'cleanser'
  },
  {
    company: "Kiehl's Since 1851",
    name: 'Calendula Deep Cleansing Foaming Face Wash',
    price: 3400,
    inventory: 74,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536607?$md$',
    category: 'cleanser'
  },
  {
    company: 'Dermalogica',
    name: 'Intensive Moisture Cleanser',
    price: 3900,
    inventory: 51,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2535737?$md$',
    category: 'cleanser'
  },
  {
    company: "Kiehl's Since 1851",
    name: 'Rare Earth Deep Pore Daily Cleanser',
    price: 2500,
    inventory: 75,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536611?$md$',
    category: 'cleanser'
  },
  {
    company: 'Juice Beauty',
    name: 'STEM CELLULAR 2-in-1 Cleanser',
    price: 3400,
    inventory: 36,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2291387?$md$',
    category: 'cleanser'
  },
  {
    company: 'Carbon Theory.',
    name: 'Charcoal & Tea Tree Oil Break-Out Control Facial Cleansing Bar',
    price: 999,
    inventory: 86,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559570?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Foaming Sonic Facial Soap',
    price: 2250,
    inventory: 20,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2276493?$md$',
    category: 'cleanser'
  },
  {
    company: 'First Aid Beauty',
    name: 'Skin Rescue Deep Cleanser with Red Clay',
    price: 2400,
    inventory: 53,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2506516?$md$',
    category: 'cleanser'
  },
  {
    company: 'Beekman 1802',
    name: 'Milk Wash Exfoliating Jelly Cleanser',
    price: 3800,
    inventory: 45,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2569234?$md$',
    category: 'cleanser'
  },
  {
    company: 'Dermalogica',
    name: 'Active Clay Cleanser',
    price: 3900,
    inventory: 19,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2556383?$md$',
    category: 'cleanser'
  },
  {
    company: 'Boscia',
    name: 'Purifying Cleansing Gel',
    price: 2800,
    inventory: 57,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2534400?$md$',
    category: 'cleanser'
  },
  {
    company: 'Garnier',
    name: 'SkinActive Micellar Cleansing Water with Rose Water',
    price: 899,
    inventory: 22,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2553715?$md$',
    category: 'cleanser'
  },
  {
    company: 'Jack Black',
    name: 'Pure Clean Daily Facial Cleanser',
    price: 1900,
    inventory: 41,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2238522?$md$',
    category: 'cleanser'
  },
  {
    company: 'Estée Lauder',
    name: 'Perfectly Clean Multi-Action Foam Cleanser/Purifying Mask',
    price: 2700,
    inventory: 39,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2531469?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Liquid Facial Soap - Extra Mild',
    price: 1900,
    inventory: 59,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2153909?$md$',
    category: 'cleanser'
  },
  {
    company: 'Osea',
    name: 'Ocean Cleanser',
    price: 4800,
    inventory: 3,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2570071?$md$',
    category: 'cleanser'
  },
  {
    company: 'Kopari Beauty',
    name: 'Tropical Glow Cleanser',
    price: 2400,
    inventory: 41,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2563283?$md$',
    category: 'cleanser'
  },
  {
    company: 'Neutrogena',
    name: 'Hydro Boost Hydrating Cleansing Gel',
    price: 1199,
    inventory: 45,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2501814?$md$',
    category: 'cleanser'
  },
  {
    company: 'Florence By Mills',
    name: 'Have We Met? Starter Set',
    price: 2200,
    inventory: 92,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2565480?$md$',
    category: 'cleanser'
  },
  {
    company: 'Elemis',
    name: 'Superfood Facial Wash',
    price: 2500,
    inventory: 25,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2533930?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Take The Day Off Cleansing Balm',
    price: 1000,
    inventory: 64,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2532674?$md$',
    category: 'cleanser'
  },
  {
    company: 'Lancôme',
    name: 'Gel Pure Focus Purifying Cleanser',
    price: 2700,
    inventory: 92,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2287801?$md$',
    category: 'cleanser'
  },
  {
    company: 'Skyn Iceland',
    name: 'Glacial Face Wash',
    price: 3000,
    inventory: 17,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2266934?$md$',
    category: 'cleanser'
  },
  {
    company: 'Clinique',
    name: 'Clinique For Men Charcoal Face Wash',
    price: 2250,
    inventory: 14,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2290943?$md$',
    category: 'cleanser'
  },
  {
    company: 'Dermalogica',
    name: 'UltraCalming Barrier Repair',
    price: 4700,
    inventory: 31,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2220567?$md$',
    category: 'serum'
  },
  {
    company: 'Philosophy',
    name: 'Time in a Bottle 100% In-Control Resist Renew Repair Serum',
    price: 7600,
    inventory: 14,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2501473?$md$',
    category: 'serum'
  },
  {
    company: 'Nuface',
    name: 'Hydrating Leave-On Gel Primer',
    price: 697,
    inventory: 26,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2561047?$md$',
    category: 'serum'
  },
  {
    company: 'Tarte',
    name: 'Maracuja Oil',
    price: 4800,
    inventory: 66,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2247699?$md$',
    category: 'serum'
  },
  {
    company: 'Roc',
    name: 'Deep Wrinkle Serum',
    price: 2499,
    inventory: 46,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2125984?$md$',
    category: 'serum'
  },
  {
    company: 'Strivectin',
    name: 'High-Potency Wrinkle Filler',
    price: 5900,
    inventory: 29,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2293387?$md$',
    category: 'serum'
  },
  {
    company: 'Philosophy',
    name: 'Help Me Retinol Night Treatment',
    price: 4900,
    inventory: 40,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2209148?$md$',
    category: 'serum'
  },
  {
    company: 'Roc',
    name: 'Retinol Correxion Max Wrinkle Resurfacing System',
    price: 2899,
    inventory: 12,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2240442?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Acne Solutions Acne + Line Correcting Serum',
    price: 4650,
    inventory: 93,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2302019?$md$',
    category: 'serum'
  },
  {
    company: 'Origins',
    name: 'Plantscription Anti-Aging Power Serum',
    price: 6200,
    inventory: 60,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2307183?$md$',
    category: 'serum'
  },
  {
    company: 'Urban Skin Rx',
    name: 'Clear Complexion Acne Serum + Spot Treatment',
    price: 1898,
    inventory: 41,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2542186?$md$',
    category: 'serum'
  },
  {
    company: 'I Dew Care',
    name: 'Bright Side Up Brightening Vitamin C Serum',
    price: 1400,
    inventory: 30,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2548804?$md$',
    category: 'serum'
  },
  {
    company: 'Strivectin',
    name: 'Peptight Tightening & Brightening Face Serum',
    price: 9900,
    inventory: 48,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2557473?$md$',
    category: 'serum'
  },
  {
    company: 'Murad',
    name: 'Revitalixir Recovery Serum',
    price: 8900,
    inventory: 23,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2532698?$md$',
    category: 'serum'
  },
  {
    company: 'Proactiv',
    name: 'Advanced Dark Spot Correcting Serum',
    price: 5000,
    inventory: 41,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2500642?$md$',
    category: 'serum'
  },
  {
    company: 'Shiseido',
    name: 'Ultimune Power Infusing Concentrate',
    price: 7500,
    inventory: 46,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2531371?$md$',
    category: 'serum'
  },
  {
    company: "Kiehl's Since 1851",
    name: 'Clearly Corrective Dark Spot Solution',
    price: 5600,
    inventory: 49,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536677?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Clinique iD Dramatically Different For Fatigue',
    price: 3950,
    inventory: 72,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564833?$md$',
    category: 'serum'
  },
  {
    company: 'Truly',
    name: 'Vegan Collagen Anti-Aging Face Serum',
    price: 3500,
    inventory: 3,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2568012?$md$',
    category: 'serum'
  },
  {
    company: "Kiehl's Since 1851",
    name: 'Vital Skin-Strengthening Hyaluronic Acid Super Serum',
    price: 5200,
    inventory: 46,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564756?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name:
      'Fresh Pressed Clinical Daily + Overnight Boosters with Pure Vitamins C 10% + A (Retinol)',
    price: 4000,
    inventory: 32,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536208?$md$',
    category: 'serum'
  },
  {
    company: 'Exuviance',
    name: 'Age Reverse Total Correct + Sculpt Antiaging Serum',
    price: 8200,
    inventory: 67,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2554719?$md$',
    category: 'serum'
  },
  {
    company: 'Pacifica',
    name: 'Sea & C Sheer Face Serum SPF 55',
    price: 1600,
    inventory: 99,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559513?$md$',
    category: 'serum'
  },
  {
    company: 'Derma E',
    name: 'Acne Control Treatment Serum',
    price: 1699,
    inventory: 60,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2540670?$md$',
    category: 'serum'
  },
  {
    company: 'Neutrogena',
    name: 'Hydro Boost Hydrating Serum',
    price: 2499,
    inventory: 58,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2501815?$md$',
    category: 'serum'
  },
  {
    company: 'Exuviance',
    name: 'Age Reverse Day Repair SPF 30 + Retinol Antiaging Moisturizer',
    price: 7500,
    inventory: 68,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2554761?$md$',
    category: 'serum'
  },
  {
    company: 'Tula',
    name: 'Hello Radiance Illuminating Serum',
    price: 6800,
    inventory: 72,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2532113?$md$',
    category: 'serum'
  },
  {
    company: 'Ahava',
    name: 'Dead Sea Crystal Osmoter X6 Facial Serum',
    price: 7600,
    inventory: 17,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2298473?$md$',
    category: 'serum'
  },
  {
    company: 'Kylie Skin',
    name: 'Vitamin C Serum',
    price: 2800,
    inventory: 76,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2548218?$md$',
    category: 'serum'
  },
  {
    company: 'Bliss',
    name: 'Clear Genius Clarifying Toner + Serum',
    price: 1800,
    inventory: 80,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2567469?$md$',
    category: 'serum'
  },
  {
    company: 'Honest Beauty',
    name: 'Honestly Pure Retinol Serum',
    price: 2800,
    inventory: 45,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2566812?$md$',
    category: 'serum'
  },
  {
    company: 'Juice Beauty',
    name: 'GREEN APPLE Brightening Emulsion Lightweight Moisturizer',
    price: 4800,
    inventory: 75,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2519860?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'Age Smart Overnight Repair Serum',
    price: 6700,
    inventory: 30,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2238016?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Fresh Pressed Daily Booster with Pure Vitamin C 10%',
    price: 2100,
    inventory: 62,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2507291?$md$',
    category: 'serum'
  },
  {
    company: 'Strivectin',
    name: 'Wrinkle Recode Line Transforming Melting Serum',
    price: 8900,
    inventory: 42,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2521283?$md$',
    category: 'serum'
  },
  {
    company: 'Estée Lauder',
    name:
      'Perfectionist Pro Rapid Brightening Treatment with Ferment2 + Vitamin C',
    price: 7800,
    inventory: 84,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559121?$md$',
    category: 'serum'
  },
  {
    company: 'Estée Lauder',
    name: 'Idealist Pore Minimizing Skin Refinisher',
    price: 6300,
    inventory: 94,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2309677?$md$',
    category: 'serum'
  },
  {
    company: 'Vichy',
    name: 'Minéral 89 Face Serum with Hyaluronic Acid',
    price: 2950,
    inventory: 31,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2512460?$md$',
    category: 'serum'
  },
  {
    company: 'Juice Beauty',
    name: 'Blemish Clearing Serum',
    price: 3000,
    inventory: 81,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2236943?$md$',
    category: 'serum'
  },
  {
    company: 'First Aid Beauty',
    name: 'FAB Skin Lab Retinol Serum',
    price: 5800,
    inventory: 47,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2509134?$md$',
    category: 'serum'
  },
  {
    company: 'Estée Lauder',
    name: 'Advanced Night Repair Intense Reset Concentrate',
    price: 8200,
    inventory: 74,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2550832?$md$',
    category: 'serum'
  },
  {
    company: 'Upcircle',
    name: 'Organic Face Serum With Coffee Oil',
    price: 2000,
    inventory: 66,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2560811?$md$',
    category: 'serum'
  },
  {
    company: 'Perricone Md',
    name: 'Vitamin C Ester Brightening Serum',
    price: 6900,
    inventory: 68,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2532604?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'Overnight Retinol Repair',
    price: 9000,
    inventory: 86,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2291791?$md$',
    category: 'serum'
  },
  {
    company: 'Revolution Skincare',
    name: '15% Niacinamide Serum',
    price: 1400,
    inventory: 63,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2553848?$md$',
    category: 'serum'
  },
  {
    company: 'Meaningful Beauty',
    name: 'Creme de Serum',
    price: 6500,
    inventory: 16,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2264147?$md$',
    category: 'serum'
  },
  {
    company: 'Revolution Skincare',
    name: '2% Hyaluronic Acid Serum',
    price: 1000,
    inventory: 12,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2549615?$md$',
    category: 'serum'
  },
  {
    company: 'Olay',
    name: 'Wrinkle Correction Serum with Vitamin B3+ Collagen Peptides',
    price: 3999,
    inventory: 25,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2560240?$md$',
    category: 'serum'
  },
  {
    company: 'Kate Somerville',
    name: 'D-Scar Scar Diminishing Serum',
    price: 4800,
    inventory: 93,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2531100?$md$',
    category: 'serum'
  },
  {
    company: 'Cosrx',
    name: 'Two in One Poreless Power Liquid',
    price: 2400,
    inventory: 87,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2531895?$md$',
    category: 'serum'
  },
  {
    company: 'Hey Honey',
    name: 'Good Morning Honey Silk Facial Serum',
    price: 4800,
    inventory: 34,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2303381?$md$',
    category: 'serum'
  },
  {
    company: "L'oréal",
    name: 'Revitalift Derm Intensives 10% Pure Glycolic Acid Serum',
    price: 2999,
    inventory: 89,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2554029?$md$',
    category: 'serum'
  },
  {
    company: 'Revolution Skincare',
    name: 'Targeted Blemish Serum 2% Salicylic Acid',
    price: 1100,
    inventory: 31,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2553841?$md$',
    category: 'serum'
  },
  {
    company: "L'oréal",
    name: 'Revitalift Derm Intensives Vitamin C Serum',
    price: 2999,
    inventory: 22,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2534684?$md$',
    category: 'serum'
  },
  {
    company: 'Artnaturals Luxe',
    name: 'Vitamin C Serum',
    price: 1998,
    inventory: 19,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559408?$md$',
    category: 'serum'
  },
  {
    company: 'Bareminerals',
    name: 'Ageless Genius Firming & Wrinkle Smoothing Serum',
    price: 6000,
    inventory: 82,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2521604?$md$',
    category: 'serum'
  },
  {
    company: 'Elizabeth Arden',
    name: 'Retinol Ceramide Capsules Line Erasing Night Serum',
    price: 5100,
    inventory: 26,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2555872?$md$',
    category: 'serum'
  },
  {
    company: 'Perricone Md',
    name: 'High Potency Growth Factor Firming & Lifting Serum',
    price: 12900,
    inventory: 86,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2558717?$md$',
    category: 'serum'
  },
  {
    company: 'Revolution Skincare',
    name: 'Skin Tone Correcting Serum - Granactive Retinoid 2%',
    price: 1000,
    inventory: 0,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2545409?$md$',
    category: 'serum'
  },
  {
    company: 'Bliss',
    name:
      'Bright Idea Vitamin C + Tri-Peptide Collagen Protecting & Brightening Serum',
    price: 2700,
    inventory: 5,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2561214?$md$',
    category: 'serum'
  },
  {
    company: 'Lancôme',
    name: 'Hydrate & Help Protect Bienfait Multi-Vital Set',
    price: 6000,
    inventory: 82,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2565385?$md$',
    category: 'serum'
  },
  {
    company: 'Olay',
    name: 'Tone Perfection Serum with Vitamin B3+ Vitamin C',
    price: 3999,
    inventory: 81,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2560239?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Clinique iD Dramatically Different For Irritation',
    price: 3950,
    inventory: 48,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564825?$md$',
    category: 'serum'
  },
  {
    company: 'Revolution Skincare',
    name: 'Blemish And Pore Refining Serum 10% Niacinaminde + 1% Zinc',
    price: 700,
    inventory: 30,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2545400?$md$',
    category: 'serum'
  },
  {
    company: 'Derma E',
    name: 'Skin De-Stress Calming CBD Serum',
    price: 2295,
    inventory: 32,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2556742?$md$',
    category: 'serum'
  },
  {
    company: 'Exuviance',
    name: 'Age Reverse Night Lift Antiaging Moisturizer',
    price: 7900,
    inventory: 21,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2554720?$md$',
    category: 'serum'
  },
  {
    company: 'Strivectin',
    name: 'Advanced Retinol Concentrated Serum',
    price: 11900,
    inventory: 33,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2275001?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Clinique iD Dramatically Different For Uneven Skin Tone',
    price: 3950,
    inventory: 49,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564832?$md$',
    category: 'serum'
  },
  {
    company: 'Neutrogena',
    name: 'Rapid Wrinkle Repair Retinol Oil',
    price: 3599,
    inventory: 8,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2534778?$md$',
    category: 'serum'
  },
  {
    company: 'Estée Lauder',
    name:
      'Perfectionist Pro Rapid Firm + Lift Treatment With Acetyl Hexapeptide-8',
    price: 7800,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2523105?$md$',
    category: 'serum'
  },
  {
    company: 'Pacifica',
    name: 'Cosmic Beauty Drops CBD Balancing Serum',
    price: 2200,
    inventory: 75,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2556957?$md$',
    category: 'serum'
  },
  {
    company: 'Philosophy',
    name:
      'Ultimate Miracle Worker Multi-Rejuvenating Retinol + Superfood Oil Pads',
    price: 7600,
    inventory: 32,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2509935?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'Age Smart Multivitamin Power Serum',
    price: 7000,
    inventory: 40,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2251060?$md$',
    category: 'serum'
  },
  {
    company: 'Perricone Md',
    name: 'Cold Plasma+ Face',
    price: 14900,
    inventory: 88,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2520379?$md$',
    category: 'serum'
  },
  {
    company: 'Philosophy',
    name: 'Turbo Booster C Powder',
    price: 3900,
    inventory: 4,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2209146?$md$',
    category: 'serum'
  },
  {
    company: 'Roc',
    name: 'Retinol Correxion Deep Wrinkle Filler',
    price: 2399,
    inventory: 6,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2202379?$md$',
    category: 'serum'
  },
  {
    company: 'Cosrx',
    name: 'AHA 7 Whitehead Power Liquid',
    price: 2100,
    inventory: 18,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2517361?$md$',
    category: 'serum'
  },
  {
    company: 'Neutrogena',
    name: 'Rapid Tone Repair Dark Spot Corrector',
    price: 2699,
    inventory: 79,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2269135?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'PowerBright TRx C-12 Pure Bright Serum',
    price: 9900,
    inventory: 61,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2281032?$md$',
    category: 'serum'
  },
  {
    company: 'Juice Beauty',
    name: 'GREEN APPLE Brightening Essence',
    price: 3800,
    inventory: 58,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2514409?$md$',
    category: 'serum'
  },
  {
    company: 'Kate Somerville',
    name: '+Retinol Vita C Power Serum Firming + Brightening Treatment',
    price: 9800,
    inventory: 98,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2538075?$md$',
    category: 'serum'
  },
  {
    company: 'Meaningful Beauty',
    name: 'Ultra Lifting and Filling Treatment',
    price: 6500,
    inventory: 24,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2284118?$md$',
    category: 'serum'
  },
  {
    company: 'St. Moriz',
    name: 'Advanced Pro Formula Tan Boosting Facial Serum',
    price: 1898,
    inventory: 95,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559549?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Turnaround Accelerated Renewal Serum',
    price: 4800,
    inventory: 32,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2287177?$md$',
    category: 'serum'
  },
  {
    company: "L'occitane",
    name: 'Immortelle Overnight Reset Oil-in-Serum',
    price: 5900,
    inventory: 25,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2567642?$md$',
    category: 'serum'
  },
  {
    company: 'Skinfood',
    name: 'Peach Sake Pore Serum',
    price: 1600,
    inventory: 48,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2305346?$md$',
    category: 'serum'
  },
  {
    company: 'Lancôme',
    name:
      'Visibly Lift, Firm & Hydrate Rènergie Lift Multi-Action Ultra Cream Set',
    price: 12000,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564688?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'Redness Relief Essence',
    price: 4200,
    inventory: 67,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2519944?$md$',
    category: 'serum'
  },
  {
    company: 'Honest Beauty',
    name: 'Vitamin C Radiance Serum',
    price: 2800,
    inventory: 88,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2566774?$md$',
    category: 'serum'
  },
  {
    company: 'Cosrx',
    name: 'Hyaluronic Acid Hydra Power Essence',
    price: 2400,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2542833?$md$',
    category: 'serum'
  },
  {
    company: 'Cosrx',
    name: 'Galactomyces 95 Tone Balancing Essence',
    price: 2300,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2517362?$md$',
    category: 'serum'
  },
  {
    company: 'Dermadoctor',
    name: 'Kakadu C 20% Vitamin C Serum with Ferulic Acid & Vitamin E',
    price: 9500,
    inventory: 21,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2282980?$md$',
    category: 'serum'
  },
  {
    company: 'Pacifica',
    name: 'Pore Warrior Booster Serum',
    price: 1600,
    inventory: 43,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2556954?$md$',
    category: 'serum'
  },
  {
    company: 'Cosrx',
    name: 'Full Fit Propolis Light Ampoule',
    price: 2800,
    inventory: 52,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2568149?$md$',
    category: 'serum'
  },
  {
    company: 'Strivectin',
    name: 'Advanced Retinol Day Moisturizer Broad Spectrum SPF 30',
    price: 9900,
    inventory: 69,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2263955?$md$',
    category: 'serum'
  },
  {
    company: 'Clarins',
    name: 'Bright Plus Serum',
    price: 7900,
    inventory: 53,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559203?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Niacinamide 10% + Zinc 1%',
    price: 590,
    inventory: 84,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551167?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Hyaluronic Acid 2% + B5',
    price: 680,
    inventory: 54,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551164?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Azelaic Acid Suspension 10%',
    price: 790,
    inventory: 79,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551154?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: "''Buffet''",
    price: 1480,
    inventory: 39,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551168?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Alpha Arbutin 2% + HA',
    price: 890,
    inventory: 20,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551165?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Caffeine Solution 5% + EGCG',
    price: 670,
    inventory: 86,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551166?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Lactic Acid 10% + HA',
    price: 680,
    inventory: 60,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551156?$md$',
    category: 'serum'
  },
  {
    company: 'Lancôme',
    name: 'Advanced Génifique Anti-Aging Face Serum',
    price: 5200,
    inventory: 51,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2538776?$md$',
    category: 'serum'
  },
  {
    company: 'Murad',
    name: 'Rapid Age Spot and Pigment Lightening Serum',
    price: 7200,
    inventory: 24,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2082341?$md$',
    category: 'serum'
  },
  {
    company: 'Mad Hippie',
    name: 'Vitamin C Serum',
    price: 3399,
    inventory: 58,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2530015?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Vitamin C Suspension 23% + HA Spheres 2%',
    price: 580,
    inventory: 58,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551175?$md$',
    category: 'serum'
  },
  {
    company: 'Peach & Lily',
    name: 'Glass Skin Refining Serum',
    price: 3900,
    inventory: 89,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2532640?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: "''Buffet'' + Copper Peptides 1%",
    price: 2890,
    inventory: 1,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2552302?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Ascorbic Acid 8% + Alpha Arbutin 2%',
    price: 1000,
    inventory: 63,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2552306?$md$',
    category: 'serum'
  },
  {
    company: 'Derma E',
    name: 'Vitamin C Concentrated Serum',
    price: 1998,
    inventory: 24,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2501942?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: '100% Plant-Derived Squalane',
    price: 790,
    inventory: 17,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551177?$md$',
    category: 'serum'
  },
  {
    company: 'Cosrx',
    name: 'Advanced Snail 96 Mucin Power Essence',
    price: 2300,
    inventory: 31,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2504912?$md$',
    category: 'serum'
  },
  {
    company: 'Cerave',
    name: 'Resurfacing Retinol Serum',
    price: 1999,
    inventory: 72,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2556947?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Even Better Clinical Radical Dark Spot Corrector + Interrupter',
    price: 5450,
    inventory: 42,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2560142?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'Age Smart BioLumin-C Serum',
    price: 8900,
    inventory: 60,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2547336?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Clinique Smart Custom Repair Serum',
    price: 6200,
    inventory: 97,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2275794?$md$',
    category: 'serum'
  },
  {
    company: 'Peter Thomas Roth',
    name: 'Water Drench Hyaluronic Cloud Serum',
    price: 6500,
    inventory: 7,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2165283?$md$',
    category: 'serum'
  },
  {
    company: 'Lancôme',
    name: 'Rénergie Lift Multi-Action Lifting and Firming Starter Kit',
    price: 6000,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2562880?$md$',
    category: 'serum'
  },
  {
    company: 'Murad',
    name: 'Invisiblur Perfecting Shield Broad Spectrum SPF 30 / PA+++',
    price: 6500,
    inventory: 87,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2544839?$md$',
    category: 'serum'
  },
  {
    company: 'Clarins',
    name: 'Double Serum',
    price: 8900,
    inventory: 82,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2515969?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Ascorbyl Glucoside Solution 12%',
    price: 1290,
    inventory: 4,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551178?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Matrixyl 10% + HA',
    price: 1150,
    inventory: 63,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551169?$md$',
    category: 'serum'
  },
  {
    company: 'Cerave',
    name: 'Skin Renewing Vitamin C Serum',
    price: 2499,
    inventory: 2,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2548800?$md$',
    category: 'serum'
  },
  {
    company: 'No7',
    name: 'Restore & Renew Face & Neck Multi Action Serum',
    price: 3399,
    inventory: 29,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2512454?$md$',
    category: 'serum'
  },
  {
    company: 'No7',
    name: 'Advanced Retinol 1.5% Complex Night Concentrate',
    price: 3999,
    inventory: 55,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2566860?$md$',
    category: 'serum'
  },
  {
    company: 'Murad',
    name: 'InvisiScar Resurfacing Treatment',
    price: 3500,
    inventory: 87,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2566522?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Argireline Solution 10%',
    price: 790,
    inventory: 63,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2552301?$md$',
    category: 'serum'
  },
  {
    company: 'No7',
    name: 'Laboratories Line Correcting Booster Serum',
    price: 4199,
    inventory: 30,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2540868?$md$',
    category: 'serum'
  },
  {
    company: 'Mad Hippie',
    name: 'AM to PM Dual-Pack',
    price: 3399,
    inventory: 27,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564737?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'Age Smart Super Rich Repair',
    price: 8900,
    inventory: 21,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2152651?$md$',
    category: 'serum'
  },
  {
    company: 'Mario Badescu',
    name: 'Vitamin C Serum',
    price: 4500,
    inventory: 66,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2209815?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Mandelic Acid 10% + HA',
    price: 680,
    inventory: 76,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2552293?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Marine Hyaluronics',
    price: 680,
    inventory: 83,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2552297?$md$',
    category: 'serum'
  },
  {
    company: 'Pixi',
    name: 'Glow Tonic',
    price: 1800,
    inventory: 21,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2562261?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'Age Bright Clearing Serum',
    price: 6500,
    inventory: 7,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2547229?$md$',
    category: 'serum'
  },
  {
    company: 'La Roche-posay',
    name: 'Pure Vitamin C Face Serum',
    price: 3999,
    inventory: 97,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2556946?$md$',
    category: 'serum'
  },
  {
    company: "Kiehl's Since 1851",
    name: 'Midnight Recovery Concentrate',
    price: 5200,
    inventory: 76,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536653?$md$',
    category: 'serum'
  },
  {
    company: 'Mad Hippie',
    name: 'Vitamin A Serum',
    price: 3299,
    inventory: 90,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2530019?$md$',
    category: 'serum'
  },
  {
    company: 'La Roche-posay',
    name: 'Anthelios AOX Daily Antioxidant Serum SPF 50',
    price: 4250,
    inventory: 63,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2285142?$md$',
    category: 'serum'
  },
  {
    company: 'No7',
    name: 'Protect & Perfect Intense Advanced Serum',
    price: 2999,
    inventory: 86,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2280742?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Vitamin C Suspension 30% in Silicone',
    price: 680,
    inventory: 2,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551176?$md$',
    category: 'serum'
  },
  {
    company: 'La Roche-posay',
    name: 'Hyalu B5 Pure Hyaluronic Acid Face Serum',
    price: 2999,
    inventory: 75,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2556945?$md$',
    category: 'serum'
  },
  {
    company: 'Murad',
    name: 'Rapid Age Spot and Pigment Lightening Serum',
    price: 2500,
    inventory: 38,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2535996?$md$',
    category: 'serum'
  },
  {
    company: 'The Ordinary',
    name: 'Ascorbyl Tetraisopalmitate Solution 20% in Vitamin F',
    price: 1780,
    inventory: 47,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2552305?$md$',
    category: 'serum'
  },
  {
    company: 'Sunday Riley',
    name: 'A+ High-Dose Retinoid Serum',
    price: 8500,
    inventory: 23,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2550152?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Clinique iD Dramatically Different Base',
    price: 2500,
    inventory: 41,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2567345?$md$',
    category: 'serum'
  },
  {
    company: 'No7',
    name: 'Lift & Luminate Triple Action Serum',
    price: 3399,
    inventory: 6,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2501874?$md$',
    category: 'serum'
  },
  {
    company: 'Cerave',
    name: 'Skin Renewing Retinol Serum',
    price: 1848,
    inventory: 38,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2283861?$md$',
    category: 'serum'
  },
  {
    company: 'Tarte',
    name: 'Double Duty Beauty Base Tape Hydrating Primer',
    price: 3000,
    inventory: 6,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2538321?$md$',
    category: 'serum'
  },
  {
    company: 'La Roche-posay',
    name: 'Retinol Face Serum with Vitamin B3',
    price: 3999,
    inventory: 52,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559628?$md$',
    category: 'serum'
  },
  {
    company: 'Peach & Lily',
    name: 'Wild Dew Treatment Essence',
    price: 3900,
    inventory: 28,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2532647?$md$',
    category: 'serum'
  },
  {
    company: 'Murad',
    name: 'Retinol Youth Renewal Serum',
    price: 8900,
    inventory: 4,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2307230?$md$',
    category: 'serum'
  },
  {
    company: 'Beekman 1802',
    name: 'Milk Drops Probiotic Ceramide Serum',
    price: 4500,
    inventory: 57,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2569233?$md$',
    category: 'serum'
  },
  {
    company: 'Sunday Riley',
    name: 'C.E.O. 15% Vitamin C Brightening Serum',
    price: 8500,
    inventory: 50,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2550151?$md$',
    category: 'serum'
  },
  {
    company: 'Juice Beauty',
    name: 'STEM CELLULAR Anti-Wrinkle Booster Serum',
    price: 8000,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2237397?$md$',
    category: 'serum'
  },
  {
    company: 'Klairs',
    name: 'Freshly Juiced Vitamin C Drop',
    price: 2300,
    inventory: 35,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2546685?$md$',
    category: 'serum'
  },
  {
    company: 'Lancôme',
    name: 'Visionnaire Advanced Skin Corrector Serum',
    price: 8000,
    inventory: 68,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2282091?$md$',
    category: 'serum'
  },
  {
    company: 'Peter Thomas Roth',
    name: 'Potent-C Power Serum',
    price: 9800,
    inventory: 88,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2519785?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Clinique iD Dramatically Different For Pores & Uneven Texture',
    price: 3950,
    inventory: 13,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564834?$md$',
    category: 'serum'
  },
  {
    company: "L'oréal",
    name: 'Revitalift Derm Intensives Hyaluronic Acid Serum',
    price: 2999,
    inventory: 19,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2534685?$md$',
    category: 'serum'
  },
  {
    company: 'Strivectin',
    name: 'Super-C Retinol Brighten & Correct Vitamin C Serum',
    price: 7200,
    inventory: 95,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2568087?$md$',
    category: 'serum'
  },
  {
    company: 'Murad',
    name: 'Vita-C Glycolic Brightening Serum',
    price: 8000,
    inventory: 56,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2562470?$md$',
    category: 'serum'
  },
  {
    company: 'Truly',
    name: 'Mary Jane CBD Glow Serum',
    price: 3000,
    inventory: 38,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2555593?$md$',
    category: 'serum'
  },
  {
    company: 'Urban Skin Rx',
    name: 'Even Tone Super Glow Serum',
    price: 2299,
    inventory: 61,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2542183?$md$',
    category: 'serum'
  },
  {
    company: 'No7',
    name: 'Laboratories Firming Booster Serum',
    price: 4199,
    inventory: 4,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2557511?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Clinique iD Dramatically Different For Lines & Wrinkles',
    price: 3950,
    inventory: 87,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564830?$md$',
    category: 'serum'
  },
  {
    company: 'Murad',
    name: 'Rapid Collagen Infusion',
    price: 7800,
    inventory: 13,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2544840?$md$',
    category: 'serum'
  },
  {
    company: 'Differin',
    name: 'Dark Spot Correcting Serum',
    price: 2199,
    inventory: 8,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2551228?$md$',
    category: 'serum'
  },
  {
    company: 'It Cosmetics',
    name: 'Bye Bye Lines Anti-Aging Serum',
    price: 5800,
    inventory: 24,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2514623?$md$',
    category: 'serum'
  },
  {
    company: 'Mad Hippie',
    name: 'Exfoliating Serum',
    price: 3499,
    inventory: 66,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2530017?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Repairwear Laser Focus Smooths, Restores, Corrects',
    price: 5200,
    inventory: 5,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2291704?$md$',
    category: 'serum'
  },
  {
    company: 'Olay',
    name: 'Regenerist Retinol24 Night Facial Serum',
    price: 3899,
    inventory: 57,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2552785?$md$',
    category: 'serum'
  },
  {
    company: 'Clinique',
    name: 'Clinique iD Active Cartridge Concentrate',
    price: 1450,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2567352?$md$',
    category: 'serum'
  },
  {
    company: 'Juice Beauty',
    name: 'GREEN APPLE Age Defy Serum',
    price: 5800,
    inventory: 10,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2236926?$md$',
    category: 'serum'
  },
  {
    company: "Kiehl's Since 1851",
    name: 'Powerful Strength Line Reducing Concentrate',
    price: 7000,
    inventory: 70,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536651?$md$',
    category: 'serum'
  },
  {
    company: 'Meaningful Beauty',
    name: 'Youth Activating Melon Serum',
    price: 7600,
    inventory: 69,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2516045?$md$',
    category: 'serum'
  },
  {
    company: 'Tarte',
    name: 'Maracuja Oil',
    price: 1600,
    inventory: 9,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2282473?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'UltraCalming Serum Concentrate',
    price: 6000,
    inventory: 71,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2220568?$md$',
    category: 'serum'
  },
  {
    company: 'Roc',
    name: 'Retinol Correxion Line Smoothing Night Serum Capsules',
    price: 1299,
    inventory: 61,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2560712?$md$',
    category: 'serum'
  },
  {
    company: 'Cerave',
    name: 'Hydrating Hyaluronic Acid Serum',
    price: 1898,
    inventory: 23,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2540675?$md$',
    category: 'serum'
  },
  {
    company: 'Peach & Lily',
    name: "Lazy Day's All-In-One Moisture Pad",
    price: 3900,
    inventory: 50,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2532635?$md$',
    category: 'serum'
  },
  {
    company: 'Exuviance',
    name: 'Radiance Serum',
    price: 7200,
    inventory: 45,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2554741?$md$',
    category: 'serum'
  },
  {
    company: 'Peter Thomas Roth',
    name: 'Retinol Fusion PM',
    price: 6500,
    inventory: 28,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2215509?$md$',
    category: 'serum'
  },
  {
    company: 'First Aid Beauty',
    name: 'Ultra Repair Hydrating Serum',
    price: 3800,
    inventory: 63,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2542832?$md$',
    category: 'serum'
  },
  {
    company: 'Roc',
    name: 'Multi Correxion Revive + Glow Daily Serum',
    price: 3299,
    inventory: 59,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2567070?$md$',
    category: 'serum'
  },
  {
    company: 'Dermalogica',
    name: 'Phyto-Nature Firming Serum',
    price: 14500,
    inventory: 99,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2549592?$md$',
    category: 'serum'
  },
  {
    company: 'Lancôme',
    name: 'Advanced Génifique Radiance Starter Kit',
    price: 3500,
    inventory: 81,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2562882?$md$',
    category: 'serum'
  },
  {
    company: 'No7',
    name: 'Laboratories Dark Spot Correcting Booster Serum',
    price: 3999,
    inventory: 60,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2548006?$md$',
    category: 'serum'
  },
  {
    company: 'Peach & Lily',
    name: 'Glass Skin Refining Serum',
    price: 1900,
    inventory: 59,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2560931?$md$',
    category: 'serum'
  },
  {
    company: 'No7',
    name: 'Protect & Perfect Intense Advanced Serum',
    price: 2999,
    inventory: 70,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2301323?$md$',
    category: 'serum'
  },
  {
    company: 'Derma E',
    name: 'Advanced Peptide & Collagen Serum',
    price: 3650,
    inventory: 93,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2527934?$md$',
    category: 'serum'
  },
  {
    company: 'Botanics',
    name: 'All Bright Hydrating Night Cream',
    price: 1399,
    inventory: 48,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2502283?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Bota',
    name: 'CBD De-Stressing Nightly Face Cream + Lavender',
    price: 2799,
    inventory: 91,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2569717?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Lancôme',
    name: 'Visibly Lift & Firm Rénergie Lift Multi-Action Ultra Lotion Set',
    price: 12000,
    inventory: 58,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564689?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Elizabeth Arden',
    name: 'Ceramide Lift and Firm Night Cream',
    price: 8200,
    inventory: 88,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2222096?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Aveeno',
    name: 'Positively Radiant Night Cream',
    price: 1898,
    inventory: 13,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2234483?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Origins',
    name: 'Plantscription Retinol Night Moisturizer with Alpine Flower',
    price: 6400,
    inventory: 42,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2541815?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Ahava',
    name: 'Night Replenisher Normal to Dry',
    price: 5200,
    inventory: 1,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2230679?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Ahava',
    name: 'Mineral Radiance Overnight De-Stressing Cream',
    price: 5500,
    inventory: 84,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2507565?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Elizabeth Arden',
    name: 'PREVAGE Anti-Aging Overnight Cream',
    price: 13700,
    inventory: 14,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2238690?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Ahava',
    name: 'Beauty Before Age Uplift Night Cream',
    price: 8900,
    inventory: 8,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2291006?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Dr.organic',
    name: 'Snail Gel Healthy Aging Night Cream',
    price: 1998,
    inventory: 39,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2553856?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Elizabeth Arden',
    name:
      'Ceramide Premiere Intense Moisture and Renewal Overnight Regeneration Cream',
    price: 10400,
    inventory: 93,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2302767?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Estée Lauder',
    name: 'Nutritious Super-Pomegranate Radiant Energy Night Crème/Mask',
    price: 7000,
    inventory: 37,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2540143?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Physicians Formula',
    name: 'Rose All Night Ultra-Rich Restorative Cream',
    price: 1599,
    inventory: 44,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2538684?$md$',
    category: 'moisturizer'
  },
  {
    company: 'The Route',
    name: 'The Everything Night - Skin Rhythm Multi-Tasker',
    price: 9000,
    inventory: 62,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2558184?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Clarisma',
    name: 'Angel Sleeping Balm Night Mask',
    price: 1698,
    inventory: 66,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2559502?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Yourgoodskin',
    name: 'ProVitamin Overnight Cream',
    price: 1299,
    inventory: 11,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2530466?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Peter Thomas Roth',
    name: 'Green Releaf Therapeutic Sleep Cream',
    price: 6500,
    inventory: 41,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2549926?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Dr.organic',
    name: 'Rose Restoring Night Cream',
    price: 1798,
    inventory: 1,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2553724?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Physicians Formula',
    name: 'Rosé All Day To Night Eye Cream',
    price: 1698,
    inventory: 3,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2547550?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Revolution Skincare',
    name: 'Thirsty Mood Quenching Overnight Face Mask',
    price: 1100,
    inventory: 99,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2566443?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Yourgoodskin',
    name: 'Cica Repair Sleep Paste Mask',
    price: 1499,
    inventory: 6,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2548009?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Milk + Honey',
    name: 'Intense Hydration Cream',
    price: 6800,
    inventory: 18,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2564662?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Andalou Naturals',
    name: 'Quenching Coconut Milk Youth Firm Night Cream',
    price: 2499,
    inventory: 20,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2536530?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Erborian',
    name: 'Yuza Sorbet Night Treatment',
    price: 5500,
    inventory: 89,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2571595?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Kate Somerville',
    name: 'RetAsphere 2-in-1 Retinol Night Cream',
    price: 4297,
    inventory: 47,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2531115?$md$',
    category: 'moisturizer'
  },
  {
    company: 'Olay',
    name:
      'Regenerist Retinol 24 MAX Fragrance-Free Night Hydrating Moisturizer',
    price: 4399,
    inventory: 39,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2569913?$md$',
    category: 'moisturizer'
  },
  {
    company: "L'oréal",
    name: 'Age Perfect Rosy Tone Cooling Night Moisturizer',
    price: 2499,
    inventory: 26,
    imageUrl: 'https://images.ulta.com/is/image/Ulta/2569995?$md$',
    category: 'moisturizer'
  }
]

const orders = [
  {
    orderStatus: 'Processing',
    quantity: 5,
    price: 200,
    productId: 1,
    userId: 2
  },
  {
    orderStatus: 'Completed',
    quantity: 3,
    price: 600,
    productId: 3,
    userId: 1
  },
  {
    orderStatus: 'Cancelled',
    quantity: 5,
    price: 200,
    productId: 4,
    userId: 2
  },
  {
    orderStatus: 'Created',
    quantity: 3,
    price: 200,
    productId: 5,
    userId: 1
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  await Promise.all(users.map(user => User.create(user)))
  await Promise.all(products.map(product => Product.create(product)))
  await Promise.all(orders.map(order => Order.create(order)))
  console.log(
    `seeded ${users.length} users, seeded ${orders.length} orders, seeded ${
      products.length
    } products`
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
