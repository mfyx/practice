import React, { Component } from'react';
//import memesData from './memesData';

export default function Meme(props) {
    //const [memeImage, setMemeImage] = React.useState('http://zhenyutongxue.com/usr/uploads/2024/09/2712895295.jpg');
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://zhenyutongxue.com/usr/uploads/2024/09/2712895295.jpg'
    });

    const [allMemes, setAllMeme] = React.useState([]);

    React.useEffect(() => {
        // fetch('https://api.imgflip.com/get_memes')
        //    .then(response => response.json())
        //    .then(data => setAllMeme(data.data.memes))

        // the version of use async function
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            setAllMeme(data.data.memes);
        }

        getMemes();

        return () => {
            // cleanup
        };
    }, []);

    function getMemeImage(event) {
        event.preventDefault();

        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomIndex].url;

        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url 
        }));
    }

    function handleChange(event) {
        event.preventDefault();
        const {name, value} = event.target;

        setMeme(prevMeme => ({
            ...prevMeme, 
             [name]: value 
        }));
    }

    return (
        <main>
            <div className="form">
                {/* <label htmlFor='top-text'>Top Text</label> */}
                <input 
                    id="top-text" 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text" 
                    name="topText" 
                    value={meme.topText} 
                    onChange={handleChange}
                />
                
                {/* <label htmlFor='bottom-text'>Bottom Text</label> */}
                <input 
                    id="bottom-text" 
                    type="text" 
                    className='form--input' 
                    placeholder='Bottom text'
                    name="bottomText" 
                    value={meme.bottomText} 
                    onChange={handleChange}
                />

                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>

            </div>

            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

