import { object, string } from 'yup';

export default object({
  slug: string()
    .trim()
    .matches(/^[\w-]+$/i),
  url: string().trim().url().required(),
});
