import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Wrapper = styled.header`
    background-color: ${Colors.brandColor};
    height: 64px;

    & > main {
        height: 64px;
        display: flex;
        align-items: center;
        max-width: 1440px;
        margin: 0 auto;

        & > nav {
            display: flex;
            align-items: center;
            padding-right: 41px;
            flex: 1;
            justify-content: flex-end;

            & > h2 {
                cursor: pointer;
            }
        }

        & > aside {
            display: flex;
            align-items: center;

            & > h2 {
                font-weight: normal;
            }

        }
    }

    & > main > nav > h2 + h2 {
        margin-left: 44px;
    }
`;

export const AvatarImage = styled.div`
    border-radius: 50%;
    padding: 8px;
    width: 36px;
    height: 36px;
    background-color: #80C8CF;
    margin-right: 18px;

    & > h2 {
        line-height: 19,5px;
    }
`;
