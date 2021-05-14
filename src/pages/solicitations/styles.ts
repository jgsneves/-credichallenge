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

export const FinalStage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    & > main {
        height: 400px;
        padding: 24px;
        width: 526px;
        border-radius: 8px;
        background-color: #FFFFFF;
        margin: auto;

        & > h3 {
            padding-bottom: 16px;
            font-size: 16px;
        }

        & > p {
            font-size: 13px;
        }

        & > ol {
            height: 200px;
            overflow-y: scroll;
        }

        & > ol > li {
            display: flex;
            justify-content: space-between;
            width: 100%;

            & > p {
                font-size: 13px;
            }
        }

        & > button + button {
            margin-left: 16px;
        }
    }
`;
