import { z } from 'zod';
import resume from './resume.json';
import { ResumeSchema } from './baseSchema';

const AdditionalFields = z.object({
  // basics: z.object({
  //   highlights: z.array(z.string()).optional(),
  // }),
});

const fullSchema = z.intersection(ResumeSchema, AdditionalFields);

export default fullSchema.parse(resume);
