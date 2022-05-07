const Profile = ({ name, image, alt, role, socialIcons }) => {
  return (
    <div className="profile flex-[33.33%]">
      <div className="profile-image">
        <img src={image} alt={alt} />
      </div>
      <div className="profile-info flex flex-col justify-center items-center mt-2 space-y-3">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <div className="profile-social flex space-x-6">
          {socialIcons.map((icon, index) => {
            if (icon.url == "No") {
              return;
            }
            return (
              <div key={icon.url} className=''>
                <a
                  key={index}
                  href={icon.url.includes('@cadencearchitects') ?  `mailto:${icon.url}` : icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
