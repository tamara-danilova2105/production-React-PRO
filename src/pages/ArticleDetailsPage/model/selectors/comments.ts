import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailesComments?.isLoading || false;
export const getArticleCommentsIsError = (state: StateSchema) => state.articleDetailesComments?.error;
