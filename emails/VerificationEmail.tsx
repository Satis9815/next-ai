import React from 'react';

interface verificationEmailPropTypes {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: verificationEmailPropTypes) {
  return (
    <div>
      <h1>Hello {username}</h1>
      <p>Your OTP is:{otp}</p>
    </div>
  );
}
