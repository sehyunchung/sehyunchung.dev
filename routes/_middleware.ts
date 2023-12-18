import { FreshContext } from "$fresh/server.ts";

export async function handler(
  _req: Request,
  ctx: FreshContext,
): Promise<Response> {
  const url = new URL(_req.url);
  if (url.pathname === "/") {
    return new Response("/", {
      status: 307,
      headers: { Location: "/notes" },
    });
  }
  return await ctx.next();
}
