import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/core";
import { useState, FormEvent, ReactElement } from "react";
import useStore from "@/src/store";
import * as firebase from "firebase/app";

enum ToastStatusEnum {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

function EmailInput(): ReactElement {
  const toast = useToast();
  const firestore = useStore((state) => state.firestore);

  const [emailValue, setEmailValue] = useState("");
  const [hasValidEmail, setHasValidEmail] = useState(false);
  const [hasBadSubmission, setHasBadSubmission] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: FormEvent) => {
    const inputElement = event.target as HTMLInputElement;
    const trimmedEmail = inputElement.value.trim();
    const valid = isValidEmail(trimmedEmail);

    setEmailValue(trimmedEmail);
    setHasValidEmail(valid);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = new RegExp(
      "^[\\w.\\-]{1,100}@[\\w.\\-]{1,100}\\.[A-Za-z]{2,4}$"
    );

    return emailRegex.test(email) && email.length < 100;
  };

  const handleSubmitClick = async () => {
    if (hasValidEmail) {
      setIsLoading(true);
      setIsDisabled(true);

      try {
        await submitToDatabase(emailValue);
        setIsSubmitted(true);
        showToast(
          ToastStatusEnum.SUCCESS,
          "Success!",
          "We've added your email to our list."
        );
      } catch (error) {
        setHasBadSubmission(true);
        setIsDisabled(false);

        showToast(
          ToastStatusEnum.ERROR,
          "Error",
          "Email has already been registered."
        );
      }
    } else {
      setHasBadSubmission(true);
      showToast(
        ToastStatusEnum.ERROR,
        "Error",
        "Please enter a valid email address."
      );
    }

    setIsLoading(false);
  };

  const submitToDatabase = (email: string) => {
    return firestore
      .collection("emails")
      .doc(email)
      .set({ createdAt: firebase.firestore.FieldValue.serverTimestamp() });
  };

  const showToast = (
    status: ToastStatusEnum,
    title: string,
    description: string
  ) => {
    toast({
      position: "top",
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <InputGroup width={["100%", "3.5in", "3in", "3.5in"]} height="45px">
        <Input
          type="email"
          paddingRight="72px"
          placeholder="Your Email"
          rounded="100px"
          height="100%"
          fontFamily="Inter"
          fontSize="14px"
          borderColor="brand.background_on"
          _hover={{}}
          _focus={{}}
          isDisabled={isDisabled}
          value={emailValue}
          onChange={handleInputChange}
          isInvalid={hasBadSubmission && !hasValidEmail && emailValue !== ""}
        />
        <InputRightElement
          width="32px"
          height="100%"
          justifyContent="flex-end"
          marginRight="10px"
        >
          <IconButton
            aria-label="Submit an email address to join email listing"
            icon={isSubmitted ? "check" : "arrow-forward"}
            isRound={true}
            backgroundColor="brand.background_on"
            color="white"
            fontSize={isDisabled ? "16px" : "20px"}
            size="sm"
            _hover={
              isDisabled
                ? undefined
                : {
                    backgroundColor: "brand.primary_variant",
                  }
            }
            _active={{}}
            onClick={handleSubmitClick}
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
        </InputRightElement>
      </InputGroup>
    </>
  );
}

export default EmailInput;
