import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="px-2 pt-32 bg-green-50 md:px-0">
      <div className="container mx-auto max-w-6xl px-5 space-y-6 text-center">
        <h1 className="text-left text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span className="block">
            Öğrenci{" "}
            <span className="block mt-1 text-purple-500 lg:inline lg:mt-0">
              Giriş Sistemi
            </span>
          </span>
        </h1>
        <p className="mx-auto w-full text-base text-left text-gray-500 sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          Giriş yapmak için önce kayıt olunuz!
        </p>
        <div className="mx-auto text-2xl font-semibold hover:text-blue-500">
          <div className="flex justify-center items-center p-3">
            <ul className="flex flex-row sm:flex-row gap-4 sm:gap-8">
              <li>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 sm:gap-5 px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-white transition-colors duration-200 border-2 rounded-md bg-neutral-950 border-neutral-950 hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none"
                >
                  Kayıt Ol
                  <FontAwesomeIcon icon={faUserPlus} />
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 sm:gap-5 px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-white transition-colors duration-200 border-2 rounded-md bg-neutral-950 border-neutral-950 hover:bg-green-500 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none"
                >
                  Giriş Yap
                  <FontAwesomeIcon icon={faRightToBracket} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-5 mt-16 text-center">
        <img
          src="https://cdn.devdojo.com/images/november2020/hero-image.png"
          alt="Hero"
        />
      </div>
      <section className="text-black-700 p-1 body-font">
        <div className="container mx-auto flex items-center py-2 max-w-7xl sm:flex-row justify-center">
          <p className="mt-4 text-lg text-black-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-red-600 sm:mt-0">
            &copy; 2024- Alperen Yilan
          </p>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:mt-0 sm:justify-start">
            <a
              href="https://github.com/Alperenyilan"
              className="text-black-400 space-x-5 hover:text-red-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  // eslint-disable-next-line react/no-unknown-property
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  // eslint-disable-next-line react/no-unknown-property
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </span>
        </div>
      </section>
    </section>
  );
}
