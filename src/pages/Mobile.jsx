const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-900">
      <h1 className="text-4xl font-semibold mb-4">Download the Mobile Apps</h1>
      <p className="text-lg mb-6">We love to hear from you!</p>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <input className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" rows="4"></textarea>
        </div>
        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Mobile;
