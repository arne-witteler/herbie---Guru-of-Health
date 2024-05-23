import styled from "styled-components";

export const SearchSectionAndRecipeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 10px;
  gap: 10px;
`;

export const SearchBoxAndSelectionWrapper = styled.div`
display: flex; flex-direction: column; gap: 1rem;`;



export const SearchBox = styled.div`
display: flex;
align-items: center;;
border-radius: var(--small-box-border-radius);
  /* position: relative; */
`;

export const StyledFilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: var(--small-box-border-radius);
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #8fc379;
  }
  &::placeholder {
    color: #999;
    font-size: 12px;
  }
  &::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    background-size: cover;
    pointer-events: none;
  }
`;


export const StyledSuggestionsList = styled.div`
  background-color: white;
  border-radius: var(--small-box-border-radius);
  position: absolute;
  top: 38px;
  right: 2px;
  width: 80%;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
`;

export const StyledTextSuggestion = styled.p`
  color: var(--font-color);
  font-size: medium;
  display: block;
`;

export const Selection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledSelectedSuggestion = styled.div`
  background-color: var( --symptom-color);
  font-size: small;
  padding: 5px;
  border-radius: var(--small-box-border-radius);
  display: block;
`;

export const StyledCross = styled.button`
background-color: var( --symptom-color);
  cursor: pointer;
  border: none;
`;

export const ResetButton = styled.button`
  max-width: 60px;
  border: none;
  background-color: var( --secondary-button-color);
  color: white;
  border-radius: var(--small-box-border-radius);
  padding: 5px 10px;
`;