import { useState } from "react";
import EcosystemCard from "./EcosystemCard";

type Filters =
  | "all"
  | "bridge"
  | "dashboard"
  | "dapp"
  | "explorer"
  | "nft"
  | "oracle"
  | "wallet"
  | "zk";

interface EcosystemData {
  icon: string;
  name: string;
  link: string;
  description: string;
  filters: Filters[];
}

const ecosystemData: EcosystemData[] = [
  {
    icon: "/images/ecosystem/blockscout.svg",
    name: "Blockscout",
    link: "https://blockscout.com",
    description: "Blockchain Explorer for inspecting and analyzing EVM Chains.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/taiko.svg",
    name: "Bridge",
    link: "https://bridge.test.taiko.xyz",
    description: "Bridge is a dapp that lets you bridge tokens with Taiko.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/loopring.svg",
    name: "Loopring Wallet",
    link: "https://wallet.loopring.io",
    description:
      "Loopring is your mobile gateway to Ethereum L2, enabling you to easily trade, swap, collect, stake, and invest without the costly gas fees.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/nfts2me.jpg",
    name: "NFTs2Me",
    link: "https://nfts2me.com/app",
    description:
      "NFTs2Me is a multichain user-friendly comprehensive platform to create, deploy and manage your NFT collection and community, 100% free with advanced functionalities.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/orally.png",
    name: "Orally",
    link: "https://orally.network",
    description:
      "The fully on-chain oracles for secure and reliable decentralized data feeding and automation across multiple chains.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/orbiter.jpg",
    name: "Orbiter",
    link: "https://orbiter.finance",
    description:
      "A decentralized cross-rollup Layer 2 bridge with a contract only on the destination side.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/pheasant-network.png",
    name: "Pheasant Network",
    link: "https://pheasant.network",
    description:
      "Pheasant Network is an optimistic bridge between Layer 1 and Layer 2.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/taiko.svg",
    name: "Swap",
    link: "https://swap.test.taiko.xyz",
    description: "Swap is a dapp that lets you swap tokens on Taiko.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/taiko-dashboard.png",
    name: "Taiko Node Dashboard",
    link: "https://github.com/wolfderechter/taiko-node-dashboard-docker",
    description:
      "A user friendly, easy to read, and visually pleasing dashboard for those running a Node/Proposer/Prover.",
    filters: [],
  },
  {
    icon: "/images/ecosystem/zkpool.png",
    name: "ZKPool",
    link: "https://zkpool.io",
    description:
      "ZKPool aggregates the computing power of accelerators for zero-knowledge proofs and provides services to ZKP applications.",
    filters: [],
  },
];

export default function EcosystemSection() {
  // NOTE: commented out because we won't need this until we have grown our ecosystem page further
  // const [activeFilter, setActiveFilter] = useState<Filters>("all");

  // const filteredData =
  //   activeFilter === "all"
  //     ? ecosystemData
  //     : ecosystemData.filter((data) => data.filters.includes(activeFilter));

  return (
    <>
      {/* NOTE: commented out because we won't need this until we have grown our ecosystem page further */}
      {/* <div className="flex justify-center space-x-4 mb-8">
        <FilterLabel
          text="all"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterLabel
          text="bridge"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterLabel
          text="dapp"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterLabel
          text="dashboard"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterLabel
          text="explorer"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterLabel
          text="nft"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterLabel
          text="oracle"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterLabel
          text="wallet"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FilterLabel
          text="zk"
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
        {/* NOTE: commented out because we won't need this until we have grown our ecosystem page further */}
        {/* {filteredData.map((_) => ( */}
        {ecosystemData.map((_) => (
          <EcosystemCard
            key={_.name}
            icon={_.icon}
            name={_.name}
            link={_.link}
            description={_.description}
          />
        ))}
      </div>
    </>
  );
}

// NOTE: commented out because we won't need this until we have grown our ecosystem page further
// function FilterLabel({ text, activeFilter, setActiveFilter }) {
//   const isActive = activeFilter === text;

//   const buttonStyles = `border rounded-full py-1 px-4 text-sm focus:outline-none transition-colors duration-200 ${
//     isActive
//       ? "bg-primary-500 text-black font-bold"
//       : "bg-white text-gray-700 dark:bg-black dark:text-gray-300"
//   } ${
//     isActive
//       ? "hover:bg-primary-600"
//       : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
//   }`;

//   return (
//     <button className={buttonStyles} onClick={() => setActiveFilter(text)}>
//       {text === "all" ? "all" : text}
//     </button>
//   );
// }
