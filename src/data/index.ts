import { z } from 'zod';
import resume from './resume.json';
import { ResumeSchema } from './baseSchema';

const AdditionalFields = z.object({
  basics: z.object({
    preferredPronouns: z.string().optional(),
    preferredName: z.string().optional(),
    location: z.object({
      coordinates: z.tuple([z.number(), z.number()]).optional(),
    }),
  }),
});

const fullSchema = z.intersection(ResumeSchema, AdditionalFields);

export type ResumeProfile = z.infer<typeof fullSchema>;

export default fullSchema.parse(resume);
