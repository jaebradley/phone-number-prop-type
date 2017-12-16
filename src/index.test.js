
import phone from 'phone';

import phoneNumberPropType from './index';

jest.mock('phone', () => jest.fn());

describe('Phone Number Prop Type', () => {
  const propName = 'baejadley';
  const componentName = 'jaebaebae';
  const phoneNumber = 'blabblah';
  const nonStringPhoneNumber = 10;
  let mockedPhone;

  afterEach(() => {
    mockedPhone.mockRestore();
  });

  describe('urlPropType', () => {
    it('should throw an error if prop value exists and is not a string', () => {
      mockedPhone = phone.mockImplementation(() => []);
      const props = {};
      props[propName] = nonStringPhoneNumber;
      expect(phoneNumberPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: ${nonStringPhoneNumber} for ${propName} in ${componentName}`));
    });

    it('should throw an error if prop value is not a valid phone number', () => {
      mockedPhone = phone.mockImplementation(() => []);
      const props = {};
      props[propName] = phoneNumber;
      expect(phoneNumberPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: ${phoneNumber} for ${propName} in ${componentName}`));
    });

    it('should return successfully if prop value is a valid phone number', () => {
      mockedPhone = phone.mockImplementation(() => [1]);
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
    it('should throw an error if prop value is not a valid phone number', () => {
      mockedPhone = phone.mockImplementation(() => []);
      const props = {};
      props[propName] = phoneNumber;
      expect(phoneNumberPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: ${phoneNumber} for ${propName} in ${componentName}`));
    });

    it('should throw an error if prop is not defined', () => {
      const props = {};
      expect(phoneNumberPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid Phone Number Prop Value: undefined for ${propName} in ${componentName}`));
    });

    it('should succeed if prop value is a valid phone number', () => {
      mockedPhone = phone.mockImplementation(() => [1]);
      const props = {};
      props[propName] = phoneNumber;
      expect(phoneNumberPropType.isRequired(props, propName, componentName)).toBeNull();
    });
  });
});
