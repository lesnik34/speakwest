import axios from "axios";

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
};
