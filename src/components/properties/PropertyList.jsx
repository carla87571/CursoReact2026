import { PropertyCard } from './PropertyCard.jsx';

export function PropertyList({ properties }) {
    if (properties.length === 0) {
        return (
            <section className="properties-section">
              <h3>Alojamientos disponibles</h3>
              <p>No hay propiedades disponibles en este momento.</p>
            </section>
        );
    }

    return (
        <section className="properties-section">
          <h3>Alojamientos disponibles</h3>
          <div className="properties-grid">
           {properties.map(property => (
               <PropertyCard 
                   key={property.id}
                   title={property.title}
                   location={property.location}
                   price={property.price}
                   image={property.image}
                   type={property.type}
               />
           ))}

          </div>
        </section>
    );

}