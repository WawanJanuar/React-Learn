// import React, { useState } from "react";
// import Lat from "./Lat";

// function AppState () {
//     const [like, setLike] = useState(0);

//     function Handleclikc () {
//         setLike(like + 1);
//     };

//     return(
//         <>
//         <button onClick={Handleclikc}>like {like}</button>
//         <br />
//         <Lat />
//         </>
//     )
// }

// export default AppState;

import React, { useState } from 'react';

function AppState() {
  // Inisialisasi daftar produk dengan nama dan harga
  const [produk, setProduk] = useState([
    { id: 1, nama: 'Laptop', harga: 'Rp 10.000.000' },
    { id: 2, nama: 'Smartphone', harga: 'Rp 5.000.000' },
    { id: 3, nama: 'Headphone', harga: 'Rp 1.500.000' }
  ]);

  // CSS-in-JS styling untuk setiap kartu produk
  const styleKartu = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '8px',
    textAlign: 'center',
    width: '200px',
    fontFamily: 'Arial, sans-serif'
  };

  const styleNamaProduk = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333'
  };

  const styleHargaProduk = {
    fontSize: '16px',
    color: '#888'
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {produk.map((item) => (
        <div key={item.id} style={styleKartu}>
          <div style={styleNamaProduk}>{item.nama}</div>
          <div style={styleHargaProduk}>{item.harga}</div>
        </div>
      ))}
    </div>
  );
}

export default AppState;

