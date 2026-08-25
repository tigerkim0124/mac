import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Download, 
  CheckCircle2, 
  Shield, 
  Award, 
  FlaskConical, 
  Building2, 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  Printer, 
  Layers, 
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  TrendingDown,
  Sparkles,
  Microscope,
  Home,
  FileCheck,
  FileCheck2,
  Factory,
  Globe2,
  Calendar,
  Zap,
  BookOpen,
  GraduationCap,
  Landmark,
  Image as ImageIcon,
  X,
  ExternalLink,
  Recycle,
  RotateCw,
  Sprout,
  Droplets,
  HeartHandshake,
  Clock,
  Navigation,
  Copy,
  Check
} from 'lucide-react';
import { 
  GNB_CATEGORIES, 
  PRODUCTS, 
  EVIDENCE_DATA, 
  HISTORY_TIMELINE, 
  AWARDS_LIST, 
  NEWS_LIST, 
  COMPANY_INFO,
  GALLERY_PHOTOS,
  FACILITY_PHOTOS
} from '../data/companyData';
import { Language, MainCategoryKey, GalleryItem } from '../types';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { UniversityEmblem } from './UniversityEmblems';
import { AwardEmblem } from './AwardEmblems';
import { GlobalExportMap } from './GlobalExportMap';
import { PatentCertificatesGallery } from './PatentCertificatesGallery';

interface CategoryPageViewProps {
  categoryKey: MainCategoryKey;
  subCategoryId?: string;
  lang: Language;
  onGoHome: () => void;
  onSwitchCategory: (key: MainCategoryKey, subId?: string) => void;
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenBrochure: () => void;
}

export const CategoryPageView: React.FC<CategoryPageViewProps> = ({
  categoryKey,
  subCategoryId,
  lang,
  onGoHome,
  onSwitchCategory,
  onOpenInquiry,
  onOpenBrochure,
}) => {
  const currentCategory = GNB_CATEGORIES.find((c) => c.key === categoryKey) || GNB_CATEGORIES[0];

  // Scroll to sub-section if subCategoryId is given, otherwise scroll to top
  useEffect(() => {
    if (subCategoryId) {
      const element = document.getElementById(subCategoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [subCategoryId, categoryKey]);

  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Category Hero / Breadcrumb Bar */}
      <div className="bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        {/* Hero Background Image (About: HQ/Company / ESG: ESG Bio Eco / Global: Container Ship / Contact: Contact Center / Other: R&D Laboratory) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={
              categoryKey === 'products'
                ? 'https://lh3.googleusercontent.com/d/1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy'
                : categoryKey === 'about'
                ? 'https://lh3.googleusercontent.com/d/1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6'
                : categoryKey === 'esg'
                ? 'https://lh3.googleusercontent.com/d/1ifuZxeqcBqKYpTf0xtmju6u2SurDOLkH'
                : categoryKey === 'global'
                ? 'https://lh3.googleusercontent.com/d/1_MlW2tEUjEoCtul-ONR9tKDZQvHRlvFR'
                : categoryKey === 'pr'
                ? 'https://lh3.googleusercontent.com/d/1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0'
                : categoryKey === 'contact'
                ? 'https://lh3.googleusercontent.com/d/1yrRN-UUTNynrCHAgPLFeuRDKL_AukqXV'
                : 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2000&auto=format&fit=crop'
            }
            alt={
              categoryKey === 'products'
                ? '맥섬석GM Growfeed 친환경 바이오 사료첨가제 라인업'
                : categoryKey === 'about'
                ? '맥섬석GM 기업개요 및 본사 인프라'
                : categoryKey === 'esg'
                ? '맥섬석GM ESG 지속가능 경영 및 친환경 바이오 순환'
                : categoryKey === 'global'
                ? '맥섬석GM 글로벌 해상 수출 및 전 세계 수출 물류'
                : categoryKey === 'pr'
                ? '맥섬석GM 홍보센터 및 언론 보도자료'
                : categoryKey === 'contact'
                ? '맥섬석GM 고객 문의 및 비즈니스 상담 센터'
                : '맥섬석 바이오 첨단 R&D 연구소'
            }
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = categoryKey === 'products'
                ? 'https://drive.google.com/uc?export=view&id=1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy'
                : categoryKey === 'about'
                ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
                : categoryKey === 'esg'
                ? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop'
                : categoryKey === 'global'
                ? 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2000&auto=format&fit=crop'
                : categoryKey === 'pr'
                ? 'https://drive.google.com/uc?export=view&id=1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0'
                : categoryKey === 'contact'
                ? 'https://drive.google.com/uc?export=view&id=1yrRN-UUTNynrCHAgPLFeuRDKL_AukqXV'
                : 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop';
            }}
            className={`w-full h-full object-cover ${
              categoryKey === 'about'
                ? '[object-position:center_25%]'
                : categoryKey === 'esg'
                ? '[object-position:center_75%]'
                : categoryKey === 'contact'
                ? '[object-position:center_60%]'
                : categoryKey === 'pr'
                ? '[object-position:center_62%]'
                : 'object-center'
            } ${
              categoryKey === 'contact' || categoryKey === 'pr'
                ? 'opacity-[0.95]'
                : categoryKey === 'products' || categoryKey === 'about' || categoryKey === 'esg' || categoryKey === 'global'
                ? 'opacity-[0.98]'
                : 'opacity-[0.97]'
            } brightness-95 contrast-110`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <button
                onClick={onGoHome}
                className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '홈 (Home)' : 'Home'}</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-emerald-400 font-semibold">
                {lang === 'ko' ? currentCategory.depth1Ko : currentCategory.depth1En}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={onGoHome}
                className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                <span>{lang === 'ko' ? '메인 홈으로' : 'Back to Home'}</span>
              </button>
            </div>
          </div>

          {/* Category Title */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              {lang === 'ko' ? currentCategory.depth1Ko : currentCategory.depth1En}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Category Content: Stacked Sequential Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. ABOUT US (모든 세부항목 순서대로 나열) */}
        {/* ========================================================================= */}
        {categoryKey === 'about' && (
          <div className="space-y-12">
            {/* Section 1: 회사 개요 & 인사말 & 생산 인프라 */}
            <section id="overview" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Building2 className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 회사 개요' : '1. Company Overview'}
                </h2>
              </div>

              {/* CEO Message with Photo */}
              <div className="bg-white rounded-2xl border border-slate-300 shadow-sm overflow-hidden">
                <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6"
                    alt="맥섬석GM 본사 및 연구시설"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to direct uc format if needed
                      const target = e.currentTarget;
                      if (!target.src.includes('drive.google.com/uc')) {
                        target.src = 'https://drive.google.com/uc?export=view&id=1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6';
                      }
                    }}
                    className="w-full h-full object-cover object-[50%_15%] opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="px-3 py-1.5 rounded-md bg-emerald-500/90 text-white text-sm sm:text-[14px] font-black uppercase tracking-wider mb-1.5 inline-block">
                        {lang === 'ko' ? '맥섬석GM 바이오 비전' : 'Macsumsuk Biotech Vision'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {lang === 'ko' ? '천연 광물 바이오로 여는 지속가능한 축산의 미래' : 'Sustainable Livestock Future via Mineral Biotech'}
                      </h3>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700 shrink-0">
                      {lang === 'ko' ? '본사 전경' : 'Headquarters'}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-4 font-normal">
                    {lang === 'ko' ? (
                      <>
                        <p>
                          안녕하십니까. 맥섬석GM㈜ 대표이사 <strong>곽성근</strong>입니다.
                        </p>
                        <p>
                          당사는 1986년 창립 이래 40년간 223ha 규모의 독점적인 맥섬석 천연 광산을 기반으로, 인체와 가축에 유익한 8~11μm 파장대의 고방사 원적외선 세라믹 기술을 독자적으로 확립하였습니다.
                          이를 축산 사료 분야에 접목하여 곰팡이독소를 87~94% 흡착하는 <strong>Growfeed E-TOX</strong>, 도축 혈액을 100% 자원화하는 <strong>Growfeed Protein</strong>, 그리고 반추동물 장내 메탄을 최대 61.5% 감축시키는 <strong>Growfeed DCM</strong>을 성공적으로 개발하였습니다.
                        </p>
                        <p>
                          미국, 일본, 중국, 유럽 등 52개국 글로벌 특허와 정부 은탑산업훈장, 2025 세계일류상품 선정에 이르기까지 국내외에서 검증받은 압도적 품질을 통해 세계 축산 농가의 경쟁력을 높이고 지구 환경을 지키는 100년 기업으로 정진하겠습니다.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Greetings. I am <strong>Sung-Geun Kwak</strong>, CEO of Macsumsuk GM Co., Ltd.
                        </p>
                        <p>
                          Since our founding in 1986, Macsumsuk GM has harnessed our exclusive 223ha natural mineral reserve to pioneer high-emissivity (8-11μm Wellion Ray) far-infrared bio-ceramics. By infusing this mineral technology into livestock nutrition, we developed <strong>Growfeed® E-TOX</strong> (87-94% mycotoxin adsorption), <strong>Growfeed® Protein</strong> (100% circular bio-recycled slaughterhouse blood), and <strong>Growfeed® DCM</strong> (up to 61.5% enteric methane reduction).
                        </p>
                        <p>
                          Backed by patents across 52 nations, the Korean Government’s Tower of Industrial Merit, and KOTRA’s 2025 World-Class Product designation, we are committed to strengthening global farm productivity and preserving planetary health as an enduring century enterprise.
                        </p>
                      </>
                    )}
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs sm:text-sm text-slate-600 gap-2">
                    <span className="font-semibold text-slate-800">{lang === 'ko' ? '맥섬석GM㈜ 대표이사 곽성근' : 'Sung-Geun Kwak, CEO of Macsumsuk GM Co., Ltd.'}</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">{lang === 'ko' ? '창립 1986년' : 'Founded 1986'}</span>
                  </div>
                </div>
              </div>

              {/* Manufacturing Facilities Photo Grid */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center">
                    <Factory className="w-6 h-6 text-emerald-600 mr-2" />
                    {lang === 'ko' ? '핵심 생산 거점 및 제조 인프라' : 'Key Manufacturing Hubs & Infrastructure'}
                  </h3>
                  <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-xs">
                    {lang === 'ko' ? '연간 40,000톤+ 생산 역량' : '40,000+ Tons Annual Capacity'}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {FACILITY_PHOTOS.map((fac) => (
                    <div
                      key={fac.id}
                      className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden group hover:border-emerald-400 hover:shadow-md transition-all flex flex-col sm:flex-row items-stretch"
                    >
                      <div className="relative h-48 sm:h-auto w-full sm:w-72 md:w-80 min-h-[195px] shrink-0 overflow-hidden bg-slate-900">
                        <img
                          src={fac.imageUrl}
                          alt={lang === 'ko' ? fac.titleKo : fac.titleEn}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (fac.imageUrl.includes('googleusercontent.com/d/')) {
                              const id = fac.imageUrl.split('/d/')[1];
                              if (id) target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                            }
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-transparent"></div>
                        <span className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-black tracking-wider uppercase shadow-xs">
                          {fac.category.toUpperCase()}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <h4 className="font-black text-slate-900 text-base sm:text-lg leading-snug group-hover:text-emerald-700 transition-colors">
                            {(() => {
                              const text = lang === 'ko' ? fac.titleKo : fac.titleEn;
                              const match = text.match(/^([^(]+)(.*)$/);
                              if (match && match[2]) {
                                return (
                                  <>
                                    <span className="text-slate-950">{match[1].trim()}</span>{' '}
                                    <span className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 inline-block ml-1">
                                      {match[2].trim()}
                                    </span>
                                  </>
                                );
                              }
                              return text;
                            })()}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {lang === 'ko' ? fac.descKo : fac.descEn}
                          </p>
                          {(fac.noticeKo || fac.noticeEn) && (
                            <p className="text-[11px] sm:text-xs text-slate-500 font-medium bg-slate-100/90 border border-slate-200/80 rounded-md px-2.5 py-1.5 leading-relaxed">
                              {lang === 'ko' ? fac.noticeKo : fac.noticeEn}
                            </p>
                          )}
                        </div>

                        <div className="pt-2.5 border-t border-slate-200 flex items-center text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50/60 -mx-5 -mb-5 px-5 py-2.5">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 shrink-0"></span>
                          <span>{lang === 'ko' ? fac.specKo : fac.specEn}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2: 인증 및 수상 (Awards & Certifications) */}
            <section id="awards" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Award className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 수상 실적 및 국내외 공인 인증' : '2. Honors, Awards & Global Certifications'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {AWARDS_LIST.map((award, idx) => (
                    <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex items-start space-x-4 group hover:border-emerald-300 hover:bg-slate-100/70 transition-all">
                      <AwardEmblem code={award.code} size={58} className="shadow-sm border border-slate-200 bg-white group-hover:scale-105 transition-transform shrink-0" />
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                          {lang === 'ko' ? award.titleKo : award.titleEn}
                        </h3>
                        <span className="text-xs sm:text-sm font-semibold text-emerald-700 block">
                          {lang === 'ko' ? award.hostKo : award.hostEn}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                          {lang === 'ko' ? award.descKo : award.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: 회사 연혁 (History) */}
            <section id="history" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Calendar className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '3. 주요 연혁' : '3. Milestones & History'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-8">
                {/* 1986 Heritage Highlight Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white shadow-md relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="space-y-1.5 z-10">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-400/30">
                        {lang === 'ko' ? '1986년부터 창업부터 이어진 해리티지' : 'Heritage Since Foundation in 1986'}
                      </span>
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      {lang === 'ko' ? '독보적 원천 바이오 광물 기술의 역사' : 'History of Proprietary Bio-Mineral Innovation'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal">
                      {lang === 'ko'
                        ? '1986년 화성실업 창업부터 서울대 한우 메탄저감 실증 및 글로벌 수출 확대까지 끊임없는 기술 혁신'
                        : 'From 1986 foundation to SNU low-methane trials and expanding global exports.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 z-10 shrink-0">
                    <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                      <span className="text-[11px] text-emerald-300 font-bold block uppercase tracking-wider">
                        {lang === 'ko' ? '창립 연도' : 'Founded'}
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-white">1986</span>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Milestones Vertical Timeline */}
                <div className="relative border-l-2 border-emerald-400/80 ml-4 sm:ml-6 space-y-6 py-2">
                  {HISTORY_TIMELINE.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
                      className="relative pl-6 sm:pl-8 group"
                    >
                      {/* Timeline Node Dot with glowing effect */}
                      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 group-hover:border-emerald-500 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.7)] transition-all duration-300"></div>

                      <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 group-hover:border-emerald-300 group-hover:bg-emerald-50/30 group-hover:shadow-sm transition-all duration-300">
                        <div className="flex items-center space-x-2.5 mb-1.5 flex-wrap gap-y-1">
                          <span className="px-2.5 py-0.5 rounded-md bg-emerald-100/90 text-emerald-900 text-sm sm:text-base font-black tracking-tight group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            {item.year}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                            {lang === 'ko' ? item.titleKo : item.titleEn}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed pl-0.5">
                          {lang === 'ko' ? item.descKo : item.descEn}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: 오시는 길 (Location & Facilities) */}
            <section id="location" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <MapPin className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '4. 사업장 및 본사' : '4. Business Sites & Head Office'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-lg font-bold text-slate-900">
                      {lang === 'ko' ? '영천 본사 및 메인 1공장' : 'Yeongcheon HQ & Plant 1'}
                    </h3>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm text-slate-800">
                    <div><strong>{lang === 'ko' ? '주소:' : 'Address:'}</strong> {lang === 'ko' ? COMPANY_INFO.address : COMPANY_INFO.addressEn}</div>
                    <div><strong>{lang === 'ko' ? '대표전화:' : 'Tel:'}</strong> {COMPANY_INFO.phone}</div>
                    <div><strong>{lang === 'ko' ? '팩스번호:' : 'Fax:'}</strong> {COMPANY_INFO.fax}</div>
                    <div><strong>{lang === 'ko' ? '이메일:' : 'E-mail:'}</strong> {COMPANY_INFO.email}</div>
                    <div><strong>{lang === 'ko' ? '담당자 직통:' : 'Direct Contact:'}</strong> {COMPANY_INFO.mobile}</div>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-teal-600" />
                    <h3 className="text-lg font-bold text-slate-900">
                      {lang === 'ko' ? '경주 분체 및 소성 2공장' : 'Gyeongju Calcination Plant 2'}
                    </h3>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm text-slate-800">
                    <div><strong>{lang === 'ko' ? '소재지:' : 'Location:'}</strong> {lang === 'ko' ? '경상북도 경주시 소재' : 'Gyeongju-si, Gyeongsangbuk-do'}</div>
                    <div><strong>{lang === 'ko' ? '부지 면적:' : 'Site Area:'}</strong> 8,769㎡ (Building 1,199㎡)</div>
                    <div><strong>{lang === 'ko' ? '생산 역량:' : 'Capacity:'}</strong> {lang === 'ko' ? '보조사료 월 600~800톤 생산' : '600-800 tons/month'}</div>
                    <div><strong>{lang === 'ko' ? '주요 기능:' : 'Key Operations:'}</strong> {lang === 'ko' ? '맥섬석 원광 분체가공 및 특허 고열소성 전문 라인' : 'Rotary Kiln Calcination & Micro-particle Grinding'}</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. PRODUCTS (축종별 맞춤 컨설팅 1순위 + 전체 제품 순차 나열) */}
        {/* ========================================================================= */}
        {categoryKey === 'products' && (
          <div className="space-y-12">
            {/* 1. Livestock Application Guide (1순위) */}
            <section id="livestock-guide" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <BookOpen className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. Growfeed® 축종별 맞춤 컨설팅' : '1. Growfeed® Livestock Tailored Consulting'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="py-5 px-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-2">
                  <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-tight">
                    {lang === 'ko' 
                      ? '소(한우/젖소) · 양돈(모돈/자돈) · 양계(산란계/육계) · 어류/새우 · 반려동물' 
                      : 'Cattle · Swine · Poultry · Aquaculture · Companion Animals'}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {lang === 'ko' ? (
                      <>
                        전 축종 사육 환경에 맞춘{' '}
                        <span className="text-emerald-700 font-black decoration-emerald-300 underline underline-offset-4 decoration-2">
                          최적의 그로피드 맞춤 솔루션
                        </span>
                        을 제공합니다.
                      </>
                    ) : (
                      <>
                        Tailored for all livestock environments with{' '}
                        <span className="text-emerald-700 font-black decoration-emerald-300 underline underline-offset-4 decoration-2">
                          Optimal Growfeed Solutions
                        </span>.
                      </>
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Card 1: Cattle / Ruminants */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src="https://lh3.googleusercontent.com/d/1_rjC1lbuxqETQ4KSv_80Fsovau1cHAXX"
                        alt={lang === 'ko' ? '소 · 젖소 (반추동물)' : 'Beef & Dairy Cattle (Ruminants)'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: 'center 65%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="font-bold text-white text-base drop-shadow-sm">
                          {lang === 'ko' ? '소 · 젖소 (반추동물)' : 'Beef & Dairy Cattle (Ruminants)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Swine */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop"
                        alt={lang === 'ko' ? '양돈 (모돈 / 자돈 / 비육돈)' : 'Swine'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="font-bold text-white text-base drop-shadow-sm">
                          {lang === 'ko' ? '양돈 (모돈 / 자돈 / 비육돈)' : 'Swine (Sows, Piglets & Fattening)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Poultry */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop"
                        alt={lang === 'ko' ? '양계 (산란계 / 육계 / 오리)' : 'Poultry'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="font-bold text-white text-base drop-shadow-sm">
                          {lang === 'ko' ? '양계 (산란계 / 육계 / 오리)' : 'Poultry (Layers, Broilers & Ducks)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Aqua & Pet */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src="https://lh3.googleusercontent.com/d/1f49HmxDVyZa-vNW9HlUhKxhZs428AYgL"
                        alt={lang === 'ko' ? '반려동물 & 양어 · 새우' : 'Companion Animals & Aquaculture'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="font-bold text-white text-base drop-shadow-sm">
                          {lang === 'ko' ? '반려동물 & 양어 · 새우' : 'Companion Animals & Aquaculture'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consulting Inquiry CTA Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <div className="text-center sm:text-left space-y-0.5">
                    <h4 className="font-bold text-emerald-950 text-base">
                      {lang === 'ko' ? '농가 및 사료회사 맞춤 솔루션 컨설팅' : 'Farm & Feed Mill Tailored Consulting'}
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 font-normal">
                      {lang === 'ko' 
                        ? '사육 환경과 사료 배합에 맞춘 1:1 맞춤형 급여 설계 및 시험 적용을 안내해 드립니다.' 
                        : 'We provide 1:1 customized feeding design and trial application suited for your environment.'}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenInquiry(lang === 'ko' ? '축종별 맞춤 컨설팅' : 'Livestock Tailored Consulting')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
                  >
                    <span>{lang === 'ko' ? '컨설팅 문의하기' : 'Request Consulting'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* All Products Stacked (2순위부터 나열) */}
            {PRODUCTS.map((prod, index) => (
              <section key={prod.id} id={prod.id} className="scroll-mt-32 space-y-6">
                <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                  <Layers className="w-7 h-7 text-emerald-600" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {index + 2}. {lang === 'ko' ? prod.name : prod.engName}
                  </h2>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6 overflow-hidden">
                  {/* Card Top Header */}
                  <div className="pb-6 border-b border-slate-200">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
                      {prod.isComingSoon || !prod.imageUrl ? (
                        <div className="w-full sm:w-[260px] md:w-[300px] h-[220px] sm:h-[260px] md:h-[290px] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50 via-slate-50 to-emerald-50/60 border-2 border-dashed border-teal-400 shrink-0 shadow-xs flex flex-col items-center justify-center p-6 text-center space-y-3.5 relative group hover:scale-[1.02] transition-transform">
                          <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                          
                          <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-700/20">
                            <Clock className="w-7 h-7" />
                          </div>
                          
                          <div className="space-y-1.5 z-10">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-teal-100 text-teal-900 border border-teal-300">
                              {lang === 'ko' ? '신규 R&D 프로젝트' : 'New R&D Project'}
                            </span>
                            <span className="text-xl sm:text-2xl font-black text-teal-950 tracking-tight block">
                              {lang === 'ko' ? '출시 준비 中' : 'Coming Soon'}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-600 font-medium block">
                              {lang === 'ko' ? '공식 검증 및 특허 인증 진행' : 'Certification & Trials in Progress'}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full sm:w-[260px] md:w-[300px] h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100/90 via-white to-slate-100/80 border border-slate-300/80 shrink-0 shadow-sm flex items-center justify-center p-4 relative group hover:shadow-md transition-shadow">
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                          <img
                            src={prod.imageUrl}
                            alt={lang === 'ko' ? prod.name : prod.engName}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (prod.imageUrl && prod.imageUrl.includes('googleusercontent.com/d/')) {
                                const id = prod.imageUrl.split('/d/')[1];
                                if (id) target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                              }
                            }}
                            className="w-[280px] h-[300px] max-w-full max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="flex-1 space-y-3.5 w-full">
                        {/* Badges & Category Header */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold ${prod.colorScheme.bgBadge} ${prod.colorScheme.textBadge} border ${prod.colorScheme.border} shadow-2xs`}>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{lang === 'ko' ? prod.badge : prod.badgeEn}</span>
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/90">
                            {lang === 'ko' ? prod.category : prod.categoryEn}
                          </span>
                          {prod.patentNo && (
                            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80 flex items-center space-x-1">
                              <Shield className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{lang === 'ko' ? '특허 등록 원천기술' : 'Patented Technology'}</span>
                            </span>
                          )}
                        </div>

                        {/* Title and Subtitle */}
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-baseline gap-2.5">
                            <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                              {lang === 'ko' ? prod.name : prod.engName}
                            </h3>
                            {lang === 'ko' && (
                              <span className="text-lg sm:text-xl font-bold text-slate-500">
                                {prod.engName}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Tagline Bar with Animated Pulse Indicator */}
                        <div className={`flex items-center px-4 py-2.5 rounded-xl ${prod.colorScheme.bgBadge} border ${prod.colorScheme.border} text-sm sm:text-base font-bold text-slate-900 shadow-2xs`}>
                          <span className="relative flex h-2.5 w-2.5 mr-2.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                          </span>
                          <span className="leading-snug">{lang === 'ko' ? prod.taglineKo : prod.taglineEn}</span>
                        </div>

                        {/* Quick Spec Highlights Strip */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm">
                          <div className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                            <span className="font-bold text-slate-900 shrink-0">{lang === 'ko' ? '권장 급여량:' : 'Dosage:'}</span>
                            <span className="font-semibold text-emerald-700 truncate">{lang === 'ko' ? prod.dosageKo : prod.dosageEn}</span>
                          </div>
                          <div className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                            <span className="font-bold text-slate-900 shrink-0">{lang === 'ko' ? '검증 축종:' : 'Target:'}</span>
                            <span className="font-semibold text-slate-800 truncate">{lang === 'ko' ? '소(한우·젖소), 돼지, 산란계/육계' : 'Cattle, Swine, Poultry'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200 font-normal">
                    {lang === 'ko' ? prod.summaryKo : prod.summaryEn}
                  </p>

                  {/* Specs Table & Features */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-3.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
                        <FileCheck className="w-4.5 h-4.5 text-emerald-600 mr-2" />
                        {lang === 'ko' ? '제품 상세 스펙 (Specifications)' : 'Product Specifications'}
                      </h4>
                      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
                        {prod.specs.map((spec, i) => (
                          <div key={i} className="flex px-4 py-3">
                            <span className="w-36 font-bold text-slate-800 shrink-0">
                              {lang === 'ko' ? spec.labelKo : spec.labelEn}
                            </span>
                            <span className="text-slate-700 font-medium">
                              {lang === 'ko' ? spec.valueKo : spec.valueEn}
                            </span>
                          </div>
                        ))}
                        {prod.patentNo && (
                          <div className="flex px-4 py-3 bg-emerald-50/70">
                            <span className="w-36 font-bold text-emerald-950 shrink-0">
                              {lang === 'ko' ? '특허 번호' : 'Patent No.'}
                            </span>
                            <span className="text-emerald-900 font-bold">
                              {lang === 'ko' ? prod.patentNo : prod.patentNoEn}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
                        <Shield className="w-4.5 h-4.5 text-emerald-600 mr-2" />
                        {lang === 'ko' ? '주요 핵심 특장점' : 'Key Advantages & Features'}
                      </h4>
                      <div className="space-y-2.5">
                        {(lang === 'ko' ? prod.keyFeaturesKo : prod.keyFeaturesEn).map((feat, i) => (
                          <div key={i} className="flex items-start text-xs sm:text-sm text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                            <span className="font-normal leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Test Results */}
                  <div className="space-y-3.5 pt-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
                      <Microscope className="w-4.5 h-4.5 text-emerald-600 mr-2" />
                      {lang === 'ko' ? '공인 시험 및 실증 성적 지표' : 'Empirical Laboratory & Field Results'}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                      {(lang === 'ko' ? prod.testResultsKo : (prod.testResultsEn || prod.testResultsKo)).map((res, i) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                          <span className="text-xs sm:text-sm text-slate-600 font-medium block truncate">{res.metric}</span>
                          <span className="text-xl sm:text-2xl font-black text-emerald-700 my-1 block">
                            <AnimatedCounter end={res.value} />
                          </span>
                          <span className="text-xs text-slate-500 block font-normal line-clamp-1">{res.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. R&D / TECHNOLOGY (모든 R&D 항목 순차 나열) */}
        {/* ========================================================================= */}
        {categoryKey === 'rnd' && (
          <div className="space-y-12">
            {/* Section 1: 저메탄 기술 및 대학 공인 시험 성적 */}
            <section id="methane-trials" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Microscope className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 저메탄 기술 및 효능 공인 시험 성적' : '1. Low-Methane Efficacy & Clinical Trials'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-8">
                
                {/* 산학협력 연구기관 로고 및 책임 교수진 */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-base sm:text-lg font-black text-slate-900">
                        {lang === 'ko' ? '국내외 주요 대학 및 국책 연구기관 산학협력 연구진' : 'Academic Research Faculty & Joint Trial Network'}
                      </h3>
                    </div>
                    <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-xs">
                      {lang === 'ko' ? '공인 검증 완료' : 'Officially Validated'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Seoul National University */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4 group hover:border-indigo-300 hover:bg-slate-100/80 transition-all">
                      <UniversityEmblem code="SNU" size={65} className="shadow-md hover:scale-105 transition-transform shrink-0" />
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-sm sm:text-base block truncate">
                            {lang === 'ko' ? '서울대학교 그린바이오과학기술연구원' : 'Seoul Nat’l Univ GreenBio Institute'}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 shrink-0">
                            SNU
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                          <strong className="text-slate-900 font-bold">
                            {lang === 'ko' ? '김경훈 교수 연구팀' : 'Prof. Kyung-Hoon Kim Team'}
                          </strong>{' '}
                          {lang === 'ko'
                            ? '— 한우 호흡대사챔버 메탄저감 3차 실증시험 (2025.12~2026.06)'
                            : '— Hanwoo cattle respiration chamber 3rd stage methane reduction verification'}
                        </p>
                      </div>
                    </div>

                    {/* Kyungpook National University */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4 group hover:border-rose-300 hover:bg-slate-100/80 transition-all">
                      <UniversityEmblem code="KNU" size={65} className="shadow-md hover:scale-105 transition-transform shrink-0" />
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-sm sm:text-base block truncate">
                            {lang === 'ko' ? '경북대학교 생태환경대학 축산학과' : 'Kyungpook Nat’l Univ Dept. Animal Sci'}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 shrink-0">
                            KNU
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                          <strong className="text-slate-900 font-bold">
                            {lang === 'ko' ? '김은중 교수 연구팀' : 'Prof. Eun-Joong Kim Team'}
                          </strong>{' '}
                          {lang === 'ko'
                            ? '— 반추위 메탄 61.5% 저감 1·2차 in-vitro 시험 및 사양성적 검증'
                            : '— 61.5% rumen methane reduction in-vitro & feeding performance validation'}
                        </p>
                      </div>
                    </div>

                    {/* Chungnam National University */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4 group hover:border-sky-300 hover:bg-slate-100/80 transition-all">
                      <UniversityEmblem code="CNU" size={65} className="shadow-md hover:scale-105 transition-transform shrink-0" />
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-sm sm:text-base block truncate">
                            {lang === 'ko' ? '충남대학교 국가사료검증기관 (농업과학연구소)' : 'Chungnam Nat’l Univ Feed Center'}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 shrink-0">
                            CNU
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                          <strong className="text-slate-900 font-bold">
                            {lang === 'ko' ? '농업과학연구소 분석팀' : 'Agricultural Science Center Team'}
                          </strong>{' '}
                          {lang === 'ko'
                            ? '— 5대 곰팡이독소(아프라/오크라/제랄레논/푸모니신/T-2) 87~94% 흡착 공인 성적'
                            : '— 87-94% adsorption verification for top 5 mycotoxins (Aflatoxin, Ochratoxin, etc.)'}
                        </p>
                      </div>
                    </div>

                    {/* Central Luzon State University */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4 group hover:border-emerald-300 hover:bg-slate-100/80 transition-all">
                      <UniversityEmblem code="CLSU" size={65} className="shadow-md hover:scale-105 transition-transform shrink-0" />
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-sm sm:text-base block truncate">
                            {lang === 'ko' ? '필리핀 국립 루손주립대학교 (CLSU)' : 'Central Luzon State Univ (CLSU)'}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                            CLSU
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                          <strong className="text-slate-900 font-bold">
                            {lang === 'ko' ? '축산생명공학 연구팀' : 'Animal Biotechnology Team'}
                          </strong>{' '}
                          {lang === 'ko'
                            ? '— 300수 브로일러 사양시험 (FCR 1.69 달성 및 생존율 1위 검증)'
                            : '— 300-head broiler feeding trials (FCR 1.69 & top livability rank)'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 대학 공인 시험 성적 데이터 상세 */}
                <div className="space-y-5 pt-2">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-2.5">
                    <Microscope className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      {lang === 'ko' ? '공인 시험 성적 데이터' : 'Official Trial Performance Data'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    {EVIDENCE_DATA.map((ev) => {
                      // 항목별 테마 색상 및 뱃지 설정
                      const themeConfig = {
                        'methane-trial-2': {
                          cardBorder: 'border-emerald-300',
                          cardBg: 'bg-gradient-to-br from-white to-emerald-50/30',
                          titleColor: 'text-slate-900 font-black',
                          badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
                          highlightBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                          badgeLabelKo: '메탄 저감 실증',
                          badgeLabelEn: 'Methane Reduction'
                        },
                        'toxin-trial-cnu': {
                          cardBorder: 'border-sky-300',
                          cardBg: 'bg-gradient-to-br from-white to-sky-50/30',
                          titleColor: 'text-slate-900 font-black',
                          badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
                          highlightBg: 'bg-sky-50 text-sky-800 border-sky-200',
                          badgeLabelKo: '곰팡이독소 공인 흡착',
                          badgeLabelEn: 'Mycotoxin Binding'
                        },
                        'clsu-poultry-trial': {
                          cardBorder: 'border-teal-300',
                          cardBg: 'bg-gradient-to-br from-white to-teal-50/30',
                          titleColor: 'text-slate-900 font-black',
                          badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
                          highlightBg: 'bg-teal-50 text-teal-800 border-teal-200',
                          badgeLabelKo: '육계 300수 사양시험',
                          badgeLabelEn: 'Broiler 300 Trial'
                        },
                        'bovaer-comparison': {
                          cardBorder: 'border-amber-300',
                          cardBg: 'bg-gradient-to-br from-white to-amber-50/30',
                          titleColor: 'text-slate-900 font-black',
                          badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
                          highlightBg: 'bg-amber-50 text-amber-800 border-amber-200',
                          badgeLabelKo: '글로벌 대비 우위',
                          badgeLabelEn: 'Global Benchmark'
                        }
                      }[ev.id] || {
                        cardBorder: 'border-slate-300',
                        cardBg: 'bg-white',
                        titleColor: 'text-slate-900 font-black',
                        badgeBg: 'bg-slate-100 text-slate-900 border-slate-300',
                        highlightBg: 'bg-slate-50 text-emerald-800 border-slate-200',
                        badgeLabelKo: '공인 성적',
                        badgeLabelEn: 'Official'
                      };

                      return (
                        <div key={ev.id} className={`p-5 sm:p-6 rounded-2xl ${themeConfig.cardBg} border-2 ${themeConfig.cardBorder} space-y-3.5 shadow-xs`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                            <div className="space-y-1.5 flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className={`text-xs font-black px-2.5 py-0.5 rounded-md border ${themeConfig.badgeBg}`}>
                                  {lang === 'ko' ? themeConfig.badgeLabelKo : themeConfig.badgeLabelEn}
                                </span>
                              </div>
                              <h3 className={`text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug`}>
                                {lang === 'ko' ? ev.titleKo : ev.titleEn}
                              </h3>
                            </div>
                            <div className={`self-start sm:self-auto px-3.5 py-1.5 rounded-xl border ${themeConfig.highlightBg} flex items-center space-x-1.5 shadow-2xs shrink-0`}>
                              <span className="text-lg sm:text-xl font-black text-emerald-800 tabular-nums">
                                <AnimatedCounter end={lang === 'ko' ? ev.highlightNumber : (ev.highlightNumberEn || ev.highlightNumber.replace(/배$/, '-Fold'))} />
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-emerald-900">
                                {lang === 'ko' ? ev.highlightUnit : (ev.highlightUnitEn || ev.highlightUnit)}
                              </span>
                            </div>
                          </div>

                          <div className="text-xs sm:text-sm text-slate-700 font-bold flex items-center space-x-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/80">
                            <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{lang === 'ko' ? ev.institutionKo : ev.institutionEn} ({lang === 'ko' ? ev.date : (ev.dateEn || ev.date)})</span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            {lang === 'ko' ? ev.summaryKo : ev.summaryEn}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm">
                            {ev.metrics.map((m, idx) => (
                              <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center shadow-2xs">
                                <span className="text-slate-700 font-semibold">{lang === 'ko' ? m.label : (m.labelEn || m.label)}</span>
                                <span className="font-extrabold text-slate-950">{lang === 'ko' ? m.value : (m.valueEn || m.value)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </section>

            {/* Section 2: 맥섬석 원적외선 고방사 기술 */}
            <section id="mineral-tech" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <FlaskConical className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 맥섬석(麥閃石) 원적외선 고방사 기술 원리' : '2. Far-Infrared Wellion Ray Mineral Technology'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {lang === 'ko'
                    ? '세계적 희귀 광물인 맥섬석은 8~11μm 파장대의 인체·가축 유익 원적외선(Wellion Ray)을 90% 이상 고방사하는 천연 점토광물입니다. 한국표준과학연구원(KRISS) 공인 인증을 획득하였으며, 세포 분자 진동을 유도하여 혈류를 개선하고 유해 미생물 억제 및 사료 소화율을 극대화합니다.'
                    : 'Macsumsuk is a globally rare natural phyllosilicate mineral that emits over 90% bio-beneficial 8-11μm far-infrared resonance rays (Wellion Rays). Certified by KRISS (Korea Research Institute of Standards and Science), it induces cellular rotational vibration to boost blood micro-circulation, suppress pathogens, and optimize nutrient digestion.'}
                </p>

                {/* 맥섬석 원적외선 기술 원리 및 3차원 세라믹 구조 */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6 overflow-hidden space-y-4 shadow-xs">
                  <div className="flex items-center space-x-2 pb-3 border-b border-slate-200">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                      {lang === 'ko' ? '원적외선 방사 원리 및 과립형 규산염제 메커니즘' : 'FIR Resonance Principle & Granular Silicate Mechanism'}
                    </h4>
                  </div>

                  <div className="relative">
                    {/* 데스크톱 중앙 좌->우 변형 프로세스 은은한 배지 */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
                      <motion.div 
                        initial={{ opacity: 0.95 }}
                        animate={{ 
                          x: [0, 2, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="flex items-center space-x-2.5 bg-white/95 backdrop-blur-xs text-slate-800 px-3.5 py-2 rounded-full border border-emerald-300 shadow-md"
                      >
                        <div className="flex flex-col items-center text-center leading-tight">
                          <span className="text-xs font-extrabold text-slate-900 tracking-tight">
                            {lang === 'ko' ? '소성공정' : 'Calcination'}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-700">
                            {lang === 'ko' ? '(Calcination)' : '(Process)'}
                          </span>
                        </div>
                        
                        <motion.div
                          animate={{ x: [0, 3, 0], opacity: [0.7, 1, 0.7] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-4 h-4 text-emerald-600" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                      {/* 카드 1: 원적외선 방사 기본 원리 */}
                      <div className="rounded-xl bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-3 relative group hover:border-slate-300 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900">
                            {lang === 'ko' ? '원적외선 방사 기본 메커니즘' : 'Base FIR Radiation Mechanism'}
                          </span>
                          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                            {lang === 'ko' ? '한국표준과학연구원(KRISS) 공인 인증' : 'KRISS Certified'}
                          </span>
                        </div>
                        <div className="flex items-center justify-center p-2 bg-slate-50/60 rounded-lg min-h-[220px]">
                          <img
                            src="https://lh3.googleusercontent.com/d/1JNeNWGUuumr_HjQBjyUzJQVfS4Ajowvt"
                            alt={lang === 'ko' ? '맥섬석 원적외선 기본 방사 원리' : 'Macsumsuk FIR Principle'}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.src = 'https://drive.google.com/uc?export=view&id=1JNeNWGUuumr_HjQBjyUzJQVfS4Ajowvt';
                            }}
                            className="max-h-[220px] w-auto max-w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* 모바일 세로 변형 은은한 배지 */}
                      <div className="flex lg:hidden justify-center items-center py-1">
                        <div className="flex items-center space-x-2 bg-white text-slate-800 px-3 py-1 rounded-full border border-emerald-300 shadow-xs text-xs">
                          <span className="font-bold text-slate-900">{lang === 'ko' ? '소성공정' : 'Calcination'}</span>
                          <span className="text-[10px] text-emerald-700 font-semibold">{lang === 'ko' ? '(Calcination)' : ''}</span>
                          <ArrowDown className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                      </div>

                      {/* 카드 2: 과립형 규산염제 */}
                      <div className="rounded-xl bg-gradient-to-b from-white to-emerald-50/40 border-2 border-emerald-400 p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-emerald-950">
                            {lang === 'ko' ? '과립형 규산염제(무항생제 천연 미네랄)' : 'Granular Silicate Agent (Antibiotic-Free Natural Mineral)'}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-center p-2 bg-emerald-50/30 rounded-lg min-h-[220px] border border-emerald-100">
                          <img
                            src="https://lh3.googleusercontent.com/d/1IT3pFwzvePTXL2_xFQujw3wHgjUHA8Ct"
                            alt={lang === 'ko' ? '과립형 규산염제 (무항생제 천연 미네랄)' : 'Granular Silicate Agent'}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.src = 'https://drive.google.com/uc?export=view&id=1IT3pFwzvePTXL2_xFQujw3wHgjUHA8Ct';
                            }}
                            className="max-h-[220px] w-auto max-w-full object-contain"
                          />
                        </div>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {lang === 'ko'
                            ? '소성공정 과립형 다공질 규산염 미네랄 구조로 원적외선 고방사 효과로 탈취, 유해가스 흡착, 사료 보존성 개선, 메탄저감, 소화 흡수율등 극대화'
                            : 'Calcined granular porous silicate mineral structure maximizing FIR radiation effects: deodorization, hazardous gas absorption, feed shelf-life improvement, methane reduction, and digestion/absorption rates.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                  {/* Card 1: 유익 방사 파장대 */}
                  <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 text-center flex flex-col justify-between group hover:bg-emerald-100/90 hover:border-emerald-400 hover:shadow-md transition-all">
                    <div>
                      <span className="text-emerald-950 font-bold text-sm block mb-1">{lang === 'ko' ? '유익 방사 파장대' : 'Bio-Active Wavelength'}</span>
                      
                      <span className="text-2xl sm:text-3xl font-black text-emerald-950 my-1 block tracking-tight group-hover:text-emerald-800 transition-colors">
                        <AnimatedCounter end={8} rangeEnd={11} suffix=" μm" />
                      </span>
                      <span className="text-xs text-emerald-800 font-semibold block mb-3">
                        {lang === 'ko' ? '생체 공명 흡수 파장 (Wellion Ray)' : 'Biocompatible Resonance Band'}
                      </span>
                    </div>

                    {/* Wavelength Spectrum Graph */}
                    <div className="bg-white/90 p-3 rounded-xl border border-emerald-200 space-y-2">
                      <div className="relative h-12 w-full flex items-end justify-between px-1 overflow-hidden">
                        <svg viewBox="0 0 160 48" className="w-full h-full text-emerald-600">
                          <defs>
                            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.6"/>
                              <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0.05"/>
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 44 Q 35 44, 55 35 T 80 8 T 105 35 Q 125 44, 160 44 L 160 48 L 0 48 Z"
                            fill="url(#waveGrad)"
                          />
                          <path
                            d="M 0 44 Q 35 44, 55 35 T 80 8 T 105 35 Q 125 44, 160 44"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <circle cx="80" cy="8" r="3.5" className="fill-emerald-700 animate-ping opacity-75" />
                          <circle cx="80" cy="8" r="3" className="fill-emerald-900" />
                          <text x="80" y="24" textAnchor="middle" className="text-[8px] font-black fill-emerald-950">Peak 9.4μm</text>
                        </svg>
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 px-1 pt-1 border-t border-emerald-100">
                        <span>4 μm</span>
                        <span className="text-emerald-900 font-extrabold bg-emerald-100 px-1.5 py-0.2 rounded">
                          {lang === 'ko' ? '8~11 μm (맥섬석 피크)' : '8-11 μm (Macsumsuk Peak)'}
                        </span>
                        <span>20 μm</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: 원적외선 방사율 */}
                  <div className="p-5 rounded-2xl bg-teal-50/80 border border-teal-200/90 text-center flex flex-col justify-between group hover:bg-teal-100/90 hover:border-teal-400 hover:shadow-md transition-all">
                    <div>
                      <span className="text-teal-950 font-bold text-sm block mb-1">{lang === 'ko' ? '원적외선 방사율' : 'FIR Emissivity'}</span>

                      <span className="text-2xl sm:text-3xl font-black text-teal-950 my-1 block tracking-tight group-hover:text-teal-800 transition-colors">
                        <AnimatedCounter end={90} suffix={lang === 'ko' ? '% 이상' : '%+'} />
                      </span>
                      <span className="text-xs text-teal-800 font-semibold block mb-3">
                        {lang === 'ko' ? 'KRISS 한국표준과학연구원 공인' : 'KRISS National Certified'}
                      </span>
                    </div>

                    <div className="bg-white/90 p-4 rounded-xl border border-teal-200 space-y-2 flex flex-col justify-center">
                      <div className="flex justify-between text-xs font-bold text-teal-950">
                        <span>{lang === 'ko' ? '맥섬석(천연바이오)' : 'Macsumsuk Bio'}</span>
                        <span className="text-teal-900 font-extrabold text-sm">90.4%</span>
                      </div>
                      <div className="text-[11px] font-bold text-teal-800 pt-2 border-t border-teal-100 flex items-center justify-center">
                        <span>{lang === 'ko' ? '방사에너지 3.74 × 10² W/m² (40℃)' : '3.74 × 10² W/m² (40℃)'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: 자체 보유 광산 */}
                  <div className="p-5 rounded-2xl bg-sky-50/80 border border-sky-200/90 text-center flex flex-col justify-between group hover:bg-sky-100/90 hover:border-sky-400 hover:shadow-md transition-all">
                    <div>
                      <span className="text-sky-950 font-bold text-sm block mb-1">{lang === 'ko' ? '자체 보유 광산' : 'Exclusive Deposit'}</span>

                      <span className="text-2xl sm:text-3xl font-black text-sky-950 my-1 block tracking-tight group-hover:text-sky-800 transition-colors">
                        <AnimatedCounter end={223} suffix=" ha" />
                      </span>
                      <span className="text-xs text-sky-800 font-semibold block mb-3">
                        {lang === 'ko' ? '국내 독점 채굴권 67만평 보유' : 'Sole Mining Rights (670k Pyung)'}
                      </span>
                    </div>

                    <div className="bg-white/90 p-4 rounded-xl border border-sky-200 space-y-2 flex flex-col justify-center">
                      <div className="flex items-center justify-center text-xs font-bold text-sky-950">
                        <span>{lang === 'ko' ? '국내 단일 최대 맥섬석 광산 보유' : 'Largest Single Macsumsuk Deposit'}</span>
                      </div>
                      <div className="text-[11px] font-bold text-sky-800 pt-2 border-t border-sky-100 flex items-center justify-center">
                        <span>{lang === 'ko' ? '원료 채굴부터 가공까지 일원화' : 'Fully Integrated Supply Chain'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 세계 52개국 특허 */}
            <section id="patents" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Award className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '3. 세계 52개국 특허 및 지식재산권(IP) 포트폴리오' : '3. 52-Country Global Patent & IP Portfolio'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">
                      {lang === 'ko' ? '천연 미네랄 기반 점토광물 메탄가스 저감용 사료첨가제' : 'Natural Mineral Methane Reduction Feed Additive'}
                    </span>
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm block">
                      {lang === 'ko' ? '특허등록 제10-2369867호' : 'Patent Reg. No. 10-2369867'}
                    </span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">
                      {lang === 'ko' ? '가축혈액·맥섬석 이용 다공질 과립 사료 제조방법' : 'Porous Granular Feed Production using Livestock Blood & Macsumsuk'}
                    </span>
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm block">
                      {lang === 'ko' ? '특허등록 제10-24962**호 (세계 13개국 등록)' : 'Patent Reg. No. 10-24962** (Registered in 13 Countries)'}
                    </span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">
                      {lang === 'ko' ? '원적외선방사 및 온실가스저감용 벌집형 Bio세라믹' : 'Honeycomb Bio-Ceramics for FIR Emission & Greenhouse Gas Reduction'}
                    </span>
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm block">
                      {lang === 'ko' ? '특허출원 제10-2025-0079**호' : 'Patent App. No. 10-2025-0079**'}
                    </span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">
                      {lang === 'ko' ? '사료 브랜드 "그로피드(Growfeed®)" 상표권' : 'Feed Brand "Growfeed®" Trademark Rights'}
                    </span>
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm block">
                      {lang === 'ko' ? '세계 52개국 상표 등록 완료' : 'Registered Trademark in 52 Countries'}
                    </span>
                  </div>
                </div>

                {/* 6 items x 2 rows Certificate Gallery */}
                <PatentCertificatesGallery lang={lang} />
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. ESG */}
        {/* ========================================================================= */}
        {categoryKey === 'esg' && (
          <div className="space-y-10">
            {/* Section 1: 자원선순환 메커니즘 (5단계 순환경제 모델) */}
            <section id="circular-mechanism" className="scroll-mt-32 space-y-8">
              {/* Header Title Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Leaf className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 자원선순환 메커니즘' : '1. Closed-Loop Circular Bio-Economy'}
                </h2>
              </div>

              {/* 1. 상단 순환경제모델 픽토그램 컴포넌트 (화이트톤 3D 인포그래픽 다이어그램) */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 text-slate-800 border-2 border-slate-200 shadow-md overflow-hidden relative">
                {/* Subtle Ambient Background */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-50 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-7">
                  {/* Top Bar with Rotating Recycle Icon Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-200">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 uppercase tracking-wider">
                          Closed-Loop Circular Bio-Economy
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {lang === 'ko' ? '맥섬석GM 순환 바이오경제 5단계 자원선순환 메커니즘' : 'Macsumsuk GM 5-Step Closed-Loop Circular Bio-Economy'}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal">
                        {lang === 'ko'
                          ? '도축 혈액 100% 밀폐 수거부터 초고온 순간멸균, 조단백 30%+ 사료화, 메탄 61.5% 저감, 농가 상생에 이르는 순환 메커니즘'
                          : 'From 100% sealed blood recovery to flash sterilization, 30%+ protein upcycling, 61.5% CH4 reduction, and farm prosperity.'}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2.5 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-300 self-start sm:self-auto shrink-0 shadow-xs">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      >
                        <Recycle className="w-5 h-5 text-emerald-600" />
                      </motion.div>
                      <span className="text-xs font-black text-emerald-900">
                        {lang === 'ko' ? '100% 자원선순환' : '100% Circularity'}
                      </span>
                    </div>
                  </div>

                  {/* 3D Full-Circle Infographic Wheel + 5-Step Horizontal Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                    {/* Left: Full 360° Circular Infographic Hub */}
                    <div className="lg:col-span-5 flex items-center justify-center py-4">
                      <div className="relative w-[300px] sm:w-[340px] h-[300px] sm:h-[340px] flex items-center justify-center">
                        
                        {/* SVG Full 360° Circular 5 Slices with 3D Bevel Styling */}
                        <svg viewBox="0 0 340 340" className="w-full h-full drop-shadow-xl overflow-visible">
                          <defs>
                            {/* Sector 1 Gradient: Deep Sky/Blue (수질·수거) */}
                            <linearGradient id="grad-sec-1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#38bdf8" />
                              <stop offset="100%" stopColor="#0284c7" />
                            </linearGradient>
                            {/* Sector 2 Gradient: Amber/Gold (초고온 열처리) */}
                            <linearGradient id="grad-sec-2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#fbbf24" />
                              <stop offset="100%" stopColor="#d97706" />
                            </linearGradient>
                            {/* Sector 3 Gradient: Vibrant Emerald (바이오 단백질 사료) */}
                            <linearGradient id="grad-sec-3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#34d399" />
                              <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                            {/* Sector 4 Gradient: Deep Teal (저탄소 메탄감축) */}
                            <linearGradient id="grad-sec-4" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#2dd4bf" />
                              <stop offset="100%" stopColor="#0d9488" />
                            </linearGradient>
                            {/* Sector 5 Gradient: Forest/Sage Green (농가상생) */}
                            <linearGradient id="grad-sec-5" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#4ade80" />
                              <stop offset="100%" stopColor="#15803d" />
                            </linearGradient>
                            
                            {/* Inner Drop Shadow for Bezel */}
                            <filter id="bevel-shadow" x="-10%" y="-10%" width="130%" height="130%">
                              <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.2" />
                            </filter>
                          </defs>

                          {/* 5 Slices (Full 360°, each 72 degrees, starting at top -90°) */}
                          
                          {/* Sector 1: Sky/Blue (-90° to -18°) */}
                          {/* Start: (170, 15), End: (317.4, 122.1) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 170,15 A 155,155 0 0,1 317.4,122.1 Z"
                              fill="url(#grad-sec-1)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at approx -54°, r=105 -> x=231, y=85) */}
                            <g transform="translate(232, 86)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">01</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '혈액수거' : 'RECOVERY'}
                              </text>
                            </g>
                          </g>

                          {/* Sector 2: Amber/Gold (-18° to +54°) */}
                          {/* Start: (317.4, 122.1), End: (261.1, 295.4) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 317.4,122.1 A 155,155 0 0,1 261.1,295.4 Z"
                              fill="url(#grad-sec-2)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at approx +18°, r=105 -> x=270, y=202) */}
                            <g transform="translate(268, 202)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">02</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '순간멸균' : 'STERILIZE'}
                              </text>
                            </g>
                          </g>

                          {/* Sector 3: Emerald (+54° to +126°) */}
                          {/* Start: (261.1, 295.4), End: (78.9, 295.4) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 261.1,295.4 A 155,155 0 0,1 78.9,295.4 Z"
                              fill="url(#grad-sec-3)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at +90°, r=105 -> x=170, y=275) */}
                            <g transform="translate(170, 268)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">03</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '단백사료' : 'FEED'}
                              </text>
                            </g>
                          </g>

                          {/* Sector 4: Deep Teal (+126° to +198°) */}
                          {/* Start: (78.9, 295.4), End: (22.6, 122.1) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 78.9,295.4 A 155,155 0 0,1 22.6,122.1 Z"
                              fill="url(#grad-sec-4)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at approx +162°, r=105 -> x=70, y=202) */}
                            <g transform="translate(72, 202)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">04</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '메탄저감' : 'METHANE'}
                              </text>
                            </g>
                          </g>

                          {/* Sector 5: Forest Green (+198° to +270° / -90°) */}
                          {/* Start: (22.6, 122.1), End: (170, 15) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 22.6,122.1 A 155,155 0 0,1 170,15 Z"
                              fill="url(#grad-sec-5)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at approx +234° / -126°, r=105 -> x=108, y=85) */}
                            <g transform="translate(108, 86)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">05</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '농가상생' : 'CO-GROWTH'}
                              </text>
                            </g>
                          </g>
                        </svg>

                        {/* Central Circular 3D Floating Hub Badge (완전 중앙 배치) */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-4 border-emerald-500 shadow-2xl flex flex-col items-center justify-center p-3 text-center z-20">
                          <span className="text-[10px] sm:text-[11px] font-black text-slate-900 tracking-wider leading-tight">
                            CIRCULAR
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-extrabold text-emerald-700 tracking-widest uppercase">
                            BIO-ECONOMY
                          </span>
                          
                          {/* 5 Cohesive Indicator Dots */}
                          <div className="flex items-center space-x-1 mt-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                            <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Right: 5 Horizontal 3D Block Cards (홈페이지 브랜드 하모니 컬러) */}
                    <div className="lg:col-span-7 space-y-3">
                      
                      {/* Card 01 - Deep Sky/Blue (혈액수거) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-sky-500 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-sky-500 to-sky-600 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-sky-600 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">01</span>
                          <Droplets className="w-4 h-4 mt-0.5 text-sky-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-sky-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-sky-700 uppercase tracking-wider">RECOVERY</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '도축 혈액 밀폐 전량 수거' : 'Sealed Blood Recovery'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-sky-100 text-sky-800 text-[11px] font-black shrink-0 border border-sky-200">
                            {lang === 'ko' ? '폐수 -87.5%' : '-87.5% Cut'}
                          </span>
                        </div>
                      </motion.div>

                      {/* Card 02 - Amber/Gold (초고온 멸균) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-amber-500 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-amber-600 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">02</span>
                          <Sparkles className="w-4 h-4 mt-0.5 text-amber-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-amber-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider">STERILIZATION</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '초고온 순간멸균 & 소성' : 'Flash Sterilization'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 text-[11px] font-black shrink-0 border border-amber-200">
                            {lang === 'ko' ? '180~250℃ 멸균' : '180-250°C'}
                          </span>
                        </div>
                      </motion.div>

                      {/* Card 03 - Vibrant Emerald (사료화) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-emerald-500 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-emerald-600 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">03</span>
                          <Layers className="w-4 h-4 mt-0.5 text-emerald-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-emerald-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider">UPCYCLING</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '조단백 30%+ 바이오 사료화' : '30%+ Protein Upcycling'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[11px] font-black shrink-0 border border-emerald-200">
                            {lang === 'ko' ? '조단백 30%+' : 'CP 30%+'}
                          </span>
                        </div>
                      </motion.div>

                      {/* Card 04 - Deep Teal (메탄저감) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-teal-500 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-teal-600 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">04</span>
                          <TrendingDown className="w-4 h-4 mt-0.5 text-teal-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-teal-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-teal-700 uppercase tracking-wider">METHANE CUT</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '반추위 장내발효 메탄 저감' : 'Enteric Methane Reduction'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-teal-100 text-teal-800 text-[11px] font-black shrink-0 border border-teal-200">
                            {lang === 'ko' ? '메탄 -61.5%' : 'CH4 -61.5%'}
                          </span>
                        </div>
                      </motion.div>

                      {/* Card 05 - Forest/Sage Green (농가상생) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-green-600 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-green-600 to-green-700 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-green-700 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">05</span>
                          <HeartHandshake className="w-4 h-4 mt-0.5 text-green-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-green-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-green-800 uppercase tracking-wider">PROSPERITY</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '농가 실익 증진 & 상생 발전' : 'Farm Mutual Prosperity'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-green-100 text-green-800 text-[11px] font-black shrink-0 border border-green-200">
                            {lang === 'ko' ? 'FCR 1.69 • 50%보조' : 'FCR 1.69'}
                          </span>
                        </div>
                      </motion.div>

                    </div>
                  </div>

                  {/* Flow Return Loop Banner (화이트 톤) */}
                  <div className="flex items-center justify-between bg-slate-100/90 border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-700">
                    <div className="flex items-center space-x-2.5">
                      <RotateCw className="w-4 h-4 text-emerald-600 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="font-bold text-slate-800">
                        {lang === 'ko'
                          ? '100% 무방류 닫힌 순환 고리 (Closed-Loop Upcycling System)로 친환경 축산 생태계 구축'
                          : 'Achieving zero environmental discharge and sustainable farming via 100% closed-loop upcycling.'}
                      </span>
                    </div>
                    <span className="hidden md:inline-block font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
                      Zero Waste • Carbon Neutral
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: 온실가스·메탄 저감 (GHG Reduction) */}
            <section id="ghg-reduction" className="scroll-mt-32 space-y-6">
              {/* Independent Large Section Header Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <TrendingDown className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 온실가스·메탄 저감' : '2. Enteric Methane & GHG Mitigation'}
                </h2>
              </div>

              <div className="rounded-3xl bg-white border-2 border-emerald-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* 이미지 영역 (가로형 좌측) */}
                  <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] bg-slate-900 overflow-hidden group">
                    <img
                      src="https://lh3.googleusercontent.com/d/1ifuZxeqcBqKYpTf0xtmju6u2SurDOLkH"
                      alt={lang === 'ko' ? '저탄소 친환경 한우 목장 및 메탄가스 감축 축산' : 'Low Carbon Eco Farm with Korean Hanwoo'}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                    
                    {/* 플로팅 배지 */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-emerald-900/90 backdrop-blur-xs text-emerald-200 text-xs font-black px-3 py-1 rounded-full border border-emerald-400 shadow-md">
                        {lang === 'ko' ? '메탄 최대 61.5% 저감' : 'Max -61.5% Methane'}
                      </span>
                      <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                        {lang === 'ko' ? '특허등록 제10-2369867호' : 'Patent No. 10-2369867'}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-emerald-300">
                        {lang === 'ko' ? '경북대 2차 시험 & 서울대 호흡대사챔버 실증' : 'KNU 2nd Trial & SNU Respiration Chamber Verification'}
                      </p>
                      <h4 className="text-base sm:text-lg font-black leading-snug">
                        {lang === 'ko' ? '반추위 장내발효 메탄가스 억제 솔루션' : 'Enteric Fermentation Methane Inhibition'}
                      </h4>
                    </div>
                  </div>

                  {/* 텍스트 & 상세 지표 영역 (가로형 우측) */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-br from-white to-emerald-50/20">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                          <TrendingDown className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {lang === 'ko' ? '저탄소 축산 실현 & 장내발효 메탄 억제' : 'Low-Carbon Livestock & Enteric Methane Mitigation'}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '맥섬석 천연 규산염 원료의 다공질 벌집 구조와 수소 흡착 특성을 통해 반추동물(한우, 젖소) 장내발효 메탄을 최대 61.5% 저감시켜 국가 온실가스 감축목표(NDC)에 직접 기여합니다.'
                          : 'Cuts ruminant enteric methane by up to 61.5% through natural porous mineral mechanics, directly supporting national NDC greenhouse gas reduction targets.'}
                      </p>
                    </div>

                    {/* 하이라이트 지표 바 */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-emerald-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '메탄가스 최대 감축률' : 'Max Methane Reduction'}</span>
                        <span className="text-base sm:text-lg font-black text-emerald-800">-61.5%</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-emerald-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '실온 보관 유효기간' : 'Room Temp Shelf Life'}</span>
                        <span className="text-base sm:text-lg font-black text-slate-900">{lang === 'ko' ? '1년 (실온 보관)' : '1 Year (Room Temp)'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 혈액가공품 자원순환 (Blood Byproduct Circularity) */}
            <section id="blood-recycle" className="scroll-mt-32 space-y-6">
              {/* Independent Large Section Header Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-sky-600">
                <Recycle className="w-7 h-7 text-sky-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '3. 혈액가공품 자원순환' : '3. Blood Byproduct Circular Upcycling'}
                </h2>
              </div>

              <div className="rounded-3xl bg-white border-2 border-sky-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* 이미지 영역 (가로형 좌측) */}
                  <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] bg-slate-900 overflow-hidden group">
                    <img
                      src="https://lh3.googleusercontent.com/d/1au4PHzhesC2WdiSFrb6T0LRZ4SErAv5j"
                      alt={lang === 'ko' ? '도축 혈액 친환경 100% 자원화 및 고단백 바이오 가공 설비' : 'Slaughter Blood Bio Upcycling Facility'}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                    {/* 플로팅 배지 */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-sky-900/90 backdrop-blur-xs text-sky-200 text-xs font-black px-3 py-1 rounded-full border border-sky-400 shadow-md">
                        {lang === 'ko' ? '조단백 30%+ 이상' : '30%+ Crude Protein'}
                      </span>
                      <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                        {lang === 'ko' ? '특허 제10-24962**호' : 'Patent No. 10-24962**'}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-sky-300">
                        {lang === 'ko' ? '사료공정규격집 공식 등록 품목 (국내 유일)' : 'Officially Authorized Blood-Processed Feed (Korea Only)'}
                      </p>
                      <h4 className="text-base sm:text-lg font-black leading-snug">
                        {lang === 'ko' ? '밀폐 순간멸균 다공질 과립 사료화 기술' : 'Sealed Instant Sterilization Granulation'}
                      </h4>
                    </div>
                  </div>

                  {/* 텍스트 & 상세 지표 영역 (가로형 우측) */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-br from-white to-sky-50/20">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                          <Leaf className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {lang === 'ko' ? '도축 부산물 100% 고부가가치 바이오 자원화' : '100% Upcycling of Livestock Byproducts into Bio Feed'}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '도축장에서 발생하는 가축 혈액을 전라인 밀폐 연결공법으로 전량 수거하고 180~250℃ 5~7초 순간멸균하여 조단백 30%+ 고영양 바이오 사료로 전환, 수질오염을 원천 방지합니다.'
                          : 'Recovers 100% of slaughter blood via sealed in-line systems and instant flash sterilization (180-250°C, 5-7s) to produce 30%+ crude protein feed, eliminating water pollution.'}
                      </p>
                    </div>

                    {/* 하이라이트 지표 바 */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-sky-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '조단백질(CP) 함량' : 'Crude Protein Content'}</span>
                        <span className="text-base sm:text-lg font-black text-sky-800">{lang === 'ko' ? '30% 이상' : '30%+ (Min)'}</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-sky-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '수질 폐수 발생량' : 'Wastewater Reduction'}</span>
                        <span className="text-base sm:text-lg font-black text-slate-900">{lang === 'ko' ? '-87.5% 절감' : '-87.5% Cut'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: 농가 소득 증대 (Farm Income & Mutual Prosperity) */}
            <section id="farm-income" className="scroll-mt-32 space-y-6">
              {/* Independent Large Section Header Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-teal-600">
                <HeartHandshake className="w-7 h-7 text-teal-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '4. 농가 소득 증대' : '4. Farm Profitability & Mutual Prosperity'}
                </h2>
              </div>

              <div className="rounded-3xl bg-white border-2 border-teal-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* 이미지 영역 (가로형 좌측) */}
                  <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] bg-slate-900 overflow-hidden group">
                    <img
                      src="https://lh3.googleusercontent.com/d/19zdjbZq1gmvBD4e8SLhMP-7-RH4M19ql"
                      alt={lang === 'ko' ? '축산 농가 상생 발전 및 농가 실익 증진' : 'Livestock Farm Co-prosperity & Farm Profitability'}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                    {/* 플로팅 배지 */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-teal-900/90 backdrop-blur-xs text-teal-200 text-xs font-black px-3 py-1 rounded-full border border-teal-400 shadow-md">
                        {lang === 'ko' ? 'FCR 1.69' : 'FCR 1.69'}
                      </span>
                      <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                        {lang === 'ko' ? '경북도 50% 보조사업' : 'Provincial Subsidy Item'}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-teal-300">
                        {lang === 'ko' ? '필리핀 CLSU 300수 비교시험 & 경북 축기연 사양시험' : 'CLSU 300-Broiler Trial & Gyeongbuk Institute Trial'}
                      </p>
                      <h4 className="text-base sm:text-lg font-black leading-snug">
                        {lang === 'ko' ? '사료효율 극대화 및 농가 경영비 절감' : 'FCR Maximization & Farm Cost Reduction'}
                      </h4>
                    </div>
                  </div>

                  {/* 텍스트 & 상세 지표 영역 (가로형 우측) */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-br from-white to-teal-50/20">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {lang === 'ko' ? '지속가능 상생 에코시스템 & 농가 실익 증진' : 'Sustainable Mutual Ecosystem & Farm Profitability'}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '사료요구율(FCR) 개선, 가축 출하일령 2~4일 단축 및 경상북도 혈액가공품 농가지원사업(50% 지원)을 통해 축산 농가의 실질 경영 수익성을 높입니다.'
                          : 'Maximizes real farm profits by optimizing FCR (1.69), shortening fattening cycles by 2-4 days, and providing 50% subsidized supply through provincial farm programs.'}
                      </p>
                    </div>

                    {/* 하이라이트 지표 바 */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-teal-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '사료요구율 (FCR)' : 'Feed Conversion (FCR)'}</span>
                        <span className="text-base sm:text-lg font-black text-teal-800">1.69</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-teal-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '출하일령 단축' : 'Market Day Reduction'}</span>
                        <span className="text-base sm:text-lg font-black text-slate-900">{lang === 'ko' ? '2~4일 단축' : '2-4 Days Faster'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. GLOBAL */}
        {/* ========================================================================= */}
        {categoryKey === 'global' && (
          <div className="space-y-12">
            {/* Section 1: 수출 현황 및 실적 */}
            <section id="export-status" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Globe2 className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 수출 현황 및 실적' : '1. Export Track Record'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    {lang === 'ko' ? '글로벌 수출 실적 및 해외 파트너십' : 'Global Export Milestones & Overseas Partnerships'}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 mt-1 font-normal leading-relaxed">
                    {lang === 'ko'
                      ? '누적 4,850톤+ 수출, 필리핀 Biostar 9년 연속 파트너십 및 동남아·유럽 시장 공략 현황'
                      : 'Over 4,850 tons exported, 9 consecutive years partnership with Biostar (Philippines), expanding across SE Asia and Europe.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-slate-600 font-semibold text-xs sm:text-sm block">{lang === 'ko' ? '누적 수출량' : 'Cumulative Exports'}</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-700 my-1 block">{lang === 'ko' ? '4,850 톤+' : '4,850 Tons+'}</span>
                    <span className="text-xs text-slate-500 font-medium">{lang === 'ko' ? 'Growfeed E-TOX 단일 품목' : 'Growfeed® E-TOX single item'}</span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-slate-600 font-semibold text-xs sm:text-sm block">{lang === 'ko' ? '2026년 출항 확정' : '2026 Confirmed Shipment'}</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-700 my-1 block">{lang === 'ko' ? '480 톤' : '480 Tons'}</span>
                    <span className="text-xs text-slate-500 font-medium">{lang === 'ko' ? '필리핀 L/C 발주 양산 중' : 'Philippines L/C in active production'}</span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-slate-600 font-semibold text-xs sm:text-sm block">{lang === 'ko' ? '글로벌 특허국' : 'Patent Nations'}</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-700 my-1 block">{lang === 'ko' ? '52 개국' : '52 Nations'}</span>
                    <span className="text-xs text-slate-500 font-medium">{lang === 'ko' ? '미국·EU·일본·중국 등' : 'USA, EU, Japan, China, etc.'}</span>
                  </div>
                </div>

                {/* 글로벌 특허 & 해상 수출 물류 2개 이미지 갤러리 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                  {/* Image 1: 글로벌 특허 & 파트너십 */}
                  <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xs hover:shadow-md transition-all">
                    <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                      <img
                        src="https://lh3.googleusercontent.com/d/1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0"
                        alt={lang === 'ko' ? '맥섬석GM 글로벌 특허 및 해외 인증 포트폴리오' : 'Macsumsuk GM Global Patents & IP Portfolio'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Image 2: 바다를 항해하는 컨테이너선 (글로벌 해상 수출) */}
                  <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xs hover:shadow-md transition-all">
                    <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                      <img
                        src="https://lh3.googleusercontent.com/d/1_MlW2tEUjEoCtul-ONR9tKDZQvHRlvFR"
                        alt={lang === 'ko' ? '오대양을 항해하는 글로벌 해상 수출 컨테이너선' : 'Container Cargo Ship Sailing Across Ocean for Global Export'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* 52-Nation Interactive Twinkling World Map Visualizer */}
                <GlobalExportMap lang={lang} />
              </div>
            </section>

            {/* Section 2: 국제 표준 품질 및 수출 인증 (독립된 섹션/DIV) */}
            <section id="global-cert" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Shield className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 국제 인증 현황' : '2. International Certifications'}
                </h2>
              </div>

              {/* International Certifications: GMP, ISO 22000, HALAL Official Logos */}
              <div id="certifications" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-32">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-100 gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                      <h3 className="font-black text-slate-900 text-lg sm:text-xl">
                        {lang === 'ko' ? '국제 표준 품질 및 수출 인증' : 'International Quality & Export Certifications'}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal">
                      {lang === 'ko'
                        ? '맥섬석GM은 엄격한 글로벌 품질 규격과 위생 기준을 통과하여 전 세계 어디서나 안전한 통관을 보증합니다.'
                        : 'Macsumsuk GM meets stringent global quality and hygiene standards to ensure smooth customs clearance worldwide.'}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto">
                    {lang === 'ko' ? '3대 글로벌 규격 획득' : '3 Major Global Standards'}
                  </span>
                </div>

                {/* 3 Official Certification Logo Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* 1. GMP (Good Manufacturing Practice) */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 hover:border-amber-400 hover:shadow-md transition-all flex flex-col items-center text-center space-y-3">
                    {/* GMP Official Vector Seal */}
                    <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-sm border border-amber-300 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Outer Gold Ring */}
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#d97706" strokeWidth="2.5" strokeDasharray="3 1.5" />
                        <circle cx="50" cy="50" r="42" fill="#fffbeb" stroke="#b45309" strokeWidth="1.5" />
                        {/* Laurel Leaves left & right */}
                        <path d="M22 58 C18 48 20 38 28 32 C26 40 28 48 34 54 Z" fill="#d97706" opacity="0.6" />
                        <path d="M78 58 C82 48 80 38 72 32 C74 40 72 48 66 54 Z" fill="#d97706" opacity="0.6" />
                        {/* Inner Core */}
                        <circle cx="50" cy="50" r="28" fill="#1e293b" />
                        <text x="50" y="47" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">GMP</text>
                        <text x="50" y="58" textAnchor="middle" fill="#ffffff" fontSize="5" fontWeight="700" fontFamily="sans-serif">CERTIFIED</text>
                        {/* Stars */}
                        <polygon points="50,18 52,22 56,22 53,25 54,29 50,26 46,29 47,25 44,22 48,22" fill="#d97706" />
                        <polygon points="50,82 52,78 56,78 53,75 54,71 50,74 46,71 47,75 44,78 48,78" fill="#d97706" />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <div id="cert-title-gmp" className="text-base sm:text-[16.5px] font-black text-slate-900 tracking-tight">
                        {lang === 'ko' ? '국제 우수제조기준 (GMP)' : 'GMP Certification'}
                      </div>
                      <div id="cert-sub-gmp" className="text-xs sm:text-[12.5px] font-bold text-amber-700">
                        Good Manufacturing Practice
                      </div>
                      <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                        {lang === 'ko'
                          ? '원료 입고부터 제조, 포장, 출하까지 전 공정 품질 보증 및 위생관리 기준 100% 충족'
                          : 'Full compliance with international hygiene and manufacturing quality assurance across all processes.'}
                      </p>
                    </div>
                  </div>

                  {/* 2. ISO 22000 (Food Safety Management System) */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-200/80 hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-center text-center space-y-3">
                    {/* ISO 22000 Official Vector Seal */}
                    <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-sm border border-blue-300 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Outer Blue Ring */}
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                        <circle cx="50" cy="50" r="42" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1" />
                        {/* Inner Shield */}
                        <path d="M50 20 L74 30 V52 C74 66 50 78 50 78 C50 78 26 66 26 52 V30 Z" fill="#1e3a8a" />
                        <text x="50" y="42" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">ISO</text>
                        <text x="50" y="55" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="900" fontFamily="sans-serif">22000</text>
                        {/* Checkmark */}
                        <path d="M42 63 L47 68 L58 57" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <div id="cert-title-iso" className="text-base sm:text-[16.5px] font-black text-slate-900 tracking-tight">
                        {lang === 'ko' ? '식품안전경영시스템 (ISO 22000)' : 'ISO 22000 Certified'}
                      </div>
                      <div id="cert-sub-iso" className="text-xs sm:text-[12.5px] font-bold text-blue-700">
                        Food Safety Management System
                      </div>
                      <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                        {lang === 'ko'
                          ? '국제표준화기구(ISO) 사료 및 식품안전 위해요소 차단(HACCP) 통합 글로벌 표준 인증'
                          : 'International standard for food and feed safety management systems integrating HACCP principles.'}
                      </p>
                    </div>
                  </div>

                  {/* 3. HALAL (할랄 공식 인증) */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col items-center text-center space-y-3">
                    {/* HALAL Official Vector Seal */}
                    <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-sm border border-emerald-300 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Outer Emerald Ring */}
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#059669" strokeWidth="2.5" strokeDasharray="5 2" />
                        <circle cx="50" cy="50" r="42" fill="#ecfdf5" stroke="#047857" strokeWidth="1.5" />
                        {/* Crescent & Dome Accent */}
                        <path d="M30 48 A22 22 0 0 0 68 64 A24 24 0 0 1 36 34 A22 22 0 0 0 30 48 Z" fill="#10b981" opacity="0.25" />
                        {/* Inner Circle */}
                        <circle cx="50" cy="50" r="28" fill="#064e3b" />
                        {/* Arabic Style Calligraphy Representation */}
                        <text x="50" y="44" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" fontFamily="serif">حلال</text>
                        <text x="50" y="58" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">HALAL</text>
                        <text x="50" y="68" textAnchor="middle" fill="#a7f3d0" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">KOREA CERTIFIED</text>
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <div id="cert-title-halal" className="text-base sm:text-[16.5px] font-black text-slate-900 tracking-tight">
                        {lang === 'ko' ? '할랄 공식 인증 (HALAL)' : 'Halal Certified'}
                      </div>
                      <div id="cert-sub-halal" className="text-xs sm:text-[12.5px] font-bold text-emerald-700">
                        Islamic Compliant & Certified
                      </div>
                      <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                        {lang === 'ko'
                          ? '동남아(말레이시아·인도네시아) 및 중동 이슬람권 수출 통관을 위한 무독성·순수 원료 인증'
                          : 'Officially certified for non-toxicity and pure mineral composition for seamless export to Islamic markets.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. PR & Media Gallery */}
        {/* ========================================================================= */}
        {categoryKey === 'pr' && (
          <div className="space-y-12">
            {/* PR Photo & Multimedia Gallery */}
            <section id="gallery" className="scroll-mt-32 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b-2 border-emerald-600">
                <div className="flex items-center space-x-3">
                  <ImageIcon className="w-7 h-7 text-emerald-600" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {lang === 'ko' ? '홍보갤러리' : 'PR Gallery'}
                  </h2>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                {/* Photo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {GALLERY_PHOTOS.map((photo) => (
                    <div
                      key={photo.id}
                      className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                        <img
                          src={photo.imageUrl}
                          alt={lang === 'ko' ? photo.titleKo : photo.titleEn}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-4 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {lang === 'ko' ? photo.titleKo : photo.titleEn}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {lang === 'ko' ? photo.descKo : photo.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2: News List */}
            <section id="news" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Sparkles className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '최신 소식' : 'Latest News'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="space-y-3.5">
                  {NEWS_LIST.map((news) => (
                    <div
                      key={news.id}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start group"
                    >
                      {/* Left Thumbnail Image */}
                      {news.imageUrl && (
                        <div className="w-full sm:w-44 md:w-52 h-40 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-2xs relative">
                          <img
                            src={news.imageUrl}
                            alt={lang === 'ko' ? news.titleKo : news.titleEn}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (news.imageUrl && news.imageUrl.includes('googleusercontent.com/d/')) {
                                const id = news.imageUrl.split('/d/')[1];
                                if (id) target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                              }
                            }}
                          />
                        </div>
                      )}

                      {/* Right News Content */}
                      <div className="flex-1 min-w-0 space-y-2 w-full">
                        <div className="flex items-center justify-end text-xs sm:text-sm">
                          <span className="text-slate-500 font-medium text-xs sm:text-sm">
                            {news.date}{news.source ? ` | ${lang === 'ko' ? news.source : (news.sourceEn || news.source)}` : ''}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                          {lang === 'ko' ? news.titleKo : news.titleEn}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {lang === 'ko' ? news.summaryKo : news.summaryEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 7. CONTACT */}
        {/* ========================================================================= */}
        {categoryKey === 'contact' && (
          <div className="space-y-12">
            {/* Section 1: 연락처 및 운영시간 */}
            <section id="contact-info" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Phone className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 연락처 및 운영시간' : '1. Contact & Operating Hours'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {lang === 'ko'
                    ? '사료 첨가제 구매 상담, 기술 제휴, 축종별 맞춤 컨설팅, OEM/ODM 개발 및 대량 발주 문의를 신속하고 정확하게 안내해 드립니다.'
                    : 'We promptly assist with purchasing, technical partnerships, tailored livestock consulting, OEM/ODM development, and bulk supply inquiries.'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3.5">
                    <div className="flex items-center space-x-2.5 font-bold text-slate-900 text-base">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>{lang === 'ko' ? '유선 연락처 안내' : 'Phone Numbers'}</span>
                    </div>
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '대표전화' : 'Tel'}</span>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-emerald-700 hover:underline">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '담당자 직통' : 'Direct'}</span>
                        <a href={`tel:${COMPANY_INFO.mobile}`} className="font-bold text-emerald-700 hover:underline">
                          {COMPANY_INFO.mobile}
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '팩스 번호' : 'Fax'}</span>
                        <span className="text-slate-600 font-medium">{COMPANY_INFO.fax}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3.5">
                    <div className="flex items-center space-x-2.5 font-bold text-slate-900 text-base">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span>{lang === 'ko' ? '이메일 & 운영시간' : 'Email & Hours'}</span>
                    </div>
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '공식 이메일' : 'Email'}</span>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-emerald-700 hover:underline">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '운영 시간' : 'Hours'}</span>
                        <span className="text-slate-700 font-medium">
                          {lang === 'ko' ? '평일 09:00 ~ 18:00 (주말·공휴일 휴무)' : 'Mon-Fri 09:00-18:00 KST'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: 오시는 길 */}
            <section id="location" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <MapPin className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 오시는 길' : '2. Directions & Location'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {lang === 'ko' ? '본사 및 스마트 제조공장' : 'HQ & Smart Plant'}
                      </span>
                      <span className="font-bold text-slate-900 text-base">
                        {lang === 'ko' ? '맥섬석GM㈜' : 'Macsumsuk GM Co., Ltd.'}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 font-medium flex items-center space-x-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{lang === 'ko' ? '경상북도 영천시 대창면 한제길 44' : '44, Hanje-gil, Daechang-myeon, Yeongcheon-si, Gyeongsangbuk-do, Korea'}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => handleCopyAddress('경상북도 영천시 대창면 한제길 44')}
                      className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center space-x-1.5 cursor-pointer shadow-2xs"
                    >
                      {copiedAddress ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                      <span>{copiedAddress ? (lang === 'ko' ? '주소 복사됨!' : 'Copied!') : (lang === 'ko' ? '주소 복사' : 'Copy Address')}</span>
                    </button>

                    <a
                      href="https://map.kakao.com/link/search/경상북도 영천시 대창면 한제길 44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-[#FEE500] hover:bg-[#FADA0A] transition-colors flex items-center space-x-1.5 shadow-2xs cursor-pointer"
                    >
                      <Navigation className="w-4 h-4 text-slate-900" />
                      <span>{lang === 'ko' ? '카카오맵 길찾기' : 'Kakao Map'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="https://map.naver.com/p/search/경상북도 영천시 대창면 한제길 44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#03C75A] hover:bg-[#02b350] transition-colors flex items-center space-x-1.5 shadow-2xs cursor-pointer"
                    >
                      <span>{lang === 'ko' ? '네이버지도' : 'Naver Map'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Interactive Map Visual Card */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xs bg-slate-900">
                  <div className="w-full h-80 sm:h-96 relative flex items-center justify-center overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950/40"></div>

                    {/* Central Map Pin & Info Card */}
                    <div className="relative z-10 p-6 sm:p-8 max-w-lg mx-4 text-center bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg ring-4 ring-amber-400/20">
                        <MapPin className="w-8 h-8" />
                      </div>

                      <div className="space-y-1.5">
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                          <span>{lang === 'ko' ? '카카오맵 공식 등록 사업장' : 'Registered Location on Kakao Map'}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {lang === 'ko' ? '맥섬석GM(주) 본사 · 제조공장' : 'Macsumsuk GM Headquarters & Plant'}
                        </h3>
                        <p className="text-sm text-slate-300 font-medium">
                          {lang === 'ko' ? '경상북도 영천시 대창면 한제길 44' : '44, Hanje-gil, Daechang-myeon, Yeongcheon-si, Gyeongbuk, Korea'}
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href="https://map.kakao.com/link/search/경상북도 영천시 대창면 한제길 44"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-[#FEE500] hover:bg-[#FADA0A] transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                        >
                          <Navigation className="w-4 h-4 text-slate-950" />
                          <span>{lang === 'ko' ? '카카오맵으로 길찾기' : 'Open in Kakao Map'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href="https://map.kakao.com/link/to/맥섬석GM,35.8824,128.8415"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          <MapPin className="w-4 h-4 text-emerald-400" />
                          <span>{lang === 'ko' ? '내비게이션 실행' : 'Launch Navigation'}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Transport guide footer */}
                  <div className="p-4 bg-slate-800/90 border-t border-slate-700 text-xs sm:text-sm text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-emerald-400">{lang === 'ko' ? '고속도로:' : 'Highway:'}</span>
                      <span>{lang === 'ko' ? '경부고속도로 영천IC / 건천IC' : 'Gyeongbu Expwy Yeongcheon / Geoncheon IC'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-emerald-400">{lang === 'ko' ? '철도/KTX:' : 'Train / KTX:'}</span>
                      <span>{lang === 'ko' ? '동대구역 / 신경주역 / 영천역' : 'Dongdaegu / Singyeongju / Yeongcheon Stn.'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-emerald-400">{lang === 'ko' ? '화물/방문:' : 'Freight / Access:'}</span>
                      <span>{lang === 'ko' ? '대형 트럭 및 컨테이너 진입 가능' : 'Heavy Trucks & 40ft Containers Accessible'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 온라인 문의 */}
            <section id="online-inquiry" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Mail className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '3. 온라인 문의' : '3. Online Inquiry'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm">
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white border border-emerald-700/40 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-xl">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {lang === 'ko' ? '1:1 온라인 전담 상담' : '1:1 Online Consultation'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      {lang === 'ko' ? '온라인 상담 및 문의 접수' : 'Online Inquiry & Consultation Form'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {lang === 'ko'
                        ? '축종별 맞춤 컨설팅, 견적 문의, OEM/ODM 사료 배합 개발, 해외 총판 및 대리점 제휴 등 원하시는 내용을 남겨주시면 담당 전문가가 24시간 이내에 신속히 회신드립니다.'
                        : 'Submit your inquiries for tailored livestock consulting, quotations, OEM/ODM formulations, or global dealerships. Our specialists will respond within 24 hours.'}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenInquiry()}
                    className="w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-emerald-900/40 shrink-0 flex items-center justify-center space-x-2.5 cursor-pointer group"
                  >
                    <span>{lang === 'ko' ? '온라인 문의 바로가기' : 'Go to Online Inquiry'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  );
};
