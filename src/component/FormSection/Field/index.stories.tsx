import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Field from "./index";
import Input from "../../Input";
import Select from "../../Select";
import Text from "../../Text";

import { useState } from "react";

const meta = {
  title: "Common/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          width: "500px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Omit<Story, "args"> = {
  render: () => {
    return (
      <Field ariaLabelledby="name-group">
        <Field.Title id="name-group">이름</Field.Title>
        <Field.ElementsBox>
          <Field.Label label="name">
            <Input name="name" />
          </Field.Label>
        </Field.ElementsBox>
      </Field>
    );
  },
};

export const DoubleItem = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Field ariaLabelledby="email-group">
        <Field.Title id="email-group">이메일</Field.Title>
        <Field.ElementsBox>
          <Field.Label label="email-id" style={{ maxWidth: "100px" }}>
            <Input />
          </Field.Label>
          <Text>@</Text>
          <Field.Label label="email-domain">
            <Select value={value} onChangeValue={setValue}>
              <Select.Option value="option1">gmail.com</Select.Option>
              <Select.Option value="option2">naver.com</Select.Option>
            </Select>
          </Field.Label>
        </Field.ElementsBox>
      </Field>
    );
  },
};

export const WithDescription = {
  render: () => {
    return (
      <Field ariaLabelledby="password-group">
        <Field.Title id="password-group">비밀번호</Field.Title>
        <Field.ElementsBox>
          <Field.Label label="password">
            <Input />
          </Field.Label>
        </Field.ElementsBox>
        <Field.Description>
          비밀번호는 숫자와 조합해서 입력해주세요.
        </Field.Description>
      </Field>
    );
  },
};

export const WithError = {
  render: () => {
    const [errorMessage, setErrorMessage] = useState("숫자를 포함해주세요.");

    return (
      <Field ariaLabelledby="password-group">
        <Field.Title id="password-group">비밀번호</Field.Title>
        <Field.ElementsBox>
          <Field.Label label="password">
            <Input isError={errorMessage} />
          </Field.Label>
        </Field.ElementsBox>
        <Field.Description>
          비밀번호는 숫자와 조합해서 입력해주세요.
        </Field.Description>
        <Field.Message>{errorMessage}</Field.Message>
      </Field>
    );
  },
};
