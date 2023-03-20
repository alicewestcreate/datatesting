import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';


const FetchAPI = () => {

    const [data, setData] = useState([]);

    const apiGet = () => {
    
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ff52e6ea90msh98675f4426d6153p185e62jsn7e1ccd3fb3f6',
                'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
            }
        };
        
        fetch('https://house-plants2.p.rapidapi.com/all', options)
            .then(response => response.json())
            .then((json) => {
                // console.log(json)
                setData(json)
            })
            // .catch(err => console.error(err));
    }

    useEffect(() => {
        apiGet()
    }, []); 


    //Categories, Disease, Img, Use, Latin name, Insects, Avaibility, Style, Bearing, Light tolered, Height at purchase, Light ideal, Width at purchase, id, Appeal, Perfume, Growth, Width potential, Common name (fr.), Pruning, Family, Height potential, Origin, Description, Temperature max, Blooming season, Url, Color of leaf, Watering, Color of blooms, Zone, Common name, Available sizes (Pot), Other names, Temperature min, Pot diameter (cm), Climat}). If you meant to render a collection of children, use an array instead.

    const properties = ["Categories", "Disease", "Img", "Use", "Latin name", "Insects", "Avaibility", "Style", "Bearing", "Light tolered", "Height at purchase", "id", "Appeal", "Perfume", "Growth", "Width potential", "Common name (fr.)", "Pruning", "Family", "Height potential", "Origin", "Description", "Temperature max", "Blooming season", "Url", "Color of leaf", "Watering", "Color of blooms", "Zone", "Common name", "Available sizes (Pot)", "Other names", "Temperature min", "Pot diameter (cm)",]

    let allValues = []

    for (let property of properties) {
        let values = data.map(item => item[property]) 
        let uniqueValues = [...new Set(values)];
        // console.log(uniqueValues);
        // console.log(property);
        let propertyValue = [property,[uniqueValues]]
        // console.log(propertyValue);
        allValues.push(property, uniqueValues)
        // allValues = {property : [uniqueValues]}

      }

      console.log(allValues);



    // const values = properties.map(property => {
    //     console.log(property);

    // })

    // const categories = data.map(item => item.Categories) 
    // console.log(categories);

    // let uniqueCategories = [...new Set(categories)];
    // console.log(uniqueCategories);


    // const disease = data.map(item => item.Disease) 
    // console.log(disease);

    // let uniqueDisease = [...new Set(disease)];
    // console.log(uniqueDisease);


    // const categories = data.map(item =>
    //     <li>{item.Categories}</li>)
    // let uniqueCategories  = [...new Set(categories)];
    // console.log(uniqueCategories);

    // const Disease = data.map(item =>
    //     <li>{item.Categories}</li>)
    



    return (
        <div>
            <button onClick={apiGet}>Get Data</button>   
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* {categories} */}
            {/* {allValues} */}

            <div>
                <ul>
                {/* {uniqueCategories} */}
                </ul>
                {/* <ul>
                {Disease}
                </ul> */}

            </div>
        </div>
    );
}

export default FetchAPI;
