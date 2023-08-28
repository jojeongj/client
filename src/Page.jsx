import React from "react";
import Layout from "./components/Layout";

export default function Page() {
  return (
    <Layout isHeader isFooter canGoBack>
      <div className="text-red-500">메인페이지</div>
    </Layout>
  );
}
