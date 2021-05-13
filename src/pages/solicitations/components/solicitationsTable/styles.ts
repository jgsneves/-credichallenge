import styled from 'styled-components';
import { Colors } from '../../../../styles/colors';

export const Wrapper = styled.section`
    width: 1087px;
    height: 528px;
    border-radius: 8px;
    border: 1px solid ${Colors.gray1};
    margin: 0 auto;

    & > table {
        background-color: ${Colors.secondary};
        width: 100%;
    }
`;
