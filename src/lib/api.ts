import GhostContentAPI from '@tryghost/content-api';
import { variables } from './variables';

export const api = new GhostContentAPI({
    url: variables.ghostUrl,
    key: variables.ghostKey,
    version: 'v5.2' as 'canary',
});