import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const CreateUserModal = () => {
    const { addUser } = useUser();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '',
        companyName: '',
        street: '', city: '', zipcode: '',
        lat: '', lng: ''
    });

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: {
                street: formData.street,
                city: formData.city,
                zipcode: formData.zipcode,
                geo: { lat: formData.lat, lng: formData.lng }
            },
            company: { name: formData.companyName || 'Freelance' }
        };
        addUser(newUser);
        setFormData({ name: '', email: '', phone: '', companyName: '', street: '', city: '', zipcode: '', lat: '', lng: '' });
        handleClose();
    };

    return (
        <>
            <button className="btn btn-success mb-3" onClick={handleOpen}>
                <i className="bi bi-person-plus-fill"></i> Add New User
            </button>

            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Create New User</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <h6 className="mb-3 border-bottom pb-2">Personal Info</h6>
                                    <div className="row g-3 mb-3">
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" name="name" placeholder="Name" required
                                                value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="email" className="form-control" name="email" placeholder="Email" required
                                                value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" name="phone" placeholder="Phone" required
                                                value={formData.phone} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-12">
                                            <input type="text" className="form-control" name="companyName" placeholder="Company Name"
                                                value={formData.companyName} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <h6 className="mb-3 border-bottom pb-2">Address</h6>
                                    <div className="row g-3 mb-3">
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" name="street" placeholder="Street" required
                                                value={formData.street} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" name="city" placeholder="City" required
                                                value={formData.city} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" name="zipcode" placeholder="Zipcode" required
                                                value={formData.zipcode} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <h6 className="mb-3 border-bottom pb-2">Geolocation</h6>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="lat" placeholder="Latitude"
                                                value={formData.lat} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="lng" placeholder="Longitude"
                                                value={formData.lng} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateUserModal;
