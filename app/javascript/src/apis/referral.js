import axios from "axios";

const referralUrl = "/api/v1/referrals/";

const createReferral = payload => axios.post(referralUrl, payload);
const getReferrals = () => axios.get(referralUrl);

const referralApi = {
  create: createReferral,
  get: getReferrals,
};

export default referralApi;
