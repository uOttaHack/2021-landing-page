import { ReactElement } from "react";
import Head from "next/head";

function ApplyPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Apply - uOttaHack 4</title>
        <meta
          name="description"
          content="Apply to uOttaHack 4. uOttaHack is uOttawa's largest hackathon and this year will be its more exciting iteration yet! To commemorate this special milestone, uOttaHack 4 is expanding the hacker experience with new initiatives to create an unforgettable weekend for its hackers, VIRTUALLY!"
        />
      </Head>

      <iframe
        id="typeform-full"
        title="uOttaHack 4 Application"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://form.typeform.com/to/HFMxQrY2?typeform-embed=embed-fullpage"
      ></iframe>

      <script
        type="text/javascript"
        src="https://embed.typeform.com/embed.js"
      ></script>

      <style jsx>{`
        html {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }

        iframe {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          border: 0;
        }
      `}</style>
    </>
  );
}

export default ApplyPage;
