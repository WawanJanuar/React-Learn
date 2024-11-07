import React, { useState } from "react";

const App = () => {
    const kode = ['bnga', 'nisp'];
    const [nilai, setNilai] = useState([]);

    const handleArray = () => {
        if (kode.length) {
            setNilai(kode);
        } else {
            setNilai(['array kosong']);
        }
    };

    return (
        <>
            <button onClick={handleArray}>Tampilkan Kode</button>
            <ul>
                {nilai.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
