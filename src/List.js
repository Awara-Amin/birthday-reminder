import React from 'react';

const List = ({people}) => {
  return (
    <>
      {/* <h2>list component</h2> */}
      <h2>{people.map((person) => {
        const { id, name, age, image} = person;
        return (

          <article key={id} className = "person">
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} year</p>
            </div>
          </article>
        )
      })}</h2>
    </>
  );
};

export default List;
