import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import publicIp from "public-ip";
import * as os from 'os'


async function main() {
    const ipV4 = await publicIp.v4();
    const hostname = window.location.href;
    const version = 2;
    const element = <h1>IP Address: {ipV4} <br/> hostname: {os.hostname()} <br/> version: {version} </h1>
    ReactDOM.render(element, document.getElementById('root'));
}

main().then(reportWebVitals);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
