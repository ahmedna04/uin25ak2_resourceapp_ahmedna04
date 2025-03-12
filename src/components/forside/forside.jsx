function forside({ tittel, description }) {
    return (
      <div className="page-title">
        <h2>{tittel}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  export default PageTitle;