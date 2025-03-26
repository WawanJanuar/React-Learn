import React from 'react';

function AppProps() {
    function Header({author}){
        return (
            <h1>Welcom, {author}</h1>
        )
    }
    function Tes({penulis}) {
        return(
            <h1>belajar {penulis ? penulis : "Saham"}</h1>
        )
    }

    function HomePage() {
        const data = ['NISP', 'BNGA', 'PANI']
        return(
            <div>
                <Header author="wawan" />
                <Header author="Pa Dhika" />
                <Tes penulis="React" />
                <Tes />

                <h4>
                    <ul>
                        {data.map((data => (
                            <li>{data}</li>
                        )))}
                    </ul>
                </h4>

            </div>
        )
    }
    return <HomePage />;
}

export default AppProps;