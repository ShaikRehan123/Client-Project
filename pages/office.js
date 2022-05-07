/* eslint-disable @next/next/no-img-element */
import ImageWithText from "../components/ImageWithText";
import StickyNavbar from "../components/StickyNavbar";
import AboutSection from "../components/AboutSection";
import Profile from "../components/Profile";
import {
  awardImages,
  awards,
  eventsAndExhibitionsImages,
  exhibitions,
  lectures,
  offlinePublications,
  offlinePublicationsImages,
  onlinePublications,
  profiles,
  publicationsImages,
} from "../lib/constants";
import { useRef } from "react";
const Office = () => {
  const ProfileRef = useRef(null);
  const PeopleRef = useRef(null);
  const AwardsRef = useRef(null);
  const PublicationsRef = useRef(null);
  const EventsRef = useRef(null);

  return (
    <div>
      <StickyNavbar
        darkMode={true}
        profileRef={ProfileRef}
        peopleRef={PeopleRef}
        awardsRef={AwardsRef}
        publicationsRef={PublicationsRef}
        eventsRef={EventsRef}
        isOfficePage={true}
      />
      <div className="w-[90%] m-auto pt-28 space-y-12 mb-4 xl:w-[65%]">
        <div ref={ProfileRef} className="pt-12">
          <ImageWithText
            text="Profile"
            imgElement={
              <img
                data-wow-delay="0.1s"
                data-sizes="auto"
                style={{
                  width: "100%",
                  height: "450px",
                }}
                data-no-retina=""
                alt={"Profile"}
                src="/image.webp"
              />
            }
          />
        </div>
        <AboutSection />
        <div ref={PeopleRef}>
          <ImageWithText
            text="People"
            imgElement={
              <img
                style={{
                  width: "100%",
                }}
                alt={"People"}
                data-wow-delay="0.1s"
                data-sizes="auto"
                data-srcset="https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=600%2C365&amp;ssl=1 300w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=600%2C365&amp;ssl=1 500w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=750%2C456&amp;ssl=1 750w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?fit=1000%2C305&amp;ssl=1 1000w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?fit=1500%2C457&amp;ssl=1 1500w"
                data-no-retina=""
                srcSet="https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=600%2C365&amp;ssl=1 300w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=600%2C365&amp;ssl=1 500w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?resize=750%2C456&amp;ssl=1 750w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?fit=1000%2C305&amp;ssl=1 1000w, https://i0.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/67443946_2384739524942256_8339663519062425600_o-e1629903634176.jpg?fit=1500%2C457&amp;ssl=1 1500w"
              />
            }
          />
        </div>
        <div className=" flex flex-wrap w-full">
          {profiles.map((profile, index) => {
            return <Profile key={index} {...profile} />;
          })}
        </div>
        <div ref={AwardsRef}>
          <ImageWithText
            text="Awards"
            imgElement={
              <img
                alt="Awards"
                style={{
                  width: "100%",
                  height: "450px",
                }}
                data-wow-delay="0.1s"
                data-sizes="auto"
                data-no-retina=""
                src="/awards.webp"
              />
            }
          />
        </div>
        <div className="images-row-container mt-14">
          {awardImages.map((imageUrl) => {
            return (
              <div
                key={imageUrl}
                className="images-column-container [flex:25%] p-5 space-y-6"
              >
                <img
                  src={imageUrl}
                  alt="events and exhibitions"
                  className="h-44 w-44 hover:-translate-y-4 transition-all mt-6"
                />
              </div>
            );
          })}
        </div>
        <div>
          {/* <button onClick={hanlde.enter}>Enter Full Screen</button> */}
          <div>
            <h1 className="text-lg text-black font-bold text-left">Awards</h1>
            <ul className="awards-list space-y-4">
              {awards.map((award, index) => {
                return <li key={index}>{award}</li>;
              })}
            </ul>
          </div>
        </div>
        <div ref={PublicationsRef}>
          <ImageWithText
            text="Publications"
            imgElement={
              <img
                alt="Publications"
                data-wow-delay="0.1s"
                data-sizes="auto"
                data-srcset="https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?resize=600%2C365&amp;ssl=1 300w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?resize=600%2C365&amp;ssl=1 500w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?resize=750%2C456&amp;ssl=1 750w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?fit=912%2C608&amp;ssl=1 1000w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?fit=1024%2C683&amp;ssl=1 1500w"
                sizes="621px"
                srcSet="https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?resize=600%2C365&amp;ssl=1 300w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?resize=600%2C365&amp;ssl=1 500w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?resize=750%2C456&amp;ssl=1 750w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?fit=912%2C608&amp;ssl=1 1000w, https://i1.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/IMG_4213.jpg?fit=1024%2C683&amp;ssl=1 1500w"
                data-no-retina=""
                style={{
                  width: "100%",
                }}
              />
            }
          />
        </div>
        <div className="images-row-container mt-14">
          {publicationsImages.map((imageUrl) => {
            return (
              <div
                key={imageUrl}
                className="images-column-container [flex:20%] p-5 space-y-6"
              >
                <img
                  src={imageUrl}
                  alt="events and exhibitions"
                  className="h-44 w-44 hover:-translate-y-4 transition-all mt-6"
                />
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-2xl">
            <span className="underline font-bold">Offline:</span> Publications
          </h1>
          <div>
            <ul className="awards-list space-y-4">
              {offlinePublications.map((award, index) => {
                return <li key={index}>{award}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="images-row-container mt-14">
          {offlinePublicationsImages.map((imageUrl) => {
            return (
              <div
                key={imageUrl}
                className="images-column-container [flex:25%] p-5 space-y-6"
              >
                <img
                  src={imageUrl}
                  alt="events and exhibitions"
                  className="h-44 w-44 hover:-translate-y-4 transition-all mt-6"
                />
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-2xl">
            <span className="underline font-bold">Online:</span> Publications
          </h1>
          <div>
            <ul className="awards-list space-y-4">
              {onlinePublications.map((award, index) => {
                return <li key={index}>{award}</li>;
              })}
            </ul>
          </div>
        </div>
        <div ref={EventsRef}>
          <ImageWithText
            text="Events/Exhibitions"
            imgElement={
              <img
                alt="Events/Exhibitions"
                data-wow-delay="0.1s"
                data-sizes="auto"
                data-no-retina=""
                style={{
                  width: "100%",
                }}
                sizes="623px"
                srcSet="https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/ADL_5379-scaled.jpg?resize=600%2C365&amp;ssl=1 300w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/ADL_5379-scaled.jpg?resize=600%2C365&amp;ssl=1 500w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/ADL_5379-scaled.jpg?resize=750%2C456&amp;ssl=1 750w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/ADL_5379-scaled.jpg?resize=600%2C365&amp;ssl=1 500w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/ADL_5379-scaled.jpg?fit=912%2C608&amp;ssl=1 1000w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/ADL_5379-scaled.jpg?resize=600%2C365&amp;ssl=1 500w, https://i2.wp.com/cadencearchitects.com/wp-content/uploads/2021/07/ADL_5379-scaled.jpg?fit=1368%2C912&amp;ssl=1 1500w"
              />
            }
          />
        </div>
        <div>
          <div className="images-row-container mt-14">
            {eventsAndExhibitionsImages.map((imageUrl) => {
              return (
                <div
                  key={imageUrl}
                  className="images-column-container [flex:33.33%] p-5 space-y-6"
                >
                  <img
                    src={imageUrl}
                    alt="events and exhibitions"
                    className="h-44 w-44 hover:-translate-y-4 transition-all mt-6"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          <div className="md:float-left">
            <h1 className="text-lg">Exhibitions</h1>
            <div className="">
              <ul className="space-y-4">
                {exhibitions.map((award, index) => {
                  return <li key={index}>{award}</li>;
                })}
              </ul>
            </div>
          </div>
          <div>
            <div className="md:float-right">
              <h1 className="text-lg">Lectures</h1>
              <div className="">
                <ul className="space-y-4">
                  {lectures.map((award, index) => {
                    return <li key={index}>{award}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
