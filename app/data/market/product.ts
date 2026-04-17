import type { Product } from '~~/types/market/product'

export const dummyProduct: Product[] = [
  {
    id: 1,
    title: 'Beras Pandan Wangi Organik Premium',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536304993881-ff86e0c9c7c9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550828520-4cb496926fc9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1000&auto=format&fit=crop'
    ],
    category: {
      id: 'rice-grains',
      title: 'Beras & Biji-bijian',
      subCategory: ['Beras Putih', 'Beras Merah', 'Beras Organik']
    },
    rating: 4.9,
    reviewCount: 120,
    isFavorite: false,
    isVerified: true,
    location: 'Gianyar, Bali',
    priceLabel: 'Harga per kg',
    price: 25000,
    unit: 'kg',
    points: 150,
    linkTo: '/products/1',
    seller: {
      id: 'seller-001',
      name: 'Petani Sejahtera',
      avatar: 'https://i.pravatar.cc/150?img=11',
      location: 'Gianyar, Bali',
      farmerId: 'NRT-2024-001',
      role: 'Koperasi Petani',
      isVerified: true,
      stats: {
        rating: 4.9,
        totalProducts: 15,
        totalSales: 1250
      },
      social: {
        instagram: 'https://instagram.com/petanisejahtera',
        facebook: 'https://facebook.com/petanisejahtera'
      },
      description:
        'Komunitas petani padi organik yang berdedikasi menjaga kelestarian alam Gianyar.',
      joinedAt: '2023-01-15T00:00:00Z'
    },
    description:
      'Beras Pandan Wangi organik premium ditanam tanpa pestisida kimia di sawah terasering Gianyar. Dipanen secara tradisional untuk menjaga kualitas butiran dan aroma khas pandan alami. Cocok untuk nasi putih, nasi uduk, dan berbagai olahan nasi lainnya.',
    histories: [
      {
        id: 'ID-2026-01-C02',
        type: 'penanduran',
        title: 'Penanduran Benih',
        status: 'Selesai',
        date: '2 Jan 2026, 10:00 WITA',
        actor: {
          name: 'I Made Sukarya',
          avatar: 'https://i.pravatar.cc/150?img=11',
          role: 'Kepala Subak'
        },
        images: [
          'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Diverifikasi oleh Smart Contract',
          buttonText: 'Cek Sertifikat',
          url: '#'
        },
        activity:
          'Penanduran benih padi pandan wangi dilakukan dengan metode tabur benih pilihan yang telah melalui seleksi ketat. Benih direndam selama 24 jam kemudian disemai di lahan persemaian seluas 200 m². Penanduran dilakukan pada pagi hari untuk memastikan benih mendapat sinar matahari yang cukup sejak awal pertumbuhan.'
      },
      {
        id: 'ID-2026-01-C15',
        type: 'perawatan',
        title: 'Pemupukan & Pengairan',
        status: 'Selesai',
        date: '15 Jan 2026, 08:00 WITA',
        actor: {
          name: 'I Wayan Koster',
          avatar: 'https://i.pravatar.cc/150?img=11',
          role: 'Petani Penggarap'
        },
        images: [
          'https://images.unsplash.com/photo-1595805216378-433b9c7b952a?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Sistem Sensor IoT Subak',
          buttonText: 'Lihat Data IoT',
          url: '#'
        },
        activity:
          'Perawatan tanaman padi dilakukan dengan pemberian pupuk kompos organik secara berkala setiap dua minggu. Pengairan menggunakan sistem irigasi tradisional subak khas Bali. Pengendalian hama dilakukan secara organik menggunakan pestisida nabati dari daun nimba dan bawang putih untuk menjaga ekosistem sawah tetap sehat.'
      },
      {
        id: 'ID-2026-03-C02',
        type: 'panen',
        title: 'Pemanenan Raya',
        status: 'Selesai',
        date: '2 Mar 2026, 07:00 WITA',
        actor: {
          name: 'I Made Sukarya',
          avatar: 'https://i.pravatar.cc/150?img=11',
          role: 'Kepala Subak'
        },
        images: [
          'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Sertifikat Panen Organik',
          buttonText: 'Lihat Sertifikat',
          url: '#'
        },
        activity:
          'Pemanenan dilakukan setelah padi mencapai umur 110 hari dengan kadar air optimal 22-24%. Proses panen menggunakan sabit tradisional untuk menjaga kualitas bulir padi. Setelah dipanen, padi dijemur selama 3 hari di bawah sinar matahari langsung sebelum digiling menggunakan mesin penggilingan modern.'
      }
    ]
  },
  {
    id: 2,
    title: 'Mangga Harum Manis Panen Pagi',
    images: [
      'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605027990121-cbae9e0642df?q=80&w=1000&auto=format&fit=crop'
    ],
    category: {
      id: 'fruits',
      title: 'Buah-buahan',
      subCategory: ['Mangga', 'Jeruk', 'Pisang']
    },
    rating: 4.7,
    reviewCount: 85,
    isFavorite: true,
    isVerified: true,
    location: 'Buleleng, Bali',
    priceLabel: 'Harga per 500g',
    price: 15000,
    unit: '500g',
    points: 85,
    linkTo: '/products/2',
    seller: {
      id: 'seller-002',
      name: 'Kebun Pak Wayan',
      avatar: 'https://i.pravatar.cc/150?img=12',
      location: 'Buleleng, Bali',
      farmerId: 'NRT-2024-002',
      role: 'Petani Kebun',
      isVerified: true,
      stats: {
        rating: 4.8,
        totalProducts: 8,
        totalSales: 890
      },
      description:
        'Spesialis perkebunan mangga dan buah tropis berkualitas di pesisir Buleleng.',
      joinedAt: '2023-05-20T00:00:00Z'
    },
    description:
      'Mangga Harum Manis segar dipanen setiap pagi langsung dari kebun organik di Buleleng. Buah dipilih secara manual untuk memastikan tingkat kematangan optimal. Rasanya manis dengan tekstur lembut dan aroma harum yang khas. Bebas dari zat pematang buatan.',
    histories: [
      {
        id: 'ID-2025-10-C10',
        type: 'penanduran',
        title: 'Penanaman Bibit',
        status: 'Selesai',
        date: '10 Okt 2025, 09:00 WITA',
        actor: {
          name: 'Pak Wayan',
          avatar: 'https://i.pravatar.cc/150?img=12',
          role: 'Pemilik Kebun'
        },
        images: [
          'https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Sertifikat Bibit Dinas Pertanian',
          buttonText: 'Cek Verifikasi',
          url: '#'
        },
        activity:
          'Penanaman bibit mangga harum manis menggunakan bibit unggul bersertifikat yang didatangkan dari Balai Penelitian Tanaman Buah. Bibit ditanam dengan jarak 6x6 meter untuk memastikan sirkulasi udara yang optimal. Setiap lubang tanam diisi dengan campuran tanah, kompos, dan arang sekam untuk memperbaiki struktur tanah.'
      },
      {
        id: 'ID-2025-11-C10',
        type: 'perawatan',
        title: 'Pemangkasan & Pemupukan',
        status: 'Selesai',
        date: '10 Nov 2025, 07:00 WITA',
        actor: {
          name: 'Bli Kadek',
          avatar: 'https://i.pravatar.cc/150?img=13',
          role: 'Mandor Kebun'
        },
        images: [
          'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Quality Control Check',
          buttonText: 'Lihat Hasil Lab',
          url: '#'
        },
        activity:
          'Pemupukan dilakukan menggunakan pupuk organik cair dari fermentasi limbah buah setiap bulan. Pemangkasan cabang dilakukan secara rutin untuk merangsang pembungaan yang merata. Pengairan menggunakan sistem tetes (drip irrigation) untuk efisiensi air dan mencegah penyakit busuk akar.'
      },
      {
        id: 'ID-2026-03-C05',
        type: 'panen',
        title: 'Panen Pagi',
        status: 'Selesai',
        date: '5 Mar 2026, 06:00 WITA',
        actor: {
          name: 'Pak Wayan',
          avatar: 'https://i.pravatar.cc/150?img=12',
          role: 'Pemilik Kebun'
        },
        images: [
          'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Quality Control Check',
          buttonText: 'Lihat Hasil Lab',
          url: '#'
        },
        activity:
          'Pemanenan dilakukan pada pagi hari saat suhu masih sejuk untuk menjaga kesegaran buah. Buah dipetik secara manual menggunakan galah panen dengan kantong jaring untuk mencegah benturan. Setiap buah dibersihkan, disortir berdasarkan ukuran dan kualitas, kemudian dikemas dengan hati-hati sebelum dikirim ke konsumen.'
      }
    ]
  },
  {
    id: 3,
    title: 'Sayur Bayam Hidroponik Segar',
    images: [
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?q=80&w=1000&auto=format&fit=crop'
    ],
    category: {
      id: 'vegetables',
      title: 'Sayuran',
      subCategory: ['Sayuran Hijau', 'Umbi-umbian', 'Hidroponik']
    },
    rating: 4.6,
    reviewCount: 40,
    isFavorite: false,
    isVerified: false,
    location: 'Denpasar, Bali',
    priceLabel: 'Harga per ikat',
    price: 8000,
    unit: 'ikat',
    points: 40,
    linkTo: '/products/3',
    seller: {
      id: 'seller-003',
      name: 'Green House Bali',
      avatar: 'https://i.pravatar.cc/150?img=33',
      location: 'Denpasar, Bali',
      farmerId: 'NRT-2024-003',
      role: 'Urban Farmer',
      isVerified: false,
      stats: {
        rating: 4.5,
        totalProducts: 25,
        totalSales: 410
      },
      social: {
        instagram: 'https://instagram.com/greenhousebali'
      },
      description:
        'Penyedia sayuran hidroponik segar dan sehat di pusat kota Denpasar.',
      joinedAt: '2024-02-10T00:00:00Z'
    },
    description:
      'Bayam hidroponik segar ditanam dalam sistem NFT (Nutrient Film Technique) tanpa tanah dan tanpa pestisida. Dipanen setiap hari untuk menjaga kesegaran optimal. Kaya akan zat besi, vitamin A dan C. Cocok untuk berbagai masakan seperti sup, tumis, dan gado-gado.',
    histories: [
      {
        id: 'ID-2026-02-C20',
        type: 'penanduran',
        title: 'Penyemaian Benih',
        status: 'Selesai',
        date: '20 Feb 2026, 08:00 WITA',
        actor: {
          name: 'Agus Pratama',
          avatar: 'https://i.pravatar.cc/150?img=33',
          role: 'Ahli Hidroponik'
        },
        activity:
          'Benih bayam disemai pada rockwool yang telah dibasahi dengan larutan nutrisi AB mix berkonsentrasi rendah. Semai ditempatkan di ruang persemaian dengan pencahayaan LED 16 jam per hari. Setelah 7 hari, bibit yang telah memiliki 2 daun sejati dipindahkan ke sistem hidroponik NFT utama.'
      },
      {
        id: 'ID-2026-02-C22',
        type: 'perawatan',
        title: 'Maintenance Nutrisi',
        status: 'Selesai',
        date: '22 Feb 2026, 07:00 WITA',
        actor: {
          name: 'Agus Pratama',
          avatar: 'https://i.pravatar.cc/150?img=33',
          role: 'Ahli Hidroponik'
        },
        images: [
          'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Data Log Nutrisi Otomatis',
          buttonText: 'Cek Log',
          url: '#'
        },
        activity:
          'Perawatan dilakukan dengan pemantauan pH larutan nutrisi setiap pagi dan sore, dijaga di rentang 5.5-6.5. EC (Electrical Conductivity) larutan dimonitor dan disesuaikan setiap hari. Sirkulasi larutan nutrisi berjalan 24 jam menggunakan pompa otomatis. Greenhouse dijaga suhunya di kisaran 25-30°C menggunakan exhaust fan.'
      },
      {
        id: 'ID-2026-03-C02',
        type: 'panen',
        title: 'Panen Segar',
        status: 'Selesai',
        date: '2 Mar 2026, 06:00 WITA',
        actor: {
          name: 'Dina Lestari',
          avatar: 'https://i.pravatar.cc/150?img=34',
          role: 'Staf Panen'
        },
        images: [
          'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=500&auto=format&fit=crop'
        ],
        activity:
          'Bayam dipanen pada umur 25 hari setelah tanam saat tinggi tanaman mencapai 20-25 cm. Pemanenan dilakukan dengan memotong batang menggunakan gunting steril yang telah disterilisasi dengan alkohol 70%. Hasil panen langsung diikat per 100 gram, dicuci dengan air bersih, dan dikemas dalam plastik wrap untuk menjaga kesegaran.'
      }
    ]
  },
  {
    id: 4,
    title: 'Kopi Arabika Kintamani Roast Bean',
    images: [
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop'
    ],
    category: {
      id: 'spices-coffee',
      title: 'Rempah & Kopi',
      subCategory: ['Kopi', 'Rempah', 'Teh']
    },
    rating: 4.9,
    reviewCount: 320,
    isFavorite: true,
    isVerified: true,
    location: 'Bangli, Bali',
    priceLabel: 'Harga per 250g',
    price: 65000,
    unit: '250g',
    points: 320,
    linkTo: '/products/4',
    seller: {
      id: 'seller-004',
      name: 'Kintamani Roastery',
      avatar: 'https://i.pravatar.cc/150?img=68',
      location: 'Kintamani, Bangli',
      farmerId: 'NRT-2024-004',
      role: 'Roaster & Prosesor Kopi',
      isVerified: true,
      stats: {
        rating: 4.9,
        totalProducts: 10,
        totalSales: 3200
      },
      social: {
        instagram: 'https://instagram.com/kintamaniroastery',
        website: 'https://kintamaniroastery.com'
      },
      description:
        'Menyajikan biji kopi Kintamani kualitas terbaik yang di-roast dengan keahlian presisi tinggi.',
      joinedAt: '2021-11-05T00:00:00Z'
    },
    description:
      'Kopi Arabika Kintamani specialty grade ditanam di ketinggian 1.200-1.500 mdpl dengan tanah vulkanik subur di sekitar Danau Batur. Proses roasting medium-light untuk mempertahankan karakter buah dan keasaman yang menyegarkan. Tasting notes: jeruk, karamel, dan sedikit rempah.',
    histories: [
      {
        id: 'ID-2025-01-C05',
        type: 'penanduran',
        title: 'Penanaman Sistem Agroforestri',
        status: 'Selesai',
        date: '5 Jan 2025, 09:00 WITA',
        actor: {
          name: 'I Ketut Sudana',
          avatar: 'https://i.pravatar.cc/150?img=68',
          role: 'Petani Kopi'
        },
        activity:
          'Penanaman bibit kopi arabika dilakukan menggunakan varietas USDA yang telah terbukti beradaptasi baik di dataran tinggi Kintamani. Bibit ditanam dengan naungan pohon jeruk dan alpukat sesuai sistem agroforestri tradisional. Ketinggian lokasi penanaman di 1.350 mdpl memberikan kondisi ideal bagi pengembangan cita rasa kopi premium.'
      },
      {
        id: 'ID-2025-07-C01',
        type: 'perawatan',
        title: 'Pemangkasan & Pengendalian Organik',
        status: 'Selesai',
        date: '1 Jul 2025, 08:00 WITA',
        actor: {
          name: 'I Ketut Sudana',
          avatar: 'https://i.pravatar.cc/150?img=68',
          role: 'Petani Kopi'
        },
        images: [
          'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Log Aktivitas Petani',
          buttonText: 'Cek Buku Log',
          url: '#'
        },
        activity:
          'Perawatan kebun kopi menggunakan pupuk organik dari kompos kulit kopi hasil musim sebelumnya. Pemangkasan dilakukan dua kali setahun untuk merangsang produksi buah dan menjaga ketinggian pohon. Pengendalian hama penggerek buah kopi (PBKo) menggunakan perangkap feromon dan semprotan ekstrak biji mimba secara organik.'
      },
      {
        id: 'ID-2026-02-C10',
        type: 'panen',
        title: 'Panen Selective Picking',
        status: 'Selesai',
        date: '10 Feb 2026, 06:00 WITA',
        actor: {
          name: 'Kintamani Roastery Team',
          avatar: 'https://i.pravatar.cc/150?img=69',
          role: 'Q-Grader / Processor'
        },
        images: [
          'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=500&auto=format&fit=crop'
        ],
        verification: {
          label: 'Sertifikat Specialty Coffee',
          buttonText: 'Lihat Sertifikat',
          url: '#'
        },
        activity:
          'Pemanenan dilakukan secara selektif (selective picking) dengan hanya memetik buah kopi yang berwarna merah sempurna. Proses ini memastikan hanya biji terbaik yang dipilih meskipun membutuhkan waktu lebih lama. Setelah dipanen, biji kopi diproses dengan metode wet process (fully washed) dan dijemur di raised bed selama 14 hari sebelum di-roasting.'
      }
    ]
  }
]
