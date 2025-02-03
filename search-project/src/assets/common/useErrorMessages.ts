import { useState } from "react";

export enum ErrorType {
  INVALID_INPUT = "INVALID_INPUT",
  LOADING_ERROR = "LOADING_ERROR",
  DEFAULT_ERROR = "DEFAULT_ERROR",
  NO_RESULTS_FOUND = "NO_RESULTS_FOUND",
}

export const errorMessages = {
  INVALID_INPUT: "Geçersiz giriş, lütfen doğru bir terim girin.",
  NO_RESULTS_FOUND: "Hiçbir sonuç bulunamadı.",
  LOADING_ERROR: "Arama sırasında bir hata oluştu. Lütfen tekrar deneyin.",
  DEFAULT_ERROR: "Bir hata oluştu, lütfen tekrar deneyin..",
};

export const useErrorMessages = () => {
  const [error, setError] = useState<string | null>(null);

  const setErrorMessage = (errorType: ErrorType) => {
    switch (errorType) {
      case ErrorType.INVALID_INPUT:
        setError(errorMessages.INVALID_INPUT);
        break;
      case ErrorType.LOADING_ERROR:
        setError(errorMessages.LOADING_ERROR);
        break;
      case ErrorType.DEFAULT_ERROR:
        setError(errorMessages.DEFAULT_ERROR);
        break;
      case ErrorType.NO_RESULTS_FOUND:
        setError(errorMessages.NO_RESULTS_FOUND);
        break;
      default:
        setError(null);
    }
  };

  const clearErrorMessage = () => {
    setError(null);
  };

  return { error, setErrorMessage, clearErrorMessage };
};
