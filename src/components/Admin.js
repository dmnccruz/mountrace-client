import React, {useEffect} from 'react';
import Logo from "../img/logo_1.png";
import { FETCH_SCREENS_QUERY } from '../util/graphql';
import { useQuery } from '@apollo/react-hooks';

function Admin(props) {

    var responses = 0;
    var pui = 0;
    var pum = 0;
    var normal = 0;
    var i;

    for(i=0; i < localStorage.length; i++){
        if(localStorage.getItem(localStorage.key([i])).includes("adminAddress")) {
            if(localStorage.getItem(localStorage.key([i])).split("&")[7] === "pui") {
                pui += 1
                responses += 1
            }
            else if(localStorage.getItem(localStorage.key([i])).split("&")[7] === "pum") {
                pum += 1
                responses += 1
            }
            else {
                normal += 1
                responses += 1
            }
    
        }     
    }

    const {
        // loading,
        data: { getScreens: screens } = {}
    } = useQuery(FETCH_SCREENS_QUERY);

    if(screens) {
        // console.log(screens[1])
        for (i = 0; i < screens.length; i++) {
            localStorage.setItem((screens[i].address).split("&")[1], "adminAddress&" + screens[i].firstName + " " + screens[i].lastName + "&" + screens[i].address + "&" + screens[i].temp + "&" + screens[i].travel + "&" + screens[i].symptoms)
        }
    }

    useEffect(() => {
        function loadJs(url) {
            var script = document.createElement('script');
            script.src = url;
            script.setAttribute('async', 'true');
            document.documentElement.firstChild.appendChild(script);
        }
    
        const gUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCFaVtDi-0kmQMpxWThH-8HA_PU2jwUm8M&libraries=places&callback=initMap2"
        
        
        setTimeout(function() {
            loadJs(gUrl)
        }, 2500)
    }, []);

    return (
        <>
        <div className="statsContainer">
            <div className="statsContainer2">
                <p>Number of Responses: {responses}</p>
                <p>Healthy: {normal}</p>
                <p>Persons Under Monitoring: {pum}</p>
                <p>Persons Under Investigation: {pui}</p>
            </div>
        </div>
        <div className="logologo2">
            <img alt="" src={Logo} className="logo-resize"/>
        </div>
        <div id="adminMap">
            <p>Loading Admin Map...</p>
        </div>
        </>

    );
}


export default Admin;

