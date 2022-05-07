import StickyNavbar from "../components/StickyNavbar";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <StickyNavbar darkMode={true} isOfficePage={false} />
      <div className="absolute top-[50%] left-[50%] [transform:translate(-50%,-50%);] pt-28 space-y-12">
        <div className="flex justify-between">
          <h1 className="text-xl  text-center">Connect with social media</h1>
          <div className="flex flex-row space-x-3 justify-center">
            <a
              href="https://www.facebook.com/
                "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-3xl hover:text-blue-700 transition-all " />
            </a>
            <a
              href="
                "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl hover:text-blue-500 transition-alll" />
            </a>
            <a
              href="
                "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-3xl hover:text-blue-600 transition-all" />
            </a>
            <a
              href="
                "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl hover:text-pink-600 transition-all" />
            </a>
            <a
              href="
                "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-3xl hover:text-red-500 transition-all" />
            </a>
          </div>
        </div>
        <div className="flex justify-between space-x-6">
          <h1 className="text-2xl text-center">Get in touch with us!</h1>
          <div className="flex flex-col space-y-8">
            <div>
              <h1>
                Project Enquires:{" "}
                <a href="mailto:projectenquiry@cadencearchitects.com">
                  <span className="font-bold underline">
                    projectenquiry@cadencearchitects.com
                  </span>
                </a>
              </h1>
              <h1>
                Information:{" "}
                <a href="mailto:info@cadencearchitects.com">
                  <span className="font-bold underline">
                    projectenquiry@cadencearchitects.com
                  </span>
                </a>
              </h1>
              <h1>
                Media:{" "}
                <a href="mailto:media@cadencearchitects.com">
                  <span className="font-bold underline">
                    projectenquiry@cadencearchitects.com
                  </span>
                </a>
              </h1>
              <h1>
                Jobs:{" "}
                <a href="mailto:jobs@cadencearchitects.com">
                  <span className="font-bold underline">
                    projectenquiry@cadencearchitects.com
                  </span>
                </a>
              </h1>
            </div>
            <div>
              <h1>
                No. 45, KK Complex, Shankarmutt Road, Shankarpuram, Bangalore,
                Karnataka, India. Pincode - 560004
              </h1>
            </div>
            <div>
              <h1>
                Tel:{" "}
                <a href="tel:918041508214">
                  <span className="underline font-bold">918041508214</span>
                </a>
              </h1>
              <h1>
                Tel:{" "}
                <a href="tel:918022420007">
                  <span className="underline font-bold">918022420007</span>
                </a>
              </h1>
            </div>
            <div>
              <h1>
                <a
                  href="https://goo.gl/maps/Y5ARZ3jrdVHqBCn17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline font-bold">
                    VIEW ON GOOGLE MAPS
                  </span>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
