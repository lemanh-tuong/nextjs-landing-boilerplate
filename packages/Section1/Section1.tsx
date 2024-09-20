import { ButtonPrimary } from '~/components/ButtonPrimary/ButtonPrimary';
import { Arrow } from './icons/Arrow';
import image from './images/image.webp';
import light from './images/light.webp';

export const Section1 = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
        <div
          data-aos-offset="0"
          data-aos="slide-right"
          className="font-plus-jakarta-sans relative z-[1] text-center lg:text-left"
        >
          <h2 className="text-white mb-2 text-[48px] font-bold leading-none md:text-[100px] lg:mb-4">Speeds Chain</h2>
          <h3 className="text-white mb-3 text-[24px] font-semibold uppercase md:text-[48px] lg:mb-10">
            High-speed <span className="font-bold italic text-[#FCB127]">TON</span> earning
          </h3>
          <div className="flex items-center justify-center gap-4 lg:mb-10 lg:justify-start">
            <ButtonPrimary isLight contentClassName="w-full px-4" className="w-[143px] lg:w-[170px]">
              <div className="flex items-center justify-between gap-2">
                Livepaper
                <span className="text-2xl text-[#FFF9BB]">
                  <Arrow />
                </span>
              </div>
            </ButtonPrimary>
            <ButtonPrimary>Whitepaper</ButtonPrimary>
          </div>
          <p className="text-neutral-300 invisible text-[14px] font-bold lg:visible">
            Golden opportunity: Earn free TON today
          </p>
        </div>
        <div
          data-aos-offset="0"
          data-aos="slide-up"
          className="relative flex flex-col items-center justify-center lg:mt-0"
        >
          <img className="relative z-[1]" src={image.src} alt="Image" />
          <img
            alt="Light"
            src={light.src}
            className="absolute left-0 top-0 -translate-y-1/3 scale-125 blur-2xl lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:scale-100"
          />
          <p className="text-neutral-300 visible text-center text-[14px] font-bold lg:invisible">
            Golden opportunity: Earn free TON today
          </p>
        </div>
      </div>
    </div>
  );
};
