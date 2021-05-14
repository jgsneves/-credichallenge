import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Wrapper = styled.main`
    max-width: 1086px;
    margin: 0 auto;
    padding-top: 56px;

    & > h1 {
        margin-bottom: 33px;
    }

    & > footer {
        & > select {
            margin-right: 12px;
        }
    }
`;

export const NoDataToRender = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        text-align: center;

        color: #000000;
    }

    & > p {
        text-align: center;
        width: 583px;
        margin-top: 21px;

        & > a {
            color: ${Colors.brandColor};
            font-weight: 600;
        }
    }
`;
