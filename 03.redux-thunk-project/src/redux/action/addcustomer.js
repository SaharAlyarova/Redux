import axios from "axios";

// export const POSTAddCustomersAction = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: "POST_CUSTOMER_START",
//     });
 
//     try {
//       let response = await axios.get(
//         "https://northwind.vercel.app/api/customers"
//       );
//       dispatch({
//         type: "POST_CUSTOMER_SUCCESS",
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: "POST_CUSTOMER_FAILED",
//         payload: error,
//       });
//     }
//   };
// };
export const POSTAddCustomersAction = (values) => {
    return async (dispatch) => {
      await axios.post("https://northwind.vercel.app/api/customers", values);
      dispatch({
        type: "POST_CUSTOMER",
      });
    };
  };