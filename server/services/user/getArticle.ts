export const getArticle = async (): Promise<{
  data: any;
  message: string;
  error: any;
}> => {
  return { data: null, message: "Article served", error: "" };
};

export default getArticle;
    