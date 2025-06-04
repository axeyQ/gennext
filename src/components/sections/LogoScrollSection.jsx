'use client'
import React from 'react';

export default function LogoScrollSection() {
  const topRowLogos = [
    'Chatbase', 'Kalshi', 'atoms', 'Ledger Investing', 'alchemy', 'million', 'NOYT', 'PUMA', 'aave', 'N'
  ];
  
  const bottomRowLogos = [
    'RE/MAX', 'Resend', 'TEKTON', 'SketchPro', 'Texts', 'VRAI', 'dupe', 'Particl', 'AUTOMATT'
  ];

  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="relative">
        {/* Top Row - Moving Left (Slower) */}
        <div className="mb-8">
          <div className="flex animate-scroll-left">
            {[...topRowLogos, ...topRowLogos, ...topRowLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12"
              >
                <span className="text-gray-500 text-2xl font-medium whitespace-nowrap opacity-60">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Right (Faster) */}
        <div>
          <div className="flex animate-scroll-right">
            {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12"
              >
                <span className="text-gray-500 text-2xl font-medium whitespace-nowrap opacity-60">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}