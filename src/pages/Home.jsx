const Home = () => {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary p-24 text-white">
        <div className="flex">
          <div className="container pt-16 w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Masa Depan Pertanian Urban Ada di Genggaman Anda!
            </h1>
            <p className="text-lg mb-6">
              Jelajahi kemudahan bertani hidroponik dengan dukungan lengkap dari
              aplikasi HidroTani – E-commerce dan komunitas pertanian urban
              dalam satu platform.
            </p>
            <button className="bg-white text-teal-500 px-8 py-2 rounded-lg shadow hover:bg-gray-100">
              Unduh Sekarang
            </button>
          </div>
          <div className="w-1/2">
            <img src="src\assets\mobile-app.png" className="mx-auto"></img>
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="p-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">HidroTani</h2>
            <p>
              Berawal dari visi untuk mendukung praktik pertanian berkelanjutan,
              HidroTani hadir sebagai platform bagi para pegiat urban farming
              dan penggemar hidroponik di Indonesia. Kami tidak hanya
              menyediakan alat-alat berkualitas dan nutrisi yang diperlukan
              untuk berkebun secara hidroponik, namun juga membangun komunitas
              belajar bagi para pengguna, baik pemula maupun yang sudah
              berpengalaman.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="src\assets\logo-hidro-tani.png"
              alt="HidroTani Logo"
              className="mx-auto size-72"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            HidroTani Punya Apa Saja?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/path-to-ecommerce-icon.png"
                alt="E-commerce"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">E-commerce</h3>
              <p>Menyediakan peralatan, nutrisi, dan aksesoris hidroponik</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/path-to-community-icon.png"
                alt="Forum Komunitas"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Forum Komunitas</h3>
              <p>Menyediakan peralatan, nutrisi, dan aksesoris hidroponik</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/path-to-education-icon.png"
                alt="Edukasi"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Edukasi</h3>
              <p>
                Kumpulan artikel dan panduan praktis untuk membantu Anda memulai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Community Join */}
      <section className="py-20">
        <div></div>
        <div className="container mx-auto bg-teal-100 p-8 rounded-lg flex items-center justify-between w-3/4">
          <div className="w-1/2 pr-8">
            <h2 className="text-2xl font-bold mb-4">
              Bergabung dengan Komunitas Hidroponik Indonesia
            </h2>
            <p className="mb-6">
              Dapatkan akses ke jaringan luas para penggemar hidroponik yang
              berbagi pengetahuan, pengalaman, dan dukungan
            </p>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-600">
              Daftar Sekarang
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="src/assets/homepage-forum.png"
              alt="Homepage Forum"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Testimonial</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">
                Platform ini telah membantu saya dalam mengelola hidroponik
                dengan mudah!
              </p>
              <p className="font-bold">Adi Syahputra</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">
                Akses ke materi edukasi dan pasar alat hidroponik sangat
                memudahkan saya belajar berkebun.
              </p>
              <p className="font-bold">Atalya</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">
                Dukungan dari komunitas membuat belajar hidroponik menjadi
                mudah!
              </p>
              <p className="font-bold">Rahyan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
