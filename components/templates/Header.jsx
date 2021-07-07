import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/templates.module.css'

const Header = () => {
  return(<>
    <Head>
      <script dangerouslySetInnerHTML={{
        _html:
          `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');`}}>
      </script>
      <noscript><Image height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1" alt="Facebook pixel noscript image" /></noscript>

      <script dangerouslySetInnerHTML={{
        _html:
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`}}/>
    </Head>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{display: 'none', visibility: 'hidden'}}/>
    </noscript>
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>A<span>H</span></h1>
      <nav className={styles.headerNav}>
        <ul>
          <li><Link href='/' passHref>Home</Link></li>
          <li><Link href='/project' passHref>Projects</Link></li>
          <li><Link href='https://alienherald.threadless.com/designs/alienherald' passHref>Merch</Link></li>
        </ul>
      </nav>
    </header>
  </>)
}

export default Header