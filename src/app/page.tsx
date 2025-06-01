import { CarouselCaptions } from './components/CarouselCaptions';
import ProfileGrid from './components/ProfileGrid';


export default function Home() {
  return (
    <div className='w-[100vw]'>
      <ProfileGrid />
      <CarouselCaptions />
    </div>
  );
}
