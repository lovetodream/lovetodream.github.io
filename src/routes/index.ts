import type { RequestHandlerOutput, ResponseBody } from '@sveltejs/kit';
import { variables } from '$lib/variables';
import { api } from '$lib/api';

export async function get(): Promise<RequestHandlerOutput> {
    const response = await fetch(`${variables.cmsUrl}/api/projects?populate=*&sort[0]=id:desc`, { headers: { 'Authorization': `Bearer ${variables.cmsApiKey}` } });
    const data = await response.json();

    const posts = await api.posts.browse({
        include: ['tags'],
        limit: '5',
        filter: ['author:timo'],
    })

    return { status: 200, body: { projects: data.data, posts: posts } as unknown as ResponseBody };
}