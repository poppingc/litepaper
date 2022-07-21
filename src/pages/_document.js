import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='description' content='Site Description'></meta>
        <link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
        <meta
          name='description'
          content='Built on Non-Custodial, Secure - Audited Smart TARS provides a simple, safe and collaborative infrastructure for crypto users to rebuild influence and TRUST on Web3.'
        ></meta>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
