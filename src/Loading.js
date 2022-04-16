import React, { useEffect, useRef } from 'react';
import { Html, useProgress } from '@react-three/drei';
import styled from 'styled-components';

const Center = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
`;

function Loading() {
  const { progress } = useProgress();
  const html = useRef();
  const percentage = Math.floor(progress);

  useEffect(() => {
    if (html.current) {
      html.current.parentNode.style.zIndex = 999;
    }
  }, []);

  return (
    <Html
      ref={html}
      className="loader"
    >
      <Center>
        {`Loading ${percentage}`}
      </Center>
    </Html>
  );
}

export default Loading;
