import classNames from 'classnames';
import { ButtonPrimary } from '~/components/ButtonPrimary/ButtonPrimary';
import { Star } from './icons/Star';
import image from './images/image.webp';
import light from './images/light.webp';

const items = [
  'Experience the thrill of gaming without spending a dime.',
  'Dive into our immersive world and start your journey to financial freedom.',
  'No upfront costs, no hidden fees.',
];

export const Section2 = () => {
  return (
    <div className="container py-10">
      <h2 className="relative mb-4 text-center text-[32px] font-bold uppercase md:mb-20 md:text-[64px]">
        <span className="text-white">Key </span>
        <span className="text-[#FFA506]">Feature</span>
        <img src={light.src} alt="Light" className="absolute left-0 top-0 -translate-y-2/3 translate-x-1/4" />
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
        <div data-aos="slide-right" className="order-2 md:order-1">
          <h2 className="mb-4 text-[32px] font-bold text-[#FFA506] md:mb-6 md:text-[48px]">Play for Free</h2>

          <ul className="text-neutral-100 mb-4 flex flex-col justify-end gap-2 md:mb-6 lg:justify-start">
            {items.map((item, index) => {
              return (
                <li
                  className={classNames('text-neutral-50 text-xs md:text-sm font-medium flex items-center gap-2')}
                  key={index}
                >
                  <div className="shrink-0">
                    <Star />
                  </div>
                  {item}
                </li>
              );
            })}
          </ul>

          <ButtonPrimary isLight>Start Playing</ButtonPrimary>
        </div>
        <div data-aos="rotate-right" className="order-1 md:order-2">
          <img className="rounded-3xl" src={image.src} alt="Image" />
        </div>
      </div>
    </div>
  );
};
