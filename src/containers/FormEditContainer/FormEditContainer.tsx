import React, { FC, memo } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormEdit from '../../components/FormEdit/FormEdit';
import { fetchEditMovie as fetchEditMovieAction } from '../../store/actions/actions';
import { validationSchema } from '../../helpers/validation';

type Props = {
  id: number;
  title: string;
  date: string;
  url: string;
  genres: ReadonlyArray<string>;
  overview: string;
  runtime: number;
  visibility: boolean;
  handleToggleVisibility: () => void;
  fetchEditMovies: (movie: any) => void;
};

const FormEditContainer: FC<Props> = ({
  visibility,
  handleToggleVisibility,
  id,
  title,
  date,
  url,
  genres,
  overview,
  runtime,
  fetchEditMovies,
}) => {
  return (
    <Formik
      initialValues={{
        id,
        title,
        release_date: date,
        poster_path: url,
        genres: [],
        overview,
        runtime: runtime || 0,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        fetchEditMovies(values);
        handleToggleVisibility();
      }}
      onReset={(values) => values}
    >
      {({ handleSubmit, handleReset, handleChange, values, errors, touched }) => {
        return (
          <>
            {touched.genres && errors.genres && <div>{errors.genres}</div>}
            <FormEdit
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              visibility={visibility}
              closeHandler={handleToggleVisibility}
              id={values.id}
              title={values.title}
              date={values.release_date}
              url={values.poster_path}
              genresArray={genres}
              overview={values.overview}
              runtime={values.runtime}
              inputChangeHandler={handleChange}
            />
          </>
        );
      }}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchEditMovies: bindActionCreators(fetchEditMovieAction, dispatch),
});

export default connect(null, mapDispatchToProps)(memo(FormEditContainer));
