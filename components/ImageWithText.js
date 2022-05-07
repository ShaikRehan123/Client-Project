const TextOnTopOfImage = ({ text, imgElement }) => {
  return (
    <div className="text-on-top-of-image">
      {imgElement}
      <div className="centered">
        <h1 className="[font-size:30px;] md:[font-size:70px;] font-bold">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default TextOnTopOfImage;
