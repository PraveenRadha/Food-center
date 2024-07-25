const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="fixed bottom-0 left-0 w-full px-8 py-2 m-0 text-white bg-gray-800">
      <div className="flex items-center justify-center space-x-2">
        <span>Created By</span>
        <a
          href="https://www.linkedin.com/in/praveenradha/"
          target="_blank"
          title="PraveenRadha's Linkedin Profile"
          className="text-green-400 hover:underline"
        >
          Praveen Radha
        </a>
        <i className="fa-solid fa-copyright"></i>
        <span>{year}</span>
        <a
          href="https://github.com/chetannada/Namaste-React"
          target="_blank"
          title="Food Fire Github Repository"
          className="text-green-400 hover:underline"
        >
          <strong>
            Food<span>Fire</span>
          </strong>
        </a>
      </div>
    </div>
  );
};

export default Footer;
