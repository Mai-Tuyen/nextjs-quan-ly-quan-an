import authAPIRequest from "@/app/apiRequest/auth";
import { LoginResType } from "@/schemaValidations/auth.schema";
import { useMutation } from "@tanstack/react-query";
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authAPIRequest.cLogin,
  });
};
