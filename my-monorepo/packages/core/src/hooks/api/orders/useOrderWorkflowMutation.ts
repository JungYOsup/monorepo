import { WORKS_QUERY_KEY } from "@core/api/works/worksQuery";
import {
  OrderWorkflowService,
  OrderWorkflowServiceContract,
  OrderWorkflowCreateResponse,
} from "@core/hooks/services/orders/orderWorkflowService";
import {
  DefaultApiWorksPostRequest,
  DefaultApiWorksWorkIdGetRequest,
} from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

type MutationParams = {
  createRequest: DefaultApiWorksPostRequest;
  toDetailRequest: (
    response: OrderWorkflowCreateResponse
  ) => DefaultApiWorksWorkIdGetRequest;
};

type MutationResult = Awaited<
  ReturnType<OrderWorkflowServiceContract["createAndFetchDetail"]>
>;

type MutationOptions = Omit<
  UseMutationOptions<MutationResult, unknown, MutationParams, unknown>,
  "mutationFn" | "mutationKey"
>;

interface UseOrderWorkflowMutationArgs {
  service?: OrderWorkflowServiceContract;
  options?: MutationOptions;
}

export const useOrderWorkflowMutation = ({
  service = OrderWorkflowService,
  options,
}: UseOrderWorkflowMutationArgs = {}) => {
  return useMutation<MutationResult, unknown, MutationParams>({
    mutationKey: [WORKS_QUERY_KEY, "createAndFetchDetail"],
    mutationFn: (params) =>
      service.createAndFetchDetail({
        createRequest: params.createRequest,
        toDetailRequest: params.toDetailRequest,
      }),
    ...(options ?? {}),
  });
};
