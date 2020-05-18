export const searchInitialValues = {
  departure: '',
  arrival: '',
  departureDate: new Date(),
  arrivalDate: new Date()
};

export const searchRules = {
  departure: {
    label: 'From',
    required: true,
    minLength: 2,
    maxLength: 60
  },
  arrival: {
    label: 'To',
    required: true,
    minLength: 2,
    maxLength: 60
  }
};
