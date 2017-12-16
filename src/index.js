import phone from 'phone';


const requiredPhoneNumberPropType = (props, propName, componentName) => {
  const value = props[propName];

  if (value == null || typeof value !== 'string' || phone(value).length === 0) {
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
