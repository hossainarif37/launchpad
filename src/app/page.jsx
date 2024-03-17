import PrimaryButton from "@/components/ui/PrimaryButton";
import Layout from "@/layout/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}
