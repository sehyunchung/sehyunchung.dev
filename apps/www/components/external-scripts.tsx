/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script"

export const ScriptMSClarity = () => (
	<Script
		id="ms-clarity"
		type="text/javascript"
		strategy="beforeInteractive"
		dangerouslySetInnerHTML={{
			__html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "h9xndue0yj");`,
		}}
	/>
)

export const ScriptGoogleTagManager = () => (
	<Script
		id="g-script"
		strategy="beforeInteractive"
		src="https://www.googletagmanager.com/gtag/js?id=G-SN5E99TMCJ"
	/>
)

export const ScriptGoogleDataLayerInline = () => (
	<Script
		id="g-inline"
		strategy="beforeInteractive"
		dangerouslySetInnerHTML={{
			__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SN5E99TMCJ');`,
		}}
	/>
)
