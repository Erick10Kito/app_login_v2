import { InputHTMLAttributes } from "react";

function InputApp(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="bg-gray-300 focus-visible:outline-none py-4 px-5 w-[400px]"
      {...props}
    />
  );
}

export { InputApp };
