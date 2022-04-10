import React, { useState } from "react";
import styled from "styled-components";

const BorderContainer = styled.div`
  border: 2px solid ${(props) => (props.focus ? props.borderColor : "grey")};
  padding: 1rem;
`;

const Input = ({
  children,
  borderClass,
  borderStyle,
  borderColor,
  ...props
}) => {
  const [state, setState] = useState({ isFocus: false });
  const setFocus = () => {
    setState({ ...state, isFocus: !state.isFocus });
  };
  return (
    <BorderContainer
      className={borderClass}
      style={borderStyle}
      borderColor={borderColor}
      focus={state.isFocus}
    >
      <input
        {...props}
        style={{ width: "100%", ...props.style }}
        onFocus={setFocus}
        onBlur={setFocus}
      />
    </BorderContainer>
  );
};

export default Input;
