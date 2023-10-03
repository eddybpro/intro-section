import "./Navbar.css";
import { useState } from "react";
import {
  Logo,
  CloseImg,
  MenuImg,
  ArrowDown,
  ArrowUp,
  Calendar,
  Todo,
  Reminder,
  Planning,
} from "../assets";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [arrowa, setArrowa] = useState(false);
  const [arrowb, setArrowb] = useState(false);
  return (
    <nav>
      <a href="#" className="Logo">
        <img src={Logo} alt="snap" />
      </a>

      <div className="Menu">
        {isMenuOpen ? (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={CloseImg} alt="" />
          </button>
        ) : (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src={MenuImg} alt="" />
          </button>
        )}
      </div>

      <div className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <ul>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setArrowa((prev) => !prev)}>
              features
            </a>
            <img src={arrowa ? ArrowUp : ArrowDown} alt="" />
            {arrowa && (
              <ul className="NavLinks-Link-SubLinks">
                <li>
                  <img src={Todo} alt="" />
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    todo list
                  </a>
                </li>
                <li>
                  <img src={Calendar} alt="" />
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    calendar
                  </a>
                </li>
                <li>
                  <img src={Reminder} alt="" />
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    reminder
                  </a>
                </li>
                <li>
                  <img src={Planning} alt="" />
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    planning
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setArrowb((prev) => !prev)}>
              company
            </a>
            <img src={arrowb ? ArrowUp : ArrowDown} alt="" />
            {arrowb && (
              <ul className="NavLinks-Link-SubLinks">
                <li>
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    history
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    our team
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    blog
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              careers
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              about
            </a>
          </li>
        </ul>
        <div>
          <button className="NavLinks-Login">login</button>
          <button className="NavLinks-Register">register</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
