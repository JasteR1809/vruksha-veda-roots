export interface Tree {
  id: string;
  name: string;
  botanical: string;
  description: string;
  image: string;
  about: string;
  medicinalUses: string[];
  shloka: {
    sanskrit: string;
    transliteration: string;
    meaning: string;
  };
}

export const trees: Tree[] = [
  {
    id: "neem",
    name: "Neem",
    botanical: "Azadirachta indica",
    description: "The village pharmacy - revered for its powerful antibacterial and antifungal properties",
    image: "/src/assets/neem-tree.jpg",
    about: "Neem, known as 'Sarva Roga Nivarini' (the curer of all ailments), is one of the most versatile medicinal trees in Ayurveda. Native to the Indian subcontinent, this evergreen tree has been used for thousands of years in traditional medicine. Every part of the neem tree - leaves, bark, seeds, and oil - possesses therapeutic properties. The tree thrives in tropical and subtropical regions and is considered sacred in Hindu culture.",
    medicinalUses: [
      "Purifies blood and eliminates toxins from the body",
      "Treats skin diseases including eczema, psoriasis, and acne",
      "Powerful antibacterial and antifungal agent for wound healing",
      "Controls diabetes by regulating blood sugar levels",
      "Strengthens immune system and fights viral infections",
      "Dental care - prevents cavities and gum diseases",
      "Acts as natural insect repellent and treats malaria"
    ],
    shloka: {
      sanskrit: "निम्बति स्यास्थ्यमददाति इति निम्बः। सर्वरोगनिवारिणी च निम्बवृक्षः।",
      transliteration: "Nimbati syāsthyamadadāti iti nimbaḥ | Sarvaroganivarini cha nimbavṛkṣaḥ",
      meaning: "That which gives good health is Neem. The Neem tree is the remover of all diseases."
    }
  },
  {
    id: "tulsi",
    name: "Tulsi",
    botanical: "Ocimum tenuiflorum",
    description: "The Queen of Herbs - sacred plant known for respiratory health and spiritual purification",
    image: "/src/assets/tulsi-tree.jpg",
    about: "Tulsi, or Holy Basil, is considered the most sacred plant in Hinduism and is worshipped as a manifestation of the goddess Lakshmi. This aromatic shrub is found in almost every Hindu household and temple courtyard. In Ayurveda, Tulsi is classified as a 'Rasayana' - an herb that promotes longevity and enhances overall well-being. It has been used for over 5,000 years for its remarkable healing properties and spiritual significance.",
    medicinalUses: [
      "Strengthens respiratory system and treats coughs, colds, and bronchitis",
      "Powerful adaptogen that reduces stress and anxiety",
      "Boosts immunity and fights infections",
      "Regulates blood sugar and supports diabetic management",
      "Purifies blood and improves cardiovascular health",
      "Treats fever and reduces inflammation",
      "Enhances digestion and relieves stomach disorders",
      "Natural insect repellent, especially for mosquitoes"
    ],
    shloka: {
      sanskrit: "तुलसी सर्वपापघ्नी पुण्यदा सर्वदा शुभा। आयुर्वर्धनकर्त्री च तुलसी प्रणमाम्यहम्॥",
      transliteration: "Tulasī sarvapāpaghnī puṇyadā sarvadā śubhā | Āyurvardhanakartrī cha tulasī praṇamāmyaham",
      meaning: "I bow to Tulsi, who destroys all sins, bestows virtue, is always auspicious, and increases longevity."
    }
  },
  {
    id: "peepal",
    name: "Peepal",
    botanical: "Ficus religiosa",
    description: "The sacred fig - worshipped for spiritual enlightenment and medicinal healing properties",
    image: "/src/assets/peepal-tree.jpg",
    about: "The Peepal tree, also known as the Bodhi tree, holds immense spiritual significance as it is believed that Lord Buddha attained enlightenment under this tree. In Ayurveda, every part of the Peepal tree is used for medicinal purposes. This large, fast-growing deciduous tree is native to the Indian subcontinent and is considered one of the longest-living trees, often surviving for several centuries. The heart-shaped leaves with a distinctive drip tip are considered sacred and used in various religious ceremonies.",
    medicinalUses: [
      "Treats asthma and respiratory disorders effectively",
      "Heals wounds and reduces inflammation with its antibacterial properties",
      "Improves digestive health and treats stomach ailments",
      "Controls diabetes by regulating blood glucose levels",
      "Strengthens heart health and improves blood circulation",
      "Treats skin diseases and promotes healthy complexion",
      "Relieves toothache and strengthens gums",
      "Acts as natural remedy for ear infections"
    ],
    shloka: {
      sanskrit: "अश्वत्थः सर्ववृक्षाणां ब्रह्मा लोकमहर्षिणाम्। पीपलो वृक्षराजः स्यात् सर्वपापप्रणाशनः॥",
      transliteration: "Aśvatthaḥ sarvavṛkṣāṇāṁ brahmā lokamaharṣiṇām | Pīpalo vṛkṣarājaḥ syāt sarvapāpapraṇāśanaḥ",
      meaning: "Among all trees, the Peepal is like Brahma among the great sages. The Peepal is the king of trees and destroyer of all sins."
    }
  },
  {
    id: "falgu",
    name: "Falgu",
    botanical: "Ficus carica",
    description: "The healing fig tree - known for its nutritious fruits and powerful therapeutic properties",
    image: "/src/assets/falgu-tree.jpg",
    about: "Falgu, also known as the common fig tree, is a deciduous tree from the Moraceae family. Native to the Mediterranean and western Asia, this tree has been cultivated for thousands of years for its sweet, nutritious fruits. In Ayurveda, the fig tree is highly valued for its medicinal properties. Every part of the tree - fruits, leaves, and latex - is used in traditional medicine. The tree thrives in warm, dry climates and is known for its distinctive lobed leaves and delicious fruits that can be eaten fresh or dried.",
    medicinalUses: [
      "Treats anemia by increasing hemoglobin levels",
      "Helps manage diabetes by regulating blood sugar",
      "Supports liver health and treats liver disorders",
      "Aids in cancer prevention with antioxidant properties",
      "Treats skin diseases including leprosy",
      "Improves digestive health and relieves constipation",
      "Strengthens bones and prevents osteoporosis",
      "Boosts immunity and overall vitality"
    ],
    shloka: {
      sanskrit: "मलः तम्भा शीतला तुवरा जात्। फिप णा व शा मलाः।",
      transliteration: "Malaḥ tambhā śītalā tuvarā jāt | Phipa ṇā va śā malāḥ",
      meaning: "The Falgu fruit is cooling, astringent, and beneficial for health, purifying the body and promoting wellness."
    }
  },
  {
    id: "gandha-prasarini",
    name: "Gandha Prasarini",
    botanical: "Paederia foetida",
    description: "The fragrant healer - renowned for treating neuromuscular disorders and joint pain",
    image: "/src/assets/gandha-prasarini-tree.jpg",
    about: "Gandha Prasarini, also known as Sarani or Rajabala, is a climbing vine from the Rubiaceae family. This plant is famous for its distinctive strong odor and powerful therapeutic properties. In Ayurveda, it is especially valued for treating Vata disorders - conditions related to the nervous system and musculoskeletal problems. The plant grows widely in tropical regions and has been used for centuries in traditional medicine. Its leaves, roots, and whole plant are utilized for their healing properties, particularly in treating chronic pain and inflammation.",
    medicinalUses: [
      "Treats neuromuscular disorders and Vata imbalances",
      "Relieves rheumatoid arthritis and joint inflammation",
      "Effective remedy for sciatica and nerve pain",
      "Reduces chronic joint pain and stiffness",
      "Helps manage paralysis and nerve disorders",
      "Treats spondylitis and spinal problems",
      "Reduces inflammation and swelling in muscles",
      "Strengthens bones and improves mobility"
    ],
    shloka: {
      sanskrit: "सारणी राजबला भद्रप ण तापनी। सरणी सारणी भा बला चािप कटम्भ रा॥ सारिरणी या बलस धानक सरा। ी य णा ा त ा ा तर कफापहा॥",
      transliteration: "Sāraṇī rājabala bhadrapaṇa tāpanī | Saraṇī sāraṇī bhā balā cāpi kaṭambha rā || Sāriraṇī yā balasa dhānaka sarā | ī ya ṇā ā ta ā ā tara kaphāpahā",
      meaning: "Gandha Prasarini, also known as Rajabala, is the supreme strength-giver, destroyer of pain, and remover of Kapha dosha, bringing relief to joints and muscles."
    }
  },
  {
    id: "jambu",
    name: "Jambu",
    botanical: "Syzygium cumini",
    description: "The black plum tree - celebrated for diabetes management and dental health",
    image: "/src/assets/jambu-tree.jpg",
    about: "Jambu, also known as the Indian Blackberry or Jambul tree, is an evergreen tree from the Myrtaceae family. This majestic tree is native to the Indian subcontinent and has been revered in Ayurveda for thousands of years. The tree produces delicious purple-black fruits that are not only tasty but also highly medicinal. Every part of the tree - fruits, seeds, leaves, and bark - has therapeutic value. The tree is particularly famous for its effectiveness in managing diabetes and has been used in traditional medicine to control blood sugar levels naturally.",
    medicinalUses: [
      "Controls and manages diabetes effectively",
      "Treats tooth decay and strengthens gums",
      "Relieves diarrhea and digestive disorders",
      "Purifies blood and improves circulation",
      "Treats mouth ulcers and oral infections",
      "Strengthens immune system",
      "Improves skin health and complexion",
      "Supports liver and spleen health"
    ],
    shloka: {
      sanskrit: "फ ा कथिथता नन्दी राजजम् हाफा। तथा रथिभपा च हाजम् रिप ता। राजजम् फ वादु िव भ रोचन॥",
      transliteration: "Pha ā kathithitā nandī rājaajam hāphā | Tathā rathibhapā cha hājam ripa tā | Rājajam pha vādu vi bha rochana",
      meaning: "Jambu, the king of fruits, is sweet and astringent, beneficial for diabetes, and brings joy and health to those who consume it."
    }
  },
  {
    id: "japa",
    name: "Japa",
    botanical: "Hibiscus rosa-sinensis",
    description: "The China rose - treasured for hair care, skin health, and anti-inflammatory properties",
    image: "/src/assets/japa-tree.jpg",
    about: "Japa, commonly known as the China Rose or Hibiscus, is a flowering shrub from the Malvaceae family. This beautiful plant is recognized by its large, vibrant red flowers that are not only ornamental but also highly medicinal. In Ayurveda, Japa is especially renowned for promoting hair growth and treating various skin conditions. The flowers, leaves, roots, and bark all possess therapeutic properties. The plant thrives in tropical and subtropical climates and has been used in traditional medicine and religious ceremonies for centuries. Its cooling nature makes it ideal for treating inflammation and heat-related conditions.",
    medicinalUses: [
      "Promotes hair growth and prevents hair fall",
      "Prevents premature greying of hair",
      "Treats inflammation and local swelling",
      "Heals skin disorders including acne and eczema",
      "Reduces boils and skin eruptions",
      "Cools the body and treats heat-related conditions",
      "Strengthens hair roots when used in oil preparations",
      "Improves skin complexion and texture"
    ],
    shloka: {
      sanskrit: "जपा यश व नी रक्त पु पा ड यर सा। वा िपह रा मा शोथ ा नाशिशनी॥",
      transliteration: "Japā yaśa va nī rakta puṣpā ḍa yara sā | Vā piha rā mā śotha ā nāśaśinī",
      meaning: "Japa, the glorious one with red flowers, is the destroyer of inflammation and swelling, bringing beauty and health to hair and skin."
    }
  }
];
