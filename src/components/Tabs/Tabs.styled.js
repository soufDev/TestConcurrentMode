import styled from 'styled-components';

export const TabButton = styled.button`
    color: ${({ theme, isSelected }) => isSelected ? theme.dark: theme.white};
    font-size: 16px;
    font-weight: 800;
    background-color: ${({ theme, isSelected }) => isSelected ? theme.green : theme.dark};
    border: none;
    outline: none;
    border-top: 2px solid ${({ theme, isSelected }) => isSelected ? theme.green : theme.tabColor};
    border-right: 2px solid ${({ theme, isSelected }) => isSelected ? theme.green : theme.tabColor};
    border-left: 2px solid ${({ theme, isSelected }) => isSelected ? theme.green : theme.tabColor};
    padding: 12px;
    border-radius: 2px 2px 0 0;
    margin-right: 5px;
    &:hover {
        border-top: 2px solid ${({ theme, isSelected }) => isSelected ? theme.tabColor: theme.green};
        border-right: 2px solid ${({ theme, isSelected }) => isSelected ? theme.tabColor: theme.green};
        border-left: 2px solid ${({ theme, isSelected }) => isSelected ? theme.tabColor: theme.green};
    }
    cursor: pointer;
`;

export const TabsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 70vh;
`;
