import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const ButtonWrapper = styled.button<{theme: "primary" | "secondary"}>`
    cursor: pointer;
    height: 40px;
    border-radius: 2px;
    border: 0;
    padding: 12px 20px;
    background-color: ${props => props.theme === "primary" ? `${Colors.buttonColors.primary}` : `${Colors.buttonColors.secondary}`};

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
`;
