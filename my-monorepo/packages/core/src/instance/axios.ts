import {
  Configuration,
  DefaultApi,
  MasterApi,
  ProductionActionApi,
  ProductionTimeTrackingActionApi,
  ScmApi,
  SpcApi,
  UserApi,
} from "@sizlcorp/sizl-api-document/dist/models";
import axios from "axios";

export const BASE_URL = "https://main-mes3-api.sizl.co.kr";

export const axiosInstance: any = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("authToken"),
  },
  timeout: 1000 * 60 * 60 * 24 * 7,
});

axiosInstance.interceptors.request.use((req: any) => {
  const token = localStorage.getItem("authToken");
  req.headers["Authorization"] = "Bearer " + token;
  return req;
});

const defaultAxios = (url: string) => {
  return new DefaultApi(
    {
      apiKey: localStorage.getItem("authToken"),
    } as Configuration,
    url,
    axiosInstance
  );
};

const masterAxios = (url: string) => {
  return new MasterApi(
    {
      apiKey: localStorage.getItem("authToken"),
    } as Configuration,
    url,
    axiosInstance
  );
};

const userAxios = (url: string) => {
  return new UserApi(
    {
      apiKey: localStorage.getItem("authToken"),
    } as Configuration,
    url,
    axiosInstance
  );
};

const productionAxios = (url: string) => {
  return new ProductionActionApi(
    {
      apiKey: localStorage.getItem("authToken"),
    } as Configuration,
    url,
    axiosInstance
  );
};

const spcAxios = (url: string) => {
  return new SpcApi(
    {
      apiKey: localStorage.getItem("authToken"),
    } as Configuration,
    url,
    axiosInstance
  );
};

const trackingAxios = (url: string) => {
  return new ProductionTimeTrackingActionApi(
    {
      apiKey: localStorage.getItem("authToken"),
    } as Configuration,
    url,
    axiosInstance
  );
};

const scmAxios = (url: string) => {
  return new ScmApi(
    {
      apiKey: localStorage.getItem("authToken"),
    } as Configuration,
    url,
    axiosInstance
  );
};

export const ProductionInstance = productionAxios(BASE_URL);
export const UserInstance = userAxios(BASE_URL);
export const DefaultInstance = defaultAxios(BASE_URL);
export const MasterInstance = masterAxios(BASE_URL);
export const SpcInstance = spcAxios(BASE_URL);
export const TrackingInstance = trackingAxios(BASE_URL);
export const ScmInstance = scmAxios(BASE_URL);

export default DefaultInstance;
