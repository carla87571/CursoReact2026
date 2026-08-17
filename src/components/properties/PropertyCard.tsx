import { Property } from "../../types/propertyType";

export function PropertyCard({ title, location, price, image, type } : Property) {
    return (
        
          <article className="property-card">
            <img
              src={image}
              alt={title}
            />
            <div className="property-card-content">
              <h4>{title}</h4>
              <p>{location}</p>
              <strong>${price} / noche</strong>
              <p>{type || "Tipo no especificado"}</p>
            </div>
          </article>
    );
}