import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  background-color: ${({ theme }) => theme.backgroundPrimary};

  height: 70px;

  > div {
    display: flex;
    align-items: center;

    > a, h4 {
      color: white;
      
    }
   
     section > svg {
      color: white;
      margin-left: 10px;
      font-size: 1.5rem;
      cursor: pointer;
      transition: .3s all;

      &:hover{
        filter: brightness(.8);
        transform: rotate(90deg)
      }
    }
    .active{
      background: white ;
      color: ${({ theme }) => theme.backgroundPrimary};
    }
    > a {
      margin:0px 10px ;
      padding: 10px;
      border-radius: 20px;
      transition: .3s all;

      &:hover{
        filter: brightness(.8);
      }
    }
    > section {
      position: relative;
      
    }
    .ReactCollapse--collapse{
      position: absolute;
      background: white;
      right: 0;
      transition: .3s all;
      width: 200px;
      top: calc(100% + 10px); 
      border-radius: 3px;   
      box-shadow: 1px 1px 20px #9822ff7d;  
    }
    .ReactCollapse--content{
      display: flex ;

      a {
        width: 100% ;
        padding: 10px;
        color: ${({ theme }) => theme.title};
        transition: .3s all;

        &:hover{
          background: #fbeeff;
          cursor: pointer ;
        }

        display: flex ;
        align-items: center;
        svg {
          color: ${({ theme }) => theme.title};
          margin-right: 10px;
          font-size: 1.5rem;
          cursor: pointer;
          transition: .3s all;
        }
      }
      
    }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 20px;
`;
