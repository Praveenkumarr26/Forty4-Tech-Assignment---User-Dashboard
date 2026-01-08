import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const UserCard = ({ user }) => {
    const { deleteUser } = useUser();

    const handleDelete = () => {
        deleteUser(user.id);
    };
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.company.name}</h6>
                <p className="card-text">
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Phone:</strong> {user.phone}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to={`/user/${user.id}`} className="btn btn-primary btn-sm">View Details</Link>
                    <button onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
