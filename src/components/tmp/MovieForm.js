import React, { useState } from "react";
import InputField from "./InputField";

const MovieForm = ({ addMovie }) => {
    const [movieTile, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleErr, setTitleErr] = useState('');
    const [yearErrr, setYearErr] = useState('');

    const vlaidateForm = () => {
        resetError();
        let vlaidated = true;

        if (!movieTile) {
            setTitleErr('영화제목을 입력하세요');
            vlaidated = false;
        }
        if (!movieYear) {
            setYearErr("개봉연도를 입력하세요");
            vlaidated = false;
        }

        return vlaidated;
    }
    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    }
    const resetError = () => {
        setTitleErr('');
        setYearErr('');
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (vlaidateForm()) {
            addMovie({
                id: Date.now(),
                title: movieTile,
                year: movieYear

            })
            resetForm();
            resetError();
        }
    };
    return (
        <form onSubmit={onSubmit} >
            <InputField 
                type="text"
                value={movieTile}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
                errorMessage={titleErr}
             />
             <InputField 
                 type="number"
                 value={movieYear}
                 placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
                errorMessage={yearErrr}
            />
            {/* <input
                type="text"
                value={movieTile}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
            />
            <br />
            <div style={{ color: 'red' }}>{titleErr}</div> */}
            {/* // <input
            //     type="number"
                 value={movieYear}
                 placeholder="개봉년도"
                 onChange={e => setMovieYear(e.target.value)}
             />
             <br />
             <div style={{ color: 'red' }}>{yearErrr}</div> */}
            <button type="submit">영화추가</button>
        </form>
    )

}

export default MovieForm;
