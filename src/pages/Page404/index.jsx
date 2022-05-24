import React from 'react';
import { ErrorMessage } from '../../components/ErrorMessage';

export const Page404 = () => {
  return <ErrorMessage message="404" information="the page you were looking for does not exist" />;
};
