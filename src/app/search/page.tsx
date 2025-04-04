import SearchClientPage from "./ClientPage";
import { siteConfig } from "@/config/data";

export const metadata = {
  title: "Search Cruisers " + siteConfig.name,
  description: siteConfig.description,
};

const SearchPage = () => {
  return <SearchClientPage />;
};

export default SearchPage;
