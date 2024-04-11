import logo from './logo.svg';
import './App.css';
import {GetNowYear} from './getNowYear';
import {createElement} from 'react';

function App() {

    return createElement(
        'div',
        {className: 'App'},
        'Hello ',
        createElement(
            'header',
            {className: 'App-header'},
            createElement(
                'img',
                {className: "App-logo", src: logo, alt: 'logo'}
            ),
            createElement(
                'p',
                null,
                'Edit ',
                createElement(
                    'code',
                    null,
                    'src/App.js',
                ),
                ' and save to reload.'
            ),
            createElement(
                'a',
                {
                    className: "App-link",
                    href: "https://reactjs.org",
                    target: "_blank",
                    rel: "noopener noreferrer"
                },
                'Learn React1'),
            createElement(GetNowYear,null)
        )

    );
}

export default App;
