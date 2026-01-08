import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import CreateUserModal from '../components/CreateUserModal';

const Dashboard = () => {
    const { users, loading, error } = useUser();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6;

    // Reset page on search
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    if (loading) return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination Logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    // Reset page on search


    return (
        <div>
            <h1 className="mb-4">User Dashboard</h1>

            <div className="row">
                <div className="col-md-12 text-end">
                    <CreateUserModal />
                </div>
            </div>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {currentUsers.map(user => (
                    <div className="col" key={user.id}>
                        <UserCard user={user} />
                    </div>
                ))}
                {currentUsers.length === 0 && (
                    <div className="col-12 text-center text-muted">No users found.</div>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <nav className="mt-4">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Dashboard;
