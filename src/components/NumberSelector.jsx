import styled from "styled-components";

const NumberSelector = ({error,setError,  selectedNumber, setSelectedNumber }) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (arr) => {
    setSelectedNumber(arr);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {array.map((arr) => (
          <Box
            isSelected={arr === selectedNumber}
            key={arr}
            onClick={() => numberSelectorHandler(arr)}
          >
            {arr}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 20px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;

  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${({isSelected}) => (isSelected ? "black" : "white")};
  color: ${({isSelected}) => (!isSelected ? "black" : "white")};
`;
