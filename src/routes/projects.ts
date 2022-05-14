import type { RequestHandlerOutput } from '@sveltejs/kit';
import { variables } from '$lib/variables';

export async function get(): Promise<RequestHandlerOutput> {
    const response = await fetch(`${variables.cmsUrl}/api/projects?populate=*`, { headers: { 'Authorization': `Bearer ${variables.cmsApiKey}` } });
    const data = await response.json();
    return { body: data };
}