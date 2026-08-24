import { MainCategory, ProductItem, EvidenceItem, NewsItem, GalleryItem, FacilityPhoto, PatentCertificate } from '../types';

export const COMPANY_INFO = {
  nameKo: '맥섬석GM㈜',
  nameEn: 'Macsumsuk GM Co., Ltd.',
  brandKo: '그로피드 (Growfeed®)',
  brandEn: 'Growfeed®',
  ceo: '곽성근',
  ceoEn: 'Sung-Keun Kwak',
  establishedYear: '1986',
  address: '경상북도 영천시 대창면 한제길 44',
  addressEn: '44, Hanje-gil, Daechang-myeon, Yeongcheon-si, Gyeongsangbuk-do, Korea',
  phone: '054-336-6000',
  mobile: '010-3191-5500',
  fax: '054-336-5522',
  email: 'mls6000@naver.com',
  website: 'www.macsumsuk.com',
  brandWebsite: 'www.growfeed.com',
  mineSize: '223ha (맥섬석 원료광산 자체 소유 및 독점 채굴권)',
  factories: [
    {
      nameKo: '영천 본사 및 1공장',
      nameEn: 'Yeongcheon Head Office & Plant 1',
      siteArea: '부지 32,780㎡ / 건물 4,687㎡',
      capacity: '저메탄 사료첨가제 단미사료 시간당 6톤 생산설비 (대량 양산 라인)',
      role: '본사 운영, R&D 부설연구소, 고도화 과립/단미사료 메인 생산'
    },
    {
      nameKo: '경주 분체 및 소성 2공장',
      nameEn: 'Gyeongju Powder & Calcination Plant 2',
      siteArea: '부지 8,769㎡ / 건물 1,199㎡',
      capacity: '보조사료 월 600~800톤 생산',
      role: '맥섬석 원광 분체가공 및 특허 고열소성 전문 시설'
    },
    {
      nameKo: '산란계 시험 전용 사육장',
      nameEn: 'Dedicated Layer Research Poultry Farm',
      siteArea: '부지 1,787㎡',
      capacity: '계란 사양시험 및 난각/난황 품질 실시간 모니터링',
      role: '현장 필드 실증 및 데이터 피드백 테스트베드'
    }
  ]
};

export const GNB_CATEGORIES: MainCategory[] = [
  {
    key: 'about',
    depth1Ko: 'About Us',
    depth1En: 'About Us',
    shortDescKo: '40년 업력과 52개국 특허를 보유한 대한민국 대표 축산바이오 기업',
    shortDescEn: 'Korea’s leading livestock biotech enterprise with 40 years of heritage & 52-nation patents',
    subCategories: [
      {
        id: 'overview',
        titleKo: '회사 개요',
        titleEn: 'Company Overview',
        descKo: 'CI/슬로건, 대표이사 인사말, 비전·미션 및 핵심 생산 인프라',
        descEn: 'CI & slogan, CEO message, corporate vision, and key manufacturing infrastructure'
      },
      {
        id: 'awards',
        titleKo: '수상 실적 및 국내외 공인 인증',
        titleEn: 'Honors, Awards & Global Certifications',
        descKo: '은탑산업훈장, 세계일류상품(KOTRA), 글로벌 IP 스타기업, 국제 GMP, ISO22000',
        descEn: 'Tower of Industrial Merit, World-Class Product, GMP, and ISO22000'
      },
      {
        id: 'history',
        titleKo: '주요 연혁',
        titleEn: 'Milestones & History',
        descKo: '1986년 창업 이래 40년간 축적된 글로벌 성장 스토리와 주요 마일스톤',
        descEn: '40 years of innovation journey and major milestones since 1986'
      },
      {
        id: 'location',
        titleKo: '사업장 및 본사',
        titleEn: 'Business Sites & Head Office',
        descKo: '영천 본사·공장, 경주 분체공장 및 연구시설 오시는 길 안내',
        descEn: 'Maps and directions to Yeongcheon headquarters and manufacturing facilities'
      }
    ]
  },
  {
    key: 'products',
    depth1Ko: 'Products',
    depth1En: 'Products',
    shortDescKo: '저메탄·독소흡착·자원순환 고기능성 단미·보조사료 프리미엄 라인업',
    shortDescEn: 'Premium eco-friendly livestock feed additives for methane reduction and health',
    subCategories: [
      {
        id: 'etox',
        titleKo: 'Growfeed® E-TOX',
        titleEn: 'Growfeed® E-TOX',
        descKo: '저메탄 사료첨가제 & 톡신바인더 (세계일류상품 선정, 곰팡이독소 87~94% 제거)',
        descEn: 'Anti-mold toxin binder & eco-friendly feed additive with 87-94% toxin removal'
      },
      {
        id: 'protein',
        titleKo: 'Growfeed® Protein',
        titleEn: 'Growfeed® Protein',
        descKo: '혈액가공품 기반 ESG 단백질 사료첨가제 (국내유일 법적근거, 조단백 30%+)',
        descEn: 'Recycled livestock blood protein feed additive (Crude protein 30%+)'
      },
      {
        id: 'dcm',
        titleKo: 'Growfeed® DCM',
        titleEn: 'Growfeed® DCM',
        descKo: '메탄저감·기후위기 대응 사료 (반추위 메탄 61.5% 저감, 화학물질 無, 실온 1년)',
        descEn: 'De-Carbon & Methane reduction additive, reducing rumen methane up to 61.5%'
      },
      {
        id: 'livestock-guide',
        titleKo: '축종별 맞춤 컨설팅',
        titleEn: 'Livestock Tailored Consulting',
        descKo: '소(육우/젖소), 양돈(모돈/자돈), 양계(산란계/육계), 반려동물 & 양어·새우 맞춤 급여법',
        descEn: 'Tailored feeding dosage and application manuals for cattle, swine, poultry, pets, and aquaculture'
      }
    ]
  },
  {
    key: 'rnd',
    depth1Ko: 'R&D',
    depth1En: 'R&D',
    shortDescKo: '맥섬석 223ha 광산 기반 원적외선 고방사 기술과 국내외 최고 대학 공동연구',
    shortDescEn: 'Far-infrared high-radiation mineral technology & university-backed field trials',
    subCategories: [
      {
        id: 'methane-trials',
        titleKo: '저메탄 기술 및 시험성적',
        titleEn: 'Methane Reduction Data',
        descKo: '경북대 1·2차 in-vitro 시험 및 서울대 호흡대사챔버 한우 실증시험 데이터',
        descEn: 'In-vitro data from Kyungpook Nat’l Univ and Seoul Nat’l Univ chamber trials'
      },
      {
        id: 'mineral-tech',
        titleKo: '맥섬석 원적외선 기술',
        titleEn: 'Macsumsuk Far-Infrared Tech',
        descKo: '8~11μm 인체/가축 유익 파장 Wellion Ray, 방사율 90%+ 공인 기술 (KRISS 공인)',
        descEn: '8-11μm bio-active wavelength with over 90% emissivity certified by KRISS'
      },
      {
        id: 'patents',
        titleKo: '특허·지식재산권',
        titleEn: 'Patents & Intellectual Property',
        descKo: '세계 52개국 특허 및 상표 등록, 글로벌 IP 스타기업 선정 포트폴리오',
        descEn: 'Portfolio of patents & trademarks registered across 52 nations worldwide'
      }
    ]
  },
  {
    key: 'esg',
    depth1Ko: 'ESG',
    depth1En: 'ESG',
    shortDescKo: '축산 온실가스 감축과 도축 부산물 100% 자원순환을 실현하는 순환경제 모델',
    shortDescEn: 'Realizing circular economy through methane reduction and livestock blood recycling',
    subCategories: [
      {
        id: 'circular-mechanism',
        titleKo: '자원선순환 메커니즘',
        titleEn: 'Resource Circularity Mechanism',
        descKo: '도축 혈액 100% 밀폐 수거부터 초고온 순간멸균, 조단백 30%+ 사료화, 메탄 저감의 5단계 순환경제',
        descEn: '5-step closed-loop mechanism from sealed blood recovery to 30%+ protein upcycling and farm prosperity'
      },
      {
        id: 'ghg-reduction',
        titleKo: '온실가스·메탄 저감',
        titleEn: 'GHG & Methane Mitigation',
        descKo: '벌집구조 맥섬석 바이오세라믹 특허 기술로 반추위 장내발효 메탄 최대 61.5% 급감',
        descEn: 'Patented natural ceramic mineral technology cutting enteric ruminant methane up to 61.5%'
      },
      {
        id: 'blood-recycle',
        titleKo: '혈액가공품 자원순환',
        titleEn: 'Blood Byproduct Circularity',
        descKo: '도축 폐기 동물 혈액 전량 수거·순간멸균으로 수질오염 87.5% 방지 및 조단백 30%+ 고부가가치 사료화',
        descEn: 'Converting slaughterhouse blood into high-value 30%+ protein feed via instant flash sterilization'
      },
      {
        id: 'farm-income',
        titleKo: '농가 소득 증대',
        titleEn: 'Farm Income & Prosperity',
        descKo: 'FCR 1.69 글로벌 1위, 출하일령 2~4일 단축 및 경상북도 50% 보조사업을 통한 농가 실익 증진',
        descEn: 'FCR 1.69, shortened market days by 2-4 days & 50% provincial farm subsidy partnership'
      }
    ]
  },
  {
    key: 'global',
    depth1Ko: 'Global',
    depth1En: 'Global',
    shortDescKo: '누적 수출량 4,850톤+, 9년 연속 필리핀 수출과 동남아·유럽 시장 확장',
    shortDescEn: 'Over 4,850 tons exported globally with 9 consecutive years in Southeast Asia',
    subCategories: [
      {
        id: 'export-status',
        titleKo: '수출 현황 및 실적',
        titleEn: 'Export Track Record',
        descKo: '필리핀 Bio star 9년 연속 수출, 말레이시아, 베트남, 태국 등 글로벌 실적',
        descEn: 'Long-term export partnerships in the Philippines, Malaysia, Thailand, etc.'
      },
      {
        id: 'global-cert',
        titleKo: '국제 인증 현황',
        titleEn: 'International Certifications',
        descKo: '국제 GMP, ISO22000, HALAL(할랄) 등 수출용 국제 표준 인증 획득',
        descEn: 'International compliance with GMP, ISO 22000, and HALAL certificates'
      }
    ]
  },
  {
    key: 'pr',
    depth1Ko: 'PR',
    depth1En: 'PR',
    shortDescKo: '맥섬석GM의 홍보갤러리 및 최신 소식',
    shortDescEn: 'Latest photo archives and news updates of Macsumsuk GM',
    subCategories: [
      {
        id: 'gallery',
        titleKo: '홍보갤러리',
        titleEn: 'PR Gallery',
        descKo: '스마트 제조공장 현장, 해외 박람회 부스, 산학 시험 현장 사진 아카이브',
        descEn: 'High-resolution photo archives of manufacturing plants and global expos'
      },
      {
        id: 'news',
        titleKo: '최신 소식',
        titleEn: 'Latest News',
        descKo: '국내외 주요 일간지 및 농축산 전문지 언론보도 및 최신 소식',
        descEn: 'Media highlights, newspaper articles, and corporate news updates'
      }
    ]
  },
  {
    key: 'contact',
    depth1Ko: 'Contact',
    depth1En: 'Contact',
    shortDescKo: '제품 구매, 기술 제휴, OEM/ODM 및 해외 총판 문의 창구',
    shortDescEn: 'Direct channel for purchasing, technical partnerships, OEM/ODM, and dealerships',
    subCategories: [
      {
        id: 'contact-info',
        titleKo: '연락처 및 운영시간',
        titleEn: 'Contact & Operating Hours',
        descKo: '대표전화(054-336-6000), 팩스, 담당자 직통 및 고객센터 운영시간 안내',
        descEn: 'Office phone, direct contacts, email, and customer operating hours'
      },
      {
        id: 'location',
        titleKo: '오시는 길',
        titleEn: 'Directions & Location',
        descKo: '경상북도 영천시 대창면 한제길 44 맥섬석GM 본사 및 공장 오시는 길',
        descEn: '44, Hanje-gil, Daechang-myeon, Yeongcheon-si, Gyeongsangbuk-do, Korea'
      },
      {
        id: 'online-inquiry',
        titleKo: '온라인 문의',
        titleEn: 'Online Inquiry',
        descKo: '축종별 맞춤 컨설팅, 견적 문의, OEM/ODM 사료 개발 및 제휴 상담',
        descEn: 'Livestock consulting, quotations, OEM/ODM formulations, and partnerships'
      }
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'etox',
    name: '그로피드 이톡스',
    engName: 'Growfeed® E-TOX',
    badge: '글로벌 품질검증 사료첨가제',
    badgeEn: 'Globally Validated Feed Additive',
    category: '저메탄 사료첨가제 / 톡신바인더 (복합기능성)',
    categoryEn: 'Low-Methane Feed Additive / Mycotoxin Binder (Multi-Functional)',
    taglineKo: '주요 곰팡이독소 87~94% 흡착 제거 및 사료효율 극대화',
    taglineEn: '87-94% Mycotoxin Adsorption & Feed Conversion Optimization',
    summaryKo: '맥섬석 천연 광물 원료를 특허 고열소성하여 제조한 고기능성 사료첨가제. 아프라톡신, 오크라톡신 등 5대 사료 곰팡이독소를 완벽에 가깝게 흡착 배출하며, 9년 연속 필리핀 수출(누적 4,850톤+)로 글로벌 품질이 입증되었습니다.',
    summaryEn: 'High-functional feed additive utilizing patented calcined Macsumsuk mineral. Effectively binds and eliminates major mycotoxins (87-94%), proven with over 4,850 tons exported across 9 consecutive years.',
    specs: [
      { labelKo: '포장 단위', labelEn: 'Packaging', valueKo: '20kg / 포 (bag)', valueEn: '20kg / bag' },
      { labelKo: '권장 사용량', labelEn: 'Dosage', valueKo: '사료 1톤당 1~2kg 첨가 (0.1 ~ 0.2%)', valueEn: '1-2kg per ton of feed (0.1 - 0.2%)' },
      { labelKo: '제품 제형', labelEn: 'Form', valueKo: '소성공정 과립형 규산염제 (분진 없는 그래뉼)', valueEn: 'Calcined Granular Silicate (Dust-free)' },
      { labelKo: '주요 원료', labelEn: 'Main Ingredients', valueKo: '맥섬석 천연 미네랄 (무항생제 천연소재)', valueEn: '100% Natural Macsumsuk Mineral' },
      { labelKo: '적용 축종', labelEn: 'Target Livestock', valueKo: '소(한우/젖소), 양돈, 양계(산란계/육계), 양어, 펫', valueEn: 'Cattle, Swine, Poultry, Aquaculture, Pet' }
    ],
    keyFeaturesKo: [
      '국가공인 사료검증기관(충남대) 시험결과 5대 곰팡이 독소 87~94% 흡착 제거',
      '소성가공 과립형으로 분진 날림이 없고 사료 배합 시 균일 혼합 우수',
      '축사 내 암모니아 및 유해가스 20~30% 감소로 사육 환경 쾌적화',
      '사료요구율(FCR) 개선으로 출하기일 2~4일 단축 및 증체율 향상',
      '9년 연속 해외 수출(누적 4,850톤+) 및 2025 세계일류상품 선정'
    ],
    keyFeaturesEn: [
      'Certified 87-94% elimination of 5 major mycotoxins by Chungnam Nat’l Univ',
      'Granular formula with zero dust emissions and superior mixing homogeneity',
      '20-30% reduction in ammonia and barn odors for healthier livestock',
      'Improved Feed Conversion Ratio (FCR), shortening market days by 2-4 days',
      'Proven track record: 4,850+ tons exported globally over 9 continuous years'
    ],
    testResultsKo: [
      { metric: '오크라톡신 A 제거율', value: '93.7%', note: '충남대 공인 분석 (접수일 2016.05)' },
      { metric: '아프라톡신 전체 제거율', value: '89.6%', note: '국가사료검증기관 공인 시험' },
      { metric: 'T-2 톡신 제거율', value: '89.7%', note: '0.2% 첨가 기준' },
      { metric: '육계 FCR 개선', value: '1.69', note: '필리핀 CLSU 시험 (대조군 1.87 대비 대폭 개선)' }
    ],
    testResultsEn: [
      { metric: 'Ochratoxin A Adsorption', value: '93.7%', note: 'Chungnam Nat’l Univ Certified Assay' },
      { metric: 'Total Aflatoxin Adsorption', value: '89.6%', note: 'Official Feed Inspection Agency' },
      { metric: 'T-2 Toxin Adsorption', value: '89.7%', note: 'At 0.2% inclusion rate' },
      { metric: 'Broiler FCR', value: '1.69', note: 'CLSU Trial (vs Control 1.87)' }
    ],
    applicableAnimalsKo: ['육우·젖소·양', '모돈·비육돈·자돈', '산란계·육계·오리', '틸라피아·새우', '반려견·반려묘'],
    applicableAnimalsEn: ['Beef & Dairy Cattle', 'Breeding & Fattening Pigs', 'Layers, Broilers & Ducks', 'Tilapia & Shrimp', 'Dogs & Cats'],
    packagingKo: '20kg / 포',
    packagingEn: '20kg / Bag',
    dosageKo: '사료 1톤당 1~2kg (0.1~0.2%)',
    dosageEn: '1-2kg per ton of feed (0.1-0.2%)',
    patentNo: '특허 제10-09997**호 외 다수 (세계 52개국 등록)',
    patentNoEn: 'Patent No. 10-09997** & global patents across 52 nations',
    imageUrl: 'https://lh3.googleusercontent.com/d/1L8ZtL9QfU1KwtGzoXgRMFaxNTf1F22Hw',
    colorScheme: {
      primary: '#059669',
      bgBadge: 'bg-emerald-50',
      textBadge: 'text-emerald-800',
      lightBg: 'bg-emerald-50/50',
      border: 'border-emerald-200'
    }
  },
  {
    id: 'protein',
    name: '그로피드 프로테인',
    engName: 'Growfeed® Protein',
    badge: '도축혈액 자원순환 특허 사료첨가제',
    badgeEn: 'Patented Bio-Recycled Blood Protein Additive',
    category: '기능성 단백질 사료첨가제 (순환자원형)',
    categoryEn: 'Functional Bio-Protein Feed Additive (Circular Resource)',
    taglineKo: '국내 유일 혈액+규산염 복합 제조기술로 탄생한 고품질 단백질',
    taglineEn: 'Korea’s Only Patented Blood + Mineral Bio-Recycled Protein Feed',
    summaryKo: '도축장에서 발생하는 신선한 가축 혈액과 맥섬석 미네랄을 결합하여 순간멸균(180~250℃, 5~7초) 과립 건조한 친환경 단백질 사료첨가제입니다. 단미·보조사료 공정 규격집에 공식 등재된 국내 유일의 독보적 혈액가공품입니다.',
    summaryEn: 'An eco-friendly protein feed additive combining fresh livestock blood with Macsumsuk minerals through 180-250°C instant sterilization. Officially registered as Korea’s only authorized blood-processed feed.',
    specs: [
      { labelKo: '성분 함량', labelEn: 'Nutrients', valueKo: '조단백질 30%+ 이상, 천연 규산염(SiO2) 35~40%, 필수미네랄 10종', valueEn: 'Crude Protein 30%+, SiO2 35-40%, 10 Essential Minerals' },
      { labelKo: '제조 공법', labelEn: 'Manufacturing', valueKo: '180~250℃ 5~7초 순간멸균 과립건조 (영양소 열변성 제로)', valueEn: '180-250°C Instant Sterilization Granulation' },
      { labelKo: '제품 제형', labelEn: 'Form', valueKo: '과립형(초기용) / 펠렛형(중·후기용)', valueEn: 'Granule (Starter) / Pellet (Grower-Finisher)' },
      { labelKo: '법적 근거', labelEn: 'Regulatory', valueKo: '사료공정규격집 제2편 혈액가공품 공식 등록 품목', valueEn: 'Officially Authorized Blood-processed Feed Product' },
      { labelKo: '납품 현황', labelEn: 'Supply Record', valueKo: '전국 60여 산란계·육돈 농가 및 영천·포항·울산 축협 납품', valueEn: 'Supplied to 60+ commercial poultry/swine farms & Livestock Cooperatives' }
    ],
    keyFeaturesKo: [
      '혈장과 혈구를 전량 활용하는 전라인 연결공법으로 환경오염 제로화 (수질 폐수 87.5% 절감)',
      '180~250℃ 초고온 5~7초 순간 멸균으로 유해 병원균 완벽 살균 및 단백질 영양소 원형 보존',
      '타사 일반 건조혈분(135℃ 10분 삶음 방식) 대비 소화 흡수율 월등히 우수',
      '산란계 급여 시 난각 강도 증가, 난황색 진해짐, 축사 암모니아 냄새 현저한 감소',
      '경상북도 혈액가공품 농가 지원사업(50% 지원) 품목 선정 및 중기부 무상개발자금 지원'
    ],
    keyFeaturesEn: [
      'Zero wastewater discharge by processing whole blood through sealed in-line system',
      '180-250°C instant flash sterilization destroying pathogens while preserving amino acids',
      'Far superior digestibility compared to conventional blood meal (135°C 10-min boiling)',
      'Improves eggshell thickness, deep yolk pigmentation, and reduces coop odor',
      'Selected for Gyeongbuk Provincial Government Farm Subsidy Project (50% funded)'
    ],
    testResultsKo: [
      { metric: '조단백질 함량', value: '30% 이상', note: '필수 아미노산 18종 및 복합 미네랄 풍부' },
      { metric: '순간멸균 시간', value: '5~7초', note: '180~250℃ 순간 가열로 영양소 파괴 최소화' },
      { metric: '국내 납품 농가', value: '60+ 개소', note: '대한산란계협회장 영주 거성농장(30만수) 등' },
      { metric: '출하일령 단축', value: '3일 단축', note: '경북 축산기술연구소 사양시험 결과' }
    ],
    testResultsEn: [
      { metric: 'Crude Protein Content', value: '30%+', note: 'Rich in 18 amino acids & minerals' },
      { metric: 'Flash Sterilization', value: '5-7 sec', note: '180-250°C preserving intact protein' },
      { metric: 'Domestic Supply Farms', value: '60+ Farms', note: 'Including 300,000-layer farm & Cooperatives' },
      { metric: 'Market Days Reduction', value: '3 Days', note: 'Gyeongbuk Livestock Tech Institute' }
    ],
    applicableAnimalsKo: ['산란계·육계·오리 (산란율 및 난각 강화)', '모돈·자돈 (설사 예방 및 면역 강화)', '넙치·뱀장어·어류', '반려동물 사료 원료'],
    applicableAnimalsEn: ['Layers, Broilers & Ducks', 'Sows & Piglets (Anti-diarrhea)', 'Flounder, Eel & Aqua species', 'Pet Food Raw Materials'],
    packagingKo: '20kg / 포 (과립형, 펠렛형)',
    packagingEn: '20kg / Bag (Granules & Pellets)',
    dosageKo: '사료 1톤당 2~5kg (0.2~0.5%)',
    dosageEn: '2-5kg per ton of feed (0.2-0.5%)',
    patentNo: '특허 제10-24962**호 (가축혈액 다공질 펠렛 사료 제조방법)',
    patentNoEn: 'Patent No. 10-24962** (Porous blood pellet manufacturing)',
    imageUrl: 'https://lh3.googleusercontent.com/d/1pdtWxYpffVq5L-x08vP2b85kJffn9vOL',
    colorScheme: {
      primary: '#0284c7',
      bgBadge: 'bg-sky-50',
      textBadge: 'text-sky-900',
      lightBg: 'bg-sky-50/50',
      border: 'border-sky-200'
    }
  },
  {
    id: 'dcm',
    name: '그로피드 DCM',
    engName: 'Growfeed® DCM',
    badge: '서울대 실증 / 반추위 메탄 61.5% 저감',
    badgeEn: 'SNU Trial Verified / 61.5% Rumen Methane Cut',
    category: '메탄가스·온실가스 저감형 단미사료 (기후위기 대응)',
    categoryEn: 'Methane & GHG Mitigating Feed (Climate Solution)',
    taglineKo: '천연 미네랄 기반으로 반추위 메탄 발생량을 획기적으로 줄이는 저탄소 사료',
    taglineEn: 'Natural Mineral-Based Enteric Methane Reduction Feed Additive',
    summaryKo: '맥섬석 천연 규산염 원료의 다공질 벌집 구조와 수소 흡착 특성을 응용하여 반추동물(한우, 젖소) 장내 발효 메탄을 최대 61.5% 저감시키는 차세대 친환경 사료첨가제입니다. 화학 합성물(Bovaer 등)과 달리 인체·가축에 무해하며 상온에서 1년간 장기 보관이 가능합니다.',
    summaryEn: 'Next-generation eco-friendly feed additive cutting enteric methane by up to 61.5% through natural porous mineral honeycomb mechanics. Unlike synthetic chemicals (Bovaer), 100% non-hazardous with 1-year room temperature stability.',
    specs: [
      { labelKo: '주요 원료', labelEn: 'Raw Material', valueKo: '100% 천연 맥섬석 미네랄 (고열소성 규산염)', valueEn: '100% Natural Mineral Macsumsuk' },
      { labelKo: '메탄 저감 효과', labelEn: 'Methane Cut', valueKo: '반추위 장내발효 메탄 발생량 최대 61.5% 저감 (경북대 2차 시험)', valueEn: 'Up to 61.5% reduction in enteric methane (KNU 2nd Trial)' },
      { labelKo: '안전성 분류', labelEn: 'Safety', valueKo: '유해성 분류 비대상 (Non-hazardous) / 인체 및 축종 유해성 전혀 없음', valueEn: 'Classified Non-Hazardous / Zero toxicity to humans and cattle' },
      { labelKo: '보관 및 유통', labelEn: 'Storage & Shelf Life', valueKo: '실온 보관 가능 / 유통기한 최대 1년 (냉장 불필요)', valueEn: 'Room temperature storage / Up to 1 year shelf-life (No fridge required)' },
      { labelKo: '실증 현황', labelEn: 'Field Trials', valueKo: '서울대 그린바이오연구원 호흡대사챔버 한우 실증시험 진행 중 (2025.12~2026.6)', valueEn: 'Seoul Nat’l Univ GreenBio Respiration Chamber Trial underway' }
    ],
    keyFeaturesKo: [
      '반추위 내 수소(H2) 이용 경로를 프로피온산 생성으로 전환시켜 메탄 생성을 억제하고 에너지 효율 극대화',
      '네덜란드 DSM의 화학합성 저메탄제(Bovaer) 대비 뛰어난 안전성, 실온 1년 보관 편의성, 복합 효능(톡신바인더+사료효율+유량)',
      '1차 시험(2014년)에서 최고 메탄저감 항생제 ‘모넨신’과 동등 이상의 효과 확인 (경북대 축산학과)',
      '2차 시험(2025년 7월)에서 MAC+HV 0.5% 투여군 메탄 발생률 1.81%로 대조군(4.53%) 대비 61.5% 격감',
      '전 축종(육우, 젖소, 양돈, 양계)에 안전하게 적용 가능'
    ],
    keyFeaturesEn: [
      'Shifts rumen H2 pathways toward propionate synthesis, suppressing CH4 and boosting energy',
      'Superior to synthetic Bovaer: 100% natural, 1-year shelf life at room temp, plus toxin binding & FCR gains',
      '1st trial (KNU 2014) confirmed efficacy equivalent to antibiotic monensin without negative side-effects',
      '2nd trial (KNU 2025) achieved 61.5% methane reduction (1.81% CH4 vs 4.53% CON)',
      'Versatile & safe across ruminants (beef cattle, dairy cows) and monogastrics'
    ],
    testResultsKo: [
      { metric: '메탄(CH4) 저감율', value: '최대 61.5%', note: '경북대 2차 시험 (MAC+HV 0.5% 처리구)' },
      { metric: '보관 편의성', value: '실온 1년 (52배)', note: 'Bovaer(냉장 2주 필수) 대비 압도적 편의성' },
      { metric: '화학합성 물질', value: '0% (천연광물)', note: '흡입/피부 자극성 없는 안전한 천연 원료' },
      { metric: '한우 실증 검증', value: '서울대 진행 중', note: '국내 최초 농진청 공식 승인 목표 과제' }
    ],
    testResultsEn: [
      { metric: 'Methane (CH4) Reduction', value: 'Up to 61.5%', note: 'KNU 2nd In-Vitro Trial (0.5% treatment)' },
      { metric: 'Shelf Stability', value: '1 Year at Room Temp', note: '52x longer than Bovaer (2 wks at 4°C)' },
      { metric: 'Synthetic Chemical', value: '0% (All Natural)', note: 'Non-irritant natural mineral formulation' },
      { metric: 'Hanwoo Cattle Validation', value: 'In Progress at SNU', note: 'Targeting RDA Official Low-Carbon Certification' }
    ],
    applicableAnimalsKo: ['한우·육우 (메탄 저감, 사료효율 증대, 육질 개선)', '젖소 (유량 증가, 체세포수 감소, 고온스트레스 완화)', '양돈 및 양계 (유해가스 저감 및 FCR 개선)'],
    applicableAnimalsEn: ['Beef Cattle (CH4 Cut, FCR, Meat Quality)', 'Dairy Cows (Milk Yield, Somatic Cell Cut)', 'Swine & Poultry (Odor Cut, Energy Gains)'],
    packagingKo: '20kg / 포 (과립형)',
    packagingEn: '20kg / Bag (Granules)',
    dosageKo: '사료 1톤당 2~5kg (0.2~0.5%)',
    dosageEn: '2-5kg per ton of feed (0.2-0.5%)',
    patentNo: '특허 제10-2369867호 (천연 미네랄 기반 점토광물 메탄가스 저감용 사료첨가제)',
    patentNoEn: 'Patent No. 10-2369867 (Natural mineral methane reduction feed additive)',
    imageUrl: '',
    isComingSoon: true,
    colorScheme: {
      primary: '#0d9488',
      bgBadge: 'bg-teal-50',
      textBadge: 'text-teal-900',
      lightBg: 'bg-teal-50/50',
      border: 'border-teal-200'
    }
  }
];

export const CORE_COMPETENCIES = [
  {
    num: '01',
    titleKo: '세계 52개국 특허 & 글로벌 인증',
    titleEn: '52-Nation Patents & Global Certifications',
    subtitleKo: '은탑산업훈장 수훈 & 경북 PRIDE 수출기업',
    subtitleEn: 'Tower of Industrial Merit & Gyeongbuk PRIDE Exporter',
    descKo: '미국, 중국, 일본, 유럽 등 52개국 특허 및 상표 등록. 국제 GMP, ISO22000, 할랄(HALAL), 이노비즈 및 정부 은탑산업훈장 수훈으로 입증된 품질.',
    descEn: 'Over 52 country patents/trademarks, Tower of Industrial Merit, Gyeongbuk PRIDE Exporter, GMP, and ISO22000 certified.',
    badgeKo: '국가 공인 신뢰도',
    badgeEn: 'State-Certified Excellence',
    stat: '52개국',
    statEn: '52 Nations',
    statLabelKo: '글로벌 특허/상표',
    statLabelEn: 'Global Patents & IP'
  },
  {
    num: '02',
    titleKo: '대학 공동연구 공인 사양시험',
    titleEn: 'University-Backed Empirical Trial Data',
    subtitleKo: '서울대·경북대·충남대 & 필리핀 CLSU',
    subtitleEn: 'Seoul Nat’l, Kyungpook, Chungnam & CLSU',
    descKo: '경북대 2차 시험 메탄 61.5% 저감, 충남대 곰팡이독소 93.7% 제거, 서울대 호흡대사챔버 실증시험 및 필리핀 루손주립대 300수 육계 시험 완료.',
    descEn: 'Rigorous empirical trial data: 61.5% methane cut (KNU), 93.7% toxin removal (CNU), and SNU respiration chamber field trials.',
    badgeKo: '데이터 기반 실증',
    badgeEn: 'Empirically Validated Data',
    stat: '61.5%',
    statEn: '61.5%',
    statLabelKo: '최대 메탄 저감률',
    statLabelEn: 'Peak Methane Cut'
  },
  {
    num: '03',
    titleKo: '저메탄·원적외선 원천기술',
    titleEn: 'Proprietary Low-Methane & Far-Infrared Tech',
    subtitleKo: '223ha 자체 광산 & 8~11μm Wellion Ray',
    subtitleEn: '223ha Proprietary Mine & 8-11μm Wellion Ray',
    descKo: '세계적 희귀광물 맥섬석 223ha 광산을 독점 보유. 방사율 90%+의 인체·가축 유익 원적외선 고방사 기술로 장내 미생물 활성화 및 메탄 발생 원천 억제.',
    descEn: 'Proprietary 223ha Macsumsuk mineral mine with 90%+ far-infrared emissivity (Wellion Ray) suppressing enteric methane at the source.',
    badgeKo: '원천소재 독점 보유',
    badgeEn: 'Exclusive Mineral Mine',
    stat: '223ha',
    statLabelKo: '자체 원천기술',
    statLabelEn: 'Proprietary Technology'
  }
];

export const EVIDENCE_DATA: EvidenceItem[] = [
  {
    id: 'methane-trial-2',
    category: 'methane',
    titleKo: '경북대학교 반추위 메탄가스 저감 2차 시험 성적 (in-vitro)',
    titleEn: 'Kyungpook National University 2nd Methane Reduction Trial (In-Vitro)',
    institutionKo: '경북대학교 생태환경대학 축산학과 (연구책임자: 김은중 교수)',
    institutionEn: 'Kyungpook Nat’l Univ, Dept. of Animal Science (Prof. Eun-Joong Kim)',
    date: '2025년 07월',
    dateEn: 'July 2025',
    summaryKo: '반추위 소화발효 모델에서 천연광물 맥섬석 복합체(MAC+HV) 0.5% 투여 시 메탄가스(CH4) 농도가 대조군 4.53%에서 1.81%로 급감하여 61.5%의 경이적인 메탄 저감율을 기록하였습니다.',
    summaryEn: 'In-vitro rumen fermentation model demonstrated that 0.5% MAC+HV inclusion drastically plunged methane (CH4) from 4.53% CON to 1.81%, achieving a landmark 61.5% reduction without disrupting digestion.',
    highlightNumber: '61.5%',
    highlightNumberEn: '61.5%',
    highlightUnit: '저감',
    highlightUnitEn: 'Cut',
    highlightLabelKo: '메탄(CH4) 농도 최대 감소율',
    highlightLabelEn: 'Peak Enteric Methane (CH4) Reduction',
    metrics: [
      { label: '대조군 (CON) CH4 농도', labelEn: 'Control (CON) CH4 Conc.', value: '4.53%', valueEn: '4.53%', baseline: '기준치 100%', baselineEn: 'Baseline 100%' },
      { label: 'MAC+HV 0.5% 투여군 CH4 농도', labelEn: 'MAC+HV 0.5% Treatment CH4 Conc.', value: '1.81%', valueEn: '1.81%', diff: '-61.5% 급감 (통계적 유의차 P<0.05)', diffEn: '-61.5% (Statistically significant P<0.05)' },
      { label: '메탄 절대발생량 (CON vs MAC+HV)', labelEn: 'Absolute CH4 Volume (CON vs MAC+HV)', value: '3.82ml ➔ 1.47ml', valueEn: '3.82ml ➔ 1.47ml', diff: '-61.5% 감소', diffEn: '-61.5% Reduction' },
      { label: '건물소화율 (DMD %)', labelEn: 'Dry Matter Digestibility (DMD %)', value: '50.41 ~ 51.99%', valueEn: '50.41 ~ 51.99%', note: '정상 발효 유지', noteEn: 'Normal rumen fermentation preserved' }
    ],
    keyTakeawaysKo: [
      '반추위 발효 환경에 악영향 없이 메탄 생성균의 수소 이용 경로를 propionate 생성으로 전환',
      '화학 합성 항생제 모넨신(Monensin) 및 네덜란드 Bovaer 대비 동등 이상의 저감 효과 확인',
      '사료 소화율 저하 없이 사료 에너지 이용 효율 동시 개선'
    ],
    keyTakeawaysEn: [
      'Shifts microbial hydrogen pathways toward propionate synthesis rather than methane generation',
      'Equal or superior efficacy to monensin antibiotic and synthetic Bovaer without chemical hazards',
      'Improves feed energy efficiency while maintaining normal dry matter digestibility'
    ]
  },
  {
    id: 'toxin-trial-cnu',
    category: 'toxin',
    titleKo: '충남대학교 국가사료검증기관 곰팡이독소 5종 흡착 공인 성적서',
    titleEn: 'Chungnam National University Certified Mycotoxin Binding Assay',
    institutionKo: '충남대학교 농업과학연구소 (국가공인 사료검증기관)',
    institutionEn: 'Chungnam Nat’l Univ, Institute of Agricultural Science (Certified Laboratory)',
    date: '공인 시험번호: SERIAL NO. 1605195-4',
    dateEn: 'Cert. Serial No. 1605195-4',
    summaryKo: '사료 내 0.2%(2kg/ton)의 극소량 첨가만으로 가축 소화기 및 면역체계를 파괴하는 치명적 곰팡이독소 5종(아프라톡신, 오크라톡신, 제랄레논, 푸모니신, T-2)을 87~94% 흡착·제거함을 공인 검증받았습니다.',
    summaryEn: 'Certified laboratory assay confirmed 87-94% adsorption of 5 critical feed mycotoxins (Aflatoxin, Ochratoxin, Zearalenone, Fumonisin, T-2) with just 0.2% (2kg/ton) inclusion.',
    highlightNumber: '93.7%',
    highlightNumberEn: '93.7%',
    highlightUnit: '제거',
    highlightUnitEn: 'Bound',
    highlightLabelKo: '오크라톡신 A 최대 흡착률',
    highlightLabelEn: 'Peak Ochratoxin A Binding Rate',
    metrics: [
      { label: '오크라톡신 A (Ochratoxin A)', labelEn: 'Ochratoxin A', value: '93.7% 제거', valueEn: '93.7% Bound', baseline: '국제 허용기준 완벽 대응', baselineEn: 'Meets Strict Global Limits' },
      { label: 'T-2 톡신 (T-2 Toxin)', labelEn: 'T-2 Toxin', value: '89.7% 제거', valueEn: '89.7% Bound', diff: '가축 출혈성 장염 예방', diffEn: 'Prevents hemorrhagic bowel lesions' },
      { label: '아프라톡신 전체 (Total Aflatoxin)', labelEn: 'Total Aflatoxin', value: '89.6% 제거', valueEn: '89.6% Bound', diff: '간독성 및 폐사 억제', diffEn: 'Suppresses hepatotoxicity & mortality' },
      { label: '푸모니신 (Fumonisin)', labelEn: 'Fumonisin', value: '88.8% 제거', valueEn: '88.8% Bound', diff: '사료 섭취량 정상화', diffEn: 'Restores feed intake appetite' },
      { label: '제랄레논 (Zearalenone)', labelEn: 'Zearalenone', value: '87.9% 제거', valueEn: '87.9% Bound', diff: '생식장애/사산 예방', diffEn: 'Prevents stillbirths & infertility' }
    ],
    keyTakeawaysKo: [
      '소성 가공 규산염 미네랄의 강력한 극성 정전기 흡착력으로 독소 선택적 바인딩',
      '위장관 내에서 비가역적으로 흡착되어 체내 흡수되지 않고 분변으로 안전하게 배출',
      '사료 내 유익 영양소(비타민, 미네랄)의 흡수는 저해하지 않는 스마트 바인딩 메커니즘'
    ],
    keyTakeawaysEn: [
      'Irreversible electrostatic polar binding permanently captures mycotoxin molecules',
      'Safely excretes toxins via feces without being absorbed through intestinal walls',
      'Smart binding mechanism that does not deplete essential dietary vitamins and minerals'
    ]
  },
  {
    id: 'clsu-poultry-trial',
    category: 'field',
    titleKo: '필리핀 루손주립대학교(CLSU) 300수 육계 사양 비교시험',
    titleEn: 'Central Luzon State University (CLSU) 300 Broiler Comparison Trial',
    institutionKo: '필리핀 축산과학 전문 루손주립대학교 (CLSU Biotechnology & Animal Science)',
    institutionEn: 'Central Luzon State University, Animal Science / Biotechnology',
    date: '300수 수컷 브로일러 · 32일간 · 6반복 사양시험',
    dateEn: '300 Male Broilers · 32-Day · 6-Replicate Trial',
    summaryKo: '세계 최고 수준의 미국산(CO-BIND AZ), 벨기에산(ELITOX) 제품과 직접 비교 사양한 결과, 그로피드 이톡스가 사료요구율(FCR 1.69), 생존율(98.33%), 간·콩팥 장기 건강도에서 전 항목 1위를 기록하였습니다.',
    summaryEn: 'Direct head-to-head trial against top global brands (CO-BIND AZ from USA, ELITOX from Belgium) demonstrated Growfeed E-TOX achieving superior FCR (1.69), 98.33% livability, and pristine organ health.',
    highlightNumber: '1.69',
    highlightNumberEn: '1.69',
    highlightUnit: 'FCR',
    highlightUnitEn: 'FCR',
    highlightLabelKo: '사료요구율 (사료 낭비 최소화)',
    highlightLabelEn: 'Feed Conversion Ratio (Top Global Rank)',
    metrics: [
      { label: '사료요구율 (FCR, 32일령)', labelEn: 'Feed Conversion Ratio (FCR, Day 32)', value: '그로피드 1.69 (1위)', valueEn: 'Growfeed 1.69 (Rank 1)', baseline: '미국 1.87 / 벨기에 1.89', baselineEn: 'USA 1.87 / Belgium 1.89' },
      { label: '출하시 생존율 (Livability %)', labelEn: 'Flock Livability (%)', value: '그로피드 98.33% (1위)', valueEn: 'Growfeed 98.33% (Rank 1)', baseline: '미국 96.67% / 벨기에 93.33%', baselineEn: 'USA 96.67% / Belgium 93.33%' },
      { label: '0~32일 체중 증가 (g)', labelEn: 'Weight Gain 0-32 Days (g)', value: '1,597g 증체 (1위)', valueEn: '1,597g (Rank 1)', baseline: '미국 1,434g / 벨기에 1,415g', baselineEn: 'USA 1,434g / Belgium 1,415g' },
      { label: '내장/간 장기 검사 결과', labelEn: 'Liver & Kidney Necropsy Health', value: '간·콩팥 상태 최우수', valueEn: 'Cleanest Liver & Kidney', note: '독소로 인한 장기 손상 없음', noteEn: 'Zero toxin-induced organ lesions' }
    ],
    keyTakeawaysKo: [
      '미국·유럽 최고가 프리미엄 사료첨가제 대비 사료 섭취당 증체 효율 11.4% 우위',
      '부검 결과 그로피드 급여군(T3 & T4)의 간 크기와 윤기가 정상 유지되어 독소 해독력 실증',
      '필리핀 Bio star 및 KFC 납품 양계농가 9년 연속 수출의 핵심 과학적 근거'
    ],
    keyTakeawaysEn: [
      '11.4% higher feed-to-meat conversion efficiency than highest-priced US and European brands',
      'Necropsy verified healthy glistening livers in Growfeed cohorts with zero fatty degeneration',
      'Serves as the scientific foundation for 9 continuous years of exports to Biostar and KFC poultry suppliers'
    ]
  },
  {
    id: 'bovaer-comparison',
    category: 'comparison',
    titleKo: '글로벌 메탄저감제 Bovaer® (DSM) 대비 기능적·보관 편의성 비교',
    titleEn: 'Competitive Benchmark: Growfeed DCM vs DSM Bovaer®',
    institutionKo: '맥섬석GM(주) 기업부설연구소 & 국내외 시험 데이터 종합',
    institutionEn: 'Macsumsuk GM R&D Center Comprehensive Benchmark',
    date: '2025~2026 최신 비교 분석',
    dateEn: '2025-2026 Comparative Assessment',
    summaryKo: '네덜란드 DSM의 단일기능 화학합성 메탄저감제 Bovaer 대비, Growfeed DCM은 천연 미네랄 기반으로 유해성이 없으며 실온에서 1년간 장기 보관이 가능하고 톡신바인더, 사료효율, 육질개선 등 복합 기능으로 농가 수익을 실질적으로 극대화합니다.',
    summaryEn: 'Compared to synthetic 3-NOP Bovaer (single-function, requires 4°C refrigeration, 2-week shelf life), Growfeed DCM is 100% natural, non-hazardous, stable at room temperature for 1 year, with multi-benefit farm profit optimization.',
    highlightNumber: '52배',
    highlightNumberEn: '52-Fold',
    highlightUnit: '보관성',
    highlightUnitEn: 'Shelf Life',
    highlightLabelKo: '실온 보관 유통기한 (Bovaer 2주 vs DCM 1년)',
    highlightLabelEn: 'Room Temperature Shelf Stability (2 wks vs 1 yr)',
    metrics: [
      { label: '원료 물질 성격', labelEn: 'Raw Material Base', value: '100% 천연 미네랄 (맥섬석)', valueEn: '100% Natural Mineral', baseline: 'Bovaer: 화학물질 (3-NOP 합성)', baselineEn: 'Bovaer: Synthetic Chemical (3-NOP)' },
      { label: '안전성 분류', labelEn: 'Safety Classification', value: '유해성 비대상 (안전)', valueEn: 'Non-Hazardous (Safe)', baseline: 'Bovaer: 인화성/부식성/자극성 건강유해', baselineEn: 'Bovaer: Flammable & Eye/Skin Irritant' },
      { label: '보관 조건 및 기간', labelEn: 'Storage & Expiration', value: '실온 보관 가능 / 최대 1년', valueEn: 'Room Temp / 1 Year', baseline: 'Bovaer: 4℃ 냉장 필수 / 최대 2주', baselineEn: 'Bovaer: Strict 4°C Cold Chain / 2 Wks' },
      { label: '부가 기능성 (농가 실익)', labelEn: 'Multi-Benefit Economics', value: '톡신바인딩 + 사료효율 + 육질/유량', valueEn: 'Toxin Binding + FCR + Milk Yield', baseline: 'Bovaer: 메탄저감 단일기능 (비용만 발생)', baselineEn: 'Bovaer: Methane-Only (Pure Cost Overhead)' }
    ],
    keyTakeawaysKo: [
      '농가 현장에서 냉장 설비 없이 일반 사료 창고에서 1년 동안 안정적으로 보관 및 사용 가능',
      '단순히 탄소 감축 규제 대응용 비용 지출이 아닌, 증체율 및 사료효율 개선으로 농가 자체 이익 창출',
      '인체 취급자 및 가축에 피부·호흡기 자극이 전혀 없는 안전한 친환경 솔루션'
    ],
    keyTakeawaysEn: [
      'Store safely in standard farm feed sheds for up to 1 year without expensive cold-chain equipment',
      'Generates direct farmer profitability through weight gain and toxin binding rather than pure regulatory cost',
      '100% non-irritating natural minerals, eliminating worker handling hazards and livestock respiratory stress'
    ]
  }
];

export const STATS_COUNTERS = [
  { value: 4850, suffix: '톤+', suffixEn: 'tons+', labelKo: '누적 해외 수출량', labelEn: 'Cumulative Export Volume', descKo: '9년 연속 필리핀 및 동남아 수출', descEn: '9 Consecutive Years in SE Asia' },
  { value: 52, suffix: '개국', suffixEn: 'Nations', labelKo: '글로벌 특허·상표 등록', labelEn: 'Global Patents & IP', descKo: '미국, 유럽, 일본, 중국 등', descEn: 'US, EU, Japan, China, etc.' },
  { value: 60, suffix: '개소+', suffixEn: 'Farms+', labelKo: '국내 사양 농가 및 축협', labelEn: 'Commercial Farm Clients', descKo: '산란계 30만수 거성농장, 영천축협 등', descEn: '300,000-Layer Farms & Cooperatives' },
  { value: 40, suffix: '년', suffixEn: 'Years', labelKo: '바이오광물 기술 업력', labelEn: 'Decades of Bio-Heritage', descKo: '1986년 화성실업 창업 이래 축적', descEn: 'Pioneering mineral biotech since 1986' },
  { value: 223, suffix: 'ha', suffixEn: 'ha', labelKo: '맥섬석 원료광산 규모', labelEn: 'Proprietary Mine Reserve', descKo: '자체 소유 및 독점 채굴권', descEn: 'Sole ownership & exclusive mining rights' },
  { value: 6, suffix: '톤/hr', suffixEn: 'tons/hr', labelKo: '시간당 사료 생산 능력', labelEn: 'Hourly Plant Output', descKo: '대량 공급 가능한 첨단 자동화 설비', descEn: 'Automated mass-production facilities' }
];

export const HISTORY_TIMELINE = [
  { year: '1986', titleKo: '화성실업 창업', titleEn: 'Founding of Hwaseong Enterprise', descKo: '맥섬석 광물 바이오 응용 기술 개발 착수', descEn: 'Commenced R&D on bio-active applications of Macsumsuk mineral' },
  { year: '1987', titleKo: '맥섬석 광산 개발 (223ha)', titleEn: 'Acquisition & Mining Rights (223ha)', descKo: '경북 지역 내 맥섬석 원료 광산 자체 소유 및 채굴권 확보', descEn: 'Secured sole ownership and exclusive rights of 223ha mineral deposit' },
  { year: '1989', titleKo: '화성실업 금호공장 설립', titleEn: 'Geumho Manufacturing Plant Built', descKo: '원광 소성 및 가공 양산 라인 구축', descEn: 'Constructed initial high-heat calcination and processing plant' },
  { year: '1993', titleKo: '맥섬석GM㈜ 상호 변경', titleEn: 'Incorporated as Macsumsuk GM Co., Ltd.', descKo: '중국 등 해외 상표 등록 및 법인 조직 확대', descEn: 'Registered international trademarks and expanded corporate structure' },
  { year: '1999', titleKo: '원적외선 응용기술 부설연구소 설립', titleEn: 'Corporate R&D Center Established', descKo: '국가공인 연구개발 전담조직 인가', descEn: 'Certified as state-recognized institutional R&D laboratory' },
  { year: '2006', titleKo: '제41회 발명의 날 "은탑산업훈장" 수훈', titleEn: 'Awarded Tower of Industrial Merit (Silver)', descKo: '국가 산업 기술 혁신 공로 인정 (조세의 날 성실납세자 표창 병행)', descEn: 'Conferred supreme governmental honor for industrial patent innovation' },
  { year: '2008', titleKo: '경북 수출 공동 브랜드 "PRIDE" 기업 선정', titleEn: 'Designated Gyeongbuk PRIDE Export Leader', descKo: '지자체 공식 유망 수출기업 지정', descEn: 'Designated premier regional exporter by provincial government' },
  { year: '2009', titleKo: '과립성형 맥섬석 사료첨가제 제조기술 특허', titleEn: 'Patented Granular Feed Additive Formulation', descKo: '분진 없는 그래뉼 사료 제형화 성공', descEn: 'Successfully developed dust-free high-density granule formulations' },
  { year: '2010', titleKo: '항곰팡이 톡신바인더 사료첨가제(E-TOX) 개발', titleEn: 'Launched Growfeed E-TOX Toxin Binder', descKo: '축산 곰팡이독소 억제제 본격 출시', descEn: 'Commercially released multi-action mycotoxin adsorption additive' },
  { year: '2012', titleKo: '독일 하노버(EuroTier) 및 태국 빅탐 참가', titleEn: 'Exhibited at EuroTier Hanover & VIV Asia', descKo: '글로벌 시장 진출 교두보 마련', descEn: 'Expanded overseas distribution channels in Europe and Southeast Asia' },
  { year: '2013', titleKo: '그로피드(Growfeed) 상표 52개국 등록', titleEn: 'Growfeed® Trademark Registered in 52 Countries', descKo: '글로벌 사료 전문 브랜드 아이덴티티 확립', descEn: 'Established global livestock brand presence across 52 nations' },
  { year: '2014', titleKo: '그로피드 사료 국제 할랄(HALAL) 인증 획득', titleEn: 'Received International HALAL Certification', descKo: '반추위 메탄저감 1차 사양시험 (경북대 김은중 교수)', descEn: 'Obtained HALAL compliance & completed 1st KNU rumen methane trial' },
  { year: '2015', titleKo: '가축 혈액 활용 다공질 과립 사료 제조 특허', titleEn: 'Patented Porous Blood-Recycled Feed Process', descKo: '국제특허(미국, 중국, 일본 등 13개국) 등록 및 규정집 최초 등재', descEn: 'Registered patents in 13 countries & listed in Official Feed Compendium' },
  { year: '2016', titleKo: '필리핀 그로피드이톡스 총판 계약 체결', titleEn: 'Signed Sole Distributorship in Philippines', descKo: '미국 Cobind AZ, 벨기에 Elitox 대비 비교사양 우위 입증', descEn: 'Outperformed top US and Belgian brands in CLSU poultry trials' },
  { year: '2019', titleKo: '경상북도 혈액가공품 농가 지원사업 품목 선정', titleEn: 'Selected for Provincial Farm Subsidy Program', descKo: '도축 혈액 자원순환 공공 가치 인정', descEn: 'Endorsed for 50% subsidized supply to regional livestock farms' },
  { year: '2020', titleKo: '글로벌 IP(특허) 스타기업 선정 & 경상북도지사 방문', titleEn: 'Designated Global IP Star Enterprise & Governor Visit', descKo: '단미사료/단백질류 사료제조업 정식 등록', descEn: 'Recognized for 52-country IP portfolio & certified protein manufacturing' },
  { year: '2022', titleKo: '혈액가공품 종합재활용업 공식 허가 획득', titleEn: 'Certified Comprehensive Resource Recycling Facility', descKo: 'ESG 순환경제 도축 혈액 자원화 인프라 완성', descEn: 'Established end-to-end zero-pollution animal blood recycling infrastructure' },
  { year: '2025', titleKo: '반추위 메탄 61.5% 저감 2차 검증 & 바이오세라믹 특허', titleEn: '61.5% Methane Cut Verification & Bio-Ceramic Patent', descKo: '경북대 2차 시험 메탄 61.5% 저감 검증, 벌집모양 Bio세라믹 특허 등록', descEn: 'KNU verified 61.5% methane reduction & patented honeycomb bio-ceramics' },
  { year: '2026', titleKo: '서울대 한우 메탄저감 호흡대사챔버 실증시험 & 480t 수출', titleEn: 'SNU Respiration Chamber Field Trial & 480t Export', descKo: '서울대 김경훈 교수 연구팀 실증, 필리핀 바이오스타 480t 수출 진행', descEn: 'SNU cattle chamber verification & 480-ton batch export to Biostar' }
];

export const AWARDS_LIST = [
  { code: 'tower' as const, titleKo: '은탑산업훈장', titleEn: 'Tower of Industrial Merit (Silver)', hostKo: '대한민국 정부 (제41회 발명의 날)', hostEn: 'Government of Republic of Korea', descKo: '원적외선 바이오 광물 응용 및 기술 혁신 국가 최고 훈장', descEn: 'Supreme state honor recognizing pioneering bio-mineral patent technologies' },
  { code: 'pride' as const, titleKo: '경상북도 수출 공동브랜드 PRIDE 기업', titleEn: 'Gyeongbuk PRIDE Export Brand Leader', hostKo: '경상북도 / 경북테크노파크', hostEn: 'Gyeongbuk Provincial Government', descKo: '글로벌 수출 경쟁력과 우수한 바이오 기술력을 공인받은 경북 대표 수출 기업', descEn: 'Designated leading provincial exporter for global competitiveness and bio-mineral innovation' },
  { code: 'ip-star' as const, titleKo: '글로벌 IP 스타기업', titleEn: 'Global IP Star Enterprise', hostKo: '특허청 / 경북지식재산센터', hostEn: 'Korean Intellectual Property Office (KIPO)', descKo: '52개국 지식재산권 확보 및 수출 기술 경쟁력 입증', descEn: 'Acknowledged for robust patent portfolios across 52 countries' },
  { code: 'gyeongbuk-sme' as const, titleKo: '경상북도 중소기업대상', titleEn: 'Gyeongbuk Best SME Grand Prize', hostKo: '경상북도', hostEn: 'Gyeongbuk Provincial Government', descKo: '지역 산업 발전 및 일자리 창출 우수 기업 표창', descEn: 'Honored for outstanding contribution to regional agricultural industry' },
  { code: 'taxpayer' as const, titleKo: '성실납세자상', titleEn: 'Exemplary Taxpayer Commendation', hostKo: '부총리 겸 재정경제부 장관', hostEn: 'Deputy Prime Minister & Ministry of Finance', descKo: '투명하고 건전한 기업 경영 및 납세 의무 성실 이행', descEn: 'Commended for transparent corporate governance and financial integrity' },
  { code: 'gmp-iso' as const, titleKo: '국제 GMP & ISO22000 인증', titleEn: 'International GMP & ISO 22000 Certified', hostKo: '국제인증기관 KMR', hostEn: 'KMR International Certification', descKo: '사료 안전 및 우수 제조 품질 관리 시스템 국제 표준 획득', descEn: 'Certified compliance with global feed safety and good manufacturing standards' },
  { code: 'innobiz' as const, titleKo: '기술혁신형 중소기업(Inno-Biz) & 벤처기업', titleEn: 'Inno-Biz & Certified Venture Enterprise', hostKo: '중소벤처기업부', hostEn: 'Ministry of SMEs and Startups', descKo: '기술력 및 성장 잠재력 공인 확인', descEn: 'Verified for proprietary technological innovation and future scalability' },
  { code: 'halal' as const, titleKo: '국제 HALAL(할랄) 인증', titleEn: 'International HALAL Certified', hostKo: '한국이슬람교중앙회', hostEn: 'Korea Muslim Federation (KMF)', descKo: '동남아 및 이슬람권 시장 수출 적격 인증', descEn: 'Export authorization certificate for Southeast Asia and Islamic markets' }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: 'news-1',
    type: 'media',
    titleKo: '맥섬석GM, 서울대학교와 반추가축 메탄저감 사료 호흡대사챔버 실증 연구 착수',
    titleEn: 'Macsumsuk GM initiates SNU respiration chamber trial for cattle methane reduction',
    source: '',
    sourceEn: '',
    date: '2026.01.15',
    summaryKo: '맥섬석GM(주)은 서울대 그린바이오과학기술연구원 김경훈 교수 연구팀과 천연 규산염 기반 저메탄 사료의 한우 장내발효 메탄 배출 저감 효과를 공인 검증하는 3차 실증 계약을 체결하고 본격 연구에 들어갔다.',
    summaryEn: 'Macsumsuk GM partners with Seoul National University GreenBio Institute (Prof. Kyung-Hoon Kim) to empirically test enteric methane reduction in Hanwoo beef cattle in respiration chambers.',
    badge: '산학 R&D',
    badgeEn: 'Joint R&D',
    imageUrl: 'https://www.amnews.co.kr/news/photo/202404/58690_45674_1723.jpg'
  },
  {
    id: 'news-2',
    type: 'media',
    titleKo: '그로피드 E-TOX, 필리핀 480톤 추가 수출 계약',
    titleEn: 'Growfeed E-TOX lands 480-ton export contract with Philippines partner',
    source: '',
    sourceEn: '',
    date: '2025.11.20',
    summaryKo: '맥섬석GM의 대표 수출 제품인 Growfeed E-TOX가 필리핀 Biostar사와 9년 연속 신뢰를 바탕으로 2026년 상반기 480톤(L/C) 수출 계약을 완료했다.',
    summaryEn: 'Growfeed E-TOX secured another 480-ton batch export order with long-term partner Biostar Philippines based on 9 years of continuous trust.',
    badge: '수출 성과',
    badgeEn: 'Export Milestone',
    imageUrl: 'https://lh3.googleusercontent.com/d/1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0'
  },
  {
    id: 'news-3',
    type: 'media',
    titleKo: '도축장 혈액 전량 자원화... 맥섬석GM, 친환경 ESG 단백질 사료로 축산 순환경제 선도',
    titleEn: 'Recycling 100% slaughterhouse blood: Macsumsuk GM leads livestock circular economy',
    source: '',
    sourceEn: '',
    date: '2025.08.12',
    summaryKo: '환경오염을 유발하던 폐기 가축 혈액을 맥섬석 규산염과 결합해 고단백(30%+) 사료로 재탄생시킨 ‘Growfeed Protein’이 경북도 지원사업과 전국 축협에 확대 공급되며 ESG 모델로 주목받고 있다.',
    summaryEn: 'Converting slaughterhouse animal blood into 30%+ high-protein feed with zero waste discharge: Growfeed Protein gains acclaim as a benchmark for livestock ESG circularity.',
    badge: 'ESG 경영',
    badgeEn: 'ESG Leadership',
    imageUrl: 'https://lh3.googleusercontent.com/d/1IAA96PObg2p6BHz6kWlxdtHaM8jsGXou'
  },
  {
    id: 'news-4',
    type: 'exhibition',
    titleKo: '2025 한국국제축산박람회(KISTOCK) 참가 및 차세대 저메탄 사료 라인업 공개',
    titleEn: 'Exhibiting at KISTOCK 2025: Unveiling next-generation low-carbon livestock solutions',
    source: '',
    sourceEn: '',
    date: '2025.09.10',
    summaryKo: '대구 EXCO에서 열린 한국국제축산박람회에 대형 부스로 참가하여 Growfeed DCM, Protein, E-TOX 등 4대 핵심 라인업을 국내외 바이어 및 축산 농가에 성황리에 선보였다.',
    summaryEn: 'Showcasing our 4 major product lines at KISTOCK EXCO Daegu, attracting enthusiastic interest from both domestic agricultural cooperatives and overseas delegations.',
    badge: '전시회',
    badgeEn: 'Exhibition',
    imageUrl: 'https://www.nongmin.com/-/raw/srv-nongmin/data2/content/image/2025/09/11/.cache/512/20250911500074.jpg'
  }
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'mine',
    categoryKo: '맥섬석 원료광산',
    categoryEn: 'Mineral Reserve Mine',
    titleKo: '223ha 맥섬석 원료 광산 & 소성공정',
    titleEn: '223ha Macsumsuk Mineral Mine & Calcination Process',
    descKo: '원료광산은 비공개를 원칙으로 합니다. 이미지는 이해를 돕기 위한 연출 된 화면입니다.',
    descEn: 'The raw mineral mine is confidential by policy. The image is an illustrative representation.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1KQavIN9Kl2Mziu722kZ3ZB1L7eT4BfbQ'
  },
  {
    id: 'gal-2',
    category: 'factory',
    categoryKo: '자동화 양산공장',
    categoryEn: 'Automated Smart Plant',
    titleKo: '영천 본사 스마트 설비',
    titleEn: 'Yeongcheon HQ Smart Production Facility',
    descKo: '시간당 6톤 대량 생산 능력과 첨단 순간멸균(180~250℃) 과립 제형화 라인.',
    descEn: 'Hourly 6-ton automated mass production line equipped with instant flash sterilization and dust-free granulation.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy'
  },
  {
    id: 'gal-3',
    category: 'rnd',
    categoryKo: 'R&D 중앙연구소',
    categoryEn: 'Biotech R&D Center',
    titleKo: '원적외선 바이오 소재 정밀 분석',
    titleEn: 'Far-Infrared Nano-Biomaterial Analytical Laboratory',
    descKo: '서울대·경북대 산학 공동연구 및 전자현미경(SEM) 다공질 벌집 세라믹 미세구조 분석.',
    descEn: 'State-certified corporate R&D center conducting SEM honeycomb microstructure analysis and in-vitro simulations.',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gal-4',
    category: 'farm',
    categoryKo: '사양시험 농가',
    categoryEn: 'Empirical Farm Trials',
    titleKo: '저탄소 한우 및 산란계 30만수 실증',
    titleEn: 'Low-Carbon Beef Cattle & 300,000-Layer Commercial Farm Validation',
    descKo: '국내 60여 회원 농가 및 영천·포항 축협 납품을 통한 실질적 사료효율 및 면역 개선.',
    descEn: 'Supplying over 60 commercial livestock farms and agricultural cooperatives nationwide with proven FCR gains.',
    imageUrl: 'https://lh3.googleusercontent.com/d/17iKJgbtPaPU8QVW7ZVnsY81qH01b9OHc'
  },
  {
    id: 'gal-5',
    category: 'global',
    categoryKo: '글로벌 수출',
    categoryEn: 'Global Export & Shipping',
    titleKo: '누적 4,850톤+ 9년 연속 동남아 수출 선적',
    titleEn: '4,850+ Tons Cumulative Export Container Shipping across 9 Years',
    descKo: '필리핀, 베트남, 태국, 말레이시아 등 세계 52개국 특허 기반의 지속적 글로벌 시장 공급.',
    descEn: 'Consistent maritime container export to Southeast Asian markets backed by patents in 52 countries.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1XgVriiisqtSigvpcmJIVxiIHkaaz6B1b'
  },
  {
    id: 'gal-6',
    category: 'global',
    categoryKo: '해외 박람회',
    categoryEn: 'International Expo',
    titleKo: 'VIV Asia, Europe, Select China 참가',
    titleEn: 'VIV Asia, Europe, Select China Livestock Expositions',
    descKo: '유럽 및 아시아 유수 축산 바이어들과의 기술 수출 상담 및 글로벌 파트너십 구축.',
    descEn: 'Showcasing proprietary low-methane bio-feed additives to global industry leaders and overseas buyers.',
    imageUrl: 'https://lh3.googleusercontent.com/d/18W9rAvw5mY0IUMcjt1w0w0Df6y6VoyK-'
  }
];

export const FACILITY_PHOTOS: FacilityPhoto[] = [
  {
    id: 'fac-1',
    category: 'plant-1',
    titleKo: '영천 본사 및 제1공장 (사료첨가제 자동화 라인)',
    titleEn: 'Yeongcheon HQ & Plant 1 (Automated Feed Additives)',
    descKo: '부지 32,780㎡ 규모의 자동화 양산 단지로 시간당 6톤(월 3,000톤)의 첨단 멸균·배합 라인을 갖추고 있습니다.',
    descEn: '32,780㎡ automated manufacturing complex with 6 tons/hr (3,000 tons/mo) flash-sterilization and precision formulation.',
    specKo: '연간 36,000톤 생산 규모 / 단미·보조사료 전용 라인',
    specEn: '36,000 tons/yr capacity / Dedicated single & feed additive lines',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy'
  },
  {
    id: 'fac-2',
    category: 'plant-2',
    titleKo: '경주 제2공장 (맥섬석 분체 및 고열소성 설비)',
    titleEn: 'Gyeongju Plant 2 (Micro-powder & Calcination Kiln)',
    descKo: '1,200℃ 특허 초고온 소성 터널 킬른과 3,000메시 초미분쇄 가공 라인을 통해 다공성 활성 세라믹을 제조합니다.',
    descEn: '1,200°C patented high-temperature tunnel kilns and 3,000-mesh micronizing mills producing high-porosity bio-ceramics.',
    noticeKo: '(경주 제 2공장은 비공개를 원칙으로 합니다. 이미지는 이해를 돕기 위한 연출 된 화면입니다.)',
    noticeEn: '(Gyeongju Plant 2 is confidential by policy. The image is an illustrative representation.)',
    specKo: '월 600~800톤 소성 및 초미립 분쇄 역량',
    specEn: '600-800 tons/mo calcination & micro-milling capacity',
    imageUrl: 'https://lh3.googleusercontent.com/d/1KQavIN9Kl2Mziu722kZ3ZB1L7eT4BfbQ'
  },
  {
    id: 'fac-3',
    category: 'rnd',
    titleKo: '부설 바이오생명공학 연구소 (국가공인 R&D)',
    titleEn: 'Corporate Bio-Biotech Research Institute (Certified R&D)',
    descKo: '가축 호흡대사 챔버, 가스 크로마토그래피(GC/MS), ELISA 곰팡이독소 정량 분석 설비를 갖춘 첨단 연구시설입니다.',
    descEn: 'Equipped with in vitro respiratory chambers, GC/MS chromatography, and ELISA mycotoxin quantification systems.',
    specKo: '국가공인 기업부설연구소 / 산학협동 연구센터',
    specEn: 'Certified Corporate R&D Center / Industry-Academia Hub',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop'
  }
];

export const PATENT_CERTIFICATES: PatentCertificate[] = [
  {
    id: 'cert-1',
    type: 'gmp',
    typeKo: '국제 GMP 인증서',
    typeEn: 'GMP Certificate',
    titleKo: '우수제조품질기준 (GMP) 인증',
    titleEn: 'Good Manufacturing Practices (GMP)',
    regNo: 'SK3059-GMP',
    issueDate: '2022.07.18 ~ 2025.08.07',
    inventionKo: '사료첨가제 개발 및 제조 품질 안전 시스템 (Food Safety Program GMP)',
    inventionEn: 'Food Safety Program - Good Manufacturing Practices (GMP)',
    authorityKo: 'TQCS International Pty Ltd (AACB)',
    authorityEn: 'TQCS International Pty Ltd (AACB Accredited)',
    descKo: '사료첨가제의 원료 입고부터 배합, 소성, 멸균, 포장에 이르는 전 공정 국제 GMP 공인',
    descEn: 'Certified compliance for feed additive development & manufacturing safety process.',
    badgeKo: 'GMP 국제인증',
    badgeEn: 'GMP Certified',
    colorScheme: 'amber',
    imageUrl: 'https://lh3.googleusercontent.com/d/1xDk8abCgyG4tAJRVKFq-B3vqoiPXhZgz'
  },
  {
    id: 'cert-2',
    type: 'iso',
    typeKo: 'ISO 22000 국제인증서',
    typeEn: 'ISO 22000 Certificate',
    titleKo: '식품안전경영시스템 KS Q ISO 22000',
    titleEn: 'Food Safety Management System (ISO 22000:2018)',
    regNo: 'RFM0116',
    issueDate: '2022.08.09 ~ 2025.08.08',
    inventionKo: '맥섬석을 주원료로 하는 사료첨가제 개발 및 생산 (KS Q ISO 22000:2018 / ISO 22000:2018)',
    inventionEn: 'Development and production of feed additives mainly using Macsumsuk',
    authorityKo: '한국경영인증원 (KMR) / IAF',
    authorityEn: 'Korea Management Registrar (KMR) / IAF Accredited',
    descKo: '글로벌 식품·사료안전 경영시스템 국제 표준 규격 인증 획득',
    descEn: 'Global benchmark standard certification for international feed safety management.',
    badgeKo: 'ISO 22000',
    badgeEn: 'ISO 22000',
    colorScheme: 'blue',
    imageUrl: 'https://lh3.googleusercontent.com/d/1C0rnR-1lVD6CC5RMMLy7_o7DNz5lh-JT'
  },
  {
    id: 'cert-3',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '메탄가스 저감용 칼슘사료 첨가제 제조방법',
    titleEn: 'Methane Reduction Calcium Feed Additive Method',
    regNo: '제 10-2369867 호',
    issueDate: '2022.02.25',
    inventionKo: '굴 패각과 점토광물을 이용한 메탄가스 저감용 칼슘사료 첨가제 제조방법',
    inventionEn: 'Manufacturing method of calcium feed additive for methane gas reduction using oyster shells and clay minerals',
    authorityKo: '대한민국 특허청 (특허청장 김용래)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '반추위 메탄 61.5% 저감 및 사료효율 향상 핵심 원천 특허 등록',
    descEn: 'Core proprietary patent achieving 61.5% in-vitro methane gas reduction in ruminants.',
    badgeKo: '특허 제10-2369867호',
    badgeEn: 'Patent 10-2369867',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1f2ZFNpwZeguobP7bo3l6Ky-u7-ZcARa9'
  },
  {
    id: 'cert-4',
    type: 'patent',
    typeKo: '대한민국 특허증 (세계 13개국 등록)',
    typeEn: 'Patent (13 Global Countries)',
    titleKo: '가축 혈액·맥섬석·칼슘 진공 압출 펠렛 제조방법',
    titleEn: 'Vacuum-Extruded Feed Pellet Manufacturing Method',
    regNo: '제 10-2496216 호',
    issueDate: '2023.02.01',
    inventionKo: '가축 혈액, 맥섬석, 법제칼슘을 이용한 양어사료용 또는 배합사료 보조용 진공 압출성형 펠렛의 제조방법',
    inventionEn: 'Manufacturing method of vacuum-extruded pellets for aquaculture or compound feed using livestock blood, Macsumsuk, and legal calcium',
    authorityKo: '대한민국 특허청 (특허청장 이인실)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '도축 혈액 100% 자원화 및 고단백 펠렛 압출 성형 원천기술 (미국, 일본, 중국 등 글로벌 13개국 등록)',
    descEn: 'Zero-waste animal blood recycling technology patented across 13 major nations.',
    badgeKo: '특허 제10-2496216호',
    badgeEn: 'Patent 10-2496216',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1IHgRWVmXIbWcNRfK-xCgl9GqdVfw3ibo'
  },
  {
    id: 'cert-5',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '가축 혈액 및 맥섬석 포함 사료첨가제 제조방법',
    titleEn: 'Feed Additive Comprising Blood & Macsumsuk',
    regNo: '제 10-1829525 호',
    issueDate: '2018.02.08',
    inventionKo: '가축 혈액 및 맥섬석을 포함하는 사료첨가제의 제조방법',
    inventionEn: 'Manufacturing method of feed additive comprising livestock blood and Macsumsuk',
    authorityKo: '대한민국 특허청 (특허청장 성윤모)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '천연 바이오광물 맥섬석과 혈액 단백질의 결합 안정화 제조 특허',
    descEn: 'Stabilization & formulation technology for blood protein and bio-active minerals.',
    badgeKo: '특허 제10-1829525호',
    badgeEn: 'Patent 10-1829525',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1WOuqZiOsXg0J1pKVysoAm5nZBMDwua6y'
  },
  {
    id: 'cert-6',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '유기 코팅 다공질 과립 사료 제조방법',
    titleEn: 'Organic-Coated Porous Granule Feed Method',
    regNo: '제 10-1765310 호',
    issueDate: '2017.07.31',
    inventionKo: '가축 혈액과 점토광물을 이용한 양어 사료용 또는 배합사료 보조용 유기 코팅 다공질 과립의 제조 방법',
    inventionEn: 'Manufacturing method of organic-coated porous granules for aqua feed using livestock blood and clay minerals',
    authorityKo: '대한민국 특허청 (특허청장 성윤모)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '분진 발생을 원천 차단하고 영양소 용출률을 극대화한 다공질 그래뉼 코팅 기술',
    descEn: 'Dust-free porous micro-encapsulated granule manufacturing method.',
    badgeKo: '특허 제10-1765310호',
    badgeEn: 'Patent 10-1765310',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/11Ak9t0BEiW4US7NXb5psqBILcVfG5zKp'
  },
  {
    id: 'cert-7',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '가축 혈액과 패각 이용 유기 코팅 다공질 과립',
    titleEn: 'Porous Granules using Blood and Shells',
    regNo: '제 10-1462214 호',
    issueDate: '2014.11.10',
    inventionKo: '가축 혈액과 패각을 이용한 양어 사료용 또는 배합사료 보조용 유기 코팅 다공질 과립 및 그 제조 방법',
    inventionEn: 'Organic-coated porous granules and its manufacturing method using livestock blood and oyster shell',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '패각(굴껍질)의 칼슘 자원화 및 혈액 단백질 고정화 특허 기술',
    descEn: 'Shell bio-calcium conversion and animal blood protein immobilizing tech.',
    badgeKo: '특허 제10-1462214호',
    badgeEn: 'Patent 10-1462214',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1SawcsnceTrR1sbDhm_5pD3Qqd3nY0vgL'
  },
  {
    id: 'cert-8',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '칼슘 보강 가축사료 첨가제 제조방법',
    titleEn: 'Calcium-Fortified Feed Additive Method',
    regNo: '제 10-1328671 호',
    issueDate: '2013.11.06',
    inventionKo: '맥섬석과 패각을 포함하며, 칼슘이 보강된 가축사료 첨가제의 제조방법 및 그로부터 수득되는 칼슘이 보강된 가축사료 첨가제 및 이를 포함하는 가축사료',
    inventionEn: 'Manufacturing method of calcium-fortified feed additive containing Macsumsuk and oyster shells',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '생체 흡수율이 탁월한 천연 이온화 칼슘 및 맥섬석 복합제제 원천 특허',
    descEn: 'Proprietary high-bioavailability calcium complex for strong bones and eggshell thickness.',
    badgeKo: '특허 제10-1328671호',
    badgeEn: 'Patent 10-1328671',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/12Zeij2-0z77KkGh-a-qltoMsKJw2roY2'
  },
  {
    id: 'cert-9',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '맥섬석·한방제재 복합 사료첨가제 및 가축사양방법',
    titleEn: 'Herbal Bio-Mineral Feed Additive & Farming Method',
    regNo: '제 10-1354460 호',
    issueDate: '2014.01.16',
    inventionKo: '맥섬석과 한방제재를 혼합한 가축용 사료첨가제 생산방법, 이 방법으로 생산되는 혼합 사료첨가제 및 이의 첨가제를 급여하여 가축을 사양하는 것을 특징으로 하는 가축사양방법',
    inventionEn: 'Livestock feed additive mixing Macsumsuk and oriental herbal formulations, and livestock farming method using the same',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '천연 생약 성분과 원적외선 맥섬석 광물의 복합 작용으로 가축 면역력 극대화',
    descEn: 'Immunity enhancement feed additive combining oriental herbs and far-infrared Macsumsuk.',
    badgeKo: '특허 제10-1354460호',
    badgeEn: 'Patent 10-1354460',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1seKR75d9dhuhrkIhYBzx7JPHXpxz7thZ'
  },
  {
    id: 'cert-10',
    type: 'design',
    typeKo: '대한민국 디자인등록증',
    typeEn: 'Certificate of Design Registration',
    titleKo: '가축용 사료 제형 디자인등록',
    titleEn: 'Livestock Feed Formulation Design Registration',
    regNo: '제 30-0754538 호',
    issueDate: '2014.07.23',
    inventionKo: '가축용 사료 (디자인의 대상이 되는 물품) / 창작자 곽성근',
    inventionEn: 'Livestock Feed Product Design & Form (Creator: Sung-Keun Kwak)',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '특수 다공성 입자 구조 및 기능성 형상에 대한 독점적 지식재산권 확보',
    descEn: 'Exclusive design registration for unique porous feed morphology and granule structure.',
    badgeKo: '디자인 제30-0754538호',
    badgeEn: 'Design 30-0754538',
    colorScheme: 'indigo',
    imageUrl: 'https://lh3.googleusercontent.com/d/1oXrbcgFJDv4QGRwZq-AWiq2Bl2_qWOPC'
  },
  {
    id: 'cert-11',
    type: 'trademark',
    typeKo: '대한민국 상표등록증',
    typeEn: 'Certificate of Trademark Registration',
    titleKo: '그로피드 (Growfeed®) 상표권 등록',
    titleEn: 'Growfeed® Trademark Registration',
    regNo: '제 40-0999765 호',
    issueDate: '2013.10.08',
    inventionKo: '상표: Growfeed 그로피드 (상품구분 제31류 가금산란용 조합제 등 20건)',
    inventionEn: 'Trademark: Growfeed (Classification of Goods: Class 31, 20 items)',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '친환경 사료 전문 브랜드 그로피드(Growfeed®) 52개국 글로벌 브랜드 상표권',
    descEn: 'Official trademark registration covering Growfeed® livestock brand across 52 nations.',
    badgeKo: '상표 제40-0999765호',
    badgeEn: 'Trademark Reg.',
    colorScheme: 'rose',
    imageUrl: 'https://lh3.googleusercontent.com/d/1rHjeQDCseLqaEZxp0GEbxi2EzAtEIVxA'
  },
  {
    id: 'cert-12',
    type: 'global',
    typeKo: '해외 52개국 특허 포트폴리오',
    typeEn: 'Global 52-Nation Patent Portfolio',
    titleKo: '세계 52개국 글로벌 지식재산권(IP)',
    titleEn: '52-Nation Global Intellectual Property Network',
    regNo: 'PCT / US / EU / JP / CN',
    issueDate: '1993 ~ 현재 등록',
    inventionKo: '미국, 일본, 중국, 유럽연합 등 세계 52개국 특허 및 상표권 보유',
    inventionEn: 'Global patents & trademarks registered across US, EU, Japan, China, Southeast Asia',
    authorityKo: 'KIPO, USPTO, EPO, JPO, CNIPA',
    authorityEn: 'USPTO (USA), EPO (EU), JPO (Japan), CNIPA (China)',
    descKo: 'KOTRA 세계일류상품 선정 및 글로벌 수출 경쟁력을 뒷받침하는 세계적 특허망',
    descEn: 'Comprehensive global IP barrier supporting 9-year continuous export success.',
    badgeKo: '글로벌 52개국 IP',
    badgeEn: '52-Country IP',
    colorScheme: 'teal',
    imageUrl: 'https://lh3.googleusercontent.com/d/1PqfjXhqARS64_UroA-Sj8YSKeDos2HGO'
  },
  {
    id: 'cert-13',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '맥섬석 바이오 사료 제조 특허',
    titleEn: 'Macsumsuk Bio-Feed Manufacturing Patent',
    regNo: '특허 등록 공인',
    issueDate: '공식 등록',
    inventionKo: '맥섬석을 활용한 친환경 고기능성 바이오 사료 및 원료 조성물',
    inventionEn: 'Eco-friendly high-functional bio-feed and raw material composition utilizing Macsumsuk',
    authorityKo: '대한민국 특허청 (KIPO)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '맥섬석 바이오 원천기술 및 친환경 기능성 사료 지식재산권',
    descEn: 'Core Macsumsuk bio-technology and functional feed intellectual property.',
    badgeKo: '공인 특허',
    badgeEn: 'Official Patent',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1UgB98m5dmtMsAHAKR4tEnWOvebBrS7UW'
  },
  {
    id: 'cert-14',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '친환경 축산 사료 첨가제 특허',
    titleEn: 'Eco Livestock Feed Additive Patent',
    regNo: '특허 등록 공인',
    issueDate: '공식 등록',
    inventionKo: '악취 저감 및 가축 면역 증진용 기능성 사료 첨가제 기술',
    inventionEn: 'Functional feed additive technology for odor reduction and livestock immunity enhancement',
    authorityKo: '대한민국 특허청 (KIPO)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '축산 환경 개선 및 사료 효율성 극대화 공인 특허',
    descEn: 'Certified patent for livestock environmental improvement and feed efficiency.',
    badgeKo: '공인 특허',
    badgeEn: 'Official Patent',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1lH8xjCdxFl4cDy9xdcVZRpKfr6bc-5aq'
  }
];


