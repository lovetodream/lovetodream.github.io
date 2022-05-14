import type { RequestHandlerOutput } from '@sveltejs/kit';
import { variables } from '$lib/variables';

export async function get(): Promise<RequestHandlerOutput> {
    const response = await fetch(`${variables.cmsUrl}/api/projects?populate=*&sort[0]=id:desc`, { headers: { 'Authorization': `Bearer ${variables.cmsApiKey}` } });
    const data = await response.json();
    return { body: data };
}