import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
  if (!dateString) return 'No indicada';

  const date = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

export const ContactCard = ({ contact, onDelete }) => {
  const initials = `${contact.name?.charAt(0) || ''}${contact.firstSurname?.charAt(0) || ''}`.toUpperCase();

  return (
    <div className="card contact-card shadow-sm border-0 mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div className="d-flex align-items-center gap-3">
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center avatar-circle">
              {initials}
            </div>

            <div>
              <h5 className="mb-1 card-name">
                {contact.name} {contact.firstSurname} {contact.secondSurname}
              </h5>
              <small className="text-muted">{contact.gender}</small>
            </div>
          </div>

          <div className="d-flex gap-2">
            <Link to={`/edit-contact/${contact.id}`} className="btn btn-outline-primary btn-sm" title="Editar contacto">
              <i className="fa-solid fa-pen"></i>
            </Link>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              title="Eliminar contacto"
              onClick={() => onDelete(contact.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>

        <div className="row g-2 text-start">
          <div className="col-md-6">
            <small><strong>Teléfono:</strong> {contact.phone || 'No indicado'}</small>
          </div>
          <div className="col-md-6">
            <small><strong>Correo:</strong> {contact.email || 'No indicado'}</small>
          </div>
          <div className="col-md-6">
            <small><strong>Fecha de nacimiento:</strong> {formatDate(contact.birthDate)}</small>
          </div>
          <div className="col-md-6">
            <small><strong>Dirección:</strong> {contact.address || 'No indicada'}</small>
          </div>
          <div className="col-md-6">
            <small><strong>Código postal:</strong> {contact.postalCode || 'No indicado'}</small>
          </div>
          <div className="col-md-6">
            <small><strong>Localidad:</strong> {contact.locality || 'No indicada'}</small>
          </div>
          <div className="col-md-6">
            <small><strong>Provincia:</strong> {contact.province || 'No indicada'}</small>
          </div>
          <div className="col-md-6">
            <small><strong>País:</strong> {contact.country || 'No indicado'}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
