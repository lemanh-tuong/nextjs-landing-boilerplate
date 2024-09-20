import classNames from 'classnames';
import { ButtonPrimary } from '~/components/ButtonPrimary/ButtonPrimary';
import { Star } from './icons/Star';
import image from './images/image.webp';

const items = [
  'Be part of the future of gaming.',
  'Join a community of passionate gamers.',
  'Secure your financial future with $TON.',
];

export const Section4 = () => {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
        <div data-aos="slide-right" className="order-2 md:order-1">
          <h2 className="mb-4 text-[32px] font-bold text-[#FFA506] md:mb-6 md:text-[48px]">
            TON Speed Chain ecosystem
          </h2>

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

          <ButtonPrimary isLight>Join Now</ButtonPrimary>
        </div>
        <div data-aos="rotate-right" className="order-1 md:order-2">
          <img className="rounded-3xl" src={image.src} alt="Image" />
        </div>
      </div>
    </div>
  );
};
