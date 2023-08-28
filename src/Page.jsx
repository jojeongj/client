import React from "react";
import Layout from "./components/Layout";
import LogoAsset from "./assets/LogoAsset";

export default function Page() {
  return (
    <Layout isFooter canGoBack>
      <div className="w-full h-full flex flex-col py-16 px-4 space-y-8">
        {/* 슬로건 */}
        <div>
          <div className="flex items-center">
            <LogoAsset />
            <span>과</span>
          </div>
          <p className="text-2xl font-semibold">함께하는 Daegu 여행</p>
        </div>
        {/* 상품 리스트 */}
        <div className="flex flex-col space-y-4">
          {/* 1 db */}
          <div className="group transition-all duration-700 cursor-pointer relative bg-[url('https://images.unsplash.com/photo-1682686581660-3693f0c588d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center w-full h-20 rounded-md border border-gray-300">
            <div className="w-full h-full bg-gradient-to-r from-gray-900/50 to-gray-700/50 group-hover:from-gray-900/70 group-hover:to-gray-700/70" />
            <div className="absolute inset-0 w-full h-full flex flex-col text-gray-1000 text-white justify-center px-4">
              <h2 className="font-bold group-hover:text-white">
                영진직업전문학교 주변 투어
              </h2>
              <p className="text-xs text-gray-200 group-hover:text-white">
                동구의 숨은 맛집을 찾아라!
              </p>
            </div>
          </div>
          {/* 2 db */}
          {/* 3 db */}
        </div>
      </div>
    </Layout>
  );
}
