import { useState } from "react";

function PetItem({ pet }) {
  const [petimage, setPetimage] = useState(pet.image);
  const change = () => {
    setPetimage(pet.image2);
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petimage} />
        <div className="content">
          <h3>{pet.name}</h3>

          <button type="button" className="btn btn-info" onClick={change}>
            pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
