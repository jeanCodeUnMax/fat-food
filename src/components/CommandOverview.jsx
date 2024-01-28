import './CommandOverview.css';

const CommandOverview = () => {

  console.log("render commandHoverview");
  
  return (
    <div className='command-overview-container'>
      <div className='command-overview-container__top text-left'>
        <p className='h3 text-uppercase fw-bold'>
          <i className='bi bi-card-list me-2'></i>allergène
        </p>
      </div>
      <div className='command-overview-container__main'>
        <div className='command-overview-container__main-header ps-2'>
          <i className='bi bi-dash-square me-2'></i>
          <span className='h3 fw-bold'>VOTRE COMMANDE</span>
        </div>
        <div className='command-overview-container__main-content px-4 py-4 '>
          <div className='product-wrapper'>
            <p className='product-name fw-bold mb-1'>1 x Happy Meal</p>
            <p className='product-description'>
              <p>Cheeseburger</p>
              <p>Petite Frite</p>
              <p>Fanta 25CL</p>
              <p>Jouet Garçon</p>
            </p>
          </div>
          <hr />

          <div className='product-wrapper'>
            <p className='product-name fw-bold mb-1'>1 x Happy Meal</p>
            <p className='product-description'>
              <p>Cheeseburger</p>
              <p>Petite Frite</p>
              <p>Fanta 25CL</p>
              <p>Jouet Garçon</p>
            </p>
          </div>
          <hr />

          <div className='product-wrapper'>
            <p className='product-name fw-bold mb-1'>1 x Happy Meal</p>
            <p className='product-description'>
              <p>Cheeseburger</p>
              <p>Petite Frite</p>
              <p>Fanta 25CL</p>
              <p>Jouet Garçon</p>
            </p>
          </div>
        </div>
        <div className='command-overview-container__navigate-btns mb-3'>
          <button>
            <i className='bi bi-caret-down-fill'></i>
          </button>
          <button className='inactive'>
            <i className='bi bi-caret-up-fill'></i>
          </button>
        </div>
        <div className='command-overview-container__total d-flex justify-content-between px-2'>
          <p className='h3 text-uppercase fw-bold my-2'>total</p>
          <p className='h3 text-uppercase fw-bold my-2'>€31,30</p>
        </div>
      </div>
      <div className='command-overview-container__bottom'>
        <button>ABANDONNEZ LA COMMANDE</button>
        <button className='inactive'>VALIDER LA COMMANDE</button>
      </div>
    </div>
  );
};

export default CommandOverview;
