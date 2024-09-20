import classNames from 'classnames';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMemo } from 'react';
import Marquee from 'react-fast-marquee';
import Highlighter from 'react-highlight-words';
import { ButtonPrimary } from '~/components/ButtonPrimary/ButtonPrimary';
import { CarouselContext } from '~/components/Carousel/CarouselContext';
import { Meta } from '~/components/Meta/Meta';
import { Section1 } from '~/packages/Section1/Section1';
import { Section2 } from '~/packages/Section2/Section2';
import { Section3 } from '~/packages/Section3/Section3';
import { Section4 } from '~/packages/Section4/Section4';
import { geistMono, geistSans } from '~/utils/fontLoader/fonts';

const CarouselDemo = () => {
  const items = useMemo(() => {
    return ['Item 1', 'Item 2', 'Item 3'];
  }, []);
  const { currentIndex, next, back } = CarouselContext.useCarouselContext();

  const renderSlide = (item: string, index?: number) => {
    const isActive = currentIndex === index;
    return (
      <div key={item} className={typeof index === 'number' ? 'absolute left-0 top-0' : ''}>
        <div
          className={classNames('transition-all text-white', isActive ? 'visible opacity-100' : 'invisible opacity-0')}
        >
          {item}
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="invisible">{renderSlide('Placeholder')}</div>
      {items.map(renderSlide)}
      <ButtonPrimary onClick={back} isLight>
        Back
      </ButtonPrimary>
      <ButtonPrimary onClick={next}>Next</ButtonPrimary>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Meta title="NextJS Landing Boilerplate" description="NextJS Landing Boilerplate" />
      <div className={classNames(geistSans.className, geistMono.className)}>
        <CarouselContext max={3}>
          <CarouselDemo />
        </CarouselContext>
        <Highlighter
          highlightClassName="italic bg-transparent text-white"
          searchWords={['and', 'or', 'the']}
          autoEscape={true}
          textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
        />
        <Marquee>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
          <h1>Hello world</h1>
        </Marquee>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
};
