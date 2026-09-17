import { useEffect, useState } from 'react';

export const initialContactForm = {
  name: '',
  firstSurname: '',
  secondSurname: '',
  birthDate: '',
  gender: 'Masculino',
  phone: '',
  email: '',
  address: '',
  postalCode: '',
  locality: '',
  province: '',
  country: '',
};

export const ContactForm = ({ initialValues, onSubmit, submitLabel = 'Guardar' }) => {
  const [formData, setFormData] = useState(initialValues || initialContactForm);

  useEffect(() => {
    setFormData(initialValues || initialContactForm);
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-md-4">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input
          id="name"
          type="text"
          className="form-control"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="firstSurname" className="form-label">Primer apellido</label>
        <input
          id="firstSurname"
          type="text"
          className="form-control"
          name="firstSurname"
          value={formData.firstSurname || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="secondSurname" className="form-label">Segundo apellido</label>
        <input
          id="secondSurname"
          type="text"
          className="form-control"
          name="secondSurname"
          value={formData.secondSurname || ''}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="birthDate" className="form-label">Fecha de nacimiento</label>
        <input
          id="birthDate"
          type="date"
          className="form-control"
          name="birthDate"
          value={formData.birthDate || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="gender" className="form-label">Género</label>
        <select
          id="gender"
          className="form-select"
          name="gender"
          value={formData.gender || 'Masculino'}
          onChange={handleChange}
        >
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Prefiero no comunicarlo">Prefiero no comunicarlo</option>
        </select>
      </div>

      <div className="col-md-4">
        <label htmlFor="phone" className="form-label">Teléfono</label>
        <input
          id="phone"
          type="tel"
          className="form-control"
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Correo</label>
        <input
          id="email"
          type="email"
          className="form-control"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="address" className="form-label">Dirección</label>
        <input
          id="address"
          type="text"
          className="form-control"
          name="address"
          value={formData.address || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="postalCode" className="form-label">Código postal</label>
        <input
          id="postalCode"
          type="text"
          className="form-control"
          name="postalCode"
          value={formData.postalCode || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="locality" className="form-label">Localidad</label>
        <input
          id="locality"
          type="text"
          className="form-control"
          name="locality"
          value={formData.locality || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="province" className="form-label">Provincia</label>
        <input
          id="province"
          type="text"
          className="form-control"
          name="province"
          value={formData.province || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3">
        <label htmlFor="country" className="form-label">País</label>
        <input
          id="country"
          type="text"
          className="form-control"
          name="country"
          value={formData.country || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-12 text-center mt-4">
        <button type="submit" className="btn btn-primary btn-lg px-5">
          {submitLabel}
        </button>
      </div>
    </form>
  );
};
