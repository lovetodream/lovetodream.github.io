import { variables } from '$lib/variables';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
    const response = await fetch(`${variables.cmsUrl}/api/projects?populate=*&sort[0]=id:desc`, { headers: { 'Authorization': `Bearer ${variables.cmsApiKey}` } });
    const data = await response.json();
    return { projects: data.data };
}