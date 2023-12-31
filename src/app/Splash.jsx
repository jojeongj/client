import { useEffect } from "react";
import LogoAsset from "../assets/LogoAsset";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };
  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <Layout>
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1692533823876-e659c090a4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')]">
        {/* 빈박스 */}
        <div className="w-full h-full bg-white/50" />
        {/* 로고영역 */}
        <div className="flex flex-col absolute top-[50%] left-[50%] -translate-x-[50%] items-center -translate-y-[50%]">
          <h1>세상의 모든 여행</h1>
          <div>
            <LogoAsset large />
          </div>
        </div>
      </div>
    </Layout>
  );
}
