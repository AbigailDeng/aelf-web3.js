import HttpProvider from "./httpProvider";
interface IRequestBody {
  requestMethod: string;
  method: Function;
  params: { [k: string]: any };
}
interface IPrepareResult {
  method: string;
  url: Function;
  params: { [k in string]: any };
}
declare class RequestManager {
  constructor(provider: HttpProvider);
  public static prepareRequest({
    requestMethod,
    method,
    params,
  }: IRequestBody): IPrepareResult;
  public setProvider(provider: HttpProvider): void;
  public send(requestBody: IRequestBody): Response;
  public sendAsync(requestBody: IRequestBody): Promise<any>;
}