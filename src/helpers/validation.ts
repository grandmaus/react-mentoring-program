import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
  release_date: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
  poster_path: Yup.string().max(200, 'Must be 200 characters or less').required('Required'),
  genres: Yup.array().min(1, 'Must contain at least 1 selected genre').required('Required'),
  overview: Yup.string().max(300, 'Must be 300 characters or less').required('Required'),
  runtime: Yup.number().moreThan(0, 'Runtime must be a positive number').required('Required'),
});
