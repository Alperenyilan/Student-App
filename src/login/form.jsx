import { useEffect, useState } from "react";
import { useFetchUsersQuery, useUpdateUserMutation } from "../store";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data, error, isFetching } = useFetchUsersQuery();
  const [updateUser] = useUpdateUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [addedMessage, setAddedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
    if (rememberedPassword) {
      setPassword(rememberedPassword); // Şifreyi ayarla
    }
  }, []);

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }

    const user = data
      ? data.find((user) => user.email === email && user.password === password)
      : null;

    if (user) {
      if (!isEmailValid(email)) {
        setErrorMessage("Geçerli bir email adresi giriniz.");
      } else if (!isPasswordValid(password)) {
        setErrorMessage("Şifre en az 10 karakter olmalıdır.");
      } else {
        try {
          await updateUser({ id: user.id, isLoggedIn: true });
          setAddedMessage("Giriş Yapılıyor..");
          setTimeout(() => {
            navigate(`/applications?userId=${user.id}`);
          }, 2000);
        } catch (error) {
          setErrorMessage("Giriş yaparken bir hata oluştu.");
        }
      }
    } else {
      setErrorMessage("E-posta adresi veya şifre yanlış.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-auto space-y-4">
      <div className="grid w-full items-center gap-1.5">
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
          placeholder="alp@yilan.com"
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
          placeholder="10 karakter gir"
          required
          minLength="10"
        />
      </div>
      {errorMessage && !addedMessage && (
        <div className="px-4 py-2 mb-5 text-sm border rounded-lg bg-danger/10 border-danger/30 last:mb-0 text-danger">
          {errorMessage}
        </div>
      )}
      {addedMessage && (
        <div className="px-4 py-2 mb-5 text-sm border rounded-lg bg-success/10 border-success/30 last:mb-0 text-success">
          {addedMessage}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              checked={rememberMe} // Kontrol edilen durumu ekleyin
              onChange={(e) => setRememberMe(e.target.checked)} // onChange handler'ı ekleyin
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label for="remember" className="text-gray-500 dark:text-gray-300">
              Remember me
            </label>
          </div>
        </div>
      </div>
      <div className="grid w-full">
        <button className="items-center justify-center flex-shrink-0 w-1/2 px-6 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 border-2 rounded-md lg:w-auto bg-neutral-950 border-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none">
          Giriş Yap
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
