import LandingPage from "@/pages/home";
import WithLoader from "@/components/WithLoader";

export default function Home() {
  return (
    <WithLoader>
      <LandingPage />
    </WithLoader>
  );
}
