import React, { FC, memo } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommonForm from '../../components/CommonForm/CommonForm';
import { validationSchema } from '../../helpers/validation';
import { fetchAddMovie as fetchAddMovieAction } from '../../store/actions/actions';
import { FORM_TYPES } from '../../components/CommonForm/types';

type Props = {
  visibility: boolean;
  handleToggleVisibility: () => void;
  fetchAddMovie: (movie: any) => void;
};

const options = ['Drama', 'Romance', 'Horror', 'Fantasy'];

const FormAddContainer: FC<Props> = ({ visibility, handleToggleVisibility, fetchAddMovie }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        fetchAddMovie(values);
        handleToggleVisibility();
      }}
      onReset={(values) => values}
    >
      {({ handleSubmit, handleReset, handleChange, values, errors, touched }) => {
        return (
          <>
            {touched.genres && errors.genres && <div>{errors.genres}</div>}
            <CommonForm
              formType={FORM_TYPES.add}
              resetText="Reset"
              submitText="Submit"
              modalTitle="Add movie"
              visibility={visibility}
              closeHandler={handleToggleVisibility}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              inputChangeHandler={handleChange}
              title={values.title}
              date={values.release_date}
              url={values.poster_path}
              genresArray={options}
              overview={values.overview}
              runtime={values.runtime}
            />
          </>
        );
      }}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchAddMovie: bindActionCreators(fetchAddMovieAction, dispatch),
});

export default connect(null, mapDispatchToProps)(memo(FormAddContainer));
