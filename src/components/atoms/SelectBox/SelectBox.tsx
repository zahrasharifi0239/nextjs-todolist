import classNames from "classnames";
import type { FC } from "react";

interface IProps {
  options: {
    value: string;
    text: string | JSX.Element;
    style?: React.CSSProperties;
  }[];
  defaultValue?: string | number;
  disabled?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}

export const SelectBox: FC<IProps> = ({
  className,
  options,
  disabled,
  onChange,
  defaultValue,
}) => {
  return (
    <select
      className={classNames("bg-transparent", className)}
      onChange={onChange}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} style={option.style}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
