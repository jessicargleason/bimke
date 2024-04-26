// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const bookCollection = defineCollection({
    type: "content",
    schema: z.object({
        bookTitle: z.string(),
        bookType: z.string().optional(),
        coverImage: z.string(),
        eventLink: z.string().optional(),
        archiveLink: z.string(),
        eventDateHeading: z.string().optional(),
        archived: z.boolean(),
        year: z.number().optional(),
        monthNumber: z.number().optional(),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'books': bookCollection,
};