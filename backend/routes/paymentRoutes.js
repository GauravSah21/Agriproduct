import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth, isAdmin } from '../utils.js';
import axios from 'axios';

const paymentRouter = express.Router();

paymentRouter.post(
  '/khalti-payment',
  //   isAuth,
  expressAsyncHandler(async (req, res) => {
    const payload = req.body;
    const khaltiResponse = await axios.post(
      'https://a.khalti.com/api/v2/epayment/initiate/',
      payload,
      {
        headers: {
          Authorization: `Key ${process.env.REACT_APP_KHALTI_SECRET_KEY}`,
        },
      }
    );

    if (khaltiResponse) {
      res.send({
        success: true,
        data: khaltiResponse?.data,
      });
    }
  })
);

export default paymentRouter;
