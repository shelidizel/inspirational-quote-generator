import styled from "styled-components";
import Link from "next/link";
import image from "next/image";

export const GradientBgCon = styled.div`
   background: linear-gradient(to right, #000046, #1CB5E0);
   background-size: 400%, 400%;
   animation: gradient 6s ease infinite;
   height: 100vh;
   width: 100vw;
   @keyframes gradient {
      0% {
         background-position: 0% 50%;
      }
      50% {
         background-position: 100% 50%;
      }
      100% {
         background-position: 0% 50%;
      }
      
   }
  
`;

export const BgImage1 = styled(image)`
position : relative;
z-index: 1;
margin-left: 50px;
margin-top: 10px;
  
`;
export const BgImage2 = styled(image)`
position : fixed;
z-index: 1;
right: 20px;
bottom:0px;
  
`;