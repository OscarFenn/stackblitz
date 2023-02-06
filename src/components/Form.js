import React, {useState, useContext} from 'react';
import {MemberContext} from './MemberContext';

const Form = () => {
 const [name, setName] = useState('');
 const [description, setDescription] = useState('');
 const [fruit, setFruit] = useState('');
 const [members, setMembers] = useContext(MemberContext);

 const updateName = (e) => {
   setName(e.target.value)
 }
 const updateDescription = (e) => {
  setDescription(e.target.value)
}
const updateFruit = (e) => {
  setFruit(e.target.value)
}

  const submitHandler = (e) => {
    e.preventDefault();
    setMembers(prevMembers => [...prevMembers, {name: name, description: description, fruit: fruit}])
  }

  
  return (
    <>
      <button
        type="button"
        class="btn btn-primary mt-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add new member
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Enter member information
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={submitHandler}>
                <div class="mb-3">
                  <label for="Name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Name"
                    value={name}
                    onChange={updateName}
                  />
                  
                </div>
                <div class="mb-3">
                  <label for="Description" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Description"
                    value={description}
                    onChange={updateDescription}
                  />
                </div>
                <div class="mb-3">
                  <label for="FavoriteFruit" class="form-label">
                    Favorite Fruit
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="FavoriteFruit"
                    value={fruit}
                    onChange={updateFruit}
                  />
                </div>
                <button 
                type="submit" 
                class="btn btn-primary"
                data-bs-dismiss="modal"
                >  
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;