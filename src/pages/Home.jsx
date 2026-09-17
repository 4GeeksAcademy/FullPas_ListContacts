import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { ContactCard } from '../components/ContactCard';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleDelete = (id) => {
    dispatch({ type: 'delete_contact', payload: id });
  };

  return (
    <div className="container py-5">
      {store.contacts.length === 0 ? (
        <div className="center-button-wrap">
          <Link to="/add-contact" className="btn btn-primary btn-lg px-5">
            Add contact
          </Link>
        </div>
      ) : (
        <div className="contact-list-stack">
          {store.contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
          ))}

          <div className="text-center mt-3">
            <Link to="/add-contact" className="btn btn-primary btn-lg px-5">
              Add contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};