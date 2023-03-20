var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

var FetchAPI = function FetchAPI() {
    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        data = _useState2[0],
        setData = _useState2[1];

    var apiGet = function apiGet() {

        var options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ff52e6ea90msh98675f4426d6153p185e62jsn7e1ccd3fb3f6',
                'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
            }
        };

        fetch('https://house-plants2.p.rapidapi.com/all', options).then(function (response) {
            return response.json();
        }).then(function (json) {
            // console.log(json)
            setData(json);
        });
        // .catch(err => console.error(err));
    };

    useEffect(function () {
        apiGet();
    }, []);

    //Categories, Disease, Img, Use, Latin name, Insects, Avaibility, Style, Bearing, Light tolered, Height at purchase, Light ideal, Width at purchase, id, Appeal, Perfume, Growth, Width potential, Common name (fr.), Pruning, Family, Height potential, Origin, Description, Temperature max, Blooming season, Url, Color of leaf, Watering, Color of blooms, Zone, Common name, Available sizes (Pot), Other names, Temperature min, Pot diameter (cm), Climat}). If you meant to render a collection of children, use an array instead.

    var categories = data.map(function (item) {
        return React.createElement(
            'li',
            null,
            item.Categories
        );
    });
    var uniqueCategories = [].concat(_toConsumableArray(new Set(categories)));
    console.log(uniqueCategories);

    // const Disease = data.map(item =>
    //     <li>{item.Categories}</li>)


    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: apiGet },
            'Get Data'
        ),
        React.createElement(
            'div',
            null,
            React.createElement('ul', null)
        )
    );
};

export default FetchAPI;