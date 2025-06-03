import HomeLayout from "@/layouts/HomeLayout"
import HeroSlider from "@/components/molecules/HeroSlider";
import CategoryList from "@/components/molecules/CategoryList";
import ProductList from "@/components/molecules/ProductList";
import NewsletterCTA from "@/components/molecules/NewsletterCTA";
import ServicesInfo from "@/components/molecules/ServicesInfo";

export default function Home() {
  return (
    <>
      <HomeLayout>
        <HeroSlider />
        <CategoryList />
        <ProductList />
        <NewsletterCTA />
        <ServicesInfo />
      </HomeLayout>
    </>
  );
}
