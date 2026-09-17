import { useNavigate, useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { ContactForm } from '../components/ContactForm';

export const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { store, dispatch } = useGlobalReducer();

  const contactToEdit = store.contacts.find((contact) => String(contact.id) === String(id));

  if (!contactToEdit) {
    return (
      <div className="container py-5 text-center">
        <h3>Contacto no encontrado</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    dispatch({
      type: 'update_contact',
      payload: {
        ...formData,
        id: Number(id),
      },
    });

    navigate('/');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-4">Editar contacto</h2>
              <ContactForm initialValues={contactToEdit} onSubmit={handleSubmit} submitLabel="Guardar cambios" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
