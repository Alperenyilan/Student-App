import React, { Suspense } from "react";
import { Link } from "react-router-dom"; // React Router DOM'dan Link'i import ediyoruz
import LoginForm from "./form";

const LoginPage = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 md:w-3/5 lg:pr-16">
            <p
              className="text-blue-500 font-medium uppercase"
              data-primary="blue-500"
            >
              Giriş Sayfası
            </p>
            <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
              Öğrenci Girişi için sağdaki formu doldur.
            </h2>
            <p className="text-xl text-gray-600 lg:pr-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              explicabo.
            </p>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="m-4 overflow-hidden bg-white shadow-md rounded-xl w-full max-w-xs md:max-w-sm md:m-0">
              <div className="p-10 bg-lime-50 shadow-md">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  Sign In
                </h1>
                <Suspense fallback={<div>Loading...</div>}>
                  <LoginForm />
                </Suspense>
                <p className="mt-4 text-sm text-center text-gray-700">
                  or,
                  <Link
                    to="/register"
                    className="font-medium text-primary hover:underline"
                  >
                    Hesap Oluştur
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

export default LoginPage;
