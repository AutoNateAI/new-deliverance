import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, "") ?? "";
  const body = [`User-agent: *`, `Allow: /`, `Sitemap: ${baseUrl}/sitemap-index.xml`].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
