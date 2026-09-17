import { useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { ContactForm, initialContactForm } from '../components/ContactForm';

export const AddContact = () => {
  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();

  const handleSubmit = (formData) => {
    const newContact = {
      ...formData,
      id: Date.now(),
    };

    dispatch({ type: 'add_contact', payload: newContact });
    navigate('/');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-4">Nuevo contacto</h2>
              <ContactForm initialValues={initialContactForm} onSubmit={handleSubmit} submitLabel="Crear contacto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
