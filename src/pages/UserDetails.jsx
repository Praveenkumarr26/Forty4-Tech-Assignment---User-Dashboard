import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const UserDetails = () => {
    const { id } = useParams();
    const { users, loading, error } = useUser();

    if (loading) return <div className="container mt-5 text-center"><div className="spinner-border"></div></div>;
    if (error) return <div className="container mt-5 alert alert-danger">{error}</div>;

    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return (
            <div className="container mt-5 text-center">
                <h2>User not found</h2>
                <Link to="/" className="btn btn-primary mt-3">Back to Dashboard</Link>
            </div>
        );
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-header bg-primary text-white">
                <h3 className="mb-0">{user.name}</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5 className="border-bottom pb-2">Contact Info</h5>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        {user.website && <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{user.website}</a></p>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <h5 className="border-bottom pb-2">Company</h5>
                        <p><strong>Name:</strong> {user.company?.name}</p>
                        <p><strong>Catch Phrase:</strong> {user.company?.catchPhrase}</p>
                        <p><strong>BS:</strong> {user.company?.bs}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h5 className="border-bottom pb-2">Address</h5>
                        <p>
                            {user.address?.street}, {user.address?.suite}<br />
                            {user.address?.city}, {user.address?.zipcode}
                        </p>
                        <p className="text-muted small">
                            <i className="bi bi-geo-alt-fill"></i> Geo: {user.address?.geo?.lat}, {user.address?.geo?.lng}
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <Link to="/" className="btn btn-secondary">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
