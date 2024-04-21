import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} mx-auto lg:mb-20 text-center flex flex-col justify-center items-center`}
    >
      {tag && <TagLine className='mb-4 justify-center'>{tag}</TagLine>}
      {title && <h2 className='h2'>{title}</h2>}
      {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
    </div>
  );
};

export default Heading;
