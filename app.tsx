import React, { FC } from "react";
import { useDeno } from "aleph/react";

export default function App({
  Page,
  pageProps,
}: {
  Page: FC;
  pageProps: Record<string, unknown>;
}) {
  const { url } = useDeno(() => ({
    url:  Deno.env.get("URL") || "http://localhost:3000",
  }));
  localStorage.setItem("url", url);
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
    </main>
  );
}
