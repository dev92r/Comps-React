import { PrimaryButton, Stack, StackItem } from "@fluentui/react";
import React, { useReducer } from "react";

type State = {
  counter: number;
  inputValue: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "setInputValue"; payload: number }
  | { type: "addValueToCounter" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "setInputValue":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "addValueToCounter":
      return {
        ...state,
        counter: state.inputValue + state.counter,
      };
    default:
      return state;
  }
};

function CounterPage() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    inputValue: 0,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setInputValue", payload: Number(event.target.value) });
  };

  // This is how we handle in using useState

  // const [counter, setCounter] = useState<number>(0);
  // const [inputValue, setInputValue] = useState<number>(0);

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  // const increament = () => {
  //   setCounter(counter + 1);
  // };
  // const decrement = () => {
  //   setCounter(counter - 1);
  // };
  // const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value)
  // };
  // const addValueToCounter = () => {
  //   setCounter(counter + inputValue);
  //   setInputValue(0);
  // };

  return (
    <Stack tokens={{ padding: 10, childrenGap: 10 }}>
      <StackItem>{state.counter}</StackItem>
      <StackItem>
        <PrimaryButton onClick={() => dispatch({ type: "increment" })}>
          Increment
        </PrimaryButton>
      </StackItem>
      <StackItem>
        <PrimaryButton onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </PrimaryButton>
      </StackItem>
      <Stack.Item>
        <input
          type="number"
          value={state.inputValue || ""}
          onChange={handleOnChange}
        />
        <PrimaryButton onClick={() => dispatch({ type: "addValueToCounter" })}>
          Add
        </PrimaryButton>
      </Stack.Item>
    </Stack>
  );
}

export default CounterPage;
