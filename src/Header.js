import React, {useState, useRef} from 'react';
import hamburger from './assets/Hamburger Menu.svg';
import logo from './assets/Logo.svg';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalRef = useRef(null);

  return (
    <>
    <header className="sm:hidden">
      <nav className="flex justify-between items-center">
        <div className="">
          <img src={logo} alt="Unicorn Logo with Unifeed Label" />
        </div>

        <div className="">
          <img src={hamburger} alt="" onClick={
            () => setIsMenuOpen(true)
          }/>
        </div>
        {
          isMenuOpen &&
          <div className="fixed inset-0 bg-green-400 flex justify-center items-center bg-neutral-800"
            onClick={(e) => {
              if (!modalRef.current || modalRef.current.contains(e.target)) {
                // https://usehooks.com/useOnClickOutside/
                // do nothing if clicking on ref or descendant elements
                return;
              } else {
                setIsMenuOpen(false);
              }
            }}
          >
            <div className="flex flex-col" ref={modalRef}>
              <button className="px-6 py-3 text-neutral-100">Home</button>
              <button className="px-6 py-3 text-neutral-100">Features</button>
              <button className="px-6 py-3 text-neutral-100">Pricing</button>
              <button className="px-6 py-3 bg-orange-500 text-neutral-800 rounded font-semibold">Subscribe</button>
            </div>
          </div>
        }

      </nav>

    </header>

    <header className="hidden sm:block">
    <nav className="flex justify-between items-center">
      <div className="">
        <img src={logo} alt="Unicorn Logo with Unifeed Label" />
      </div>

      <div className="">
        <button className="hover:underline px-6 py-3 text-neutral-700">Home</button>
        <button className="hover:underline px-6 py-3 text-neutral-700">Features</button>
        <button className="hover:underline px-6 py-3 text-neutral-700">Pricing</button>
        <button className="hover:rotate-[360deg] duration-300 transition-transform px-6 py-3 bg-orange-500 text-neutral-800 rounded font-semibold">Subscribe</button>
      </div>
    </nav>
    </header>
    </>
  )
}

export default Header;
