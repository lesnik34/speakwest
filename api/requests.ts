import axios from "axios";
import { sendReviewsInfo } from "./graph";

export default {
  sendEmail: async (params: { tel: string; email: string; text: string }) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_HOST}/send-email`,
        params
      );
      return res;
    } catch (error) {
      return { status: "error", data: null };
    }
  },

  sendReview: async (params: {
    name: string;
    text: string;
    rating: string;
  }) => {
    try {
      const res = await sendReviewsInfo(params);
      return { status: "success", data: "success" };
    } catch (error) {
      return { status: "error", data: null };
    }
  },
};
