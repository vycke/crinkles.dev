import React from 'react';
import { AppProvider } from './src/components/Context';
const wrapRootElement = ({ element }) => <AppProvider>{element}</AppProvider>;

export { wrapRootElement };
