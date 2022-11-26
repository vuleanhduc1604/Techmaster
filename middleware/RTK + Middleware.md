**I/ Redux Tookit Query**

- Redux Toolkit Query là một công cụ fetch data của Redux. RTK Query được thiết kế để đơn giản hóa việc chạy data trên một trình duyệt web, loại bỏ việc phải fetch data và viết logic bằng tay.
1. **API:**
- ‘createAPI()’: Cho phép người dùng define ‘endpoints’ để lấy data từ ‘baseQuery’ + ‘endpoint’
- ‘fetchBaseQuery()’: Đơn giản hóa fetch API, thường được dùng để đặt ‘baseQuery’
- ‘<ApiProvider />: Provider của API
1. **VD:**
```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({

  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),

  endpoints: (builder) => ({

    getAllProducts: builder.query({

      query: () => "products",

    }),

    getProduct: builder.query({

      query: (product) => `products/search?q=${product}`,

    }),

  }),

});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi;
```
**II/ Redux MiddleWares và Redux Thunk**

![](Aspose.Words.2265b54a-1911-4bc1-a1f2-3676b7cd7e25.001.png)

- Middlewares giải quyết các vấn đề server-side, cho phép chúng ta can thiệp vào giữa thời điểm dispatch một action và thời điểm action đến được reducer
- VD:
```js
import { createStore, combineReducers, applyMiddleware } from 'redux'

const todoApp = combineReducers(reducers)

const store = createStore(

  todoApp,

  // applyMiddleware() tells createStore() how to handle middleware

  applyMiddleware(logger, crashReporter)

)
```