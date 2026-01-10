import type { IDictionaries } from "@/types/dictionaries";

const id: IDictionaries = {
  head: {
    title: "Nurtani Pengujianan",
    description:
      "Nurtani Pengujianan memverifikasi pencipta dan kreasi mereka, memastikan setiap produk asli dan akuntabel—menumbuhkan kepercayaan dalam komunitas kreatif.",
  },
  footer: {
    desc: "Otentikasi & Lindungi Produk Kreatif dengan Blockchain. Kraftlab.id memverifikasi pembuat dan kreasinya, memastikan setiap produk asli dan dapat dipertanggungjawabkan.",
    address: "Alamat",
    email: "Email",
    phone: "Telepon",
    instagram: "Instagram",
    quickLinks: "Tautan Cepat",
    legalSupport: "Hukum & Dukungan",
    version: "Versi",
    copyRight: "Semua hak dilindungi undang-undang. Didukung oleh Baliola.",
    madeWithLove: "Dibuat dengan ❤️ di Bali",
    guide: "Panduan Pengguna",
  },
  hero: {
    title: "Nurtani Pengujianan",
    blockchain: "Blockchain",
    subtitle:
      "Nurtani Pengujianan memverifikasi pencipta dan kreasi mereka, memastikan setiap produk asli dan akuntabel—menumbuhkan kepercayaan dalam komunitas kreatif.",
    joinWaitingList: "Gabung Sekarang",
    tryNow: "Mulai Sekarang",
    howItWorks: "Cara Kerja",
    mandalaSecured: "Dilindungi oleh Mandala",
    govtRecognized: "Diakui Pemerintah",
    communityVerified: "Diverifikasi Komunitas",
    weCollaborate: "Kami Hanya Berkolaborasi dengan yang Terbaik",
  },
  howItWorks: {
    howItWorks: "Bagaimana Cara Kerjanya?",
    subtitle:
      "Proses 4 langkah yang mulus untuk memastikan keaslian produk kreatif sekaligus memberikan transparansi bagi konsumen.",
    items: {
      firstTitle: "Pengajuan Produk",
      firstSubTitle:
        "Langkah awal adalah mengajukan produk dan meminta proses verifikasi.",
      secondTitle: "Proses Verifikasi",
      secondSubTitle:
        "Setelah permintaan verifikasi diterima, tim Produk dan pemerintah akan memulai proses verifikasi.",
      thirdTitle: "Pencetakan Sertifikat",
      thirdSubTitle:
        "Setelah verifikasi selesai, produk akan disertifikasi dan OPN akan diikatkan pada produk.",
      forthTitle: "QR QCP pada Produk",
      forthSubTitle:
        "Setelah pencetakan sertifikat, langkah selanjutnya adalah memperkenalkan Tag Produk yang dapat digunakan secara online dan offline untuk produk tersebut.",
    },
  },
  navigation: {
    login: "Masuk",
    home: "Beranda",
    howItWorks: "Cara Kerja",
    features: "Fitur",
    products: "Produk",
    catalogue: "Katalog",
    verify: "Verifikasi",
    faq: "FAQ",
    joinWaitingList: "Gabung Sekarang",
    tnc: "Syarat & Ketentuan",
    privacyPolicy: "Kebijakan Privasi",
    refundPolicy: "Kebijakan Pengembalian Dana",
    guide: "Panduan Pengguna",
  },
  catalogue: {
    tags: "Katalog Bersertifikat",
    title: "Produk Asli Bersertifikat",
    description:
      "Jelajahi produk-produk yang telah diverifikasi dan disertifikasi keasliannya oleh komunitas mereka serta terdaftar di blockchain Mandala.",
    search: {
      placeholder:
        "Cari produk berdasarkan nama, ID, kategori, atau ID NFT ...",
    },
    list: {
      certifiedBy: "Disertifikasi oleh:",
      certificationDate: "Tanggal Sertifikasi:",
      productDetails: "Detail Produk",
      productId: "ID Produk",
      blockchainRecord: "Catatan Blockchain",
      nftId: "ID NFT",
      transactionHash: "Hash Transaksi",
      blockNumber: "Nomor Blok",
    },
    button: {
      close: "Tutup",
      viewDetails: "Lihat Detail",
      viewCertificate: "Lihat Sertifikat",
    },
  },
  status: {
    verified: {
      title: "terverifikasi",
      description:
        "Produk Anda telah diverifikasi oleh komunitas dan pemerintah.",
    },
    rejected: {
      title: "ditolak",
      description: "Produk Anda telah ditolak. Silakan tinjau umpan balik.",
    },
    pending: {
      title: "menunggu",
      description:
        "Produk Anda telah dikirim dan menunggu penugasan verifikator.",
    },
    certified: {
      title: "tersertifikasi",
      description:
        "Produk Anda telah disertifikasi atau dicetak di jaringan blockchain.",
    },
    revoked: {
      title: "dicabut",
      description:
        "Sertifikasi produk Anda telah dicabut karena kondisi tertentu.",
    },
    expired: {
      title: "kedaluwarsa",
      description: "Sertifikasi produk Anda telah kedaluwarsa.",
    },
  },
  verification: {
    title: "Verifikasi Keaslian Produk",
    description:
      "Periksa apakah suatu produk asli dengan memasukkan ID-nya atau memindai kode QR produk.",
    productVerification: {
      title: "Verifikasi Produk",
      description:
        "Verifikasi keaslian produk dengan memasukkan ID atau memindai kode QR-nya",
      productId: {
        title: "Dengan ID Produk",
        label: "ID Produk",
        placeholder: "Masukkan ID Produk (misalnya: PRD-001)",
        error: {
          required: "ID Produk wajib diisi",
        },
        note: "ID Produk dapat ditemukan pada label atau kemasan produk",
      },
      productImage: {
        title: "Dengan Kamera",
        placeholder: {
          click: "Klik untuk unggah",
          dragAndDrop: "atau seret dan lepaskan",
        },
        error: {
          required: "Kode QR Produk wajib diunggah",
        },
        note: "Unggah foto Kode QR Produk",
      },
    },
    items: {
      productId: "ID Produk",
      productName: "Nama Produk",
      status: "status",
    },
    guidelines: {
      title: "Panduan Status Verifikasi",
      verificationPath: "Jalur Verifikasi",
      communityApproval: "Persetujuan Komunitas",
      governmentVerification: "Verifikasi Pemerintah",
    },
    button: {
      submit: "Verifikasi Produk",
      close: "Tutup",
    },
  },
  faq: {
    getHelpSupport: "Dapatkan Bantuan & Dukungan",
    faq: "PERTANYAAN YANG SERING AJUKAN",
    desc: "Temukan jawaban atas pertanyaan umum tentang Kraflab, platform bertenaga blockchain untuk sertifikasi produk asli. Gunakan pencarian dan filter di bawah untuk menemukan apa yang Anda butuhkan.",
    search: "Cari jawaban...",
    filterCategory: "Filter berdasarkan kategori:",
    quickNav: "Navigasi Cepat",
    stillNeedHelp: "Masih butuh bantuan?",
    descContactSupport:
      "Tidak dapat menemukan apa yang Anda cari? Tim dukungan kami siap membantu Anda sukses dengan Kraflab.",
    contactSupport: "Hubungi Dukungan",
  },
  general: {
    clickToNavigate: "Klik untuk menavigasi",
  },
  faqData: {
    about: {
      category: "Tentang Kraflab",
      questions: {
        "about-1": {
          question: "Apa itu Kraflab?",
          answer: {
            main: "Kraflab.id adalah platform web yang dibangun khusus untuk melawan masalah pemalsuan dan penipuan yang semakin meningkat di industri kreatif. Kami menyediakan sistem sertifikasi yang kuat, transparan, dan dapat diverifikasi untuk produk-produk kreatif. Misi utama kami adalah memastikan bahwa produk itu asli, para kreator diakui atas karya orisinal mereka, dan konsumen dapat membeli dengan rasa percaya penuh, mengetahui bahwa mereka mendapatkan produk yang asli. Kami mencapai ini dengan memanfaatkan teknologi blockchain yang canggih.",
          },
        },
        "about-2": {
          question: "Apa tujuan utama Kraflab.id?",
          answer: {
            main: "Tujuan utama kami adalah memfasilitasi pihak-pihak berwenang untuk mencatat dan menerbitkan sertifikat keaslian produk. Kami ingin membangun sistem di mana produsen dan produk mereka dapat diotentikasi dan dipertanggungjawabkan, sehingga menciptakan kepercayaan dan integritas yang sangat dibutuhkan dalam komunitas kreatif. Kami membayangkan masa depan di mana orisinalitas mudah dibuktikan dan dihargai.",
          },
        },
        "about-3": {
          question: "Siapa yang sebaiknya menggunakan Kraflab?",
          answer: {
            main: "Kraflab ditujukan untuk:",
            child: [
              "- Kreator: Desainer, pengrajin, dan pelaku usaha yang ingin mensertifikasi produk mereka.",
              "- Konsumen: Pembeli yang ingin memverifikasi keaslian produk sebelum membeli.",
              "- Komunitas: Kelompok yang membantu mendaftarkan anggota dan memverifikasi keaslian produk.",
              "- Badan Regulator: Lembaga sertifikasi yang mengawasi dan menyetujui proses sertifikasi.",
            ],
          },
        },
        "about-4": {
          question: "Siapa pihak utama dan penerima manfaat dari Kraflab.id?",
          answer: {
            main: "Kraflab.id melayani berbagai pemangku kepentingan yang semuanya penting dalam ekosistem kreatif:",
            child: [
              "- Kreator: Termasuk seniman, desainer, pengrajin individu hingga perusahaan kreatif. Kami memberdayakan Anda untuk melindungi kekayaan intelektual dan membuktikan keaslian karya Anda.",
              "- Pemerintah Daerah: Kami menyediakan alat untuk mendukung industri kreatif , menjaga kualitas, dan melindungi ekonomi  dari barang palsu.",
              "- Komunitas Kreatif : Platform untuk komunitas dalam mengorganisasi, memverifikasi anggota, dan mensertifikasi produk secara kolektif.",
              "- Baliola: Sebagai pemilik dan pengelola platform Kraflab.id, Baliola berkomitmen menjaga keamanan, fungsionalitas, dan perkembangan berkelanjutan platform ini.",
            ],
          },
        },
      },
    },
    certification: {
      category: "Sertifikasi Produk",
      questions: {
        "certification-1": {
          question:
            "Bagaimana cara saya mensertifikasi produk saya di Kraflab?",
          answer: {
            child: [
              "1. Daftar: Buat akun sebagai kreator (perorangan atau bisnis).",
              "2. Kirim: Produk Anda beserta detail dan dokumen pendukung yang dibutuhkan.",
              "3. Bayar: Biaya sertifikasi melalui gateway pembayaran aman dari Kraflab.",
              "4. Verifikasi: Komunitas dan badan regulator akan meninjau pengajuan Anda.",
              "5. Sertifikasi: Jika disetujui, Anda akan menerima Produk yang dicetak di blockchain serta OPN dan tag QR untuk produk Anda.",
            ],
          },
        },
        "certification-2": {
          question: "Apa itu Produk dan OPN?",
          answer: {
            child: [
              "- Produk ( Certificate of Product): Sertifikat digital yang dicetak di Mandala Chain sebagai bukti keaslian produk.",
              "- OPN ( Product Number): Nomor unik untuk tiap produk tersertifikasi, digunakan untuk pelacakan dan mencegah duplikasi.",
            ],
          },
        },
        "certification-3": {
          question: "Bagaimana Kraflab melindungi dari produk palsu?",
          answer: {
            main: "Kraflab menerbitkan Produk dan OPN untuk setiap produk tersertifikasi. Semua data ini dicatat di blockchain, membuatnya tidak dapat diubah dan mudah dilacak. Kode QR memungkinkan verifikasi instan produk oleh konsumen untuk memastikan keaslian produk.",
          },
        },
      },
    },

    payment: {
      category: "Pembayaran & Biaya",
      questions: {
        "payment-1": {
          question:
            "Bagaimana cara saya membayar sertifikasi, dan apa kebijakan pengembaliannya?",
          answer: {
            main: "Anda dapat membayar melalui gateway pembayaran yang aman dengan berbagai pilihan, termasuk Virtual Account (VA) dari bank-bank di Indonesia dan QRIS untuk pembayaran yang mudah. Secara default, pembayaran tidak dapat dikembalikan. Jika Anda mengalami masalah pembayaran atau membutuhkan bantuan terkait kemungkinan pengembalian dana, silakan kirim email ke support@baliola.io. Tim kami akan meninjau dan membantu menyelesaikan masalah Anda.",
          },
        },
        "payment-2": {
          question: "Berapa kisaran harga untuk sertifikasi produk di Kraflab?",
          answer: {
            main: "Biaya sertifikasi di Kraflab dimulai dari Rp 50.000 per produk. Total biaya dapat berbeda tergantung pada jenis produk, status keanggotaan, dan layanan tambahan yang Anda pilih. Untuk rincian harga sesuai kebutuhan Anda, silakan periksa halaman pembayaran saat proses sertifikasi atau hubungi tim dukungan kami di support@baliola.io.",
          },
        },
      },
    },

    verification: {
      category: "Verifikasi Produk",
      questions: {
        "verification-1": {
          question: "Bagaimana konsumen memverifikasi keaslian produk?",
          answer: {
            main: "Konsumen cukup memindai kode QR pada produk menggunakan pemindai QR apa pun atau melalui aplikasi/website Kraflab. Ini akan menampilkan detail sertifikasi produk, sehingga pembeli dapat langsung mengecek apakah produk tersebut asli dan tersertifikasi.",
          },
        },
        "verification-2": {
          question:
            "Bisakah saya melihat atau membeli produk tersertifikasi melalui Kraflab?",
          answer: {
            main: "Kraflab memiliki katalog online di mana konsumen dapat menemukan, melihat, dan memverifikasi produk tersertifikasi. Integrasi marketplace akan tersedia di pengembangan berikutnya.",
          },
        },
        "verification-3": {
          question:
            "Bagaimana Kraflab menjamin sertifikasi yang adil dan menangani sengketa?",
          answer: {
            main: "Akses berbasis peran memastikan hanya verifikator dan regulator resmi yang dapat menyetujui sertifikasi. Fitur penyelesaian sengketa dan deteksi penipuan telah disiapkan, dengan rencana pengembangan lanjutan.",
          },
        },
      },
    },
    features: {
      category: "Fitur & Kapabilitas",
      questions: {
        "features-1": {
          question: "Fitur apa saja yang ditawarkan Kraflab untuk kreator?",
          answer: {
            child: [
              "- Registrasi & manajemen profil pengguna",
              "- Pengajuan produk & pelacakan status verifikasi",
              "- Pembayaran online untuk sertifikasi",
              "- Menerima Produk & OPN di blockchain",
              "- Menampilkan produk dalam katalog global",
              "- Bergabung dengan komunitas kreator untuk kemudahan verifikasi",
              "- Tag Branding : Menyoroti produk dengan lencana khusus yang menandakan produk tersebut orisinal dan berasal dari wilayah tertentu.",
            ],
          },
        },
        "features-2": {
          question: "Fitur apa yang tersedia untuk konsumen?",
          answer: {
            child: [
              "- Autentikasi produk melalui QR code",
              "- Jelajahi produk tersertifikasi di katalog",
              "- Membaca dan mengirim ulasan (fitur mendatang)",
              "- Laporkan produk yang dicurigai palsu",
              "- Tag Branding  untuk identifikasi merek: Memudahkan konsumen mengenali produk  yang tersertifikasi dan mendukung kreator atau bisnis dari wilayah mereka.",
            ],
          },
        },
        "features-3": {
          question: "Peran apa yang dimainkan komunitas dan badan regulator?",
          answer: {
            child: [
              "- Komunitas: Mendaftarkan dan mengelola verifikator, menyetujui pengajuan produk, serta menjaga integritas ekosistem.",
              "- Badan Regulator: Mengawasi proses sertifikasi, memastikan kepatuhan, melakukan audit, dan menyetujui sertifikasi.",
            ],
          },
        },
      },
    },
    community: {
      category: "Komunitas & Keanggotaan",
      questions: {
        "community-1": {
          question:
            "Bagaimana saya bergabung dengan komunitas atau menjadi verifikator?",
          answer: {
            main: "Anda dapat mendaftar sebagai anggota komunitas dan, tergantung pada status dan peran Anda, mengajukan permohonan menjadi verifikator. Komunitas mengelola anggotanya dan peran masing-masing secara mandiri.",
          },
        },
      },
    },
    security: {
      category: "Keamanan & Privasi",
      questions: {
        "security-1": {
          question: "Apa langkah keamanan dan privasi yang diterapkan Kraflab?",
          answer: {
            child: [
              "- Hashing Password: Kata sandi pengguna tidak pernah disimpan dalam bentuk teks biasa.",
              "- Catatan Tidak Bisa Diubah: Data sertifikasi disimpan di blockchain dan tidak bisa dimanipulasi.",
              "- Kepatuhan Hukum: Sistem mematuhi undang-undang perlindungan data pribadi Indonesia (PDP).",
            ],
          },
        },
        "security-2": {
          question:
            "Bagaimana saya mengelola data dan privasi saya di Kraflab?",
          answer: {
            main: "Anda dapat mengelola akun dan data pribadi/perusahaan Anda sendiri. Kraflab mematuhi peraturan perlindungan data  dan mengutamakan privasi pengguna.",
          },
        },
      },
    },
    support: {
      category: "Bantuan & Dukungan",
      questions: {
        "support-1": {
          question: "Bagaimana jika saya butuh bantuan atau mengalami masalah?",
          answer: {
            main: "Kraflab menyediakan sistem helpdesk dan dukungan pelanggan, termasuk tiket untuk pertanyaan pengguna dan masalah teknis. Silakan kirim email ke support@baliola.io untuk bantuan lebih lanjut.",
          },
        },
        "support-2": {
          question: "Butuh Bantuan Lebih Lanjut?",
          answer: {
            main: "Untuk panduan onboarding, tutorial langkah demi langkah, atau dukungan teknis, silakan hubungi tim dukungan Kraflab melalui helpdesk atau kunjungi situs resmi.",
          },
        },
      },
    },
  },
  tnc: {
    legalDoc: "Dokumen Hukum",
    tnc: "Syarat dan Ketentuan",
    desc: "Selamat datang di Kraflab.id. Harap baca Ketentuan Layanan (“Ketentuan”) ini dengan cermat sebelum menggunakan platform Kraflab, yang dioperasikan oleh Baliola (“kami”, “milik kami”, atau “kita”). Dengan mengakses atau menggunakan platform kami, Anda setuju untuk mematuhi dan terikat oleh Ketentuan ini.",
    tableOfContent: "Daftar Isi",
  },
  tncData: {
    about: {
      title: "Tentang Kraflab",
      content: {
        main: "Kraflab adalah platform berbasis web yang menyediakan sertifikasi produk kreatif secara transparan, aman, dan dapat diverifikasi dengan teknologi blockchain. Misi kami adalah membantu kreator, komunitas, dan konsumen untuk membuktikan keaslian karya kreatif, melawan pemalsuan, dan membangun kepercayaan dalam industri kreatif.",
      },
    },
    "who-can-use": {
      title: "Siapa Saja yang Bisa Menggunakan Kraflab",
      content: {
        main: "Kraflab terbuka untuk:",
        child: [
          "- Kreator: Seniman, desainer, pengrajin, dan wirausahawan.",
          "- Konsumen: Pembeli yang ingin memverifikasi keaslian produk.",
          "- Komunitas: Kelompok yang mengorganisir dan memverifikasi kreator atau produk.",
          "- Lembaga Regulasi: Organisasi yang mengawasi sertifikasi. Anda harus berusia minimal 18 tahun atau memiliki kapasitas hukum sesuai hukum  untuk menggunakan layanan kami.",
        ],
      },
    },
    accounts: {
      title: "Akun Pengguna dan Registrasi",
      content: {
        main: "Untuk menggunakan fitur tertentu, Anda harus mendaftar akun. Anda setuju memberikan informasi yang akurat, lengkap, dan terkini. Anda bertanggung jawab menjaga keamanan akun dan kata sandi Anda. Semua aktivitas dalam akun Anda adalah tanggung jawab Anda.",
      },
    },
    certification: {
      title: "Proses Sertifikasi Produk",
      content: {
        main: "Kreator dapat mengajukan produk untuk disertifikasi dengan:",
        child: [
          "1. Mendaftar di platform.",
          "2. Menyediakan informasi dan dokumen produk yang dibutuhkan.",
          "3. Membayar biaya sertifikasi melalui saluran pembayaran yang didukung (lihat di bawah).",
          "4. Melalui proses tinjauan oleh verifikator komunitas dan lembaga regulasi.",
          `5. Menerima Sertifikat  Produk ( Certificate of Product/Produk) berbasis blockchain dan Nomor Produk  ( Product Number/OPN) unik jika disetujui.\nKami berhak menerima atau menolak pengajuan sertifikasi atas kebijakan kami sepenuhnya.`,
        ],
      },
    },
    payments: {
      title: "Ketentuan Pembayaran",
      content: {
        child: [
          "- Semua pembayaran untuk sertifikasi dan layanan lainnya harus dilakukan melalui gateway pembayaran aman Kraflab.",
          "- Kami mendukung saluran pembayaran seperti Virtual Account (VA) dari bank-bank Indonesia dan QRIS.",
          "- Pembayaran tidak dapat dikembalikan secara default. Jika Anda mengalami masalah pembayaran atau membutuhkan pengembalian karena kesalahan atau masalah lain, silakan hubungi kami di support@baliola.io",
          "- Permintaan refund akan ditinjau secara kasus per kasus.",
          "Anda bertanggung jawab memastikan detail pembayaran benar dan menanggung biaya yang dikenakan oleh lembaga keuangan Anda.",
        ],
      },
    },
    authentication: {
      title: "Otentikasi dan Penggunaan Produk",
      content: {
        main: "Konsumen dapat memverifikasi keaslian produk bersertifikat dengan memindai kode QR yang disediakan. Detail sertifikasi dicatat di blockchain dan tidak dapat diubah atau dimanipulasi.",
      },
    },
    conduct: {
      title: "Perilaku Pengguna",
      content: {
        main: "Anda setuju untuk:",
        child: [
          "- Menggunakan platform hanya untuk tujuan yang sah dan sesuai.",
          "- Memberikan informasi yang benar dan akurat dalam semua interaksi.",
          "- Tidak mengirimkan produk yang palsu, melanggar, atau tidak asli.",
          `- Tidak mengganggu keamanan atau operasional platform.\nKami berhak menangguhkan atau menghapus akun untuk pelanggaran Ketentuan ini.`,
        ],
      },
    },
    intellectual: {
      title: "Kekayaan Intelektual",
      content: {
        child: [
          "- Kraflab dan seluruh kontennya, termasuk logo dan teknologi, dimiliki oleh Baliola atau pemberi lisensinya.",
          "- Konten produk yang diunggah oleh kreator tetap menjadi kekayaan intelektual mereka, namun dapat ditampilkan dan digunakan sebagai bagian dari layanan Kraflab.",
          "- Anda tidak boleh menyalin, menggunakan kembali, atau mengeksploitasi bagian mana pun dari platform tanpa izin yang sah.",
        ],
      },
    },
    security: {
      title: "Keamanan dan Privasi",
      content: {
        child: [
          "- Password Hashing - Kata sandi pengguna tidak pernah disimpan dalam bentuk teks asli.",
          "- Catatan sertifikasi disimpan secara permanen di blockchain Mandala Chain.",
          "- Data Anda diproses sesuai dengan Undang-Undang Perlindungan Data Pribadi Indonesia.",
          "- Untuk informasi lebih lanjut tentang penanganan data, silakan baca Kebijakan Privasi kami.",
        ],
      },
    },
    disputes: {
      title: "Sengketa dan Penyelesaian Masalah",
      content: {
        child: [
          "- Jika Anda memiliki kekhawatiran tentang hasil sertifikasi, keaslian produk, atau masalah lainnya, silakan hubungi tim dukungan kami di support@baliola.io.",
          "- Kami memiliki prosedur penyelesaian sengketa dan deteksi penipuan serta akan menyelidiki semua laporan secara adil.",
        ],
      },
    },
    availability: {
      title: "Ketersediaan dan Perubahan Layanan",
      content: {
        child: [
          "- Kami berupaya untuk menyediakan uptime sebesar 99% tetapi tidak menjamin akses tanpa gangguan.",
          "- Kami dapat mengubah, menghentikan, atau memperbarui fitur apa pun, atau memperbarui Ketentuan ini kapan saja. Kami akan memberitahukan pengguna tentang perubahan signifikan melalui platform.",
        ],
      },
    },
    liability: {
      title: "Batasan Tanggung Jawab",
      content: {
        child: [
          "- Kraflab dan Baliola tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan platform Anda.",
          "- Kami tidak menjamin nilai komersial produk atau kesesuaiannya untuk tujuan tertentu.",
          "Semua sertifikasi didasarkan pada informasi yang dikirimkan; Anda bertanggung jawab atas keakuratan dan legalitasnya.",
        ],
      },
    },
    governing: {
      title: "Hukum yang Mengatur",
      content: {
        main: "Ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa akan diselesaikan di yurisdiksi kantor terdaftar Baliola.",
      },
    },
    contact: {
      title: "Hubungi Kami",
      content: {
        child: [
          "- Untuk pertanyaan, dukungan, atau keluhan, silakan email ke support@baliola.io.",
          "- Dengan menggunakan Kraflab, Anda mengakui telah membaca, memahami, dan menyetujui Ketentuan Layanan ini.",
        ],
      },
    },
  },
  privacy: {
    yourPrivacy: "Privasi Anda Penting",
    pp: "Kebijakan Privasi",
    desc: "Kraflab.id, dioperasikan oleh Baliola (“kami”, “milik kami”, “kita”), berkomitmen untuk melindungi privasi Anda, mengamankan data pribadi Anda, dan memastikan pengelolaan data yang bertanggung jawab sejalan dengan standar ISO/IEC 27001 untuk keamanan informasi dan Undang-Undang PDP Indonesia. Kebijakan Privasi ini menjelaskan cara kami mengumpulkan, menggunakan, menyimpan, melindungi, dan membagikan informasi Anda.",
    tableOfContent: "Daftar Isi",
  },
  privacyPolicyData: {
    "our-commitment": {
      title: "Komitmen Kami terhadap Keamanan Informasi dan Privasi Data",
      content: {
        child: [
          "- Kami menerapkan Sistem Manajemen Keamanan Informasi (ISMS) yang tersertifikasi dan ditinjau secara berkala sesuai dengan ISO/IEC 27001.",
          "- Kami memproses dan melindungi data pribadi sesuai dengan Undang-Undang PDP Indonesia.",
          "- Kami secara rutin melatih karyawan dan pemangku kepentingan kami tentang praktik terbaik perlindungan data dan keamanan informasi.",
          "- Kami melakukan penilaian risiko, audit, dan perbaikan berkelanjutan untuk memastikan kepatuhan dan mengurangi risiko terkait data.",
        ],
      },
    },
    DataPrivacyDisclaimer: {
      title: "Disclaimer Privasi Data",
      content: {
        child: [
          "- Pengguna bertanggung jawab penuh atas semua konten dan data sensitif yang mereka kirimkan untuk tujuan verifikasi",
          "- Kraflab tidak menerima tanggung jawab hukum atas materi apa pun yang diunggah ke platform kami. Merupakan kewajiban pengguna untuk memastikan mereka memiliki semua hak hukum dan izin yang diperlukan atas data yang mereka berikan",
        ],
      },
    },
    collection: {
      title: "Informasi yang Kami Kumpulkan",
      content: {
        main: "Kami mengumpulkan informasi yang diperlukan untuk menyediakan dan mengamankan layanan kami, termasuk:",
        child: [
          "- Informasi Pribadi: Nama, alamat email, nomor telepon, dokumen identitas (KTP untuk individu, data perusahaan untuk bisnis), kredensial akun.",
          "- Informasi Produk: Detail produk, dokumentasi, gambar, dan file pendukung yang dikirim untuk sertifikasi.",
          "- Informasi Pembayaran: Saluran pembayaran, status, detail transaksi (diproses melalui gerbang pembayaran yang aman, tidak disimpan oleh kami).",
          "- Cookies dan Data Pelacakan: Cookie sesi dan teknologi serupa untuk memastikan keamanan, meningkatkan pengalaman pengguna, dan memantau penggunaan situs.",
        ],
      },
    },
    usage: {
      title: "Bagaimana Kami Menggunakan Data Anda",
      content: {
        main: "Data Anda digunakan hanya untuk tujuan yang sah dan telah diungkapkan:",
        child: [
          "- Menyediakan dan memelihara layanan sertifikasi kami.",
          "- Memproses pengajuan produk, verifikasi, dan pembayaran.",
          "- Mengelola akun pengguna dan memastikan autentikasi yang aman.",
          "- Mendeteksi, menyelidiki, dan mencegah penipuan atau insiden keamanan.",
          "- Mematuhi kewajiban hukum dan regulasi sesuai kontrol ISO 27001 dan UU PDP.",
          "- Mengkomunikasikan informasi penting, pembaruan, dan dukungan.",
          "- Meningkatkan sistem kami melalui analitik anonim dan umpan balik.",
          "- Kami tidak akan menggunakan data Anda untuk tujuan di luar yang dijelaskan di sini tanpa persetujuan eksplisit Anda.",
        ],
      },
    },
    sharing: {
      title: "Bagaimana Kami Membagikan dan Mengungkapkan Data",
      content: {
        main: "Kami hanya membagikan informasi Anda bila diperlukan dan di bawah kontrol yang ketat:",
        child: [
          "- Dengan personel yang berwenang untuk operasional layanan, berdasarkan prinsip “least privilege” sesuai ISO 27001.",
          "- Dengan penyedia pembayaran untuk pemrosesan transaksi (kami tidak menyimpan data kartu/bank).",
          "- Dengan otoritas regulasi untuk memenuhi persyaratan hukum.",
          "- Dengan komunitas, konsumen, atau pengguna lain hanya untuk informasi terkait sertifikasi (misalnya info kreator/produk di katalog).",
          "- Dengan penyedia layanan pihak ketiga terpercaya (cloud, backup, analitik) berdasarkan perjanjian yang mengharuskan keamanan informasi dan kerahasiaan.",
          "- Kami tidak menjual data pribadi kepada pihak ketiga mana pun.",
          "- Semua transfer data pribadi mematuhi UU PDP Indonesia dan, jika berlaku, aturan transfer data internasional. Informasi sensitif selalu dilindungi saat transfer dan penyimpanan.",
        ],
      },
    },
    security: {
      title: "Keamanan dan Perlindungan Data",
      content: {
        child: [
          {
            main: "- Kami menerapkan kontrol teknis dan organisasi ISO 27001:2022, termasuk namun tidak terbatas pada:",
            child: [
              "~ Kontrol akses berbasis peran (RBAC).",
              "~ Pemisahan tugas dan prinsip “need-to-know” untuk personel.",
              "~ Praktik pengembangan yang aman dan pengujian penetrasi secara berkala.",
              "~ Keberlangsungan bisnis, pemulihan bencana, dan pencadangan data secara berkala.",
            ],
          },
          {
            main: "- Ketakberubahan Blockchain: Sertifikasi produk dicatat secara permanen dan aman di blockchain Mandala Chain.",
          },
        ],
      },
    },
    retention: {
      title: "Penyimpanan dan Penghapusan Data",
      content: {
        child: [
          "- Kami menyimpan informasi Anda selama akun Anda aktif atau selama dibutuhkan untuk alasan hukum/regulasi.",
          "- Catatan sertifikasi produk bersifat tidak dapat diubah di blockchain.",
          "- Anda dapat meminta penghapusan atau pembatasan data Anda (kecuali jika penyimpanan diwajibkan oleh hukum atau sertifikasi).",
          "- Permintaan dari subjek data ditangani sesuai UU PDP dan kebijakan ISO 27001.",
        ],
      },
    },
    rights: {
      title: "Hak Pengguna",
      content: {
        main: "Sesuai dengan UU PDP Indonesia dan prinsip ISO 27001:2022, Anda memiliki hak untuk:",
        child: [
          "- Mengakses dan memperoleh salinan data pribadi Anda.",
          "- Mengoreksi atau memperbarui data pribadi Anda kapan saja.",
          "- Meminta penghapusan atau pembatasan data Anda (kecuali data di blockchain yang tidak dapat diubah).",
          "- Menarik persetujuan untuk pemrosesan data jika berlaku.",
          "- Menolak aktivitas pemrosesan tertentu.",
          "- Mengajukan keluhan kepada kami atau otoritas perlindungan data yang berwenang.",
          "- Anda dapat menggunakan hak-hak ini dengan menghubungi support@baliola.io. Kami akan merespons dengan cepat sesuai ketentuan regulasi.",
        ],
      },
    },
    thirdparty: {
      title: "Tautan dan Layanan Pihak Ketiga",
      content: {
        main: "Platform kami dapat mencakup tautan ke situs web atau layanan pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi mereka dan menganjurkan Anda untuk meninjau kebijakan privasi mereka secara terpisah.",
      },
    },
    security2: {
      title: "Keamanan dan Privasi",
      content: {
        child: [
          "- Hashing Kata Sandi - Kata sandi pengguna tidak pernah disimpan dalam bentuk teks biasa.",
          "- Catatan sertifikasi disimpan secara tidak dapat diubah di blockchain Mandala Chain.",
          "- Data Anda diproses sesuai dengan Undang-Undang Perlindungan Data Pribadi (PDP) Indonesia.",
          "- Untuk informasi lebih lanjut tentang penanganan data, silakan tinjau Kebijakan Privasi kami.",
        ],
      },
    },
    children: {
      title: "Privasi Anak",
      content: {
        main: "Kraflab tidak ditujukan untuk pengguna di bawah usia 18 tahun. Kami tidak secara sadar mengumpulkan informasi pribadi dari anak di bawah umur.",
      },
    },
    international: {
      title: "Transfer Data Internasional",
      content: {
        main: "Jika data Anda ditransfer ke luar Indonesia, kami memastikan perlindungan yang memadai dan mematuhi UU PDP, termasuk perjanjian dan perlindungan yang sesuai.",
      },
    },
    updates: {
      title: "Pembaruan terhadap Kebijakan Ini",
      content: {
        main: "Kami dapat memperbarui Kebijakan Privasi ini untuk tetap sesuai dengan ISO 27001:2022, UU PDP, dan praktik terbaik industri. Setiap perubahan akan diberitahukan melalui platform kami atau email untuk pembaruan penting.",
      },
    },
    contact: {
      title: "Hubungi Kami",
      content: {
        child: [
          "- Untuk pertanyaan, dukungan, atau keluhan, silakan email ke support@baliola.io.",
          "- Dengan menggunakan Kraflab, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui Ketentuan Layanan ini.",
        ],
      },
    },
  },
  refundPolicy: {
    refundPolicy: "Kebijakan Pengembalian Dana",
    yourConvenientMatters: "Kenyamanan Anda Penting",
    desc: "Kebijakan pengembalian dana kami yang transparan untuk layanan sertifikasi Kraflab, metode pembayaran, dan prosedur dukungan.",
    tableOfContent: "Daftar Isi",
    paymentInfo: "Info Pembayaran",
    contactSupport: "Hubungi Dukungan",
  },
  refundPolicyData: {
    "payment-methods": {
      title: "Metode & Opsi Pembayaran",
      content: {
        main: "Kraflab menerima pembayaran melalui gateway aman dengan berbagai opsi yang nyaman untuk pengguna Indonesia:",
        child: [
          "Virtual Account (VA): Tersedia dari bank-bank besar Indonesia seperti BCA, BNI, BRI, Mandiri, dan lainnya. Dapatkan nomor VA unik untuk transfer bank yang aman.",
          "Pembayaran QRIS: Standar QR Indonesia untuk pembayaran instan dan tanpa kontak menggunakan aplikasi mobile banking yang mendukung QRIS.",
          "Catatan: Semua pembayaran diproses melalui gateway pembayaran aman kami untuk memastikan informasi keuangan Anda terlindungi dengan enkripsi standar industri.",
        ],
      },
    },
    "default-policy": {
      title: "Kebijakan Tidak Dapat Dikembalikan",
      content: {
        main: "Kebijakan Default: Pembayaran Tidak Dapat Dikembalikan. Secara default, semua pembayaran untuk layanan sertifikasi Kraflab dianggap final dan tidak dapat dikembalikan setelah proses sertifikasi dimulai.",
        child: [
          "Kebijakan ini berlaku untuk:",
          "Biaya sertifikasi produk",
          "Biaya verifikasi komunitas",
          "Upgrade layanan premium",
          "Permintaan verifikasi tambahan",
          "Biaya pemrosesan cepat",
          "Kebijakan ini memastikan integritas proses sertifikasi kami dan mencakup sumber daya, waktu, serta keahlian yang terlibat dalam layanan verifikasi dan otentikasi produk.",
        ],
      },
    },
    "contact-support": {
      title: "Kontak & Dukungan",
      content: {
        main: "Untuk pertanyaan terkait pembayaran atau permintaan refund, silakan hubungi tim dukungan kami:",
        child: [
          "Email Dukungan: support@baliola.io (Saluran utama untuk permintaan refund)",
          "Sumber Tambahan: Lihat FAQ, Syarat & Ketentuan, dan Kebijakan Privasi untuk info lebih lanjut.",
          "Tips: Sebelum meminta refund, silakan cek bagian FAQ dan coba langkah pemecahan masalah dasar. Banyak masalah umum dapat diselesaikan tanpa perlu refund.",
        ],
      },
    },
    "policy-updates": {
      title: "Pembaruan Kebijakan",
      content: {
        main: "Kebijakan refund ini dapat diperbarui secara berkala untuk menyesuaikan perubahan layanan, regulasi Indonesia, atau kebutuhan pemrosesan pembayaran.",
        child: [
          "Pemberitahuan Pembaruan:",
          "Perubahan signifikan akan diinformasikan melalui email ke pengguna terdaftar.",
          'Kebijakan terbaru akan dipublikasikan di halaman ini dengan tanggal "terakhir diperbarui" yang baru.',
          "Penggunaan layanan kami secara berkelanjutan dianggap sebagai persetujuan atas ketentuan yang diperbarui.",
          "Kami menyarankan Anda meninjau kebijakan ini secara berkala untuk mengetahui prosedur refund terbaru dan perubahan yang dapat memengaruhi hak Anda sebagai pengguna.",
        ],
      },
    },
  },
  products: {
    heroTitle: "Produk Kami",
    heroDesc:
      "Amankan produk Anda dengan autentikasi terverifikasi blockchain dan dapatkan kepercayaan dengan solusi sertifikasi kami.",
    lbt: {
      title: "Tag Branding (BT)",
      desc: "Verifikasi produk Anda dengan tag branding  yang diamankan blockchain untuk pengakuan regional dan kepercayaan pelanggan.",
      cta: "Dapatkan Tag Branding ",
      askForDetail: "Tanyakan Detailnya",
      contactUsForPricing: "Hubungi kami untuk mengetahui harga",
    },
    lbtFeatures: {
      sectionTitle: "Mengapa Pilih Tag Branding ?",
      blockchain: {
        title: "Keamanan Blockchain",
        desc: "Catatan tidak dapat diubah yang disimpan di Mandala blockchain memastikan verifikasi keaslian permanen",
      },
      community: {
        title: "Kepercayaan Masyarakat",
        desc: "Bangun kepercayaan dengan branding  yang terverifikasi",
      },
      region: {
        title: "Pengakuan Regional",
        desc: "Dapatkan pengakuan resmi di wilayah Anda dan bangun kepercayaan pelanggan",
      },
      qr: {
        title: "Verifikasi Mudah",
        desc: "Pelanggan dapat langsung memverifikasi keaslian produk dengan scan QR code",
      },
      profileBadge: {
        title: "Lencana Profil",
        desc: "Tampilkan lencana verifikasi di profil bisnis Anda",
      },
      nftCertificate: {
        title: "Sertifikat NFT",
        desc: "Terima token NFT unik sebagai bukti keaslian",
      },
    },
    ocp: {
      cta: "Dapatkan Sertifikat Produk",
      desc: "Sertifikasi resmi yang mendokumentasikan keaslian dan kualitas produk Anda dengan verifikasi blockchain.",
      title: "Sertifikat Produk",
      startingFrom: "Mulai dari Rp 200Rb",
      professionalCertPackage: "Paket sertifikasi profesional",
    },
    ocpFeatures: {
      blockchain: {
        title: "Blockchain Terverifikasi",
        desc: "Catatan yang tidak dapat diubah pada blockchain Mandala",
      },
      consumer: {
        title: "Kepercayaan Konsumen",
        desc: "Bangun kepercayaan pelanggan dengan produk terverifikasi",
      },
      origin: {
        title: "Sertifikat ",
        desc: "Dokumentasi resmi asal dan keaslian produk",
      },
      quality: {
        title: "Jaminan Mutu",
        desc: "Standar kualitas produk yang terverifikasi",
      },
      sectionTitle: "Mengapa Memilih Sertifikasi Produk?",
    },
    steps: {
      sectionTitle: "Cara Mendapatkan Brand Tag Anda",
      sectionDesc: "Dapatkan autentikasi Anda dalam 4 langkah mudah",
      registerTitle: "Daftar & Atur Akun",
      registerDesc: "Daftar dan pilih paket Brand Tag untuk memulai",
      paymentTitle: "Pembayaran Aman",
      paymentDesc:
        "Selesaikan pembayaran mulai dari Rp30.000–Rp300.000 untuk masa berlaku 2 tahun",
      reviewTitle: "Tinjauan Organisasi",
      reviewDesc:
        "Anggota Organisasi terpercaya memverifikasi keaslian produk Anda",
      mintTitle: "Terbitkan Tag Anda",
      mintDesc:
        "Dapatkan sertifikat NFT dan tag QR yang terverifikasi blockchain",
    },
    stepsOCP: {
      sectionTitle: "Cara Mendapatkan Sertifikat Produk Anda",
      sectionDesc: "Dapatkan autentikasi produk Anda dalam 4 langkah mudah",
      registerTitle: "Daftar & Atur Akun",
      registerDesc:
        "Daftar dan registrasikan produk Anda untuk mendapatkan sertifikasi",
      paymentTitle: "Pembayaran Aman",
      paymentDesc:
        "Selesaikan pembayaran mulai dari Rp200.000 untuk sertifikasi profesional",
      reviewTitle: "Tinjauan Komunitas",
      reviewDesc:
        "Anggota komunitas terpercaya memverifikasi keaslian produk Anda",
      mintTitle: "Terbitkan Sertifikat Produk Anda",
      mintDesc:
        "Dapatkan sertifikat NFT dan QR produk Anda yang terverifikasi blockchain",
    },

    ctaTitle: "Siap Autentikasi Produk Anda?",
    ctaDesc:
      "Bergabunglah dengan ribuan bisnis dan kreator yang mempercayai autentikasi Tag Branding  berbasis blockchain kami.",
    cta: "Dapatkan Tag Branding  Sekarang",
  },
  guide: {
    title: "Panduan & Tutorial",
    desc: "Panduan langkah demi langkah untuk menguasai autentikasi produk dan sertifikasi berbasis blockchain menggunakan platform Kraflab.",
    tableName: "Daftar Isi Panduan",
    tableActions: "Aksi",
    buttonOverview: "Lihat",
    download: "Unduh PDF",
  },
};

export default id;
