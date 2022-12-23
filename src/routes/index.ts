import type { RequestHandlerOutput, ResponseBody } from '@sveltejs/kit';
import { variables } from '$lib/variables';

export async function GET(): Promise<RequestHandlerOutput> {
    const response = await fetch(`${variables.cmsUrl}/api/projects?populate=*&sort[0]=id:desc`, { headers: { 'Authorization': `Bearer ${variables.cmsApiKey}` } });
    const data = await response.json();
    return { status: 200, body: { projects: data.data } as unknown as ResponseBody };
}