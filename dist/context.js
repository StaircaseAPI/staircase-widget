import React from 'react';
import { Api } from './api';
export var Context = React.createContext({ api: new Api() });
