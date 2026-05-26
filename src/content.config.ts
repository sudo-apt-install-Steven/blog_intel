import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "procesadores",
      "graficos-intel-arc",
      "ia-centros-de-datos",
      "ecosistema-pc",
      "guias"
    ]),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    readingTime: z.string(),
    hero: z.string(),
    heroAlt: z.string(),
    featured: z.boolean().default(false),
    toc: z.boolean().default(true),
    video: z
      .object({
        src: z.string(),
        poster: z.string(),
        label: z.string(),
        duration: z.string(),
        analysis: z.string()
      })
      .optional()
  })
});

export const collections = { blog };
