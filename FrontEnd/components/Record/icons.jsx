import React from "react";
import { FaHome } from "react-icons/fa";

const Icons = () => {
  return (
    <details className="dropdown">
      <summary className="m-1 btn">open or close</summary>
      <ul className="shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <div>
          <ul>
            <li>
              <a>
                <FaHome color="#343330" />
                <FaHome color="#343330" />
                <FaHome color="#343330" />
                <FaHome color="#343330" />
              </a>
              <a>
                <FaHome color="#343330" />
              </a>
              <a>
                <FaHome color="#343330" />
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </details>
  );
};

export default Icons;
