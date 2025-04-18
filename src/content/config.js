// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const bookCollection = defineCollection({
    type: "content",
    schema: z.object({
      bookTitle: z.string(),
      bookType: z.string().optional(),
      coverImage: z.string(),
      eventLink: z.string().url().optional(),
      archiveLink: z.string().url(),
      eventDateHeading: z.string().optional(),
      archived: z.boolean(),
      eventDate: z.date().optional(),
      published: z.boolean().default(true),
    })
});

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    link: z.string().url(),
    sourceName: z.string(),
    published: z.boolean().default(true),
  })
});

const resourcesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    author: z.string().optional(),
    shortDescription: z.string(),
    headerBackground: z.string().optional(),
    published: z.boolean().default(true),
  })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'books': bookCollection,
  'news': newsCollection,
  'resources': resourcesCollection,
};