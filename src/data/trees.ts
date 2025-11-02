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
  }
];
