import { useState } from "react";
let nextId = 0;
function UpdateArrayusingstate() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

    return(
        <>
        <div className="parent-div">
            <h1>Update and Delete items in Array using state</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter here"
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          {id: nextId++,
          name: name,
        }]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      
      </ul>
      </div>
        </>
    )
}

export default UpdateArrayusingstate;