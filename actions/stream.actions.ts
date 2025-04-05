'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

const apikey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error('User is not authenticated');
  if (!apikey) throw new Error('Stream API key secret is missing');
  if (!apiSecret) throw new Error('Stream API secret is missing');

  const client = new StreamClient(apikey, apiSecret);
  const vailidity = 60 * 60;
  const issued=Math.floor(Date.now()/1000)-60;
  const token= client.generateUserToken({ user_id: user.id, validity_in_seconds: vailidity,issued});
  return token;
};

