export class API {
    private static baseURL = 'https://localhost:44389';
    public static imagesBaseURL = '/api/images';

    public static test = '123';
    public static test2 = 'hello' + API.test;
    public static test3 = `hello${API.test2}`;

    // Endpoints
    public static imagesGetAll = `${API.baseURL}${API.imagesBaseURL}/`;
    public static imagesCreate = `${API.baseURL}${API.imagesBaseURL}/`;
    public static imagesGet = (name: string) =>
      `${API.baseURL}${API.imagesBaseURL}/${name}`;
    public static imagesUpdate = (nameOfImageToUpdate: string) =>
      `${API.baseURL}${API.imagesBaseURL}/${nameOfImageToUpdate}`;
    public static imagesDelete = (nameOfImageToDelete: string) =>
      `${API.baseURL}${API.imagesBaseURL}/${nameOfImageToDelete}`;
  }