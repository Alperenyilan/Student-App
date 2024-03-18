import { useState } from "react";
import { useAddUserMutation } from "../store/FakeUserApi";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [addUser] = useAddUserMutation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // Checkbox durumunu takip etmek için yeni
  const [addedMessage, setAddedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      // Eğer termsAccepted false ise
      setErrorMessage("Şartları kabul etmeniz gerekmektedir.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Şifreler eşleşmiyor!");
      return;
    }

    const newUser = {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      isLoggedIn: false,
    };

    try {
      await addUser(newUser);
      setAddedMessage(
        <div className="flex items-center justify-between">
          <span className="text-sm text-success">
            Giriş sayfasına yönlendiriliyor..
          </span>
          <div
            className="animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full w-4 h-4 text-success text-sm"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Yükleniyor...</span>
          </div>
        </div>
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.toString());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-auto space-y-4 ">
      <div className="grid w-full  items-center gap-1.5 ">
        <label
          htmlFor="input-label"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="input-label"
          className="block w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:shadow-sm focus:outline-none"
          placeholder="alperen@yilan.com"
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="block w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:shadow-sm focus:outline-none"
          required
          placeholder="10 haneli bir şifre gir"
          minLength="10"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          id="confirmPassword"
          className="block w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:shadow-sm focus:outline-none"
          required
          placeholder="10 haneli bir şifre gir"
          minLength="10"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          id="firstName"
          placeholder="Alperen"
          className="block w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:shadow-sm focus:outline-none"
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          id="lastName"
          placeholder="Yilan"
          className="block w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:shadow-sm focus:outline-none"
          required
        />
      </div>
      {errorMessage && (
        <div className="px-4 py-2 mb-5 text-sm border rounded-lg bg-danger/10 border-danger/30 last:mb-0 text-danger">
          {errorMessage}
        </div>
      )}
      {addedMessage && (
        <div className="px-4 py-2 mb-5 text-sm border rounded-lg bg-success/10 border-success/30 last:mb-0 text-danger">
          {addedMessage}
        </div>
      )}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms-description"
            type="checkbox"
            checked={termsAccepted} // Checkbox'ın durumunu kontrol et
            onChange={(e) => setTermsAccepted(e.target.checked)} // Checkbox'ın durumunu güncelle
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            for="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="#"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <div className="grid w-full">
        <button className="items-center justify-center flex-shrink-0 w-1/2 px-6 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 border-2 rounded-md lg:w-auto bg-neutral-950 border-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none">
          Kayıt Ol
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
