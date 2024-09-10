import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  employeeId: Yup.string()
    .required('Employee ID is required')
    .matches(/^[0-9]+$/, "Employee ID must be only digits")
    .min(4, 'Employee ID must be at least 4 digits')
    .max(10, 'Employee ID must be at most 10 digits'),
  
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  
  gender: Yup.string()
    .required('Gender is required'),
  
  contactNo: Yup.string()
    .required('Contact number is required')
    .matches(/^[0-9]{10}$/, 'Contact number must be exactly 10 digits'),
  
  role: Yup.string()
    .required('Role is required'),
  
  dateOfJoining: Yup.date()
    .required('Date of joining is required')
    .max(new Date(), 'Date of joining cannot be in the future'),
  
  dateOfConfirmation: Yup.date()
    .required('Date of confirmation is required')
    .min(
      Yup.ref('dateOfJoining'),
      'Date of confirmation cannot be before date of joining'
    ),
  
  dateOfBirth: Yup.date()
    .required('Date of birth is required')
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 20)),
      'You must be at least 20 years old'
    ),
  
  address: Yup.string()
    .required('Address is required')
    .min(10, 'Address must be at least 10 characters long'),
  
  officeLocation: Yup.string()
    .required('Office location is required')
    .min(3, 'Office location must be at least 3 characters long'),
  
  designation: Yup.string()
    .required('Designation is required')
    .min(2, 'Designation must be at least 2 characters long')
    .max(30, 'Designation must be at most 30 characters long'),
});
