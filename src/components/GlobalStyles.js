import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
  
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        color:#333;

    }
    
    .fade-in-section {
        opacity: 0;
        transform: translateY(5vh);
        visibility: hidden;
        transition: 1000ms ease-out;
        will-change: opacity, transform, visibility;
    }
    .fade-in-section.is-visible {
        opacity: 1;
        transform: none;
        visibility: visible;
    }
`;

export default globalStyles;
