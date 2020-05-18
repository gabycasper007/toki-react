import React, { memo, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import Calendar from 'react-calendar';
import { validate } from '../../../helpers/validation';
import {
  searchRules,
  searchInitialValues
} from '../../../constants/validation';
import Input from '../../atoms/Input/Input';
import {
  getDepartures,
  getArrivals
} from '../../../store/selectors/flightsSelectors';
import { cities } from '../../../constants/cities';
import 'react-calendar/dist/Calendar.css';
import { formatDate, DEFAULT_DATE_FORMAT } from '../../../helpers/date';
import style from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const departures = useSelector((state) => getDepartures(state));
  const arrivals = useSelector((state) => getArrivals(state));
  const [departCalendar, onChangeDepartCalendar] = useState(new Date());
  const [viewDepartCalendar, setViewDepartCalendar] = useState(false);

  const [arrivalCalendar, onChangeArrivalCalendar] = useState(new Date());
  const [viewArrivalCalendar, setViewArrivalCalendar] = useState(false);
  const [minArrival, setMinArrival] = useState(new Date());

  // console.log('loading search');
  // console.log('departures', departures);
  // console.log('arrivals', arrivals);

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Submitting form');
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={searchInitialValues}
      validate={(values) => validate(searchRules, values)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={style.searchForm}>
          <div className="inputWrap">
            <div className="inputWithLabel">
              <label htmlFor="departure">From</label>
              <Field name="departure" id="departure" as="select">
                <>
                  <option value="" />
                  {cities.map((city) => (
                    <option value={city} key={city}>
                      {city}
                    </option>
                  ))}
                </>
              </Field>
              <ErrorMessage
                name="departure"
                component="div"
                className="error"
              />
            </div>
          </div>

          <div className="inputWrap">
            <div className="inputWithLabel">
              <label htmlFor="arrival">To</label>
              <Field name="arrival" id="arrival" as="select">
                <>
                  <option value="" />
                  {cities.map((city) => (
                    <option value={city} key={city}>
                      {city}
                    </option>
                  ))}
                </>
              </Field>
              <ErrorMessage name="arrival" component="div" className="error" />
            </div>
          </div>
          <div className="inputWrap">
            <Input
              label="Depart"
              name="departureDate"
              placeholder={DEFAULT_DATE_FORMAT}
              errors={errors}
              touched={touched}
              value={formatDate(departCalendar).toString()}
              onClick={() => {
                setViewArrivalCalendar(false);
                setViewDepartCalendar(true);
              }}
            />
            {viewDepartCalendar && (
              <Calendar
                onChange={(date) => {
                  setViewDepartCalendar(false);
                  onChangeDepartCalendar(date);
                  setMinArrival(date);
                }}
                value={departCalendar}
                minDate={new Date()}
                formatLongDate={(locale, date) => formatDate(date)}
              />
            )}
          </div>
          <div className="inputWrap">
            <Input
              label="Arrival"
              name="arrivalDate"
              placeholder={DEFAULT_DATE_FORMAT}
              errors={errors}
              touched={touched}
              value={formatDate(arrivalCalendar).toString()}
              onClick={() => {
                setViewArrivalCalendar(true);
                setViewDepartCalendar(false);
              }}
            />
            {viewArrivalCalendar && (
              <Calendar
                onChange={(date) => {
                  setViewArrivalCalendar(false);
                  onChangeArrivalCalendar(date);
                }}
                value={arrivalCalendar}
                minDate={minArrival}
              />
            )}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : `Search flights`}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default memo(Search);
