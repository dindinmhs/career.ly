import React from 'react';
import Image from 'next/image';

const PreviewCV = () => {
  return (
    <div className="flex justify-center items-start py-10 px-4 min-h-screen">
      <div className="w-full max-w-xl">
        {/* Tombol di atas preview */}
        <div className="mb-4">
          <button className="bg-[#3785C6] text-white px-3 py-2 rounded-md transition text-lg">
            Kustomisasi
          </button>
        </div>

        {/* Preview CV */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white" style={{ aspectRatio: '3/4' }}>
          <Image
            src="/trendycv.svg" 
            alt='CV Preview'
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewCV;
