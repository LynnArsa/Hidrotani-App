const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to the Homepage</h1>
      <p className="text-lg">This is a modern homepage built with React and Tailwind CSS.</p>
      <button className="mt-8 px-6 py-2 bg-white text-blue-500 rounded-lg shadow hover:bg-gray-100 transition-all duration-300">
        Learn More
      </button>
    </div>
  );
};

export default Home;
