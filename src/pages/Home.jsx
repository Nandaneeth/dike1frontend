import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome Home</h1>
            <div className="space-x-4">
                <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Login
                </Link>
                <Link to="/signin" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default Home;
