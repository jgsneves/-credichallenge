import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        max-width: 100vw;
    }

    body, h1, h2, h3, p, button {
        font-family: Montserrat;
        font-style: normal;
    }

    h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
    }

    h2 {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }

    h3 {
        font-weight: bold;
        font-size: 13px;
        line-height: 16px;
    }

    p {
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #8F8F8F;
    }
`;
