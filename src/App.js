import { useFormik } from 'formik';
import './App.css';
import { signUpSchema } from './schemas';
const initialValues = {
  employeeId: "",
  name: "",
  email: "",
  gender: "",
  contactNo: "",
  role: "",
  dateOfJoining: "",
  dateOfConfirmation: "",
  dateOfBirth: "",
  address: "",
  officeLocation: "",
  designation: ""
};

function App() {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      // Clear the form after submission
      actions.resetForm();
    },
  });

  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

    
    <form onSubmit={handleSubmit}  style={{ width: '700px', height: 'auto', backgroundColor: 'lightgray', margin:'10px' }}>    
      <legend>Employee Registration</legend>

      <div className="mb-3">
        <label htmlFor="employeeId" className="form-label">Employee ID</label>
        <input
          type="text"
          className="form-control"
          name="employeeId"
          placeholder="Employee ID"
          value={values.employeeId}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.employeeId && errors.employeeId && <p className='form-error text-danger'>{errors.employeeId}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && <p className='form-error  text-danger'>{errors.name}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <p className='form-error text-danger'>{errors.email}</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select
          name="gender"
          className="form-select"
          value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="" label="Select gender" />
          <option value="Male" label="Male" />
          <option value="Female" label="Female" />
          <option value="Other" label="Other" />
        </select>
        {touched.gender && errors.gender && <p className='form-error text-danger'>{errors.gender}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="contactNo" className="form-label">Contact No</label>
        <input
          type="text"
          className="form-control"
          name="contactNo"
          placeholder="Contact No"
          value={values.contactNo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.contactNo && errors.contactNo && <p className='form-error text-danger'>{errors.contactNo}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="role" className="form-label">Employee Role</label>
        <select
          name="role"
          className="form-select"
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="" label="Select role" />
          <option value="Employee" label="Employee" />
          <option value="Manager" label="Manager" />
          <option value="Admin" label="Admin" />
        </select>
        {touched.role && errors.role && <p className='form-error text-danger'>{errors.role}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="dateOfJoining" className="form-label">Date of Joining</label>
        <input
          type="date"
          className="form-control"
          name="dateOfJoining"
          value={values.dateOfJoining}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.dateOfJoining && errors.dateOfJoining && <p className='form-error text-danger'>{errors.dateOfJoining}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="dateOfConfirmation" className="form-label">Date of Confirmation</label>
        <input
          type="date"
          className="form-control"
          name="dateOfConfirmation"
          value={values.dateOfConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.dateOfConfirmation && errors.dateOfConfirmation && <p className='form-error text-danger'>{errors.dateOfConfirmation}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          max={`${new Date().getFullYear() - 20}-12-31`}
          value={values.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.dateOfBirth && errors.dateOfBirth && <p className='form-error text-danger'>{errors.dateOfBirth}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <textarea
          className="form-control"
          name="address"
          placeholder="Address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.address && errors.address && <p className='form-error text-danger'>{errors.address}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="officeLocation" className="form-label">Office Location</label>
        <input
          type="text"
          className="form-control"
          name="officeLocation"
          placeholder="Office Location"
          value={values.officeLocation}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.officeLocation && errors.officeLocation && <p className='form-error text-danger'>{errors.officeLocation}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="designation" className="form-label">Designation</label>
        <input
          type="text"
          className="form-control"
          name="designation"
          placeholder="Designation"
          value={values.designation}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.designation && errors.designation && <p className='form-error text-danger'>{errors.designation}</p>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default App;
