import React, { useState } from 'react';

const UniversitySearch = () => {
    const [searchCountry, setSearchCountry] = useState('');
    const [universities, setUniversities] = useState([]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://universities.hipolabs.com/search?country=${searchCountry}`);
            const data = await response.json();
            setUniversities(data);
        } catch (error) {
            console.error(error);
        }
    };

    return ( 
    <div class = "container" > 
    <form onSubmit = { handleSubmit } >
        <input type = "text"
       
        onChange = { handleInputChange }
        placeholder = "Enter a country name" />
        <button type = "submit" class="btn" > Search </button> </form >
        <ul style={{textdecoration:"number",color:"green"}}>
          {universities.map((university) => ( <li key = { university.name }>
                <h3> { university.name } </h3> <p>{ university.country} </p>
                <p> { university.domain } </p> </li >
            ))
        } 
        </ul> 
      
      </div>
    );
};

export default UniversitySearch;