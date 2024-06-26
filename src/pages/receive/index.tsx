import Receive from "src/routes/Receive"
import MetaConfig from "src/components/MetaConfig";
import { CONFIG } from "site.config";

export default function ReceivePage() {
  const meta = {
    title: "Receive",
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <Receive />
    </>
  );
}

