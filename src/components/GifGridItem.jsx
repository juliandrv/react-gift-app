export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <h4>{title.toUpperCase()}</h4>
    </div>
  );
};
