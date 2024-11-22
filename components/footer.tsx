
import { OWNER_NAME } from "@/constants";


const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {/* Display the copyright notice with dynamic years and owner name. */}
        &copy; {new Date().getFullYear()} <b>{OWNER_NAME.split(" ")[0]}</b> |
        All rights reserved {" "}

      </small>

    </footer>
  );
};

// Export the Footer component.
export default Footer;
