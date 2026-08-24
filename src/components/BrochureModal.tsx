import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  BookOpen, 
  ExternalLink, 
  Layers, 
  Printer, 
  Share2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData';
import { Language } from '../types';

interface BrochureModalProps {
  lang: Language;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  lang,
  onClose,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const brochures = [
    {
      id: 'company-full',
      titleKo: '맥섬석GM㈜ 기업 및 제품 종합 소개서 (2026)',
      titleEn: 'Macsumsuk GM Integrated Company Profile & Solutions (2026)',
      pages: '56 Pages',
      size: '14.8 MB',
      badgeKo: '종합 소개서',
      badgeEn: 'Full Profile',
      descKo: '회사개요, 40년 연혁, 원료광산/생산설비, 4대 제품 라인업, 대학 공인 시험성적서 일체 수록',
      descEn: 'Corporate profile, 40-year history, mining assets, 4 key product lines, and complete empirical trial data.'
    },
    {
      id: 'etox-catalog',
      titleKo: 'Growfeed® E-TOX 제품 상세 카탈로그',
      titleEn: 'Growfeed® E-TOX Technical Brochure',
      pages: '12 Pages',
      size: '4.2 MB',
      badgeKo: '세계일류상품',
      badgeEn: 'World-Class',
      descKo: '저메탄 톡신바인더, 충남대 곰팡이독소 87~94% 흡착 데이터, 필리핀 CLSU 육계/양돈 시험 결과',
      descEn: 'Low-methane toxin binder, CNU 87-94% mycotoxin binding trial, and CLSU broiler/swine field tests.'
    },
    {
      id: 'protein-catalog',
      titleKo: 'Growfeed® Protein ESG 단백질 사료 브로슈어',
      titleEn: 'Growfeed® Protein Circular Bio-Protein Leaflet',
      pages: '8 Pages',
      size: '3.1 MB',
      badgeKo: 'ESG 자원순환',
      badgeEn: 'ESG Circular',
      descKo: '도축혈액 순환자원화 공법, 조단백 30%+ 규격, 타사 혈분 대비 소화흡수율 비교표',
      descEn: 'Recycled bovine/porcine blood protein process, crude protein 30%+ specs, and bioavailability comparison.'
    },
    {
      id: 'dcm-catalog',
      titleKo: 'Growfeed® DCM 메탄저감 사료 기술 자료집',
      titleEn: 'Growfeed® DCM Methane Mitigation Whitepaper',
      pages: '16 Pages',
      size: '6.5 MB',
      badgeKo: '저메탄 특허',
      badgeEn: 'Methane Patent',
      descKo: '경북대 1·2차 메탄 61.5% 저감 데이터, 서울대 한우 챔버 실증 계획, Bovaer 비교 분석',
      descEn: 'KNU 61.5% methane reduction data, SNU Hanwoo chamber trial plan, and comparison with synthetic alternatives.'
    }
  ];

  const handleDownload = (brochureTitle: string) => {
    setDownloadSuccess(brochureTitle);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        {/* Top Bar */}
        <div className="bg-slate-900 text-white px-6 py-4.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base sm:text-lg font-black text-white">
              {lang === 'ko' ? '회사소개서 & 제품 카탈로그 다운로드 센터' : 'Brochure & Catalog Center'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 bg-slate-50">
          {downloadSuccess && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-center space-x-2.5 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>[{downloadSuccess}]</strong> {lang === 'ko' ? '파일 다운로드가 시작되었습니다.' : 'Download has started.'}
              </span>
            </div>
          )}

          <div className="space-y-3.5">
            {brochures.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 hover:border-emerald-300 shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      {lang === 'ko' ? item.badgeKo : item.badgeEn}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-400">{item.pages} · {item.size}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {lang === 'ko' ? item.titleKo : item.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {lang === 'ko' ? item.descKo : item.descEn}
                  </p>
                </div>

                <button
                  onClick={() => handleDownload(lang === 'ko' ? item.titleKo : item.titleEn)}
                  className="px-5 py-3 bg-slate-900 group-hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs flex items-center justify-center space-x-2 transition-all shrink-0 cursor-pointer"
                >
                  <Download className="w-4.5 h-4.5" />
                  <span>{lang === 'ko' ? 'PDF 다운로드' : 'Download PDF'}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-100 rounded-xl text-xs sm:text-sm text-slate-700 border border-slate-200 leading-relaxed font-normal">
            <strong className="text-slate-900">{lang === 'ko' ? '안내:' : 'Notice:'}</strong>{' '}
            {lang === 'ko'
              ? '해외 바이어용 영문 요약본(English Executive Summary) 및 인쇄용 고해상도 인쇄물 발송이 필요하신 경우 대표번호(054-336-6000) 또는 이메일(mssgm0123@naver.com)로 요청해 주시기 바랍니다.'
              : 'For printed high-resolution booklets or customized English Executive Summaries, please contact us directly at +82-54-336-6000 or mssgm0123@naver.com.'}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-3.5 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
          >
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
