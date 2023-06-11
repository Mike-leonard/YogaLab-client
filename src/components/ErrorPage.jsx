
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
            <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="404 Error" className="w-80 h-auto mb-6 rounded-3xl" />
            <a href="/" className="text-blue-500 underline">Go back to the homepage</a>
        </div>
    );
};


export default ErrorPage;