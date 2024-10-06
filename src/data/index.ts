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
  work: z.array(
    z.object({
      skills: z
        .object({
          primary: z.array(z.string()).optional(),
          tools: z.array(z.string()).optional(),
          other: z.array(z.string()).optional(),
        })
        .optional(),
    }),
  ),
  education: z.array(
    z.object({
      name: z.string().optional(),
      skills: z.array(z.string()).optional(),
    }),
  ),
});

const fullSchema = z.intersection(ResumeSchema, AdditionalFields);

export type ResumeProfile = z.infer<typeof fullSchema>;
export type WorkItem = NonNullable<ResumeProfile['work']>[0];
export type EducationItem = NonNullable<ResumeProfile['education']>[0];

export default fullSchema.parse(resume);
