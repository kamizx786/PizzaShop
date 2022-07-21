import React from 'react'
 function Card(props) {
  return (
    <section className="main-card--cointainer">
  {props.menuData.map((curElem)=>{
    const{id,name,category,description,price,image}=curElem;
        return(
            <>
            <div className="card-container">
            <div className="card ">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">
                {description}
                </span>
                <span className="card-read">{price}</span>
                <div className="card-read">Read</div>
              </div>
              <img src={image} alt="images" className="card-media" />
        
              <span className="card-tag  subtle">Order Now</span>
            </div>
          </div>
          </>
        )})}
  
  </section>
  );
};
export default Card;