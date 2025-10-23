import { DefaultInstance } from "@core/instance/axios";
import {
  DefaultApiWorksPostRequest,
  DefaultApiWorksWorkIdGetRequest,
} from "@sizlcorp/sizl-api-document/dist/models";

type WorksClient = Pick<
  typeof DefaultInstance,
  "worksPost" | "worksWorkIdGet"
>;

export type OrderWorkflowCreateResponse = Awaited<
  ReturnType<WorksClient["worksPost"]>
>;
export type OrderWorkflowDetailResponse = Awaited<
  ReturnType<WorksClient["worksWorkIdGet"]>
>;

export interface OrderWorkflowServiceContract {
  createAndFetchDetail: (args: {
    createRequest: DefaultApiWorksPostRequest;
    toDetailRequest: (
      createResponse: OrderWorkflowCreateResponse
    ) => DefaultApiWorksWorkIdGetRequest;
  }) => Promise<{
    created: OrderWorkflowCreateResponse;
    detail: OrderWorkflowDetailResponse;
  }>;
}

export const createOrderWorkflowService = (
  client: WorksClient = DefaultInstance
): OrderWorkflowServiceContract => ({
  async createAndFetchDetail({ createRequest, toDetailRequest }) {
    const created = await client.worksPost(createRequest);
    const detailRequest = toDetailRequest(created);
    const detail = await client.worksWorkIdGet(detailRequest);

    return { created, detail };
  },
});

export const OrderWorkflowService = createOrderWorkflowService();
