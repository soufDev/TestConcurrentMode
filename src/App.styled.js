import styled from 'styled-components';

export const StyledApp = styled.div`
  text-align: center;
`;

export const StyledAppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const StyledAppLogo = styled.img`
  height: 40vmin;
`;

export const StyledAppLink = styled.a`
  color: #09d3ac;
`;


export const Container = styled.div`
  background-color: ${({ theme }) => theme.dark};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};
  flex-direction: column;
`;

export const TabContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.green};
  height: 40vh;
  width: 70vh;
`;