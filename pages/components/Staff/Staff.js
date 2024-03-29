import * as React from 'react';

export default function Staff() {
  return (
    <div className="m-7">
      <div className="pb-10 border shadow-lg">
        <div className="px-6 flex flex-col items-center">
          <div className="text-4xl font-thin border border-black px-10 py-1 mt-10 mb-20">
            Staff
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center">
          <div className="overflow-hidden relative justify-end  cursor-pointer capitalize m-4 flex flex-col w-72 h-full z-50 object-cover text-white">
            <img src="/staff/akiyama.jpg"/>
            <div className="absolute p-1 flex bg-white text-gray-600 flex-col">
              <span className="font-bold">秋山 知 : 代表</span>
            </div>
          </div>
          <div className="overflow-hidden relative justify-end  cursor-pointer capitalize m-4 flex flex-col w-72 h-full z-50 object-cover text-white">
            <img src="/staff/miyo.jpg"/>
            <div className="absolute p-1 flex bg-white text-gray-600 flex-col">
              <span className="font-bold">三代 さゆり </span>
            </div>
          </div>
          <div className="overflow-hidden relative justify-end  cursor-pointer capitalize m-4 flex flex-col w-72 h-96 z-50 object-cover text-white">
            <img src="/staff/nemoto.jpg"/>
            <div className="absolute p-1 flex bg-white text-gray-600 flex-col">
              <span className="font-bold">根本 博子</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}