import phoneNumberPropType from './index';

describe('Phone Number Prop Type', () => {
  const propName = 'baejadley';
  const componentName = 'jaebaebae';
  const phoneNumber = '+1555555555';
  const invalidPhoneNumber = 'foobar';
  const countryCode = 'US';
  const nonStringValue = 10;


  describe('phoneNumberPropType', () => {
    it('should throw an error if phoneNumber value exists and is not a string', () => {
      const props = {};
      props[propName] = nonStringValue;
      expect(phoneNumberPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: ${nonStringValue} for ${propName} in ${componentName}`));
    });

    it('should throw an error if phoneNumber value is an invalid string', () => {
      const props = {};
      props[propName] = invalidPhoneNumber;
      expect(phoneNumberPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: ${invalidPhoneNumber} for ${propName} in ${componentName}`));
    });

    it('should return null if prop value is a valid phone number', () => {
      const props = {};
      props[propName] = phoneNumber;
      expect(phoneNumberPropType(props, propName, componentName)).toBeNull();
    });

    it('should return null if prop is not defined', () => {
      const props = {};
      expect(phoneNumberPropType(props, propName, componentName)).toBeNull();
    });
  });

  describe('validateRequiredPhoneNumber', () => {
    it('should throw an error if phoneNumber value exists and is not a string', () => {
      const props = {};
      props[propName] = nonStringValue;
      expect(phoneNumberPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: ${nonStringValue} for ${propName} in ${componentName}`));
    });

    it('should throw an error if phoneNumber value is an invalid string', () => {
      const props = {};
      props[propName] = invalidPhoneNumber;
      expect(phoneNumberPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: ${invalidPhoneNumber} for ${propName} in ${componentName}`));
    });

    it('should throw an error if prop is not defined', () => {
      const props = {};
      expect(phoneNumberPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: ${undefined} for ${propName} in ${componentName}`));
    });

    it('should return null if prop value is a valid phone number', () => {
      const props = {};
      props[propName] = phoneNumber;
      expect(phoneNumberPropType.isRequired(props, propName, componentName)).toBeNull();
    });
  });
});
