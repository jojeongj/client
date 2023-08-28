import Layout from "../components/Layout";
import { QrScanner } from "@yudiel/react-qr-scanner";

export default function Qr() {
  return (
    <Layout isHeader isFooter>
      <div className="w-full h-full flex items-center">
        <QrScanner
          onDecode={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
        />
      </div>
    </Layout>
  );
}
