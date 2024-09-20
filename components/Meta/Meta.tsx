import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
}
export const Meta = ({ title, description }: Props) => {
  return (
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />

      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" key="favicon" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="icon32" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="icon16" />

      {/* Apple */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />

      {/* Android */}
      <link
        rel="icon"
        type="image/png"
        href="/android-chrome-192x192.png"
        sizes="192x192"
        key="android-chrome-192x192"
      />
      <link
        rel="icon"
        type="image/png"
        href="/android-chrome-512x512.png"
        sizes="512x512"
        key="android-chrome-512x512"
      />

      {/* Social */}
      <meta property="og:image" content="/thumbnail.png" />
      {/* <meta property="og:url" content="https://example.com" /> */}
      <meta property="og:type" content="website" />

      <meta name="twitter:image" content="/thumbnail.png" />
      {/* <meta name="twitter:url" content="https://example.com" /> */}
    </Head>
  );
};
