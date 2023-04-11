import FeatureProperties from "@/features/Home/Components/FeatureProperties";
import HeroBanner from "@/features/Home/Components/HeroBanner";
import MeetTheTeam from "@/features/Home/Components/MeetTheTeam";
import Partners from "@/features/Home/Components/Partners";
import Testimonials from "@/features/Home/Components/Testimonials/Testimonials";
import { getProperties } from "@/features/common/api/getProperties";
import DefaultLayout from "@/features/Layout/DefaultLayout";

export default function Home({ featuredProperties }) {
  return (
    <DefaultLayout>
      <HeroBanner />
      <FeatureProperties featuredProperties={featuredProperties} />
      <MeetTheTeam />
      <Partners />
      <Testimonials />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const properties = await getProperties(5);
  return {
    props: { featuredProperties: properties },
  };
}
