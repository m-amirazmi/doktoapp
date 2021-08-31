import { useRouter } from "next/router";
import { useState } from "react";
import { apis } from "../../utils/endpoints";

export default function useAuthInputSubmit() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [input, setInput] = useState({});

  const { push } = useRouter();

  const handleInput = ({ currentTarget }) => {
    setInput({ ...input, [currentTarget.id]: currentTarget.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginForm) {
      const { data: user } = await apis.login(input);
      push("/");
    }
  };
  return { isLoginForm, setIsLoginForm, input, handleInput, handleSubmit };
}
