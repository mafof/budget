/**
 * Домашняя страница
 */

import React, { FC } from 'react';
import { 
  AvailableBalance,
  FastExpense
} from '@components';

const HomePage: FC = () => {
  return (
    <>
      <AvailableBalance />
      <FastExpense />
    </>
  );
}

export default HomePage;