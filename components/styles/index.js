import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHomepage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export const StyledMenuItem = styled(motion.div)`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .background-image {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    &:hover {
      transform: scale(1.5);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #ffffff;
    opacity: 0.7;
    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;

export const StyledDirectoryMenu = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
