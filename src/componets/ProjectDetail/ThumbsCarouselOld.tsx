import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Thumbs,
  FreeMode,
} from '../ui/slider';

import { useRef, useState } from 'react';
import classNames from 'classnames';
import Image from '../../componets/ui/Image';

interface Props {
  gallery: any[];
  hideThumbs?: boolean;
  aspectRatio?: 'auto' | 'square';
}
// product gallery breakpoints
const galleryCarouselBreakpoints = {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 3,
  },
  800: {
    slidesPerView: 4,
  },
};
const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 0,
};
const ThumbsCarousel: React.FC<Props> = ({
  gallery,
  hideThumbs = false,
  aspectRatio = 'square',
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  console.log('prevRef', prevRef);
  console.log('hideThumbs', hideThumbs);

  console.log(prevRef);
  return (
    <div>
      <div className="relative">
        <Swiper
          id="projectGallery"
          modules={[Navigation, Thumbs, FreeMode]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            prevEl: prevRef.current!, // Assert non-null
            nextEl: nextRef.current!, // Assert non-null
            clickable: true,
          }}
          {...swiperParams}
        >
          {gallery?.map((item: any, i) => (
            <SwiperSlide
              key={`prodject-gallery-${i}`}
              className="flex items-center justify-center selection:bg-transparent"
            >
              <Image
                src={item}
                alt={`Project gallery ${i}`}
                width={aspectRatio === 'square' ? 450 : 420}
                height={aspectRatio === 'square' ? 450 : 560}
                className="ml-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={prevRef}
          className="project-gallery-prev absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-xl transition-all duration-200 hover:bg-gray-100 -left-4  md:-mt-5 md:h-9 md:w-9 md:-left-5  "
        >
          <FaChevronLeft className="h-4 w-4" />
        </div>
        <div
          ref={nextRef}
          className="project-gallery-next absolute top-2/4 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-xl transition-all duration-200 hover:bg-gray-100 -right-4 md:-mt-5 md:h-9 md:w-9 md:-right-5 "
        >
          <FaChevronRight className="h-4 w-4" />
        </div>
      </div>
      {/* End of product main slider */}

      <div
        className={classNames(
          'relative mx-auto mt-5 max-w-md lg:mt-8 lg:pb-2',
          {
            hidden: hideThumbs,
          }
        )}
      >
        <Swiper
          id="projectGalleryThumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          watchSlidesProgress={true}
          freeMode={true}
          observer={true}
          observeParents={true}
          breakpoints={galleryCarouselBreakpoints}
        >
          {gallery?.map((item: any, i) => (
            <SwiperSlide
              key={`project-thumb-gallery-${i}`}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded border border-border-200 border-opacity-75 hover:opacity-75"
            >
              <Image
                src={item}
                alt={`Project thumb gallery ${i}`}
                width={80}
                height={80}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThumbsCarousel;
