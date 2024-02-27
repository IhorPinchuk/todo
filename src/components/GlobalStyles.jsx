import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
        :root {
            --primary-bg-color: rgb(76, 78, 81);
            --primary-text-color: rgba(18, 197, 101, 0.8);
            --secondary-text-color: rgba(18, 20, 23, 1);
            --accent-text-color: rgba(52, 112, 255, 1);
            --btn-text-color: rgba(255, 255, 255, 1);
            --btn-bg-color: rgba(52, 112, 255, 1);
            --btn-hover-bg-color: rgba(11, 68, 205, 1);
            --input-bg-color: #292986;  
            --border-input-hover-color: #0e20c7e8;          
            --scrollbar-thumb-bg-color: rgb(6, 57, 133);
            --scrollbar-track-bg-color: transparent;            
        }

        body {
            margin: 0;
            font-family: 'Manrope', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale; 
            background-color: var(--primary-bg-color);
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
               width: 8px;  
            }

            &::-webkit-scrollbar-thumb {
              background-color: var(--scrollbar-thumb-bg-color);
              border-radius: 4px;   
            }

            &::-webkit-scrollbar-track {
              background-color: var(--scrollbar-track-bg-color);
              border-radius: 4px;  
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }
          ul,
          ol {
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 0;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
          }`;

export default GlobalStyles;
