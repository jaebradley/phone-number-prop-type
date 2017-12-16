[![Build Status](https://travis-ci.org/jaebradley/phone-number-prop-type.svg?branch=master)](https://travis-ci.org/jaebradley/phone-number-prop-type)
[![codecov](https://codecov.io/gh/jaebradley/phone-number-prop-type/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/phone-number-prop-type)
[![npm](https://img.shields.io/npm/v/phone-number-prop-type.svg)](https://www.npmjs.com/package/phone-number-prop-type)
[![npm](https://img.shields.io/npm/dt/phone-number-prop-type.svg)](https://www.npmjs.com/package/phone-number-prop-type)

# Phone Number Prop Type

## Why are `Prop Types` important?
[`Prop Types`](https://reactjs.org/docs/typechecking-with-proptypes.html) kind've [serve as the interface layer for your component](https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/) - what data does my component depend on and what is the expected format of that data?

Thus, defining and validating props accurately can add value from a readability and debugging point of view.

## What this package does
This package is used to validate if a React prop value is a valid phone number. Currently, there is no phone number prop type defined by [the `prop-types` package](https://www.npmjs.com/package/prop-types). While using `PropType.string` works, why not be as specific as possible when validating your props?

Additionally, though [it's relatively straightforward to create a custom prop type validator](https://www.ian-thomas.net/custom-proptype-validation-with-react/), if you need to implement similar prop type checking in multiple packages, you might not want to repeat yourself.

This package depends on the [`google-libphonenumber`](https://www.npmjs.com/package/google-libphonenumber) package. `google-libphonenumber` **will only validate [`E.164` formatted](https://en.wikipedia.org/wiki/E.164)) phone numbers**.

## Installation

```bash
npm install phone-number-prop-type --save
```

## Usage

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import phoneNumberPropType from 'phone-number-prop-type';

const PhoneNumber = ({ phoneNumber }) => <h1>Here is my phone number: {phoneNumber}!</h1>;

PhoneNumber.defaultProps = {
  phoneNumber: '+1 555-555-555',
}

PhoneNumber.propTypes = {
  phoneNumber: phoneNumberPropType,
}

export default PhoneNumber;
```

[`stackblitz` Example](https://stackblitz.com/edit/react-phone-number-prop-type-1?embed=1&file=index.js&view=editor)

