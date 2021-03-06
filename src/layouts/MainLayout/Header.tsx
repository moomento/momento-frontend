import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useOnboardContext } from "../../context/OnboardContext";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { setup, onboard } = useOnboardContext();

  const handleConnectWallet = async () => {
    onboard.config({ darkMode: isDark });
    setup();
  };
  return (
    <div
      className={classNames({
        "border-b border-gray-400 dark:border-gray-800": true,
      })}
    >
      <div
        className={classNames({
          "container mx-auto px-4 py-2 flex justify-between items-center text-gray-100 dark:text-gray-900":
            true,
        })}
      >
        <div
          className={classNames({
            "font-bold text-xl text-blue-500 uppercase": true,
          })}
        >
          <NavLink to="/">Momento</NavLink>
        </div>
        <div className={classNames({ "flex ": true })}>
          <button
            onClick={handleConnectWallet}
            className={classNames({
              "h-10 border-2 px-4 rounded-full mr-2": true,
              "border-gray-400 hover:border-gray-100 text-gray-100": isDark,
              "border-gray-600 hover:border-gray-900 text-gray-900": !isDark,
            })}
          >
            Connect Wallet {onboard.getState().address}
          </button>
          <button
            onClick={toggleTheme}
            className={classNames({
              "w-10 h-10 border-2 rounded-full": true,
              "border-gray-400 hover:border-gray-100 text-gray-100": isDark,
              "border-gray-600 hover:border-gray-900 text-gray-900": !isDark,
            })}
          >
            {isDark ? (
              <SunIcon className="w-6 h-6 mx-auto" />
            ) : (
              <MoonIcon className="text-dark  w-6 h-6 mx-auto" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
