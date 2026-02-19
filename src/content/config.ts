import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    bookTitle: z.string(),
    bookOrder: z.number(),
    repo: z.string(),
    chapters: z.array(
      z.object({
        commit: z.string(),
        label: z.string(),
      })
    ).optional(),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    link: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    repo: z.string().optional(),
    chapters: z.array(
      z.object({
        commit: z.string(),
        label: z.string(),
      })
    ).optional(),
  }),
});

const paperReviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    link: z.string().optional(),
    reviewDate: z.date().optional(),
  }),
});

export const collections = { books, publications, blog, 'paper-reviews': paperReviews };
