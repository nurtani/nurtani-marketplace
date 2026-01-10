export interface IDictionaries {
  head: {
    title: string;
    description: string;
  };
  footer: {
    desc: string;
    address: string;
    email: string;
    phone: string;
    instagram: string;
    quickLinks: string;
    legalSupport: string;
    version: string;
    copyRight: string;
    madeWithLove: string;
    guide: string;
  };
  hero: {
    title: string;
    subtitle: string;
    blockchain: string;
    tryNow: string;
    joinWaitingList: string;
    howItWorks: string;
    mandalaSecured: string;
    govtRecognized: string;
    communityVerified: string;
    weCollaborate: string;
  };
  howItWorks: {
    howItWorks: string;
    subtitle: string;
    items: {
      firstTitle: string;
      secondTitle: string;
      thirdTitle: string;
      forthTitle: string;
      firstSubTitle: string;
      secondSubTitle: string;
      thirdSubTitle: string;
      forthSubTitle: string;
    };
  };
  navigation: {
    login: string;
    home: string;
    howItWorks: string;
    features: string;
    products: string;
    catalogue: string;
    verify: string;
    faq: string;
    joinWaitingList: string;
    tnc: string;
    privacyPolicy: string;
    refundPolicy: string;
    guide: string;
  };
  catalogue: {
    tags: string;
    title: string;
    description: string;
    search: {
      placeholder: string;
    };
    list: {
      certifiedBy: string;
      certificationDate: string;
      productDetails: string;
      productId: string;
      blockchainRecord: string;
      nftId: string;
      transactionHash: string;
      blockNumber: string;
    };
    button: {
      close: string;
      viewDetails: string;
      viewCertificate: string;
    };
  };
  status: {
    verified: {
      title: string;
      description: string;
    };
    rejected: {
      title: string;
      description: string;
    };
    pending: {
      title: string;
      description: string;
    };
    certified: {
      title: string;
      description: string;
    };
    revoked: {
      title: string;
      description: string;
    };
    expired: {
      title: string;
      description: string;
    };
  };
  verification: {
    title: string;
    description: string;
    productVerification: {
      title: string;
      description: string;
      productId: {
        title: string;
        label: string;
        placeholder: string;
        error: {
          required: string;
        };
        note: string;
      };
      productImage: {
        title: string;
        placeholder: {
          click: string;
          dragAndDrop: string;
        };
        error: {
          required: string;
        };
        note: string;
      };
    };
    items: {
      productId: string;
      productName: string;
      status: string;
    };
    guidelines: {
      title: string;
      verificationPath: string;
      communityApproval: string;
      governmentVerification: string;
    };
    button: {
      submit: string;
      close: string;
    };
  };
  faq: {
    getHelpSupport: string;
    faq: string;
    desc: string;
    search: string;
    filterCategory: string;
    quickNav: string;
    stillNeedHelp: string;
    descContactSupport: string;
    contactSupport: string;
  };
  general: { clickToNavigate: string };
  faqData: {
    [id: string]: {
      category: string;
      questions: {
        [questionId: string]: {
          question: string;
          answer: {
            main?: string;
            child?: string[];
          };
        };
      };
    };
  };
  tnc: {
    legalDoc: string;
    tnc: string;
    desc: string;
    tableOfContent: string;
  };
  tncData: {
    [id: string]: {
      title: string;
      content: {
        main?: string;
        child?: string[];
      };
    };
  };
  guide: {
    title: string;
    desc: string;
    tableName: string;
    tableActions: string;
    buttonOverview: string;
    download: string;
  };
  privacy: {
    yourPrivacy: string;
    pp: string;
    desc: string;
    tableOfContent: string;
  };
  privacyPolicyData: {
    [id: string]: {
      title: string;
      content: {
        main?: string;
        child?: (string | { main: string; child?: string[] })[];
      };
    };
  };
  refundPolicy: {
    refundPolicy: string;
    yourConvenientMatters: string;
    desc: string;
    tableOfContent: string;
    paymentInfo: string;
    contactSupport: string;
  };
  refundPolicyData: {
    [id: string]: {
      title: string;
      content: {
        main?: string;
        child?: string[];
      };
    };
  };
  products: {
    heroTitle: string;
    heroDesc: string;
    lbt: {
      title: string;
      desc: string;
      askForDetail: string;
      contactUsForPricing: string;
      cta: string;
    };
    ocp: {
      title: string;
      desc: string;
      startingFrom: string;
      professionalCertPackage: string;
      cta: string;
    };
    lbtFeatures: {
      sectionTitle: string;
      blockchain: { title: string; desc: string };
      community: { title: string; desc: string };
      region: { title: string; desc: string };
      qr: { title: string; desc: string };
      profileBadge: { title: string; desc: string };
      nftCertificate: { title: string; desc: string };
    };
    ocpFeatures: {
      sectionTitle: string;
      origin: { title: string; desc: string };
      blockchain: { title: string; desc: string };
      quality: { title: string; desc: string };
      consumer: { title: string; desc: string };
    };
    steps: {
      sectionTitle: string;
      sectionDesc: string;
      registerTitle: string;
      registerDesc: string;
      paymentTitle: string;
      paymentDesc: string;
      reviewTitle: string;
      reviewDesc: string;
      mintTitle: string;
      mintDesc: string;
    };
    stepsOCP: {
      sectionTitle: string;
      sectionDesc: string;
      registerTitle: string;
      registerDesc: string;
      paymentTitle: string;
      paymentDesc: string;
      reviewTitle: string;
      reviewDesc: string;
      mintTitle: string;
      mintDesc: string;
    };
    ctaTitle: string;
    ctaDesc: string;
    cta: string;
  };
}
