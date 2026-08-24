import React from 'react';

export type AwardCode = 
  | 'tower' 
  | 'world-class' 
  | 'pride'
  | 'patent'
  | 'ip-star' 
  | 'gyeongbuk-sme' 
  | 'taxpayer' 
  | 'gmp-iso' 
  | 'innobiz' 
  | 'halal';

interface AwardEmblemProps {
  code: AwardCode;
  size?: number;
  className?: string;
}

export const AwardEmblem: React.FC<AwardEmblemProps> = ({
  code,
  size = 56,
  className = '',
}) => {
  switch (code) {
    case 'tower':
      // 대한민국 정부 은탑산업훈장 (National Order of Industrial Merit Silver)
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="대한민국 정부 은탑산업훈장"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Emblem_of_South_Korea.svg/240px-Emblem_of_South_Korea.svg.png"
            alt="대한민국 정부 은탑산업훈장"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex flex-col items-center justify-center font-black text-center shadow-inner"
          >
            <span className="text-[10px] leading-tight font-black tracking-tighter">은탑훈장</span>
            <span className="text-[8px] text-amber-200 uppercase font-bold">훈장 1호</span>
          </div>
        </div>
      );

    case 'pride':
      // 경상북도 우수 수출 공동브랜드 PRIDE 기업
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="경상북도 수출 공동브랜드 PRIDE 기업"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Emblem_of_Gyeongsangbuk-do.svg/320px-Emblem_of_Gyeongsangbuk-do.svg.png"
            alt="경상북도 PRIDE 공동브랜드"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[9px] leading-tight font-black">경북PRIDE</span>
            <span className="text-[8px] text-sky-200">수출기업</span>
          </div>
        </div>
      );

    case 'patent':
      // 특허청 원천기술 특허 등록
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="대한민국 특허청 원천특허 등록"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Korean_Intellectual_Property_Office_Emblem.svg/320px-Korean_Intellectual_Property_Office_Emblem.svg.png"
            alt="특허청 특허등록"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight font-black">특허청</span>
            <span className="text-[8px] text-emerald-200">특허등록</span>
          </div>
        </div>
      );

    case 'world-class':
      // 산업통상자원부 / KOTRA 세계일류상품
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="산업통상자원부·KOTRA 세계일류상품"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ministry_of_Trade%2C_Industry_and_Energy_of_the_Republic_of_Korea_Logo.svg/320px-Ministry_of_Trade%2C_Industry_and_Energy_of_the_Republic_of_Korea_Logo.svg.png"
            alt="산업통상자원부 세계일류상품"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[9px] leading-tight font-black">세계일류</span>
            <span className="text-[8px] text-sky-200">KOTRA</span>
          </div>
        </div>
      );

    case 'ip-star':
      // 대한민국 특허청 KIPO / 경북지식재산센터
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="특허청 글로벌 IP스타기업"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Korean_Intellectual_Property_Office_Emblem.svg/320px-Korean_Intellectual_Property_Office_Emblem.svg.png"
            alt="특허청 글로벌 IP 스타기업"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-sky-600 to-blue-800 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight font-black">특허청</span>
            <span className="text-[8px] text-sky-200">IP-STAR</span>
          </div>
        </div>
      );

    case 'gyeongbuk-sme':
      // 경상북도 중소기업대상
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="경상북도 중소기업대상"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Emblem_of_Gyeongsangbuk-do.svg/320px-Emblem_of_Gyeongsangbuk-do.svg.png"
            alt="경상북도 심볼마크"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight font-black">경상북도</span>
            <span className="text-[8px] text-emerald-200">기업대상</span>
          </div>
        </div>
      );

    case 'taxpayer':
      // 부총리 겸 재정경제부 장관 성실납세자상 / 국세청
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="성실납세자상 (부총리 겸 재정경제부 장관)"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/National_Tax_Service_of_the_Republic_of_Korea_Logo.svg/320px-National_Tax_Service_of_the_Republic_of_Korea_Logo.svg.png"
            alt="국세청 성실납세자 표창"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight font-black">성실납세</span>
            <span className="text-[8px] text-slate-300">부총리상</span>
          </div>
        </div>
      );

    case 'gmp-iso':
      // 국제 GMP & ISO 22000 인증
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="국제 GMP & ISO22000 인증 (KMR)"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/ISO_Logo_%28Red_square%29.svg/300px-ISO_Logo_%28Red_square%29.svg.png"
            alt="ISO 22000 & GMP 인증마크"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-red-600 to-rose-800 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight font-black">ISO</span>
            <span className="text-[8px] text-rose-200">22000·GMP</span>
          </div>
        </div>
      );

    case 'innobiz':
      // 중소벤처기업부 Inno-Biz & 벤처기업
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="중소벤처기업부 Inno-Biz & 벤처기업"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ministry_of_SMEs_and_Startups_of_the_Republic_of_Korea_Logo.svg/320px-Ministry_of_SMEs_and_Startups_of_the_Republic_of_Korea_Logo.svg.png"
            alt="중소벤처기업부 공식 엠블럼"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-teal-600 to-cyan-800 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[9px] leading-tight font-black">INNOBIZ</span>
            <span className="text-[8px] text-teal-200">벤처기업</span>
          </div>
        </div>
      );

    case 'halal':
      // 한국이슬람교중앙회(KMF) 국제 할랄(HALAL) 인증
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 p-1.5 ${className}`}
          style={{ width: size, height: size }}
          title="KMF 국제 할랄(HALAL) 인증"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Halal_logo.svg/300px-Halal_logo.svg.png"
            alt="국제 HALAL 할랄 인증마크"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight font-black">HALAL</span>
            <span className="text-[8px] text-emerald-200">할랄인증</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
