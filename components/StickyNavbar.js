import { useRouter } from "next/router";
import HeaderLogo from "./HeaderLogo";
import Hamburger from "./Hamburger";

const StickyNavbar = ({
  darkMode,
  profileRef,
  peopleRef,
  awardsRef,
  publicationsRef,
  eventsRef,
  isOfficePage,
}) => {
  const router = useRouter();
  const routerPush = (path) => {
    router.push(`/${path}`);
  };
  const executeScroll = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };
  return (
    <div id="stickyNavbar">
      <div className="">
        <HeaderLogo darkMode={darkMode} />
      </div>
      <div className="absolute top-[8px] right-[16px] z-[1000]">
        <div className="p-6">
          <div className=" space-x-2.5  md:inline-flex hidden">
            <h1
              className={`${
                darkMode ? "text-black" : "text-white"
              } font-bold text-2xl cursor-pointer font-mono hover:opacity-80`}
              onClick={() => {
                routerPush("/project");
              }}
            >
              Work
            </h1>
            <h1
              className={`text-${
                darkMode ? "black" : "white"
              } font-bold text-2xl cursor-pointer font-mono hover:opacity-80`}
              onClick={() => {
                routerPush("/office");
              }}
            >
              Office
            </h1>
            <h1
              className={`text-${
                darkMode ? "black" : "white"
              } font-bold text-2xl cursor-pointer font-mono hover:opacity-80`}
              onClick={() => {
                routerPush("/contact");
              }}
            >
              Contact
            </h1>
          </div>
          <div className="inline-flex md:hidden h-full w-full ">
            <Hamburger />
          </div>
        </div>
      </div>
      {isOfficePage ? (
        <div className="flex flex-row space-x-3 justify-end mb-2">
          <p
            className="cursor-pointer"
            onClick={() => {
              executeScroll(profileRef);
            }}
          >
            Profile
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              executeScroll(peopleRef);
            }}
          >
            People
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              executeScroll(awardsRef);
            }}
          >
            Awards
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              executeScroll(publicationsRef);
            }}
          >
            Publications
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              executeScroll(eventsRef);
            }}
          >
            Events
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default StickyNavbar;
