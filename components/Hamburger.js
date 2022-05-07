import { Turn as Ham } from "hamburger-react";
import { useState } from "react";
import { useRouter } from "next/router";

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const routerPush = (path) => {
    router.push(`/${path}`);
  };
  const [shouldHide, setShouldHide] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 85 ||
      document.documentElement.scrollTop > 85
    ) {
      setShouldHide(true);
    } else {
      setShouldHide(false);
    }
  }

  return (
    <div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn z-10">
        <Ham
          toggled={isOpen}
          toggle={setOpen}
          direction="top"
          color={isOpen ? "#000" : "#fff"}
          size={24}
        />
      </label>
      <div className={`${shouldHide ? "wrapper0Opacity" : "wrapper"}`}>
        <ul>
          <li>
            <a
              onClick={() => {
                routerPush("/project");
              }}
              className="before:"
            >
              Work
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                routerPush("/office");
              }}
            >
              Office
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                routerPush("/contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
