import classNames from 'classnames';
import { ButtonPrimary } from '~/components/ButtonPrimary/ButtonPrimary';
import { Star } from './icons/Star';
import image from './images/image.webp';

const items = [
  'Earn $TON simply by playing your favorite games.',
  'The more you play, the more you earn.',
  'Convert your in-game achievements into real-world rewards.',
];

export const Section3 = () => {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
        <div data-aos="slide-left" className="order-2">
          <h2 className="mb-4 text-[32px] font-bold text-[#FFA506] md:mb-6 md:text-[64px]">Tap to Earn</h2>

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
        <div data-aos="rotate-left" className="order-1">
          <img className="rounded-3xl" src={image.src} alt="Image" />
        </div>
      </div>
    </div>
  );
};
