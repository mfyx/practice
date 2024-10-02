import React, { Component } from'react';
import memesData from './memesData';

export default function Meme(props) {
    //const [memeImage, setMemeImage] = React.useState('http://zhenyutongxue.com/usr/uploads/2024/09/2712895295.jpg');
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://zhenyutongxue.com/usr/uploads/2024/09/2712895295.jpg'
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage(event) {
        event.preventDefault();

        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;

        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url 
        }));
    }

    return (
        <main>
            <form className="form">
                {/* <label htmlFor='top-text'>Top Text</label> */}
                <input 
                    id="top-text" 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text" 
                />
                
                {/* <label htmlFor='bottom-text'>Bottom Text</label> */}
                <input 
                    id="bottom-text" 
                    type="text" 
                    className='form--input' 
                    placeholder='Bottom text'
                />

                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>

            </form>
            {/* <p>{memeImage}</p> */}
            <img className="meme--image" src={meme.randomImage} alt="Meme" />
        </main>
    );
}

