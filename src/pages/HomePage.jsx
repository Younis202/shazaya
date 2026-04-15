import HeroSlider from '../components/HeroSlider';
import FeaturesBar from '../components/FeaturesBar';
import Collections from '../components/Collections';
import WideBanner from '../components/WideBanner';
import BestOffersSlider from '../components/BestOffersSlider';
import CategorySlider from '../components/CategorySlider';
import NewArrivals from '../components/NewArrivals';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function HomePage({ onAddToCart, onQuickView }) {
  return (
    <>
      <HeroSlider />
      <FeaturesBar />
      <Collections />
      <WideBanner />
      <BestOffersSlider onAddToCart={onAddToCart} onQuickView={onQuickView} />
      <CategorySlider />
      <NewArrivals onAddToCart={onAddToCart} onQuickView={onQuickView} />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
