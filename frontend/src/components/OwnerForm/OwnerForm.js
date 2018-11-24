import React from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import Button from '@material-ui/core/Button';
import createDecorator from 'final-form-focus';
import './OwnerForm.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const showResults = async (values) => {
  await sleep(500); // simulates server latency
  window.alert(JSON.stringify(values, undefined, 2));
};

const focusOnError = createDecorator();
const required = value => (value ? undefined : 'Required');

const OwnerForm = () => (
  <div>
    <div className="header">
      <h1>PetStory</h1>
    </div>
    <div>
      <p>has requested that you add some details about you and your pets</p>
    </div>

    <div>
      <Form
        onSubmit={showResults}
        decorators={[focusOnError]}
        subscription={{
          submitting: true,
        }}
      >
        {({ handleSubmit, values, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <h2>About you</h2>
            </div>
            <Field
              name="firstName"
              placeholder="First Name"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>First Name</label>
                  <input {...input} placeholder={placeholder} className="input-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="lastName"
              placeholder="Last Name"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Last Name</label>
                  <input {...input} placeholder={placeholder} className="input-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="phone"
              placeholder="Phone"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Phone</label>
                  <input {...input} placeholder={placeholder} className="input-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="email"
              placeholder="Email"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Email</label>
                  <input {...input} placeholder={placeholder} className="input-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="streetAddress"
              placeholder="Street Address"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Street Address</label>
                  <input {...input} placeholder={placeholder} className="input-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="apartment"
              placeholder="Apartment/Suite #"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Apartment/Suite #</label>
                  <input {...input} placeholder={placeholder} className="input-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="city"
              placeholder="City"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>City</label>
                  <input {...input} placeholder={placeholder} className="input-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="state"
              placeholder="State"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>State</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="zip"
              placeholder="Zip"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Zip</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="additional info"
              placeholder="Add any additional information for your pet care provider"
              component="textarea"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Additional info</label>
                  <input {...input} placeholder={placeholder} className="input-textarea-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <h2>About your pets</h2>
            </div>
            <Field
              name="petname"
              placeholder="Pet Name"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Pet Name</label>
                  <input {...input} placeholder={placeholder} className="input-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="age"
              placeholder="0"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Age</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="gender"
              placeholder="Gender"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Gender</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="about"
              placeholder="About"
              component="textarea"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>About</label>
                  <input {...input} placeholder={placeholder} className="input-textarea-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="walkingInstructions"
              placeholder="Add any instructions during walking or boarding"
              c
              omponent="textarea"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Walking/Boarding instructions</label>
                  <input {...input} placeholder={placeholder} className="input-textarea-box" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="petBehavior"
              placeholder="Pet behavior"
              component="textarea"
              validate={required}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}
            >
              {({ input, meta, placeholder }) => (
                <div className={meta.active ? 'active' : ''}>
                  <label>Pet behavior</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Button className="button-form" style={style} size="large" type="submit" disabled={submitting}>
               Submit
            </Button>
            <FormSpy subscription={{ values: true }}>{({ values }) => <pre>{JSON.stringify(values, undefined, 2)}</pre>
              }
            </FormSpy>
          </form>
        )}
      </Form>
    </div>
  </div>
);

const style = {
  margin: 15,
  backgroundColor: '#00316b',
  color: '#FFFFFF',
};
const fieldStyle = {
  width: 250,
  backgroundColor: '#00316b',
};

export default OwnerForm;

// style={style}

// {fieldState => (
//   <pre>{JSON.stringify(fieldState, undefined, 2)} </pre>
