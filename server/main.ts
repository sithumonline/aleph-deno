import { Application } from "https://deno.land/x/oak@v10.2.0/mod.ts";

const app = new Application();

app.use(async (ctx, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/dist`,
      index: "index.html",
    });
  } catch {
    next();
  }
});

await app.listen({ port: 8000 });
