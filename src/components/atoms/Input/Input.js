import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

const Input = ({
  name,
  label,
  type = 'text',
  required = true,
  id,
  errorClassName,
  placeholder,
  errors,
  touched,
  value = '',
  onClick = () => {}
}) => {
  return (
    <>
      <div className="inputWithLabel">
        <label htmlFor={name}>{label}</label>

        <Field
          type={type}
          id={id || name}
          name={name}
          placeholder={placeholder || label}
          required={required}
          value={value}
          onClick={onClick}
          className={
            errors[name] && touched[name]
              ? 'invalid'
              : touched[name]
              ? 'valid touched'
              : 'untouched'
          }
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className={errorClassName || 'error'}
      />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
  errorClassName: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  errors: PropTypes.object,
  touched: PropTypes.object,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Input;
