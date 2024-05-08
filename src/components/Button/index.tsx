import { Stack, PrimaryButton, DefaultButton } from "@fluentui/react";
import React from "react";

export function Button() {
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Stack.Item>
        <PrimaryButton text="Primary"></PrimaryButton>
      </Stack.Item>
      <Stack.Item>
        <DefaultButton text="Standard"></DefaultButton>
      </Stack.Item>
    </Stack>
  );
}

export default Button;
