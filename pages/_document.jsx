import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return(
      <Html lang='en'>
        <Head>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="icon" href="/logo.svg" />
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-title" content="AlienHerald"/>
          <meta name="application-name" content="AlienHerald"/>
          <meta name="msapplication-TileColor" content="#603cba"/>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>

          <meta name="apple-mobile-web-app-title" content="AlienHerald"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"/>

          <meta name="application-name" content="AlienHerald"/>

          <link href="/android-chrome-512x512.png" rel="apple-touch-icon"/>
          <link href="/android-chrome-512x512.png" rel="apple-touch-icon" sizes="76x76"/>
          <link href="/android-chrome-512x512.png" rel="apple-touch-icon" sizes="120x120"/>
          <link href="/android-chrome-512x512.png" rel="apple-touch-icon" sizes="152x152"/>
          <link href="/safari-pinned-tab.svg" rel="mask-icon" size="any" color="red"/>

          <script dangerouslySetInnerHTML={{
            __html:
              `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.FB_PIXEL_ID}');
              fbq('track', 'PageView');`}}>
          </script>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={
              {__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.GTM_ID}');`,}
            }
          />
          {/* End Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={
              {__html: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
            heap.load("${process.env.HEAP_ID}");`}}
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={
              {__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,}
            }
          />
          {/* End Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{__html: `<iframe height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.FB_PIXEL_ID}&ev=PageView&noscript=1" alt="Facebook pixel noscript image" />`,}}/>
          <Main />
          <NextScript />
          {/*<!-- Messenger Chat Plugin Code -->*/}
          <div id="fb-root"></div>

          {/*<!-- Your Chat Plugin code -->*/}
          <div id="fb-customer-chat" className="fb-customerchat"></div>

          <script dangerouslySetInnerHTML={{__html:
            `var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "${process.env.MESSENGER_ID}");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v11.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));`}}/>
        </body>
      </Html>
    )
  }
}

export default MyDocument