import ContentLoader from "react-content-loader";

const CoinTableLoader = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"
    height={160}
    viewBox="0 0 800 160"
    backgroundColor="#2e2e2e"
    foregroundColor="#4a4a4a"
    {...props}
  >
    {/* Table Headers */}
    <rect x="20" y="10" rx="4" ry="4" width="100" height="20" /> 
    <rect x="150" y="10" rx="4" ry="4" width="80" height="20" />
    <rect x="270" y="10" rx="4" ry="4" width="100" height="20" />
    <rect x="420" y="10" rx="4" ry="4" width="140" height="20" />

    {/* First Row */}
    <circle cx="40" cy="55" r="20" />
    <rect x="70" y="45" rx="4" ry="4" width="70" height="12" />
    <rect x="70" y="60" rx="4" ry="4" width="40" height="10" />
    <rect x="150" y="50" rx="4" ry="4" width="80" height="15" />
    <rect x="270" y="50" rx="4" ry="4" width="100" height="15" />
    <rect x="420" y="50" rx="4" ry="4" width="140" height="15" />

    {/* Second Row */}
    <circle cx="40" cy="100" r="20" />
    <rect x="70" y="90" rx="4" ry="4" width="70" height="12" />
    <rect x="70" y="105" rx="4" ry="4" width="40" height="10" />
    <rect x="150" y="95" rx="4" ry="4" width="80" height="15" />
    <rect x="270" y="95" rx="4" ry="4" width="100" height="15" />
    <rect x="420" y="95" rx="4" ry="4" width="140" height="15" />
  </ContentLoader>
);

export default CoinTableLoader;
