import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ElementType, FormHTMLAttributes, ReactNode, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Field from "./Field";
import Input from "../Input";
import Select from "../Select";
import Text from "../Text";
import Checkbox from "../Checkbox";
import Button from "../Button";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, ...restProps }: FormProps) => {
  return (
    <form
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
      {...restProps}
    >
      {children}
    </form>
  );
};

const meta = {
  title: "Common/FormSection",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type FormValues = {
  name: string;
  emailLocal: string;
  emailDomain: string;
  password: string;
  terms: boolean;
};

export const Primary = {
  render: () => {
    const { register, control, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        name: "",
        emailLocal: "",
        emailDomain: "",
        password: "",
        terms: false,
      },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log(data);
    };

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field ariaLabelledby="name-group">
          <Field.Title id="name-group">이름</Field.Title>
          <Field.ElementsBox>
            <Field.Label>
              <Input {...register("name")} />
            </Field.Label>
          </Field.ElementsBox>
        </Field>

        <Field ariaLabelledby="email-group">
          <Field.Title id="email-group">이메일</Field.Title>
          <Field.ElementsBox>
            <Field.Label style={{ maxWidth: "100px" }}>
              <Input {...register("emailLocal")} />
              <span className="visually-hidden">이메일 아이디 입력</span>
            </Field.Label>
            <Text>@</Text>
            <Field.Label>
              <Select {...register("emailDomain")}>
                <Select.Option value="option1">gmail.com</Select.Option>
                <Select.Option value="option2">naver.com</Select.Option>
              </Select>
              <span className="visually-hidden">이메일 도메인 선택</span>
            </Field.Label>
          </Field.ElementsBox>
        </Field>

        <Field ariaLabelledby="password-group">
          <Field.Title id="password-group">비밀번호</Field.Title>
          <Field.ElementsBox>
            <Field.Label>
              <Input {...register("password")} type="password" />
              <span className="visually-hidden">비밀번호 입력</span>
            </Field.Label>
          </Field.ElementsBox>
          <Field.Description>
            비밀번호는 숫자와 조합해서 입력해주세요.
          </Field.Description>
        </Field>

        {/* 체크박스는 register의 속성으로는 제어가 어려워 Controller를 활용한다. */}
        <Field ariaLabelledby="terms-group">
          <Field.Title id="terms-group">설문 문항</Field.Title>
          <Field.ElementsBox>
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  value="agreed"
                >
                  약관 동의
                </Checkbox>
              )}
            />
          </Field.ElementsBox>
        </Field>

        <Button type="submit">제출</Button>
      </Form>
    );
  },
};
