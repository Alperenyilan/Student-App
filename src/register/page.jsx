import { Link } from "react-router-dom";
import RegisterForm from "./form";

const RegisterPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full px-4 sm:px-10">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row">
          <div className="relative w-full bg-cover bg-gradient-to-r from-white via-white to-gray-100 lg:w-6/12 xl:w-7/12">
            <div className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-10 my-10 sm:my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-4 sm:space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <p className="mb-2 text-gray-700 font-medium uppercase text-sm sm:text-base">
                    Kayıt Ol!
                  </p>
                  <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 sm:xl:text-6xl">
                    Kayıt olmak için yandaki formu doldur!
                  </h2>
                </div>
                <p className="text-xl sm:text-2xl text-gray-700">
                  Kayıt olduktan sonra Giriş Yap!
                </p>
                <Link
                  to="/home"
                  className="inline-block px-4 sm:px-8 py-3 sm:py-5 text-lg sm:text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                  data-primary="blue-600"
                  data-rounded="rounded-lg"
                >
                  Ana sayfaya dön
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="m-4 overflow-hidden bg-white shadow-md rounded-xl w-full max-w-xs md:max-w-sm md:m-0">
              <div className="p-10 bg-lime-50 shadow-md ">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  Kayıt olunuz!
                </h1>
                <RegisterForm />
                <p className="mt-4 text-sm text-center text-gray-700">
                  Hesabın Varmı?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary hover:underline"
                  >
                    Giriş Yap!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
