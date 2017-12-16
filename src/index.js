import libPhoneNumber from 'google-libphonenumber';

const phoneNumberUtil = libPhoneNumber.PhoneNumberUtil.getInstance();

const requiredPhoneNumberPropType = (props, propName, componentName) => {
  const value = props[propName];

  if (!value || !value.phoneNumber || !value.countryCode || typeof value.phoneNumber !== 'string' || typeof value.countryCode !== 'string') {
    return new TypeError(`Invalid Phone Number Prop Value: ${value} for ${propName} in ${componentName}`);
  }

  const {
    phoneNumber,
    countryCode,
  } = value;

  try {
    phoneNumberUtil.parse(phoneNumber, countryCode);
  } catch (e) {
    return new TypeError(`Invalid Phone Number Prop Value: ${value} for ${propName} in ${componentName}`);
  }

  return null;
};

const phoneNumberPropType = (props, propName, componentName) => {
  if (props[propName] == null) {
    return null;
  }

  return requiredPhoneNumberPropType(props, propName, componentName);
};

phoneNumberPropType.isRequired = requiredPhoneNumberPropType;

export default phoneNumberPropType;
